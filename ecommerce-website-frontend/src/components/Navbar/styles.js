import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({

    appBar: {
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        flexGrow: 1,
        display: "flex",
        textDecoration: "none",
        alignItems: "center",
    },
    image: {
        marginRight: "10px",
    },
    menuButton: {
            marginRight: theme.spacing(2),
            display: "none",
            [theme.breakpoints.up("sm")]: {
        },
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover" : {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        wdith: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    navbar: {
        backgroundColor: "white",
        height: "60px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    menuBars: {
        marginLeft: "1rem",
        marginRight: "1rem",
        fontSize: "2rem",
        background: "none",
    },
    navMenu: {
        backgroundColor: "#060b26",
        width: "250px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "-100%",
        transition: "850ms",
        
    },
    navMenuActive: {
        backgroundColor: "#060b26",
        width: "250px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "0",
        transition: "350ms",
        },
    navText: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "8px 0px 8px 16px",
        listStyle: "none",
        height: "60px",
        "& $a": {
            textDecoration: "none",
            color: "#f5f5f5",
            fontSize: "18px",
            width: "95%",
            height:"100%",
            display: "flex",
            alignItems: "center",
            padding: "0px 16px",
            borderRadius: "4px",
            "&:hover":{
                backgroundColor: "#1a83ff",
            },
        },
    },
    navMenuItems: {
        width: "100%",
    },
    navbarToggle: {
        backgroundColor: "#060b26",
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    leftSpan: { 
        marginLeft: "16px",
    },
    try: {
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9 + 1
    }
    }
    
}));
