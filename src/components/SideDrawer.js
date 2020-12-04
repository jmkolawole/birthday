import * as React from "react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import { IconButton, List, ListItem, ListItemText, makeStyles, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
    },
})

const SideDrawer = () => {
    const classes = useStyles(); // Add this
    const [state, setState] = useState({ right: false })
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <NavLink className={classes.linkText} to="/home">
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </NavLink>
                <NavLink className={classes.linkText} to="/gallery">
                    <ListItem button>
                        <ListItemText primary="Gallery" />
                    </ListItem>
                </NavLink>
                <NavLink className={classes.linkText} to="/messages">
                    <ListItem button>
                        <ListItemText primary="Messages" />
                    </ListItem>
                </NavLink>
            </List>

        </div>
    );
    return (
        <>
        <IconButton edge="start" aria-label="menu" onClick={toggleDrawer("right", true)}>
            <Menu fontSize="large" style={{ color: 'white' }} />
        </IconButton>
        <Drawer
            anchor="right"
            open={state.right}
            onOpen={toggleDrawer("right", true)}
            onClose={toggleDrawer("right", false)}
        >
            {sideDrawerList("right")}
        </Drawer>
        </>
    );
}
export default SideDrawer
