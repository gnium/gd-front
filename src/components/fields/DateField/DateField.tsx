import React, { useRef, useState } from "react";
import Button from "../../buttons/Button/Button";
import Popover from "../../Popover/Popover";
import { themeColors } from "../../../config";

interface DateFieldProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    style?: React.CSSProperties;
}

const DateField: React.FC<DateFieldProps> = ({
    value,
    disabled = false,
    placeholder = '',
    style
}) => {
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => setPopoverOpen((prev) => !prev);
    const closePopover = () => setPopoverOpen(false);

    return (
        <div style={{ position: "relative", ...style }}>
            <Button
                ref={buttonRef}
                title={value || placeholder || ''}
                type="outline"
                color={themeColors.medium}
                titleStyle={{
                    color: themeColors.textTint,
                }}
                onClick={togglePopover}
                style={{
                    backgroundColor: '#171518',
                }}
                disabled={disabled}
            />

            <Popover
                content={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 0,
                            width: "100%",
                        }}
                    >
                        {/* Add your date picker component here */}
                    </div>
                }
                anchorRef={buttonRef as React.RefObject<HTMLElement>}
                isOpen={isPopoverOpen}
                onClose={closePopover}
                hasShadow
            />
        </div>
    );
};

export default DateField;
