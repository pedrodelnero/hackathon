const makeStyles = (theme) => {
    const styles = {
        container: {
            width: "100vw"
        },
        headerContent: {
            display: "grid",
            gridTemplateColumns: "300px 500px",
            columnGap: "8em",
            justifyContent: "center",
            width: "80vw",
            gridTemplateAreas: "'text image''button image'",
            margin: "auto"
        },
        headerContainer: {
            width: "100vw",
            padding: "80px",
        },
        text: {
            gridArea: "text",
            width: "100%",
            marginTop: "110px"
        },
        button: {
            gridArea: "button"
        },
        input: {
            width: "100%",
            padding: "0px"
        },
        image: {
            gridArea: "image",
            width: "500px"
        }
    }

    return styles;
}


export default makeStyles;