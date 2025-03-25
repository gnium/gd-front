import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/PageHeader/PageHeader';
//import TypingEffect from '../../components/TypingEffect/TypingEffect';
import background from '../../assets/backgrounds/background.jpg'
import Icon from '../../components/Icon/Icon';
const PartnershipOraclePage = () => {
    const { t } = useTranslation();
    return (
        <div
            style={{
                width: '100%',
                minHeight: 400
            }}
        >
            <PageHeader
                backgroundImage={background}
                height={200}
                containerStyle={{
                    borderRadius: 20,
                    alignItems: 'center',

                }}
                renderContent={() => {
                    return (
                        <div style={{
                            padding: "20px 0",
                            width: "100%",
                            maxWidth: 800,
                            display: "flex",
                            justifyContent: 'flex-start'
                        }}>
                            <Icon
                                name='partnershipMultiColor'
                                size={90}
                                style={{
                                    marginRight: 10
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                <h5 style={{ color: "#ccc" }}>{t("partnershipOraclePage.label")}</h5>
                                <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>{t("partnershipOraclePage.title")}</h1>
                                <p style={{ maxWidth: "800px", color: "#aaa", textAlign: 'left' }}>{t("partnershipOraclePage.subtitle")}</p>
                            </div>
                        </div>

                    )

                }}
            />

        </div>
    )
}

export default PartnershipOraclePage