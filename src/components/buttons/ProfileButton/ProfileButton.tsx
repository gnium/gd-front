import React, { useState, useRef } from 'react';
import Popover from '../../Popover/Popover';
import Thumbnail from '../../Thumbnail/Thumbnail';
import { useAuth } from '../../../contexts/AuthContext';
import { themeColors } from '../../../config';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';



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
    const user = getUser();
    // Toggle the visibility of the popover
    const togglePopover = () => setPopoverOpen((prev) => !prev);

    // Close the popover
    const closePopover = () => setPopoverOpen(false);

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
                        padding: 0,
                        width: "100%",


                    }}>

                        <Thumbnail
                            src={user.profile_picture_url}
                            size='lg'
                        />
                        <div
                            style={{
                                color: themeColors.textTint,
                                padding: 3,
                                fontWeight: '700',

                            }}
                        >
                            {user.name}
                        </div>
                        <div
                            style={{
                                color: themeColors.textTint,
                                padding: 3,
                                fontWeight: '300',
                            }}
                        >
                            {user.email}
                        </div>

                        <Button
                            style={{
                                marginTop: 10
                            }}
                            title={t("signOut")}
                            borderRadius={99}
                            onClick={() => {
                                deleteToken()
                                deleteUser()
                            }}
                        />

                    </div>
                }
                anchorRef={buttonRef as React.RefObject<HTMLElement>}
                isOpen={isPopoverOpen}
                onClose={closePopover}
                hasShadow
                containerStyle={{ width: '200px', ...popoverStyle }}
            />
        </>
    );
};

export default ProfileButton;
