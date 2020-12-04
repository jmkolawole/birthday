import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const LoadingComponent = () => {
   const classes = useStyles();

  return (
    <Grid item container justify='center'>

    
    <Grid item xs={12} align='center'>
    <div className={classes.root} style={{alignItems:'center'}}>
      <CircularProgress />
    </div>  
    </Grid>

    </Grid> 
    
  );
};


export default LoadingComponent;