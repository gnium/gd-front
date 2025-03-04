import React from "react";
import { Outlet } from "react-router-dom";
import { themeColors } from "../../config";
import logoHorizontalWhite from '../../assets/logos/logo-horizontal-white.svg';
import pagelyBg from '../../assets/backgrounds/pagely-bg.svg';
import { useTranslation } from "react-i18next";
import TopBar from "../../components/TopBar/TopBar";
import IconButton from "../../components/buttons/IconButton/IconButton";
import Sidebar from "../../components/Sidebar/Sidebar";
import Icon from "../../components/Icon/Icon";
import ProfileButton from "../../components/buttons/ProfileButton/ProfileButton";
import SelectField from "../../components/fields/SelectField/SelectField";
import Footer from "../../components/Footer/Footer";

interface PrivateLayoutProps {
    showMenu?: boolean;
    showSidebar?: boolean;
    showFooter?: boolean;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ showMenu = false, showSidebar = false, showFooter = false }) => {
    const { t, i18n } = useTranslation();
    // const breakpoint = 768;
    // const { isMobile } = useIsMobile(breakpoint);
    // const { getUser } = useAuth();

    return (
        <>
            <div style={{
                display: "flex",
                backgroundColor: themeColors.dark,
                paddingTop: 50,
                paddingLeft: 10

            }}>
                {/* Sidebar */}
                {showSidebar && (
                    <Sidebar
                        containerStyle={{
                            padding: 15,
                            backgroundColor: "#111",
                            borderRadius: 10,
                            marginTop: 15
                        }}
                        renderHeader={
                            <div style={{
                                position: "relative",
                                height: "320px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                backgroundColor: "#111",
                                overflow: "hidden"
                            }}>
                                {/* Background Image */}
                                <img src={pagelyBg} alt="Pagely background"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        objectFit: "cover",
                                        opacity: .3,
                                    }}
                                />
                                <h2 style={{
                                    color: "#fff",
                                    zIndex: 2,
                                    margin: 0,
                                    position: "relative",
                                    top: -40,
                                    fontSize: 35,
                                    fontWeight: "700",
                                }}>Affiliate</h2>
                            </div>
                        }
                        menuStyle={{
                            position: "relative",
                            top: -100
                        }}
                        menuItems={[
                            { labelKey: "myCampaigns", path: "/", icon: <Icon color={themeColors.primary} name="megaphone" /> },
                            { labelKey: "visualAssets", path: "/visual-assets", icon: <Icon color={themeColors.primary} name="palette" /> },
                            { labelKey: "reporting", path: "/reporting", icon: <Icon color={themeColors.primary} name="chart" /> },
                            { labelKey: "payoutDetails", path: "/payout-details", icon: <Icon color={themeColors.primary} name="creditCard" /> },
                            { labelKey: "oracle", path: "/oracle", icon: <Icon color={themeColors.primary} name="creditCard" /> },
                            { labelKey: "submitAReferral", path: "/submit-referral", icon: <Icon color={themeColors.primary} name="children" /> },
                        ]}
                        renderMenuItem={(item: any) => {

                            return (
                                <button
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        padding: "10px 10px",
                                        width: "100%",
                                        background: "none",
                                        border: "none",
                                        color: "#fff",
                                        fontSize: "15px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        textAlign: "left",
                                    }}
                                >

                                    <span style={{
                                        width: 40,
                                        height: 40,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        backgroundColor: "rgba(136, 136, 136, 0.1)"

                                    }}>
                                        {item.icon}
                                    </span>
                                    <span>{t(item.labelKey)}</span>
                                </button>
                            );
                        }}
                        renderActiveMenuItem={(item) => (
                            <button
                                style={{

                                    padding: 2,
                                    width: "100%",
                                    background: "linear-gradient(90deg, #F05CD5 0%, #00CE8E 100%)",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "0.3s",

                                }}
                            >
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#111",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    borderRadius: "8px",
                                    textAlign: "left",
                                    padding: "10px 10px",
                                }}>
                                    <span style={{
                                        width: 40,
                                        height: 40,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        backgroundColor: "rgba(136, 136, 136, 0.1)"

                                    }}>
                                        {item.icon}
                                    </span>
                                    <span>{t(item.labelKey)}</span>
                                </div>

                            </button>
                        )}
                    />
                )}

                {/* Main content wrapper */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto"
                }}>
                    {/* TopBar */}
                    {showMenu && (
                        <TopBar
                            renderLeft={<img src={logoHorizontalWhite} alt="Pagely" style={{ height: "40px" }} />}
                            renderCenter={
                                <nav>
                                    <a href="#" style={{ color: "#fff", margin: "0 10px" }}>{t("hosting")}</a>
                                    <a href="#" style={{ color: "#fff", margin: "0 10px" }}>{t("pricing")}</a>
                                    <a href="#" style={{ color: "#fff", margin: "0 10px" }}>{t("support")}</a>
                                </nav>
                            }
                            renderRight={
                                <div style={{ display: "flex", gap: "15px" }}>

                                    <IconButton type="clear" icon="search" onClick={() => { }} style={{ backgroundColor: "rgba(30, 30, 30, 0.5)" }} />
                                    <ProfileButton />
                                    <SelectField
                                        value={i18n.language}
                                        options={[
                                            {
                                                value: 'es',
                                                label: 'ES'
                                            },
                                            {
                                                value: 'en',
                                                label: 'EN'
                                            }
                                        ]}
                                        onChange={(value) => {
                                            i18n.changeLanguage(value)
                                        }}
                                        buttonStyle={{
                                            backgroundColor: themeColors.primary,
                                            height: 44,
                                            borderRadius: 99,
                                            borderWidth: 0
                                        }}
                                        buttonTitleStyle={{
                                            color: themeColors.text,
                                        }}
                                    />
                                </div>
                            }
                        />
                    )}

                    {/* Main content */}
                    <main style={{
                        flex: 1,
                        padding: "20px",
                        //marginTop: showMenu ? "60px" : "0",
                        overflowY: "auto",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <Outlet />
                    </main>


                </div>

            </div>
            {/* Footer */}
            {showFooter && <Footer />}
        </>
    );
};

export default PrivateLayout;
