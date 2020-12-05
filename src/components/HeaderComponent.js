import React from 'react';
import {NavLink} from 'react-router-dom';
import SideDrawer from './SideDrawer';

import {AppBar, Toolbar, IconButton, Typography, makeStyles, List, 
    ListItem, Container, Hidden,ListItemText} from '@material-ui/core';

    import { Home } from '@material-ui/icons';

    

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
        },
        name: {
            color:'red'
        }
    }));
    

const HeaderComponent = () => {
    const classes = useStyles();
    return (
     <>
     <AppBar position="static" style={{margin:0}}>
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
                            <ListItemText className={classes.name} primary={<Typography>Home</Typography>} />
                                    </ListItem>
                                </NavLink>

                                <NavLink className={classes.linkText} to="/gallery"> 
                                    <ListItem button>
                                        <ListItemText primary={<Typography>Gallery</Typography>} />
                                    </ListItem>
                                </NavLink>

                                <NavLink className={classes.linkText} to="/messages"> 
                                    <ListItem button>
                                        <ListItemText primary={<Typography>Messages</Typography>} />
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