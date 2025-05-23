import { useLocation, useNavigate } from "react-router-dom";
import { themeColors } from "../../config";

interface MenuItem {
    labelKey: string;
    path: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

interface SidebarProps {
    renderHeader?: React.ReactNode;
    menuItems: MenuItem[];
    renderMenuItem: (item: { labelKey: string; icon: React.ReactNode; onClick?: () => void }) => React.ReactNode;
    renderActiveMenuItem: (item: { labelKey: string; icon: React.ReactNode; onClick?: () => void }) => React.ReactNode;
    renderFooter?: React.ReactNode;
    containerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    menuStyle?: React.CSSProperties;
    footerStyle?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({
    renderHeader,
    menuItems,
    renderMenuItem,
    renderActiveMenuItem,
    renderFooter,
    containerStyle,
    headerStyle,
    menuStyle,
    footerStyle,
}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleMenuItemClick = (item: MenuItem) => {
        if (item.path) {
            navigate(item.path);
        }
        item.onClick?.();
    };
    return (
        <aside
            style={{
                width: "250px",
                //height: "100vh",
                height: 700,
                backgroundColor: themeColors.dark,
                color: themeColors.textTint,
                padding: "20px 10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                ...containerStyle,
            }}
        >
            {/* Header Section */}
            {renderHeader && <div style={headerStyle}>{renderHeader}</div>}

            {/* Menu Items */}
            <div style={{ flexGrow: 1, ...menuStyle }}>
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div key={index} onClick={() => handleMenuItemClick(item)}>
                            {isActive ? renderActiveMenuItem(item) : renderMenuItem(item)}
                        </div>
                    );
                })}
            </div>

            {/* Footer Section */}
            {renderFooter && <div style={footerStyle}>{renderFooter}</div>}
        </aside>
    );
};

export default Sidebar;
