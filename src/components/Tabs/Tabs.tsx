import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import { themeColors } from '../../config';


interface TabItem {
    name: string; // Identifier in camelCase
    label: string; // User-visible label
    icon?: string; // Icon name
    iconPaths?: any[]; // Custom icon paths
    [key: string]: any;
}

interface TabsProps {
    containerStyle?: React.CSSProperties;
    tabListStyle?: React.CSSProperties;
    tabStyle?: React.CSSProperties;
    activeTabStyle?: React.CSSProperties;
    id?: string;
    tabs: TabItem[];
    defaultActiveTab?: string;
    onTabChange?: (activeTab: string) => void;
    color?: string; // For customizing tab color
    renderTab?: (tab: TabItem, isActive: boolean) => React.ReactNode;
    showActiveTabIndicator?: boolean;
}

const resolveIcon = (
    icon: string | undefined,
    paths?: any[],
    size?: number,
    color?: string
) => {
    if (icon) {
        return <Icon name={icon} size={size} color={color} />;
    } else if (paths) {
        return <DynamicIcon paths={paths} size={size} />;
    }
    return null;
};

const Tabs: React.FC<TabsProps> = ({
    containerStyle,
    tabStyle,
    activeTabStyle,
    tabListStyle,
    id,
    tabs,
    defaultActiveTab,
    onTabChange,
    color = 'primary', // Default color
    renderTab,
    showActiveTabIndicator = true
}) => {
    const [activeTab, setActiveTab] = useState<string>(defaultActiveTab || tabs[0].name);

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
        if (onTabChange) {
            onTabChange(tabName);
        }
    };

    const resolvedColor = color in themeColors ? themeColors[color as keyof typeof themeColors] : color;

    return (
        <div {...(id ? { id } : {})} style={containerStyle}>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, ...tabListStyle }}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.name;
                    const tabContent = renderTab ? (
                        renderTab(tab, isActive)
                    ) : (
                        <>
                            {resolveIcon(tab.icon, tab.iconPaths, 20, resolvedColor)}
                            <span>{tab.label}</span>
                        </>
                    );

                    return (
                        <li
                            key={tab.name}
                            style={{
                                padding: "10px 20px",
                                cursor: "pointer",
                                color: themeColors.textTint,
                                fontWeight: 600,
                                fontSize: 14,
                                textAlign: "center",
                                position: "relative",
                                transition: "color 0.3s ease-in-out",
                                ...(tabStyle || {}),
                                ...(isActive ? activeTabStyle || {} : {}),
                            }}
                            onClick={() => handleTabClick(tab.name)}
                        >
                            {tabContent}
                            <div
                                style={isActive && showActiveTabIndicator ? {
                                    ...activeTabIndicatorStyle,
                                    transform: "scaleX(1)", // Se expande completamente
                                } : { transform: "scaleX(0)", }}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Tabs;

const activeTabIndicatorStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #F05CD5 0%, #00CE8E 100%)",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform .3s ease-in-out",
    borderRadius: 1
};