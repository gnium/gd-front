


import DynamicList from '../../components/DynamicList/DynamicList';
import Header from '../../components/Header/Header';
import { urls } from '../../config';
import useIsMobile from '../../hooks/useIsMobile';

const ReferralLinksPage = () => {
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
                            text: "Links",
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
                            placeholder: "Buscar links...",
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
                                    
                                    <span class='fw-800 fs-15'>{{action.display_name}}</span>
                                    <div class='fw-300 fs-14'>{{full_url}}</div>
                                    <span class='d-block'> <span class='fw-300 fs-14'>Recompensa:</span> <b>{{action.reward_amount}} {{action.currency}}</b></span>
                                </div>`
                            }
                        },

                    ]}
                    endSlots={[
                        {
                            type: "copyButton",
                            name: "full_url",
                            displayName: "Link",
                            config: {

                            }
                        },
                    ]}
                    apiBaseUrl={urls.apiBase}
                    endpoint='/my/referral-links'
                    useSecureConnection
                />
            </main>
        </div>
    )
}

export default ReferralLinksPage