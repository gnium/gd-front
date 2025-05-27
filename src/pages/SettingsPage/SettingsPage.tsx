import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import Toast from '../../components/Toast/Toast';
import { themeColors } from '../../config';
import PageHeader from '../../components/PageHeader/PageHeader';
import background from '../../assets/backgrounds/background.png';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
    const { user, setUser, getToken } = useAuth();
    const { t } = useTranslation();
    const [toastState, setToastState] = useState({
        isOpen: false,
        title: '',
        message: '',
        color: themeColors.success
    });

    const showToast = (title: string, message: string, color: string) => {
        setToastState({
            isOpen: true,
            title,
            message,
            color
        });
    };

    const handleCloseToast = () => {
        setToastState({ ...toastState, isOpen: false });
    };

    const formFields = [
        {
            type: 'text',
            name: 'name',
            label: 'Name',
            placeholder: 'Enter your name',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        },
        {
            type: 'text',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        },
        {
            type: 'number',
            name: 'publisher_id',
            label: 'Publisher ID',
            placeholder: 'Enter publisher ID',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        },
        {
            type: 'text',
            name: 'website',
            label: 'Website',
            placeholder: 'Enter your website',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        },
        {
            type: 'text',
            name: 'company',
            label: 'Company',
            placeholder: 'Enter your company name',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        },
        {
            type: 'text',
            name: 'deal_stage',
            label: 'Deal Stage',
            placeholder: 'Enter deal stage',
            size: 6,
            inputStyle: {
                color: themeColors.textTint,
                fontWeight: 600
            }
        }
    ];

    const handleSubmit = async (formData: any) => {
        try {
            const token = getToken();
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';
            console.log(baseUrl, import.meta.env.VITE_API_BASE_URL);
            const response = await fetch(`${baseUrl}/users/me`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to update user information');
            }

            const updatedUser = await response.json();
            setUser(updatedUser);
            localStorage.setItem('authUser', JSON.stringify(updatedUser));
            showToast('Success', 'Account information updated successfully', themeColors.success);
        } catch (error) {
            showToast('Error', 'Failed to update account information', themeColors.danger);
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: 800 }}>
            <PageHeader
                backgroundImage={background}
                height={100}
                containerStyle={{
                    borderRadius: 20,
                    alignItems: 'flex-start',
                }}
                renderContent={() => {
                    return (
                        <div>
                            <TypingEffect
                                showCursor={false}
                                text={t("myAccount")}
                                style={{
                                    fontWeight: 700,
                                    fontSize: 30,
                                }}
                            />
                        </div>
                    );
                }}
            />
            <div style={{ padding: '20px' }}>
                <DynamicForm
                    title="Account Information"
                    fields={formFields}
                    data={user}
                    onSubmit={handleSubmit}
                    mode="globalEdit"
                    containerStyle={{
                        backgroundColor: themeColors.dark,
                        borderRadius: 10,
                        padding: 20
                    }}
                    titleStyle={{
                        color: themeColors.textTint,
                        fontSize: 20,
                        fontWeight: 600,
                        marginBottom: 20
                    }}
                    fieldContainerStyle={{
                        backgroundColor: themeColors.medium,
                        borderRadius: 8,
                        padding: 15
                    }}
                    fieldLabelStyle={{
                        color: themeColors.textTint,
                        fontSize: 14,
                        fontWeight: 500,
                        marginBottom: 8,
                        backgroundColor: 'transparent'
                    }}
                    fieldDescriptionStyle={{
                        color: themeColors.textShade,
                        fontSize: 12,
                        fontStyle: 'italic'
                    }}
                    sendButtonColor={themeColors.primary}
                    sendButtonTitle="Save Changes"
                    sendButtonType="solid"
                    sendButtonSize="md"
                />
            </div>
            <Toast
                isOpen={toastState.isOpen}
                title={toastState.title}
                message={toastState.message}
                color={toastState.color}
                onClose={handleCloseToast}
            />
        </div>
    );
};

export default SettingsPage;