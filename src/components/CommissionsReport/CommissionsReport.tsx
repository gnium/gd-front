import React from 'react'
import DateField from '../fields/DateField/DateField'
import { useTranslation } from 'react-i18next';
import SelectField from '../fields/SelectField/SelectField';
import { themeColors } from '../../config';
import Button from '../buttons/Button/Button';
import Icon from '../Icon/Icon';

const CommissionsReport = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div
                style={{
                    marginTop: 40,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    flexWrap: "nowrap",
                    gap: 20,
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
                        {t("from")}
                    </label>
                    <DateField
                        value={'2025-01-01'}
                        onChange={(value) => {
                            console.log(value)
                        }}
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
                        {t("to")}
                    </label>
                    <DateField
                        value={'2025-02-01'}
                        onChange={(value) => {
                            console.log(value)
                        }}
                    />
                </div>
                <div>
                    <Button
                        title={t("export")}
                        size='xl'
                        onClick={() => { }}
                    />
                </div>

            </div>


            <div
                style={{
                    marginTop: 40,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                    gap: 10,
                }}
            >
                {/* Campaign Select */}
                <div style={{ width: "100%" }}>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("campaign")}
                    </label>
                    <SelectField
                        value={"all"}
                        options={[
                            { value: "all", label: t("all") },
                            { value: "summer", label: t("campaigns.summer") },
                            { value: "black_friday", label: t("campaigns.blackFriday") },
                            { value: "holiday", label: t("campaigns.holiday") },
                        ]}
                        onChange={(value) => {
                            console.log("Selected:", value);
                        }}
                        caretColor={themeColors.secondary}
                    />
                </div>

                {/* Plans Select */}
                <div style={{ width: "100%" }}>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("plans")}
                    </label>
                    <SelectField
                        value={"all"}
                        options={[
                            { value: "all", label: t("all") },
                            { value: "basic", label: t("planOptions.basic") },
                            { value: "premium", label: t("planOptions.premium") },
                            { value: "enterprise", label: t("planOptions.enterprise") },
                        ]}
                        onChange={(value) => {
                            console.log("Selected:", value);
                        }}
                        caretColor={themeColors.secondary}
                    />
                </div>

                {/* Event Select */}
                <div style={{ width: "100%" }}>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("event")}
                    </label>
                    <SelectField
                        value={"sale"}
                        options={[
                            { value: "all", label: t("all") },
                            { value: "sale", label: t("events.sale") },
                            { value: "refund", label: t("events.refund") },
                            { value: "lead", label: t("events.lead") },
                        ]}
                        onChange={(value) => {
                            console.log("Selected:", value);
                        }}
                        caretColor={themeColors.secondary}
                    />
                </div>

                {/* Status Select */}
                <div style={{ width: "100%" }}>
                    <label
                        style={{
                            marginBottom: 10,
                            display: "block",
                            color: themeColors.textTint,
                            fontWeight: 600,
                        }}
                    >
                        {t("status")}
                    </label>
                    <SelectField
                        value={"all"}
                        options={[
                            { value: "all", label: t("all") },
                            { value: "pending", label: t("statuses.pending") },
                            { value: "approved", label: t("statuses.approved") },
                            { value: "rejected", label: t("statuses.rejected") },
                        ]}
                        onChange={(value) => {
                            console.log("Selected:", value);
                        }}
                        caretColor={themeColors.secondary}
                    />
                </div>


            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 20,
                minHeight: 450,

            }}>
                <Icon name="sadComputer" size={120} />
                <strong
                    style={{
                        color: themeColors.textTint,
                        fontWeight: '900',
                        fontSize: 25
                    }}>{t("commissionsReport.noCommissionsTitle")}</strong>
                <p
                    style={{
                        color: themeColors.textTint,
                        fontWeight: '400',
                        fontSize: 17,
                        maxWidth: 500,
                        textAlign: 'center'
                    }}>
                    {t("commissionsReport.noCommissionsDescription")}
                </p>
                <div style={{
                    width: '100%',
                    maxWidth: 500
                }}>
                    <Button
                        title={t("commissionsReport.getAffiliateGuide")}
                        onClick={() => { }}
                        size='lg'
                        fullWidth
                    />
                </div>
            </div>
        </div>
    )
}

export default CommissionsReport