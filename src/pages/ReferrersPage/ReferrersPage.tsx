
import DynamicList from '../../components/DynamicList/DynamicList';
import Header from '../../components/Header/Header';
import { urls } from '../../config';
import useIsMobile from '../../hooks/useIsMobile';



const ReferrersPage = () => {
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
                            text: "Referidores",
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
                            placeholder: "Buscar referidores...",
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
                                    <strong class='d-block'>{{user.name}}</strong>
                                    <span class='fw-300 fs-15'>{{user.email}}</span>
                                    <div class="fw-300 fs-13">Código: <b>{{code}}</b></div>
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
                                        onClick: () => { },
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

                                        },
                                    },
                                ]
                            }
                        },
                    ]}
                    apiBaseUrl={urls.apiBase}
                    endpoint='/referrers'
                    useSecureConnection
                />
            </main>
        </div>
    )
}

export default ReferrersPage