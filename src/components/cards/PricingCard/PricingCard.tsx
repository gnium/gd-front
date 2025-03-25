import Icon from "../../Icon/Icon";
import { themeColors } from "../../../config";
import Card from "../../Card/Card";
import Button from "../../buttons/Button/Button";
import { useTranslation } from "react-i18next";

interface Plan {
    title: string;
    description: string;
    price: string;
    features: string[];
}

const PricingCard = () => {
    const { t } = useTranslation();
    const plans = t("pricingCard.plans", { returnObjects: true }) as Plan[];

    return (
        <div style={{ width: "100%", paddingTop: 15 }}>
            <Card
                renderBody={() => (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 20,
                            alignItems: "stretch",
                        }}
                    >
                        {plans.map((plan, index) => {
                            const isMostPopular = index === 1;
                            return (
                                <div key={plan.title} style={{ flex: 1, position: "relative", padding: "0 20px" }}>
                                    {isMostPopular && (
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: -70,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: themeColors.primaryShade,
                                                color: "#fff",
                                                padding: "10px 10px",
                                                borderRadius: "20px 20px 0 0",
                                                fontWeight: "bold",
                                                fontSize: "16px",
                                                textAlign: "center",
                                                width: 200
                                            }}
                                        >
                                            {t("pricingCard.mostPopular")}
                                        </div>
                                    )}
                                    <h3 style={{ color: "#fff", textAlign: "center", marginBottom: 5 }}>{t(plan.title)}</h3>
                                    <p style={{ color: themeColors.textTint, textAlign: "center", marginBottom: 10 }}>
                                        {t(plan.description)}
                                    </p>
                                    <h2 style={{ color: themeColors.primary, textAlign: "center", marginBottom: 15 }}>
                                        {t(plan.price)}
                                    </h2>
                                    <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
                                        {plan.features.map((feature, i) => (
                                            <li key={i} style={{
                                                color: themeColors.textTint,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: 'flex-start',
                                                gap: 8,
                                                marginTop: 7,
                                                marginBottom: 7,
                                            }}>
                                                <div style={{
                                                    width: 30,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignContent: 'center',
                                                }}>
                                                    <Icon name="checkCircle" color={themeColors.primary} />
                                                </div>
                                                <div style={{
                                                    flex: 1,
                                                    lineHeight: 1.4
                                                }}>
                                                    {t(feature)}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                    <Button title={t("pricingCard.buyNow")} size="lg" fullWidth onClick={() => { }} />
                                    <Button
                                        title={t("pricingCard.comparePlans")}
                                        titleStyle={{ color: themeColors.textTint }}
                                        style={{
                                            border: "1px solid #FFFFFF33",
                                            background: "linear-gradient(294.03deg, #000000 -28.84%, #171518 42.87%)",
                                            marginTop: 10,
                                        }}
                                        size="lg"
                                        fullWidth
                                        onClick={() => { }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            />
        </div>
    );
};

export default PricingCard;
