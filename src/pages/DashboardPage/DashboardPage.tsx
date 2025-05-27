import { useTranslation } from 'react-i18next';

const DashboardPage = () => {
    const { t } = useTranslation();
    

    return (
        <div>
            <h1>{t('dashboard.title')}</h1>
        </div>
    );
};

export default DashboardPage;
