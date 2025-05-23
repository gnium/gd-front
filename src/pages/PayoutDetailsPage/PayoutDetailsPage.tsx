import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Tabs from '../../components/Tabs/Tabs';
import PayoutOptions from '../../components/PayoutOptions/PayoutOptions';
import PayoutDetails from '../../components/PayoutDetails/PayoutDetails';
import PayoutHistory from '../../components/PayoutHistory/PayoutHistory';
import TaxDocuments from '../../components/TaxDocuments/TaxDocuments';

const PayoutDetailsPage = () => {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('payoutOptions');
    return (
        <div
            style={{
                width: '100%',
                maxWidth: 900
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
                            text={t("payoutDetails.title")}
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

            }}><div
                style={{
                    padding: 30
                }}
            >
                    <Tabs
                        tabs={[
                            
                            { name: "payoutDetails", label: t("payoutDetails.title") },
                            { name: "payoutHistory", label: t("payoutHistory.title") },
                        ]}
                        defaultActiveTab={currentTab}
                        onTabChange={(tab) => {
                            setCurrentTab(tab);
                        }}
                    />
                    {
                        currentTab === 'payoutOptions' ?
                            <>
                                <PayoutOptions />
                            </> : <></>

                    }
                    {
                        currentTab === 'payoutDetails' ?
                            <>
                                <PayoutDetails />
                            </> : <></>

                    }
                    {
                        currentTab === 'payoutHistory' ?
                            <>
                                <PayoutHistory />
                            </> : <></>

                    }
                    {
                        currentTab === 'taxDocuments' ?
                            <>
                                <TaxDocuments />
                            </> : <></>

                    }
                </div>

            </main>

        </div>
    )
}

export default PayoutDetailsPage