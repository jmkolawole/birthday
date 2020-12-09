import React,{useState} from 'react';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import LoadingComponent from './LoadingComponent'
import Pagination from 'rc-pagination'; 
import SingleMessageComponent from './singleMessageComponent';

import ThumbUp from '@material-ui/icons/ThumbUp';

//Icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import { List, ListItem, Divider, ListItemText, Grid, ListItemAvatar, Avatar, Typography, Badge, makeStyles, IconButton } from '@material-ui/core';


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

function handleSwipe(id, postLike){
  postLike(id);
}


function RenderMessage({ message, postLike }) {
  const classes = useStyles();
  const [count, setCount] = useState(message.votes);
  const name =  message.name  ? message.name : "Anonymous";

  let verified = "";
  if(message.id === 1){
    verified = <VerifiedUserIcon style={{paddingTop:'5px',color:'blue',position:'relative',top:'4px'}}/>
  }else{
    verified = "";
  }
  
  //console.log(message);
  return (
    <>
    <SwipeableListItem swipeRight={{
      content: <div style={{ backgroundColor: 'green', flex: 1, width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}><IconButton aria-label="settings" style={{ color: 'white' }}>
        <ThumbUp /> <span style={{ marginLeft: '5px' }}>Liked</span>
      </IconButton></div>,
      action: () => {handleSwipe(message.id, postLike); setCount(count + 1)}
    }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText className="message-list"
          primary={<Typography><Typography style={{display:'inline', color:'navy'}}>{message.name}</Typography><Typography style={{display:'inline'}}>{verified}</Typography></Typography>}

          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {message.message}
                
              </Typography>
              <div>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit', hour:'numeric',minute:'numeric'}).format(new Date(Date.parse(message.created_at)))}</div>
              <span>
              
              <ThumbUp/>
              <Badge badgeContent={count} color='primary' style={{marginRight:'3px'}}/>
              </span>
              
            </React.Fragment>
          }
        />
      </ListItem>
    </SwipeableListItem>
    {message.id % 10 !== 0 && <Divider/>}

    
    </>
  );
}


function MessageList(props) {
   console.log('this is good',props.messages.messages.data);
  const classes = useStyles();
  const messages = props.messages.messages.data && props.messages.messages.data.map((message) => {
    return (
      <div key={message.id}>
        <div>
          <RenderMessage message={message} postLike={props.postLike}/>
        </div>
      </div>
    );
  });

  if (props.messages.isLoading) {
    return(
      <Grid item container justify='center'>

    
    <Grid item xs={12} align='center'>
            <LoadingComponent />
     </Grid>

     </Grid>       
    );
}
else if (props.messages.errMess) {
    return(
        <div className="col-12"> 
            <h4>{props.messages.errMess}</h4>
        </div>
    );
}
else {
  return (
    <SwipeableList>
      <List className={classes.root} style={{padding:'5px',paddingTop:'0px', paddingBottom:'0px'}}>
        {messages}
      </List>
    </SwipeableList>
  );
}

}


const MessagesComponent = (props) => {

  function onChange(currentPage){
   props.fetchMessages(currentPage);
}

   
  //console.log(props);

  return (
    <>
    <Grid item container>

      <Grid item xs={12} sm={2}>

      </Grid>
      <Grid item xs={12} sm={8}>
      
      <Typography variant="h5" style={{ width: '70vw', display:'inline',marginLeft:'5px' }} gutterBottom className="topic">Messages</Typography> 
      <Typography variant ='h6' style={{display:'inline', marginLeft:'5px', fontSize:'13px'}} className="topic">(Swipe Right To Like Message)</Typography>
      
        <SingleMessageComponent single={props.single} postLike={props.postLike}/>

        <MessageList messages={props.messages} postLike={props.postLike}/>
    {/*<div className={classes.root}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
    */}

      {props.messages.messages.total > 10 &&  
      <Pagination style={{display: 'flex', alignContent: 'center' }}
      className="pagination-restyle"
      current={props.messages.messages.current_page}
      defaultPageSize={10}
      total={props.messages.messages.total}
      onChange={onChange}
      prevIcon={<ArrowBackIos/>}
      jumpPrevIcon={<ArrowBackwardIcon/>}
      nextIcon={<ArrowForwardIos/>}
      jumpNextIcon={<ArrowForwardIcon/>}/>} 
      </Grid>
      <Grid item xs={12} sm={2}>

      </Grid>

    </Grid>


    </>
  );
}



export default MessagesComponent;