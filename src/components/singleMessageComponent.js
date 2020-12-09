import React,{useState} from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import LoadingComponent from './LoadingComponent'



import ThumbUp from '@material-ui/icons/ThumbUp';

//Icons
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import { ListItem, Divider, ListItemText, Grid, ListItemAvatar, Avatar, Typography, Badge, makeStyles, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));




function RenderMessage({ single, postLike }) {
  const [count, setCount] = useState(single.messages.votes);  
  const verified = <VerifiedUserIcon style={{paddingTop:'5px',color:'blue',position:'relative',top:'4px'}}/>

  function handleSwipe(id){
   postLike(id);
  } 
  const classes = useStyles();
    if(single.isLoading){
        return (
            <>
        <LoadingComponent/>
            </>
        );
    }else if(single.errMess){
        return (
            <>
        <div>{single.errMess}</div>
            </>
        );
    }else{
        return (
            <>
            <SwipeableList>
            <SwipeableListItem swipeRight={{
              content: <div style={{ backgroundColor: 'green', flex: 1, width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}><IconButton aria-label="settings" style={{ color: 'white' }}>
                <ThumbUp /> <span style={{ marginLeft: '5px' }}>Liked</span>
              </IconButton></div>,
              action: () => {handleSwipe(single.messages.id); setCount(count + 1)}
            }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={single.messages.name} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText className="message-list"
                  primary={<Typography><Typography style={{display:'inline', color:'navy'}}>{single.messages.name}</Typography><Typography style={{display:'inline'}}>{verified}</Typography></Typography>}
        
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {single.messages.message}
                        
                      </Typography>
                      <div>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit', hour:'numeric',minute:'numeric'}).format(new Date(Date.parse(single.messages.created_at)))}</div>
                      <span>
                      
                      <ThumbUp/>
                      <Badge badgeContent={count} color='primary' style={{marginRight:'3px'}}/>
                      </span>
                      
                    </React.Fragment>
                  }
                />
              </ListItem>
            </SwipeableListItem>
            </SwipeableList>
            <Divider/>
            <Divider/>
            
            
            </>
        
        );
    }
    
    
  
}





const singleMessageComponent = (props) => {
  return (
    <>
    <Grid item container>

      <Grid item xs={12} sm={2}>

      </Grid>
      <Grid item xs={12} sm={8}>
      
        
         
        <RenderMessage single={props.single} postLike={props.postLike}/>
    

      </Grid>
      <Grid item xs={12} sm={2}>

      </Grid>

    </Grid>


    </>
  );
}



export default singleMessageComponent;