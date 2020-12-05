import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
  Avatar, IconButton, Typography, Grid, Badge
} from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';
import LoadingComponent from './LoadingComponent';

import Pagination from 'rc-pagination';

//Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUp from '@material-ui/icons/ThumbUp';

//Icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor:'white'
  },
  name: {
   color:'white'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function handleButton(id, postLike) {
  postLike(id);


}

function RenderMessage({ message, postLike, id }) {
  const classes = useStyles();
  const [count, setCount] = useState(message.votes);
  const name = message.name ? message.name : "Anonymous";
  

  return (

    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image={`images/cards/${message.info}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message.message}
        </Typography>
      </CardContent>

      <CardHeader className={classes.name}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <>
          <Badge badgeContent={count} color='primary' style={{ marginRight: '3px' }} />
          <IconButton aria-label="settings" className="icon-button" onClick={() => { handleButton(message.id, postLike); setCount(count + 1) }}>
            <ThumbUp />
          </IconButton>
          </>

        }
        title={name}
        subheader={new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit', hour:'numeric',minute:'numeric'})
        .format(new Date(Date.parse(message.created_at)))}
      />
    </Card>
  );
}


function MessageList(props) {
  const classes = useStyles();

  //{console.log(props)}

  const messages = props.messages.messages.data && props.messages.messages.data.map((message) => {
    return (
      <Grid key={message.id} item xs={12} sm={4} style={{ marginTop: 30 }}>
        <RenderMessage message={message} postLike={props.postLike} id={message.id} />
      </Grid>
    );
  });

  if (props.messages.isLoading) {
    return (
      <LoadingComponent />
    );
  }
  else if (props.messages.errMess) {
    return (
      <div className="col-12">
        <h4>{props.messages.errMess}</h4>
      </div>
    );
  }
  else {
    return (
      <>
      {/*Always wrap this in the function below */}
      {messages}
      </>
    );
  }

}


const MessageCardComponent = (props) => {

  function onChange(currentPage) {
    props.fetchMessages(currentPage);
    //console.log(props);
  }

  const classes = useStyles();

  return (
    <>
    <div style={{padding:'5px'}}>
    <MessageList messages={props.messages} postLike={props.postLike} />
    
    <Grid item container justify='center'>

      <Grid item xs={12} sm={2}>

      </Grid>

      <Grid item xs={12} sm={8} className='pagination-grid' align='center'>
        {props.messages.messages.total > 10 &&
          <Pagination
            className="pagination-restyle"
            current={props.messages.messages.current_page}
            defaultPageSize={10}
            total={props.messages.messages.total}
            onChange={onChange}
            prevIcon={<ArrowBackIos />}
            jumpPrevIcon={<ArrowBackwardIcon />}
            nextIcon={<ArrowForwardIos />}
            jumpNextIcon={<ArrowForwardIcon />} />}
      </Grid>

      <Grid item xs={12} sm={2}>

      </Grid>

    </Grid>
   </div> 
    </>
  );

}

export default MessageCardComponent;