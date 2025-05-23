
import DynamicList from '../../components/DynamicList/DynamicList';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import background from '../../assets/backgrounds/background.png'
import PageHeader from '../../components/PageHeader/PageHeader'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Card from '../../components/Card/Card';
import { CopyButton } from '../../components/buttons/CopyButton/CopyButton';
import Button from '../../components/buttons/Button/Button';
import Icon from '../../components/Icon/Icon';
import { themeColors, urls } from '../../config';
import useIsMobile from '../../hooks/useIsMobile';



const UsersPage = () => {
    const { t } = useTranslation();
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
                width: '100%',
                maxWidth: 800
            }}
        >
            <PageHeader
                backgroundImage={background}
                height={100}
                containerStyle={{
                    borderRadius: 20,
                    alignItems: 'flex-start',

                }}
                renderContent={() => {
                    return <div>

                        <TypingEffect
                            showCursor={false}
                            text={t("usersManagement")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />

            <main style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "nowrap",
                gap: 10,
                marginTop: 20,
                flexDirection: "column",

            }}>
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
            
                <div>
                    <div style={{
                            padding: 10
                        }}>
                            <Button
                                title={t('users.addUser')}
                                onClick={() => { }}
                            />
                        </div>
                    <div style={{ display: 'flex', gap: '10px', padding: '10px', flexWrap: 'wrap' }}>
                        {[
                            { title: 'All', count: 120 },
                            { title: 'Administrator', count: 10 },
                            { title: 'Editor', count: 15 },
                            { title: 'Author', count: 20 },
                            { title: 'Subscriber', count: 50 },
                            { title: 'Pagely Staff', count: 5 },
                            { title: 'Guest Author', count: 20 },
                        ].map((filter) => (
                            <div
                                key={filter.title}
                                onClick={() => console.log(`Filter clicked: ${filter.title}`)}
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px 15px',
                                    border: '1px solid #ccc',
                                    borderRadius: '20px',
                                    backgroundColor: '#f9f9f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                <span style={{ fontWeight: 'bold' }}>{filter.title}</span>
                                <span style={{ color: '#888' }}>({filter.count})</span>
                            </div>
                        ))}
                    </div>
                </div>
            
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