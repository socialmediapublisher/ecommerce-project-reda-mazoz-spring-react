import React, { useState, useEffect  } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/logo.png";
import useStyles from "./styles";



import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import CategoriesService from '../CategoriesService/CategoriesService';




const Navbar = ({newMessage}) => {

    const [sidebar, setSidebar] = useState(false);
    const [connectedUserWelcome, setConnectedUserWelcome] = useState("");

    const toggleSidebar = () => setSidebar(!sidebar)
    const classes = useStyles();
    const [sidebarData, setSidebarData] = useState([
        /*{
            title: "Home",
            path: "/",
            icon: <AiIcons.AiFillHome />,
            cName: classes.navText,
        },
        {
            title: "Reports",
            path: "/reports",
            icon: <IoIcons.IoIosPaper />,
            cName: classes.navText,
        },
        {
            title: "Products",
            path: "/products",
            icon: <FaIcons.FaCartPlus />,
            cName: classes.navText,
        },
        {
            title: "Team",
            path: "/team",
            icon: <IoIcons.IoMdPeople />,
            cName: classes.navText,
        },
        {
            title: "Messages",
            path: "/messages",
            icon: <FaIcons.FaEnvelopeOpenText />,
            cName: classes.navText,
        },
        {
            title: "Support",
            path: "/support",
            icon: <IoIcons.IoMdHelpCircle />,
            cName: classes.navText,
        }, */
    ]);

    useEffect(() => {
             CategoriesService.getCategories().then((response) => {
                setSidebarData(response.data);
            console.log(response.data)});
      }, []);
      useEffect(() => {
        setConnectedUserWelcome(newMessage)
 }, [newMessage]);
    return (
    <div>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>

                <IconContext.Provider value= {{color: "#fff"}}>
                        <div className={classes.navbar}>
                            <Link to="#" className={ classes.menuBars }>
                                <FaIcons.FaBars color="#060b26" onClick={toggleSidebar} />
                            </Link>
                        </div>
                </IconContext.Provider>

                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="E-Commerce-Website-Name" height="25px" className={classes.image} />
                    E-Commerce-Website-Name
                </Typography>
                <div className={classes.grow} />
                <Typography color="inherit">{connectedUserWelcome}
                    </Typography>
                <Button>
                    <Typography color="inherit">
                        <Link to= "/signup" style={{all: 'unset'}}>Sign In</Link>
                    </Typography>
                </Button>
                <Button>
                    <Typography color="inherit">
                        <Link to= "/upload" style={{all: 'unset'}}>Upload</Link>
                    </Typography>
                </Button>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                <Typography />
            </Toolbar>
        </AppBar>
        
        <div className="try">
        <>
                    
                    <nav className={sidebar ? classes.navMenuActive : classes.navMenu}>
                        <ul className={classes.navMenuItems}>
                            <li className={classes.navbarToggle}>
                                <Link to="#" className={classes.menuBars}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {
                                sidebarData.map((item, index) => {
                                return (
                                    <li key = {index} className={classes.navText}>
                                        <Link to={item.path}>
                                            {/* {item.icon} */}
                                            <span className={classes.leftSpan}>{item.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    </>
                </div>
        
    </div>
    )
}

export default Navbar