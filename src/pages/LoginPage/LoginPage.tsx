import { useState } from 'react';
import { themeColors, urls } from '../../config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LinkButton from '../../components/buttons/LinkButton/LinkButton';
import Toast from '../../components/Toast/Toast';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import { useTranslation } from 'react-i18next';



const LoginPage = () => {
    const { t } = useTranslation();
    const [toastState, setToastState] = useState({
        isOpen: false, // Controls visibility
        title: '', // Title of the Toast
        message: '', // Message of the Toast
        color: themeColors.success // Color of the Toast
    });

    const { setToken, setUser } = useAuth();
    const navigate = useNavigate();

    // Example form fields
    const formFields = [
        {
            type: 'text',
            name: 'email',
            placeholder: t('user'),
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: themeColors.medium,

            },
            inputStyle: {
                color: themeColors.textTint
            }
        },
        {
            type: 'password',
            name: 'password',
            placeholder: t("password"),
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: themeColors.medium,

            },
            inputStyle: {
                color: themeColors.textTint
            }
        }
    ];

    // Update Toast state for showing success or error messages
    const showToast = (title: string, message: string, color: string) => {
        setToastState({
            isOpen: true,
            title,
            message,
            color
        });
    };

    // Handle Toast close event
    const handleCloseToast = () => {
        setToastState({ ...toastState, isOpen: false });
    };

    // Handle form submission
    const handleSubmit = (data: any) => {
        console.log('Form submitted:', data);
    };

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 10,
                height: 70,
                alignItems: 'center',

            }}>
                <TypingEffect
                    //text='Bienvenido a GoDaddy - Referidos! Ingreso consola'
                    text={t("welcome")}
                    style={{
                        fontWeight: 800,
                        fontSize: 21,
                        lineHeight: 1.1,
                        textAlign: 'center',
                        color: themeColors.textTint
                    }}
                />
            </div>
            {/* Login Form */}
            <DynamicForm

                className='auth-form'
                fields={formFields}
                sendButtonTitle={t("signIn")}
                sendButtonStyle={{
                    width: "100%",
                    borderRadius: 99
                }}
                sendButtonSize="md"
                apiBaseUrl={urls.apiBase}
                submitEndpoint='/login'
                extraData={{}}
                onSubmit={handleSubmit}
                onSuccess={(res) => {
                    setToken(res.token);
                    setUser(res.user);
                    // Show success toast
                    showToast(
                        "Bienvenido!",
                        "Te logueaste con éxito.",
                        themeColors.success
                    );
                    setTimeout(() => {
                        navigate('/');
                    }, 3000)

                }}
                onError={(error) => {
                    console.error('Login error:', error.message);
                    // Show error toast
                    showToast(
                        "Error",
                        error.message,
                        themeColors.danger
                    );
                }}
                containerStyle={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    maxWidth: '400px'
                }}
            />

            {/* Registration and Forgot Password Links */}
            <div style={{
                padding: '10px'
            }}>
                {/* <LinkButton
                    title='Registrarse'
                    type='clear'
                    to="/register"
                    style={{
                        width: '100%',
                        background: themeColors.light,
                        padding: 0
                    }}
                    hasShadow={false}
                    color={themeColors.textShade}
                    borderRadius={99}
                /> */}

                <LinkButton
                    title={t('recoverPassword')}
                    type='clear'
                    to="/forgot-password"
                    style={{
                        width: '100%',
                        background: themeColors.light,
                        //padding: 0
                    }}
                    hasShadow={false}
                    borderRadius={99}
                    color={themeColors.textShade}
                />
            </div>



            {/* Toast Component */}
            <Toast
                isOpen={toastState.isOpen}
                title={toastState.title}
                message={toastState.message}
                color={toastState.color}
                onClose={handleCloseToast}
                duration={4000}
                containerStyle={{}}
                titleStyle={{ fontWeight: "bold" }}
                messageStyle={{ fontSize: "14px" }}
            />
        </>
    );
};

export default LoginPage;
