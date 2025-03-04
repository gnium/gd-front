import { useState } from "react";
import Icon from "../../Icon/Icon";
import { themeColors } from "../../../config";


interface CopyButtonProps {
    textToCopy: string;
    label?: string;
    className?: string;
    containerStyle?: React.CSSProperties;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, label, className, containerStyle }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Vuelve al ícono de copiar después de 2s
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <a
            className={`${className}`}
            onClick={handleCopy}
            style={{
                width: "100%",
                padding: "8px",
                background: "transparent",
                borderRadius: 8,
                color: "#fff",
                border: "1px solid #444",
                display: 'flex',
                alignItems: "center",
                justifyContent: "space-between",
                ...containerStyle
            }}
        >
            {label && <span
                style={{
                    fontWeight: '300'
                }}
            >{label}</span>}
            <Icon color={themeColors.secondary} name={copied ? "check" : "copyOutline"} />
        </a>
    );
};
