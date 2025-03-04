


import DynamicList from '../../../components/DynamicList/DynamicList';
import Header from '../../../components/Header/Header';
import { urls } from '../../../config';
import useIsMobile from '../../../hooks/useIsMobile';

const SubmitReferrallPage = () => {
    const breakpoint = 768;
    const { isMobile } = useIsMobile(breakpoint);


    const handleSearchChange = (value: string) => {
        console.log("Current search value:", value);
    };


    const handleSearchSubmit = (value: string) => {
        console.log("Search submitted:", value);
    };




    return (
        <div
            style={{
            }}
        >
            <Header
                startSlots={[
                    {
                        type: "title",
                        config: {
                            text: "Clicks",
                            style: {
                                paddingLeft: isMobile ? "40px" : "10px",
                            },
                        },
                    },
                ]}
                centerSlots={[

                ]}
                endSlots={[
                    {
                        type: "searchBar",
                        config: {
                            placeholder: "Buscar clicks...",
                            onChange: handleSearchChange,
                            onEnterPress: handleSearchSubmit
                        },
                    },
                    {
                        type: "actions",
                        config: {
                            containerStyle: {},
                            items: [
                                {
                                    icon: "filters",
                                    onClick: () => console.log("Filter clicked"),
                                    tooltip: "Filter",
                                    style: {},
                                },
                            ],
                        },
                    },
                    {
                        type: "moreOptions",
                        config: {
                            onClick: () => console.log("More options clicked"),
                            icon: "moreVertical",
                            style: {},
                        },
                    },
                ]}
                style={{
                }}
                className="app-header"
            />
            <main style={{
                padding: "16px",
                display: "flex",
                justifyContent: "center",
            }}>
                <DynamicList
                    containerStyle={{
                        width: "100%",
                        maxWidth: 1000
                    }}
                    startSlots={[

                        {
                            type: "interpolatedContent",
                            name: "content",
                            displayName: "Contenido",
                            config: {
                                htmlContent: `<div class='m-10'>
                                    
                                    <span class='fw-800 fs-15'>{{referral_link.action.display_name}}</span>
                                    
                                    <div class='fw-300 fs-14'>{{code}}</div>
                                    <div class='fw-300 fs-14'><b>Se creo el:</b> {{created_at}}</div>
                                    <div class='fw-300 fs-14'><b>Se completó el:</b> {{completed_at}}</div>
                                </div>`
                            }
                        },

                    ]}
                    endSlots={[

                    ]}
                    apiBaseUrl={urls.apiBase}
                    endpoint='/my/referral-clicks'
                    useSecureConnection
                    noContentIcon='press'
                    noContentText='No hay clicks registrados'
                />
            </main>
        </div>
    )
}

export default SubmitReferrallPage