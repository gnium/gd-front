import React from "react";
import { useTranslation } from "react-i18next";
import './HostingSetupImages.scss'
import PricingCard from "../cards/PricingCard/PricingCard";
import { themeColors } from "../../config";
import Card from "../Card/Card";
import Icon from "../Icon/Icon";

const HostingSetupImages: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div
            className="hosting-setup-images-container"
            style={{
                color: themeColors.textTint
            }}
        >
            {/* Title and Description */}
            <p
                style={{
                    marginTop: 20
                }}
            >{t("hostingSetupImages.description")}</p>
            {/* Section 1 */}
            <div className="section">

                <h2>{t("hostingSetupImages.sections.choosePlan.title")}</h2>
                <p>{t("hostingSetupImages.sections.choosePlan.description")}</p>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                    gap: 10,
                    marginTop: 50

                }}>
                    <PricingCard />
                </div>
            </div>


            {/* Section 2 */}
            <div className="section section-steps">
                <h2>{t("hostingSetupImages.sections.stepsToGetStarted.title")}</h2>
                <h3>{t("hostingSetupImages.sections.stepsToGetStarted.subtitle")}</h3>
                <Card renderBody={() => (
                    <ul>
                        <li style={{
                            marginBottom: 30,
                        }}>
                            <div>
                                <span>1</span>
                                <strong>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step1.title")}</strong>
                            </div>
                            <p>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step1.description")}</p>
                        </li>
                        <li style={{
                            marginBottom: 30,
                            paddingTop: 30,
                            borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                        }}>
                            <div>
                                <span>2</span>
                                <strong>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step2.title")}</strong>
                            </div>

                            <p>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step2.description")}</p>
                        </li>
                        <li style={{
                            //marginBottom: 15,
                            paddingTop: 30,
                            borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                        }}>
                            <div>
                                <span>3</span>
                                <strong>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step3.title")}</strong>
                            </div>

                            <p>{t("hostingSetupImages.sections.stepsToGetStarted.steps.step3.description")}</p>
                        </li>
                    </ul>
                )} />
            </div>

            {/* Section 3 */}
            <div className="section section-resources">
                <h2>{t("hostingSetupImages.sections.resourcesForClients.title")}</h2>
                <h3>{t("hostingSetupImages.sections.resourcesForClients.subtitle")}</h3>

                <Card
                    renderBody={() => (
                        <ul>
                            <li>
                                <div className="icon-wrapper">
                                    <Icon name="imageAssets" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.resourcesForClients.resources.visualAssets.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.resourcesForClients.resources.visualAssets.description")}</p>
                                </div>

                            </li>

                            <li style={{
                                marginTop: 30,
                                paddingTop: 30,
                                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="faqBubble" size={70} />

                                </div>

                                <div>
                                    <strong>{t("hostingSetupImages.sections.resourcesForClients.resources.faqs.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.resourcesForClients.resources.faqs.description")}</p>
                                </div>

                            </li>

                            <li style={{
                                marginTop: 30,
                                paddingTop: 30,
                                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="headsetSupport" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.resourcesForClients.resources.support.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.resourcesForClients.resources.support.description")}</p>
                                </div>

                            </li>
                        </ul>
                    )}
                />
            </div>
            {/* Section 4 */}
            <div
                className="section section-why-pagely"
                style={{
                    borderBottom: "none"
                }}
            >
                <h2>{t("hostingSetupImages.sections.whyPagely.title")}</h2>
                <h3>{t("hostingSetupImages.sections.whyPagely.subtitle")}</h3>

                <Card
                    renderBody={() => (
                        <div
                            className="why-pagely-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "0px",
                            }}>
                            <div style={{
                                borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                                paddingBottom: 30
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="performanceBoost" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.whyPagely.features.performance.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.whyPagely.features.performance.description")}</p>
                                </div>

                            </div>

                            <div style={{
                                paddingLeft: 30,
                                paddingBottom: 30
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="secureServer" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.whyPagely.features.security.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.whyPagely.features.security.description")}</p>

                                </div>

                            </div>

                            <div style={{
                                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                                borderRight: "1px solid rgba(255, 255, 255, 0.5)",
                                paddingTop: 30
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="growthChart" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.whyPagely.features.scalability.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.whyPagely.features.scalability.description")}</p>
                                </div>

                            </div>

                            <div style={{
                                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
                                paddingLeft: 30,
                                paddingTop: 30
                            }}>
                                <div className="icon-wrapper">
                                    <Icon name="headsetExpert" size={70} />
                                </div>
                                <div>
                                    <strong>{t("hostingSetupImages.sections.whyPagely.features.support.title")}</strong>
                                    <p>{t("hostingSetupImages.sections.whyPagely.features.support.description")}</p>
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default HostingSetupImages;
