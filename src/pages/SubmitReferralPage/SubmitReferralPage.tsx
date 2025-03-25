import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader/PageHeader';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import background from '../../assets/backgrounds/background.png'
import HubSpotForm from '../../components/forms/HubSpotForm/HubSpotForm';
const SubmitReferralPage = () => {
    const { t } = useTranslation();
    return (
        <div
            style={{
                width: '100%',
                maxWidth: 800
            }}
        >
            <PageHeader
                backgroundImage={background}
                height={100}
                containerStyle={{
                    borderRadius: 20,
                    alignItems: 'flex-start',
                }}
                renderContent={() => {
                    return <div>
                        <TypingEffect
                            showCursor={false}
                            text={t("submitReferral")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />
            <main style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
            }}>
                <HubSpotForm
                    portalId="498146"
                    formId="541a916f-d6ba-43ad-90ff-42255f80d54e"
                />
            </main>
        </div>

    )
}

export default SubmitReferralPage