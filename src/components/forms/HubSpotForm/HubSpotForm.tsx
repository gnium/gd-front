import { useEffect, useRef } from 'react';

interface HubSpotFormProps {
    portalId: string;
    formId: string;
    region?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
    portalId,
    formId,
    region = 'na1', // default region
}) => {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId,
                    formId,
                    region,
                    target: `#hubspotForm-${formId}`, // unique target ID
                });
            }
        };
        document.body.appendChild(script);
    }, [portalId, formId, region]);

    return <div id={`hubspotForm-${formId}`} ref={formRef} />;
};

export default HubSpotForm;
