const makeStyles = (theme) => {
    const styles = {
        navbar: {
            
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "center",
            gridColumnGap: "2vw",
            gridRowGap: "4vh",
        },
        button: {
            padding: "0"
        },
        icon: {
            marginTop: "9px"
        }
    }

    return styles;
}


export default makeStyles;