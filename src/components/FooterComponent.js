import React from 'react';
import { List, ListItem, Divider, ListItemText, Grid, ListItemAvatar, Avatar, Typography, Badge, makeStyles, IconButton } from '@material-ui/core';
const FooterComponent = () => {
  return(
    <div className="footer">
        <div className="container">
        <Grid item container>

    <Grid item container justify="space-between" style={{ marginTop: 50 }}>

    <Grid item xs={6} style={{ float: 'right',paddingLeft:'30px'}}>
    <Typography variant="h6" gutterBottom className="topic">Happy Birthday Tomilola</Typography>
    </Grid>


  <Grid item xs={6} style={{ float: 'right', flex: 1 }} className="send">
  <Typography variant="p" gutterBottom className="topic"><i>"So, teach us to number our days that we may gain a heart of wisdom" Psa 90:12</i></Typography>
  </Grid>

</Grid>

</Grid>
        </div>
    </div>
);
}
export default FooterComponent;