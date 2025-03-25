import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Tabs from '../../components/Tabs/Tabs';
import SelectField from '../../components/fields/SelectField/SelectField';
import { themeColors } from '../../config';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/buttons/Button/Button';
import Icon from '../../components/Icon/Icon';
import Pagination from '../../components/Pagination/Pagination';

import solidWhiteBackground from '../../assets/logos/solid-white-background.png';
import transparentBackground from '../../assets/logos/transparent-background.png';
import solidDarkBackground from '../../assets/logos/solid-dark-background.png';

import HostingSetupImages from '../../components/HostingSetupImages/HostingSetupImages';

const VisualAssetsPage = () => {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('webBanners');
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
                            text={t("visualAssets")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />
            <main style={{
                marginTop: 20

            }}>
                <Tabs
                    tabs={[
                        { name: "webBanners", label: t("webBanners") },
                        { name: "pagelyLogos", label: t("pagelyLogos") },
                        { name: "hostingImages", label: t("hostingSetupImages.title") },
                        { name: "websiteTutorial", label: t("websiteSetupTutorial") },
                    ]}
                    defaultActiveTab={currentTab}
                    onTabChange={(tab) => {
                        setCurrentTab(tab);

                    }}
                />
                {
                    currentTab === 'webBanners' ?
                        <>
                            <div
                                style={{
                                    marginTop: 40,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexWrap: "nowrap",
                                    gap: 10,
                                }}
                            >
                                {/* Language Select */}
                                <div style={{ width: "100%" }}>
                                    <label
                                        style={{
                                            marginBottom: 10,
                                            display: "block",
                                            color: themeColors.textTint,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {t("language")}
                                    </label>
                                    <SelectField
                                        value={"en"}
                                        options={[
                                            { value: "es", label: t("spanish") },
                                            { value: "en", label: t("english") },
                                        ]}
                                        onChange={(value) => {
                                            console.log("Selected language:", value);
                                        }}
                                        caretColor={themeColors.secondary}
                                    />
                                </div>

                                {/* Price of Banner Select */}
                                <div style={{ width: "100%" }}>
                                    <label
                                        style={{
                                            marginBottom: 10,
                                            display: "block",
                                            color: themeColors.textTint,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {t("priceOfBanner")}
                                    </label>
                                    <SelectField
                                        value={"no_price"}
                                        options={[
                                            { value: "no_price", label: t("noPrice") },
                                            { value: "low", label: t("lowPrice") },
                                            { value: "medium", label: t("mediumPrice") },
                                            { value: "high", label: t("highPrice") },
                                        ]}
                                        onChange={(value) => {
                                            console.log("Selected price:", value);
                                        }}
                                        caretColor={themeColors.secondary}
                                    />
                                </div>

                                {/* Banner Size Select */}
                                <div style={{ width: "100%" }}>
                                    <label
                                        style={{
                                            marginBottom: 10,
                                            display: "block",
                                            color: themeColors.textTint,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {t("bannerSize")}
                                    </label>
                                    <SelectField
                                        value={"square_250"}
                                        options={[
                                            { value: "square_250", label: t("square250") },
                                            { value: "rectangle_300", label: t("rectangle300") },
                                            { value: "leaderboard_728", label: t("leaderboard728") },
                                            { value: "skyscraper_160", label: t("skyscraper160") },
                                        ]}
                                        onChange={(value) => {
                                            console.log("Selected banner size:", value);
                                        }}
                                        caretColor={themeColors.secondary}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    marginTop: 20,
                                    display: "flex",
                                    //justifyContent: "space-between",
                                    justifyContent: "flex-start",
                                    width: "100%",
                                    flexWrap: "wrap",
                                    gap: "2%",
                                }}
                            >
                                <div style={{
                                    width: "49%",
                                }}>
                                    <Card
                                        containerStyle={{
                                            height: 350,
                                            width: "100%"
                                        }}
                                        renderBody={() => (
                                            <div style={{
                                                paddingTop: 10,
                                                paddingBottom: 10
                                            }}>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    height: 195,
                                                    width: "100%",
                                                    borderRadius: 20,
                                                    backgroundColor: "#f2f2f2"
                                                }}>
                                                    <Icon name="image" size={60} />
                                                </div>
                                            </div>

                                        )}
                                        renderFooter={() => (
                                            <div style={{
                                                padding: 10,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}>
                                                <Button
                                                    title={t("getBannerCode")}
                                                    onClick={() => { }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div style={{
                                    width: "49%",
                                }}>
                                    <Card
                                        containerStyle={{
                                            height: 350,
                                            width: "100%"
                                        }}
                                        renderBody={() => (
                                            <div style={{
                                                paddingTop: 10,
                                                paddingBottom: 10
                                            }}>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    height: 195,
                                                    width: "100%",
                                                    borderRadius: 20,
                                                    backgroundColor: "#f2f2f2"
                                                }}>
                                                    <Icon name="image" size={60} />
                                                </div>
                                            </div>

                                        )}
                                        renderFooter={() => (
                                            <div style={{
                                                padding: 10,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}>
                                                <Button
                                                    title={t("getBannerCode")}
                                                    onClick={() => { }}
                                                />
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                            <div style={{
                                marginTop: 20,

                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Pagination
                                    totalPages={68}
                                    currentPage={1}
                                    onPageChange={(page) => console.log("Page changed to:", page)}
                                    showEllipsis={true}
                                    showPrevNextButtons={true}
                                    prevLabel={
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: themeColors.textTint
                                        }}>
                                            <Icon name='chevronLeftSm' color={themeColors.secondary} />
                                            <span style={{
                                                lineHeight: 1
                                            }}>{t("paginationPrev")}</span>
                                        </div>
                                    }
                                    nextLabel={
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: themeColors.textTint
                                        }}>

                                            <span style={{
                                                lineHeight: 1
                                            }}>{t("paginationNext")}</span>
                                            <Icon name='chevronRightSm' color={themeColors.secondary} />
                                        </div>
                                    }
                                    limit={6}

                                    prevNextButtonStyle={{
                                        color: themeColors.secondary,
                                        fontWeight: 600,
                                    }}
                                    renderPageButton={(page, isActive) => (
                                        <button
                                            key={page}
                                            style={{
                                                padding: "8px 12px",
                                                borderRadius: 12,
                                                cursor: "pointer",
                                                color: isActive ? "#fff" : themeColors.textTint,
                                                background: isActive
                                                    ? "linear-gradient(180deg, #F05CD5 0%, #00CE8E 100%)"
                                                    : "none",
                                                border: isActive ? "1px solid transparent" : "1px solid rgba(255,255,255,0.3)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "relative",
                                            }}
                                            onClick={() => {
                                                console.log(page)
                                            }}
                                        >
                                            {isActive && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        inset: 1,
                                                        background: themeColors.dark,
                                                        borderRadius: 10,
                                                    }}
                                                />
                                            )}
                                            <span style={{ position: "relative", zIndex: 2 }}>{page}</span>
                                        </button>
                                    )}
                                />

                            </div>
                        </> : <></>

                }
                {
                    currentTab === 'pagelyLogos' ?
                        <>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "nowrap",
                                gap: 10,
                                marginTop: 20

                            }}>


                                <Card
                                    title={t("transparentBackground")}
                                    titleStyle={{
                                        fontSize: 16,
                                        textAlign: "center"
                                    }}
                                    containerStyle={{
                                        height: 350
                                    }}
                                    renderBody={() => (
                                        <div style={{
                                            paddingTop: 10,
                                            paddingBottom: 10
                                        }}>
                                            <div style={{
                                                backgroundImage: `url(${transparentBackground})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: 145,
                                                width: "100%",
                                                borderRadius: 20,
                                            }}></div>
                                        </div>
                                    )}

                                    renderFooter={() => (
                                        <div style={{
                                            padding: 10,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Button
                                                title={t("download")}
                                                onClick={() => { }}
                                            />
                                        </div>
                                    )}
                                />
                                <Card
                                    title={t("solidWhiteBackground")}
                                    titleStyle={{
                                        fontSize: 16,
                                        textAlign: "center"
                                    }}
                                    containerStyle={{
                                        height: 350
                                    }}
                                    renderBody={() => (
                                        <div style={{
                                            paddingTop: 10,
                                            paddingBottom: 10
                                        }}>
                                            <div style={{
                                                backgroundImage: `url(${solidWhiteBackground})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: 145,
                                                width: "100%",
                                                borderRadius: 20,
                                            }}></div>
                                        </div>
                                    )}
                                    renderFooter={() => (
                                        <div style={{
                                            padding: 10,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Button
                                                title={t("download")}
                                                onClick={() => { }}
                                            />
                                        </div>
                                    )}
                                />
                                <Card
                                    title={t("solidDarkBackground")}
                                    titleStyle={{
                                        fontSize: 16,
                                        textAlign: "center"
                                    }}
                                    containerStyle={{
                                        height: 350
                                    }}
                                    renderBody={() => (
                                        <div style={{
                                            paddingTop: 10,
                                            paddingBottom: 10
                                        }}>
                                            <div style={{
                                                backgroundImage: `url(${solidDarkBackground})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                height: 145,
                                                width: "100%",
                                                borderRadius: 20,
                                            }}></div>
                                        </div>
                                    )}
                                    renderFooter={() => (
                                        <div style={{
                                            padding: 10,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Button
                                                title={t("download")}
                                                onClick={() => { }}
                                            />
                                        </div>
                                    )}
                                />
                            </div>

                        </> : <></>

                }
                {
                    currentTab === 'hostingImages' ?
                        <>
                            <HostingSetupImages />
                        </> : <></>

                }
            </main>
        </div>
    )
}

export default VisualAssetsPage