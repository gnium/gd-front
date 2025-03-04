import { useState } from 'react'

import { themeColors, urls } from '../../config'
import { useNavigate } from 'react-router-dom';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import LinkButton from '../../components/buttons/LinkButton/LinkButton';
import Toast from '../../components/Toast/Toast';
import TypingEffect from '../../components/TypingEffect/TypingEffect';

const RegisterPage = () => {

    const [toastState, setToastState] = useState({
        isOpen: false, // Controls visibility
        title: '', // Title of the Toast
        message: '', // Message of the Toast
        color: themeColors.success // Color of the Toast
    });
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
    const navigate = useNavigate();
    // Handle form submission
    /*const handleSubmit = (data: any) => {
        console.log('Form submitted:', data);
    };*/
    const formFields = [
        {
            type: 'text',
            name: 'email',
            placeholder: "Email",
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: 'transparent',
                borderColor: themeColors.dark
            },
            inputStyle: {
                color: themeColors.text
            }
        },
        {
            type: 'password',
            name: 'password',
            placeholder: "Contraseña",
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: 'transparent',
                borderColor: themeColors.dark
            },
            inputStyle: {
                color: themeColors.text
            }
        },
        {
            type: 'password',
            name: 'password_confirmation',
            placeholder: "Repetir contraseña",
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: 'transparent',
                borderColor: themeColors.dark
            },
            inputStyle: {
                color: themeColors.text
            }
        },

    ]
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
                    text='Registrate ahora y empieza a generar ingresos con tus referidos'
                    speed={70}
                    style={{
                        fontWeight: 800,
                        fontSize: 21,
                        lineHeight: 1.1,
                        textAlign: 'center',

                    }}
                />
            </div>
            <DynamicForm
                titleStyle={{
                    color: themeColors.text,
                }}
                className='auth-form'

                fields={formFields}
                sendButtonTitle="Registrarse"
                sendButtonStyle={{
                    width: "100%",
                    borderRadius: 99,
                }}
                sendButtonSize="md"

                apiBaseUrl={urls.apiBase}
                submitEndpoint='/register'
                extraData={{

                }}
                fieldLabelStyle={{

                }}

                onSuccess={() => {
                    showToast(
                        "Bien!",
                        "Te registraste con éxito.",
                        themeColors.success
                    );
                    setTimeout(() => {
                        navigate('/login');
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
            <LinkButton
                title='Ingresar'
                type='clear'
                to="/login"
                style={{
                    width: '100%',
                }}
                hasShadow={false}
                color={themeColors.primaryShade}
            />
            <Toast
                isOpen={toastState.isOpen}
                title={toastState.title}
                message={toastState.message}
                color={toastState.color}
                onClose={handleCloseToast}
                duration={4000}
                containerStyle={{

                }}
                titleStyle={{ fontWeight: "bold" }}
                messageStyle={{ fontSize: "14px" }}
            />
        </>
    )
}

export default RegisterPage