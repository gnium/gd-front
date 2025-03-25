interface HubSpotForms {
  create: (options: {
    portalId: string;
    formId: string;
    region?: string;
    target: string;
  }) => void;
}

interface HubSpot {
  forms: HubSpotForms;
}

interface Window {
  hbspt: HubSpot;
}
