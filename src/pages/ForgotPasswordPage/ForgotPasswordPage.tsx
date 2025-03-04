import { useTranslation } from 'react-i18next'
import LinkButton from '../../components/buttons/LinkButton/LinkButton'
import DynamicForm from '../../components/DynamicForm/DynamicForm'
import TypingEffect from '../../components/TypingEffect/TypingEffect'
import { themeColors, urls } from '../../config'


const ForgotPasswordPage = () => {
    const { t } = useTranslation();
    const formFields = [
        {
            type: 'text',
            name: 'email',
            placeholder: t('email'),
            value: '',
            size: 12,
            containerStyle: {
                backgroundColor: themeColors.medium,

            },
            inputStyle: {
                color: themeColors.textTint
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
                    text={t("recoverPassword")}
                    speed={70}
                    style={{
                        fontWeight: 800,
                        fontSize: 21,
                        lineHeight: 1.1,
                        textAlign: 'center',
                        color: themeColors.textTint

                    }}
                />
            </div>
            <DynamicForm
                // title='Recuperar contraseña'
                // titleStyle={{
                //     color: themeColors.text,
                // }}
                className='auth-form'

                fields={formFields}
                sendButtonTitle={t('getCode')}
                sendButtonStyle={{
                    width: "100%",
                    borderRadius: 99,
                }}
                sendButtonSize="md"

                apiBaseUrl={urls.apiBase}
                submitEndpoint='/forgot-password'
                extraData={{}}
                fieldLabelStyle={{

                }}
                onSuccess={(res) => {
                    console.log(res)

                }}
                onError={(error) => console.log(error.message)}
                containerStyle={{
                    backgroundColor: 'transparent',
                    width: '100%',
                    maxWidth: '400px'
                }}
            />
            <div style={{
                padding: '10px'
            }}>
                <LinkButton
                    title={t("signIn")}
                    type='clear'
                    to="/login"
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
        </>
    )
}

export default ForgotPasswordPage