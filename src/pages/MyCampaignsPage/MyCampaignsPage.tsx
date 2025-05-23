import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Card from '../../components/Card/Card';
import { CopyButton } from '../../components/buttons/CopyButton/CopyButton';
import Button from '../../components/buttons/Button/Button';
import { themeColors } from '../../config';
import Icon from '../../components/Icon/Icon';
const MyCampaignsPage = () => {
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
                            text={t("myCampaigns")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />
            <main style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "nowrap",
                gap: 10,
                marginTop: 20,
                flexDirection: "column",

            }}>
                <Card
                    title={t("defaultCampaigns")}
                    subtitle={t("global")}
                    containerStyle={{
                        height: 250
                    }}
                    renderBody={() => (
                        <div>

                            <CopyButton
                                label='pagely.com/index.htm?afcode=ec1af5gdfs...'
                                textToCopy='pagely.com/index.htm?afcode=ec1af5gdfs...'
                                containerStyle={{
                                    padding: 10
                                }}
                            />
                        </div>
                    )}
                    renderFooter={() => (
                        <div style={{
                            padding: 10
                        }}>
                            <Button
                                title={t('viewReport')}
                                onClick={() => { }}
                            />
                        </div>
                    )}
                />
                <Card
                    containerStyle={{
                        height: 250
                    }}
                    renderBody={() => (
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 195
                        }}>
                            <strong style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: themeColors.textTint
                            }}>{t("addNewCampaign")}</strong>
                            <div style={{
                                marginTop: 20,
                                width: 80,
                                height: 80,
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: themeColors.secondary,
                                borderRadius: 99,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Icon color={themeColors.primary} size={30} name="add" />
                            </div>
                        </div>
                    )}
                />
            </main>
        </div>
    )
}

export default MyCampaignsPage
