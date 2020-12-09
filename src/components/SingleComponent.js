import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardHeader, CardMedia, CardContent,
    Avatar, IconButton, Typography, Grid, Badge, Divider
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import LoadingComponent from './LoadingComponent';




//Icons

import ThumbUp from '@material-ui/icons/ThumbUp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: 'white',
        margin: '5px'
    },
    name: {
        color: 'white'
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


function RenderMessage({ single, postLike }) {
    
    const [count, setCount] = useState(single.messages.votes);
    
    function handleButton(id) {
        postLike(id);
    }
    
    

    const classes = useStyles();
    const verified = <VerifiedUserIcon style={{ paddingTop: '5px', color: 'blue', position: 'relative', top: '4px' }} />

    if (single.isLoading) {
        return (
            <LoadingComponent />
        )
    } else if (single.errMess) {
        return (
            <h4>{single.errMess}</h4>
        );
    } else {
        return (
            <>
            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={`images/cards/${single.messages.info}`}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {single.messages.message}

                    </Typography>
                </CardContent>

                <CardHeader className={classes.name}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {single.messages.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <>
                        <Badge badgeContent={count} color='primary' style={{ marginRight: '3px' }} />
                        <IconButton aria-label="settings" className="icon-button" onClick={() => { handleButton(single.messages.id); setCount(count + 1) }}>
                            <ThumbUp />
                        </IconButton>
                        </>

                    }
                    title={<Typography><Typography style={{ color: 'black', display: 'inline' }}>{single.messages.name}</Typography>{verified}</Typography>}
                    subheader={new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric', minute: 'numeric' })
                        .format(new Date(Date.parse(single.messages.created_at)))}
                />
            <Divider style={{color:'white'}}/>
            <Divider/>
            </Card>
            
            </>
        )
    }



}




const SingleComponent = (props) => {
    //console.log(props.single)

    return (
        <>

        <Grid item xs={12} sm={4} style={{ marginTop: 30 }}>
            <RenderMessage single={props.single} postLike={props.postLike}/>
        </Grid>

        </>
    );

}

export default SingleComponent;