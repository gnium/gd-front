import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Card from '../../components/Card/Card';
import Icon from '../../components/Icon/Icon';
import { themeColors } from '../../config';
import Tabs from '../../components/Tabs/Tabs';
import CommissionsReport from '../../components/CommissionsReport/CommissionsReport';
import ConversionsReport from '../../components/ConversionsReport/ConversionsReport';
import PerformanceGraph from '../../components/PerformanceGraph/PerformanceGraph';
import AnimatedNumber from '../../components/AnimatedNumber/AnimatedNumber';

const ReportingPage = () => {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('commissionsReport');
    const cards = [
        {
            icon: "commissionRate",
            prefix: '$',
            amount: 50,
            label: t("currentCommissionRate"),
            suffix: t("sale"),
        },
        {
            icon: "pendingCommissions",
            prefix: '$',
            amount: 140,
            label: t("pendingCommissions"),
        },
        {
            icon: "paidThisMonth",
            prefix: '$',
            amount: 99,
            label: t("paidThisMonth"),
        },
        {
            icon: "totalPaid",
            prefix: '$',
            amount: 987,
            label: t("totalPaid"),
        },
    ];
    return (
        <div
            style={{
                width: '100%',
                maxWidth: 1000
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
            <main style={{
                marginTop: 20,

            }}>

                <div style={{
                    display: "flex",
                    gap: 10,
                    width: '100%',
                    color: themeColors.textTint
                }}>
                    {cards.map(({ icon, amount, label, suffix, prefix }) => (
                        <div
                            key={icon}
                            style={{
                                width: "25%"
                            }}
                        >
                            <Card
                                containerStyle={{
                                    height: 220
                                    //width: "100%"
                                }}
                                renderBody={() => (
                                    <div style={{ textAlign: "center" }}>
                                        <Icon name={icon} size={70} />
                                        <hr style={{ opacity: 0.5 }} />

                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontWeight: '900',
                                            fontSize: 23
                                        }}>
                                            {prefix || ""}
                                            <AnimatedNumber
                                                from={0}
                                                to={amount}
                                                duration={1000}
                                                style={{

                                                }}
                                            />
                                            {suffix || ""}
                                        </div>

                                        <p style={{
                                            opacity: 0.8,
                                            fontWeight: '300',

                                        }}>{label}</p>
                                    </div>
                                )}
                            />
                        </div>

                    ))}
                </div>

                <div
                    style={{
                        padding: 30
                    }}
                >
                    <Tabs
                        tabs={[
                            { name: "commissionsReport", label: t("commissionsReport.title") },
                            { name: "conversionsReport", label: t("conversionsReport.title") },
                            { name: "performanceGraph", label: t("performanceGraph.title") }
                        ]}
                        defaultActiveTab={currentTab}
                        onTabChange={(tab) => {
                            setCurrentTab(tab);
                        }}
                    />
                    {
                        currentTab === 'commissionsReport' ?
                            <>
                                <CommissionsReport />
                            </> : <></>

                    }
                    {
                        currentTab === 'conversionsReport' ?
                            <>
                                <ConversionsReport />
                            </> : <></>

                    }
                    {
                        currentTab === 'performanceGraph' ?
                            <>
                                <PerformanceGraph />
                            </> : <></>

                    }
                </div>
            </main>
        </div>
    )
}

export default ReportingPage