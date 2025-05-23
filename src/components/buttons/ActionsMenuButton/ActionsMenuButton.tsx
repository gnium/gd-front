import React, { useState, useRef } from 'react';
import IconButton from '../IconButton/IconButton';
import Popover from '../../Popover/Popover';
import Button from '../Button/Button';


interface MenuItem {
    name: string; // Unique key for the menu item
    displayName: string; // Display name for the menu item
    icon?: string; // Optional icon for the menu item
    style?: React.CSSProperties; // Custom styles for the button
    onClick?: () => void; // Optional specific click handler for the menu item
}

interface ActionsMenuButtonProps {
    buttonStyle?: React.CSSProperties; // Custom styles for the main button
    popoverStyle?: React.CSSProperties; // Custom styles for the popover
    menuItems: MenuItem[]; // List of menu items to display
    onItemSelect?: (actionName: string) => void; // Global handler for menu item selection
}

const ActionsMenuButton: React.FC<ActionsMenuButtonProps> = ({
    buttonStyle,
    popoverStyle,
    menuItems,
    onItemSelect,
}) => {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // Toggle the visibility of the popover
    const togglePopover = () => setPopoverOpen((prev) => !prev);

    // Close the popover
    const closePopover = () => setPopoverOpen(false);

    // Handle menu item clicks
    const handleItemClick = (item: MenuItem) => {
        // If the menu item has its own onClick handler, use it
        if (item.onClick) {
            item.onClick();
        }
        // Otherwise, use the global onItemSelect handler if provided
        else if (onItemSelect) {
            onItemSelect(item.name);
        }
        closePopover(); // Close the popover after handling the click
    };

    return (
        <>
            {/* Main button to open the menu */}
            <IconButton
                aria-label="More actions"
                ref={buttonRef}
                hasShadow={false}
                type="clear"
                icon="moreVertical"
                onClick={togglePopover}
                style={buttonStyle}
            />

            {/* Popover containing the menu items */}
            <Popover
                content={
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
                        {menuItems.map((item, index) => (
                            <Button
                                key={item.name}
                                title={item.displayName}
                                onClick={() => handleItemClick(item)}
                                type="clear"
                                hasShadow={false}
                                color="text"
                                size="sm"
                                borderRadius={0}
                                style={{
                                    margin: '2px 0',
                                    borderBottom: index < menuItems.length - 1 ? '1px solid #ccc' : 'none',
                                    justifyContent: 'space-between',
                                    ...item.style, // Apply custom styles from the menu item
                                }}
                                startIcon={item.icon}
                            />
                        ))}
                    </div>
                }
                //anchorRef={buttonRef}
                anchorRef={buttonRef as React.RefObject<HTMLElement>}
                isOpen={isPopoverOpen}
                onClose={closePopover}
                hasShadow
                containerStyle={{ maxWidth: '300px', ...popoverStyle }}
            />
        </>
    );
};

export default ActionsMenuButton;
