


import DynamicList from '../../components/DynamicList/DynamicList';
import Header from '../../components/Header/Header';
import { urls } from '../../config';
import useIsMobile from '../../hooks/useIsMobile';

const ReferralActionsPage = () => {
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
                            text: "Acciones",
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
                            placeholder: "Buscar acciones...",
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
                                    
                                    <span class='fw-800 fs-15'>{{display_name}}</span>
                                    <div class='fw-300 fs-14'><b>Template de la ruta:</b> {{path_template}}</div>
                                    <span class='d-block'> <span class='fw-300 fs-14'>Recompensa:</span> <b>{{reward_amount}} {{currency}}</b></span>
                                </div>`
                            }
                        },
                    ]}
                    endSlots={[
                        {
                            type: 'actionsMenu',
                            name: 'actions',
                            displayName: "Acciones",
                            config: {
                                menuItems: [
                                    {
                                        name: 'view',
                                        displayName: 'View',
                                        icon: 'eye',
                                        onClick: () => alert('Viewing item...'),
                                    },
                                    {
                                        name: 'edit',
                                        displayName: 'Edit',
                                        icon: 'pencil',
                                    },
                                    {
                                        name: 'delete',
                                        displayName: 'Delete',
                                        icon: 'delete',
                                        style: {

                                        },
                                        onClick: () => {
                                            // if (window.confirm('Are you sure you want to delete this item?')) {
                                            //     alert('Item deleted!');
                                            // }
                                        },
                                    },
                                ]
                            }
                        },
                    ]}
                    apiBaseUrl={urls.apiBase}
                    endpoint='/referral-actions'
                    useSecureConnection
                />
            </main>
        </div>
    )
}

export default ReferralActionsPage