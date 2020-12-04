import React from 'react';
import {NavLink} from 'react-router-dom';
import SideDrawer from './SideDrawer';

import {AppBar, Toolbar, IconButton, Typography, makeStyles, List, 
    ListItem, Container, Hidden, Fab,ListItemText} from '@material-ui/core';

    import { MenuIcon, Home } from '@material-ui/icons';

    
       

    const useStyles = makeStyles(() => ({
        typographyStyles: {
            flex: 1
        },
        navDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white'
        },
        navbarDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }));
    

const HeaderComponent = () => {
    const classes = useStyles();
    return (
     <>
     <AppBar position="static">
                <Toolbar id="back-to-top-anchor">
                    <Container className={classes.navbarDisplayFlex}>
                    <NavLink className={classes.linkText} to="/home">
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                        </IconButton>
                    </NavLink>    
                        <Typography>
                            
                        </Typography>

                        <Hidden smDown>

                            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
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
                        </Hidden>
                        <Hidden mdUp>
                            <SideDrawer />
                        </Hidden>
                    </Container>

                </Toolbar>

             </AppBar>   

     </>
  );
}

export default HeaderComponent;