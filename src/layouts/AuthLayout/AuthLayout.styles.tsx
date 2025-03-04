
import { CSSProperties } from "react";
import themeColors from "../../config/themeColors";

export const styles: { [key: string]: CSSProperties } = {
    layout: {
        position: "relative",
        height: "100vh", // It takes up the entire height of the screen
        //width: "100vw", // It takes up the entire width of the screen
        width: "100%",
        overflow: "hidden",
    },
    content: {
        position: "relative",
        zIndex: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        //overflowY: "scroll",
        //backgroundColor: themeColors.dark,
        backgroundColor: "#1d1d1d"
    },
    headerWrapper: {

        marginTop: 10,
        marginBottom: 10,
        padding: 20
    },
    main: {
        position: 'relative',
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 1,
        padding: 5
        //backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    form: {
        width: '100%',
        maxWidth: 400,
        marginTop: 20,
        backgroundColor: themeColors.dark,
        borderRadius: 20,

        //boxShadow: "0 4px 6px rgba(89, 89, 89, 0.21)"
    }
};