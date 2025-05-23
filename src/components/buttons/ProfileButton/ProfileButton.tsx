import React, { useState, useRef } from 'react';
import Popover from '../../Popover/Popover';
import Thumbnail from '../../Thumbnail/Thumbnail';
import { useAuth } from '../../../contexts/AuthContext';
import { themeColors } from '../../../config';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../../Icon/Icon';

interface ProfileButtonProps {
    buttonStyle?: React.CSSProperties; // Custom styles for the main button
    popoverStyle?: React.CSSProperties; // Custom styles for the popover
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
    buttonStyle,
    popoverStyle,
}) => {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const { getUser, deleteToken, deleteUser } = useAuth();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const user = getUser();
    // Toggle the visibility of the popover
    const togglePopover = () => setPopoverOpen((prev) => !prev);

    // Close the popover
    const closePopover = () => setPopoverOpen(false);

    const handleSettingsClick = () => {
        navigate('/settings/my-account');
        closePopover();
    };

    return (
        <>
            <div
                ref={buttonRef}
                onClick={togglePopover}
                style={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...buttonStyle
                }}
            >
                <Thumbnail
                    src={user.profile_picture_url}
                    size='sm'
                />
            </div>

            <Popover
                content={
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        width: "100%",
                        backgroundColor: themeColors.dark,
                        borderRadius: '10px',
                    }}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingBottom: '20px',
                            borderBottom: `1px solid ${themeColors.medium}`,
                            marginBottom: '20px'
                        }}>
                            <Thumbnail
                                src={user.profile_picture_url}
                                size='lg'
                                style={{
                                    marginBottom: '15px'
                                }}
                            />
                            <div
                                style={{
                                    color: themeColors.textTint,
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    marginBottom: '5px'
                                }}
                            >
                                {user.name}
                            </div>
                            <div
                                style={{
                                    color: themeColors.textShade,
                                    fontSize: '14px',
                                    fontWeight: '400'
                                }}
                            >
                                {user.email}
                            </div>
                        </div>

                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <Button
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    padding: '12px 20px',
                                    backgroundColor: themeColors.medium,
                                    color: themeColors.textTint,
                                    border: 'none',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                title={t("settings")}
                                borderRadius={8}
                                onClick={handleSettingsClick}
                                startIcon="settings"
                                startIconSize={20}
                                type="clear"
                            />

                            <Button
                                style={{
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    padding: '12px 20px',
                                    backgroundColor: themeColors.medium,
                                    color: themeColors.textTint,
                                    border: 'none',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                title={t("signOut")}
                                borderRadius={8}
                                onClick={() => {
                                    deleteToken()
                                    deleteUser()
                                }}
                                startIcon="logout"
                                startIconSize={20}
                                type="clear"
                            />
                        </div>
                    </div>
                }
                anchorRef={buttonRef as React.RefObject<HTMLElement>}
                isOpen={isPopoverOpen}
                onClose={closePopover}
                hasShadow
                containerStyle={{ 
                    width: '280px', 
                    ...popoverStyle 
                }}
            />
        </>
    );
};

export default ProfileButton;
