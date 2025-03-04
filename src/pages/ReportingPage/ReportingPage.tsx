import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
const ReportingPage = () => {
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
                            text={t("reporting")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />

        </div>
    )
}

export default ReportingPage