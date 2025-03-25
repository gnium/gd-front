
import DynamicList from '../../components/DynamicList/DynamicList';
import Header from '../../components/Header/Header';
import { themeColors, urls } from '../../config';
import useIsMobile from '../../hooks/useIsMobile';



const UsersPage = () => {
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
                            text: "Usuarios",
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
                            placeholder: "Buscar usuarios...",
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
                            type: "thumbnail",
                            name: "profile_picture_url",
                            displayName: "Imagen",
                            config: {
                                //defaultImage: 'assets/default-profile-picture.png',
                                size: 'sm'
                            }
                        },

                        {
                            type: "interpolatedContent",
                            name: "content",
                            displayName: "Contenido",
                            config: {
                                htmlContent: "<div class='m-10'><strong class='d-block'>{{name}}</strong><span class='fw-300 fs-15'>{{email}}</span></div>"
                            }
                        },
                    ]}
                    endSlots={[
                        {
                            type: 'pillGroup',
                            name: 'roles',
                            displayName: "Roles",
                            config: {
                                // pillTextColor: themeColors.text,
                                // pillTextStyle: {
                                //     color: 'red'
                                // },
                                pillSize: "sm",
                                pillTextKey: "display_name"
                            }
                        },

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
                    endpoint='/users'
                    useSecureConnection
                />
            </main>
        </div>
    )
}

export default UsersPage