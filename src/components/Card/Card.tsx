import React, { useState } from "react";
import { themeColors } from "../../config";

interface CardProps {
    containerStyle?: React.CSSProperties;
    title?: string;
    titleStyle?: React.CSSProperties;
    subtitle?: string;
    renderHeader?: () => React.ReactNode;
    headerStyle?: React.CSSProperties;
    renderBody?: () => React.ReactNode;
    bodyStyle?: React.CSSProperties;
    renderFooter?: () => React.ReactNode;
    footerStyle?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
    containerStyle,
    title,
    titleStyle,
    subtitle,
    renderHeader,
    headerStyle,
    renderBody,
    bodyStyle,
    renderFooter,
    footerStyle,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                width: '100%'
            }}
        >

            {isHovered && (
                <div
                    style={{
                        position: "absolute",
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        borderRadius: 16,
                        background: "linear-gradient(180deg, #F05CD5 0%, #00CE8E 100%)",
                        zIndex: 0,
                    }}
                />
            )}
            <div
                style={{
                    background: "linear-gradient(294.03deg, #000000 -28.84%, #171518 42.87%)",
                    border: isHovered
                        ? "1px solid transparent"
                        : "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: 16,
                    padding: 16,
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    ...containerStyle,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {renderHeader && renderHeader()}
                {(title || subtitle) ?
                    <div style={{
                        margin: 10,
                        paddingBottom: 15,
                        borderBottom: '1px solid rgba(255, 255, 255,.5',
                        ...headerStyle
                    }}>
                        {title && <h3 style={{ margin: 0, color: "#fff", ...titleStyle }}>{title}</h3>}
                        {subtitle && <p style={{
                            margin: 0,
                            color: themeColors.textTint,
                            fontWeight: '300',
                            fontSize: 14,

                        }}>{subtitle}</p>}

                    </div> : <></>
                }
                {renderBody && <div style={{
                    padding: 10,

                    ...bodyStyle
                }}>{renderBody()}</div>}
                {renderFooter && <div style={{ ...footerStyle }}>{renderFooter()}</div>}
            </div>
        </div>
    );
};

export default Card;
