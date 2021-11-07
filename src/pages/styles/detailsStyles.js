import { Margin } from "@mui/icons-material";

const makeStyles = (theme) => {
    const styles = {
        container: {
            width: "100vw"
        },
        content: {
            width: "70vw",
            margin: "auto"
        },
        video: {
            width: "100%"
        },
        iconBox: {
            display: "flex",
            width: "100%",
            justifyContent: "right"
        },
        icon: {
            fontSize: "3em"
        },
    }

    return styles;
}


export default makeStyles;