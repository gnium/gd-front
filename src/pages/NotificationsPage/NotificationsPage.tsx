import Header from "../../components/Header/Header";
import NoContent from "../../components/NoContent/NoContent";
import { themeColors } from "../../config";
import useIsMobile from "../../hooks/useIsMobile";


const NotificationsPage = () => {
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
                            text: "Notificaciones",
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
                            containerStyle: {

                            },
                            inputStyle: {
                                fontSize: "16px",

                            },
                            placeholder: "Buscar...",
                            onChange: handleSearchChange,
                            onEnterPress: handleSearchSubmit
                        },
                    },
                    {
                        type: "moreOptions",
                        config: {
                            onClick: () => console.log("More options clicked"),
                            icon: "moreVertical",
                            style: { color: "#6c757d" },
                        },
                    },
                ]}
                style={{
                }}
                className="app-header"
            />
            <main style={{ padding: "16px" }}>
                <NoContent
                    icon='notifications'
                    message='No tienes notificaciones'
                    iconColor={themeColors.primaryShade}
                    containerStyle={{
                        marginTop: 20
                    }}
                />
            </main>
        </div>
    )
}

export default NotificationsPage