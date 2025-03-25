import React from 'react'
import EmailField from '../fields/EmailField/EmailField'
import { themeColors } from '../../config';
import { useTranslation } from 'react-i18next';
import SelectField from '../fields/SelectField/SelectField';
import Button from '../buttons/Button/Button';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

const PayoutOptions = () => {
    const { t } = useTranslation();
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 20,
                padding: 20,
            }}
        >
            <div
                style={{

                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: 10
                }}
            >
                <div>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("payoutOptions.paypalEmailLabel")}
                    </label>
                    <EmailField
                        value={""}
                        placeholder='example@pagely.com'
                        onChange={() => { }}
                    />

                </div>
                <div>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("payoutOptions.payoutMethodLabel")}
                    </label>
                    <SelectField
                        value={"paypal"}
                        options={[
                            { value: "paypal", label: t("payoutOptions.payoutMethods.paypal") },
                            { value: "bank_transfer", label: t("payoutOptions.payoutMethods.bankTransfer") },
                            { value: "crypto", label: t("payoutOptions.payoutMethods.crypto") },
                            { value: "venmo", label: t("payoutOptions.payoutMethods.venmo") },
                            { value: "wise", label: t("payoutOptions.payoutMethods.wise") },
                            { value: "skrill", label: t("payoutOptions.payoutMethods.skrill") }
                        ]}
                        onChange={(value) => {
                            console.log("Selected payout method:", value);
                        }}
                        caretColor={themeColors.secondary}
                    />
                </div>
                <div>
                    <Button
                        title={t("export")}
                        onClick={() => {

                        }}
                        size={"lg"}
                    />
                </div>

            </div>
            <div
                style={{
                    flex: 1
                }}
            >
                <Card
                    renderBody={() => (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: 10
                            }}
                        >
                            <div style={{
                                width: 50,
                                flex: 1,
                                marginTop: 3
                            }}>
                                <Icon
                                    name="information"
                                    color={themeColors.secondary}
                                    style={{

                                    }}
                                />
                            </div>

                            <div>
                                <p
                                    style={{
                                        color: themeColors.textTint,
                                        textAlign: 'left'
                                    }}
                                >
                                    {t("payoutOptions.infoText")}
                                </p>
                                <Button
                                    title={t("payoutOptions.viewCommissionTiers")}
                                    type='clear'
                                    onClick={() => { }}
                                    hasShadow={false}
                                    style={{
                                        marginTop: 10
                                    }}
                                />
                            </div>

                        </div>
                    )}
                />
            </div>
        </div>


    )
}

export default PayoutOptions