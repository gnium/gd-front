import Icon from "../Icon/Icon";
import TextField from "../fields/TextField/TextField";
import Button from "../buttons/Button/Button";
import { themeColors } from "../../config";
import logoWhite from "../../assets/logos/logo-white.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer
            style={{
                color: themeColors.textTint,
                padding: "10px 20px",
                backgroundColor: themeColors.dark, // Ajuste para mayor contraste en modo dark
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap", // Se adapta a pantallas más pequeñas
                        width: "100%",
                        maxWidth: 1100,
                        gap: 20,
                    }}
                >
                    {/* Hosting */}
                    <div>
                        <h4>{t("footer.hosting")}</h4>
                        <ul>
                            <li>{t("footer.agencies")}</li>
                            <li>{t("footer.enterprise")}</li>
                            <li>{t("footer.woocommerce")}</li>
                            <li>{t("footer.higherEducation")}</li>
                            <li>{t("footer.publishingMedia")}</li>
                            <li>{t("footer.pricing")}</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4>{t("footer.resources")}</h4>
                        <ul>
                            <li>{t("footer.knowledgeBase")}</li>
                            <li>{t("footer.social")}</li>
                            <li>{t("footer.support")}</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4>{t("footer.company")}</h4>
                        <ul>
                            <li>{t("footer.careers")}</li>
                            <li>{t("footer.contactUs")}</li>
                            <li>{t("footer.aboutUs")}</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4>{t("footer.legal")}</h4>
                        <ul>
                            <li>{t("footer.privacyPolicy")}</li>
                            <li>{t("footer.termsOfService")}</li>
                            <li>{t("footer.cookiePolicy")}</li>
                            <li>{t("footer.privacyReport")}</li>
                            <li>{t("footer.legalCatalog")}</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4>{t("footer.newsletter")}</h4>
                        <div>
                            <TextField
                                placeholder={t("footer.enterEmail")}
                                value=""
                                onChange={() => { }}
                                containerStyle={{
                                    border: "none",
                                    backgroundColor: themeColors.medium,
                                }}
                                inputStyle={{
                                    height: 44,
                                    color: themeColors.textTint,
                                }}
                            />
                            <Button
                                title={t("footer.subscribe")}
                                startIcon="envelope"
                                onClick={() => { }}
                                style={{
                                    marginBottom: 10,
                                    marginTop: 10,
                                    height: 40,
                                }}
                            />
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                            <Icon name="facebook" color={"rgba(255,255,255,.5)"} />
                            <Icon name="twitter" color={"rgba(255,255,255,.5)"} />
                            <Icon name="instagram" color={"rgba(255,255,255,.5)"} />
                            <Icon name="github" color={"rgba(255,255,255,.5)"} />
                            <Icon name="linkedin" color={"rgba(255,255,255,.5)"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: 40,
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
            >
                <img src={logoWhite} alt="Pagely" style={{ height: "30px" }} />
                <span>{t("footer.copyright")}</span>
            </div>
        </footer>
    );
};

export default Footer;
