import React from "react";
import { themeColors } from "../../config";

interface TopBarProps {
    renderLeft?: React.ReactNode;
    renderCenter?: React.ReactNode;
    renderRight?: React.ReactNode;
    containerStyle?: React.CSSProperties;
    renderLeftStyle?: React.CSSProperties;
    renderCenterStyle?: React.CSSProperties;
    renderRightStyle?: React.CSSProperties;

}

const TopBar: React.FC<TopBarProps> = ({
    renderLeft,
    renderCenter,
    renderRight,
    containerStyle,
    renderLeftStyle,
    renderCenterStyle,
    renderRightStyle,
}) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "60px",
                padding: "0 20px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                color: themeColors.textTint,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1000,
                ...containerStyle,
            }}
        >
            {/* Left Content (Logo, Brand, etc.) */}
            <div style={{ display: "flex", alignItems: "center", ...renderLeftStyle }}>
                {renderLeft}
            </div>

            {/* Center Content (Navigation Links, etc.) */}
            <div style={{ flexGrow: 1, textAlign: "center", ...renderCenterStyle }}>
                {renderCenter}
            </div>

            {/* Right Content (Profile Icon, Search, etc.) */}
            <div style={{ display: "flex", alignItems: "center", ...renderRightStyle }}>
                {renderRight}
            </div>
        </div>
    );
};

export default TopBar;
