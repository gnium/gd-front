import Header from "../../components/Header/Header";
import NoContent from "../../components/NoContent/NoContent";
import { themeColors } from "../../config";
import useIsMobile from "../../hooks/useIsMobile";

const SettingsPage = () => {
    const breakpoint = 768;
    const { isMobile } = useIsMobile(breakpoint);
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
                            text: "Ajustes",
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
                    icon='configurations'
                    message='Configuraciones'
                    iconColor={themeColors.primaryShade}
                    containerStyle={{
                        marginTop: 20
                    }}
                    iconSize={80}
                />
            </main>
        </div>
    )
}

export default SettingsPage