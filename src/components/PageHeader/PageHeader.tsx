import React from "react";

interface PageHeaderProps {
    backgroundImage: string;
    title?: string;
    renderContent?: () => React.ReactNode;
    containerStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    height?: string | number;
    width?: string | number;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    backgroundImage,
    title,
    renderContent,
    containerStyle,
    titleStyle,
    height = "auto",
    width = "100%",
}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width,
                height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "20px",
                color: "#fff",
                textAlign: "center",
                ...containerStyle,
            }}
        >
            {
                title && <>
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px", ...titleStyle }}>
                        {title}
                    </h1>
                </>
            }

            {renderContent && <div>{renderContent()}</div>}
        </div>
    );
};

export default PageHeader;
