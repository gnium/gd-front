import { useState, useMemo, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useAuth } from "../../contexts/AuthContext";
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
import {calculatePaidThisMonth, calculateTotalPaid, calculateCurrentCommissionRate, calculatePendingCommissions} from '../../utils/commissionsFunctions';

type AdvertiserCommission = {
    pubCommissionAmountUsd: string;
    postingDate: string;
};

type CommissionsResponse = {
    records: AdvertiserCommission[];
};

const ReportingPage = () => {
    const { getUser, getToken } = useAuth();
    const user = getUser();
    const [commissionsData, setCommissionsData] = useState<CommissionsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetchTime, setLastFetchTime] = useState<number>(0);
    console.log("USER", user);

    const publisher_id = user?.publisher_id || 12345;

    const fetchCommissionsData = useCallback(async () => {
        // Prevent multiple simultaneous calls
        if (isLoading) return;

        // Prevent calls more frequent than every 30 seconds
        const now = Date.now();
        if (now - lastFetchTime < 30000) return;

        try {
            setIsLoading(true);
            const token = getToken();
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';
            const response = await axios.get(
                `${baseUrl}/cj/get-commissions?publisher_id=${publisher_id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            const data = response.data;
            console.log("Commissions data:", data);
            setCommissionsData(data);
            setLastFetchTime(now);
        } catch (error) {
            console.error('Error fetching commissions data:', error);
        } finally {
            setIsLoading(false);
        }
    }, [publisher_id, getToken, isLoading, lastFetchTime]);
    
    // Fetch data only when user or publisher_id changes and we don't have data
    useEffect(() => {
        if (user && publisher_id && !commissionsData && !isLoading) {
            fetchCommissionsData();
        }
    }, [user, publisher_id, commissionsData, isLoading, fetchCommissionsData]);

    let commissionsContent;
    let totalPaid = 0;
    let paidThisMonth = 0;
    let pendingCommissions = 0;
    let currentCommissionRate = 0;

    if (isLoading) {
        commissionsContent = <p>Loading...</p>;
    } else if (commissionsData?.records) {
        totalPaid = calculateTotalPaid(commissionsData.records);
        paidThisMonth = calculatePaidThisMonth(commissionsData.records);
        pendingCommissions = calculatePendingCommissions(commissionsData.records);
        currentCommissionRate = calculateCurrentCommissionRate(commissionsData.records);
    }
   
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('commissionsReport');
    const cards = [
        {
            icon: "commissionRate",
            prefix: '$',
            amount: currentCommissionRate,
            label: t("currentCommissionRate"),
            suffix: t("sale"),
        },
        {
            icon: "pendingCommissions",
            prefix: '$',
            amount: pendingCommissions,
            label: t("pendingCommissions"),
        },
        {
            icon: "paidThisMonth",
            prefix: '$',
            amount: paidThisMonth,
            label: t("paidThisMonth"),
        },
        {
            icon: "totalPaid",
            prefix: '$',
            amount: totalPaid,
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
            <div>{commissionsContent}</div>
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