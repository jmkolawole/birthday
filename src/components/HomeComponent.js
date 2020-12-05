import React, { useState } from 'react';
import MessageCardComponent from './MessageCardComponent';
import { Control, LocalForm } from 'react-redux-form';

import { Grid, Typography, makeStyles, TextField, Avatar, CardHeader, Paper, Button, Card, 
  FormLabel, FormControlLabel, Link, Checkbox, Badge , IconButton, CardContent, CardMedia} from '@material-ui/core';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ThumbUp from '@material-ui/icons/ThumbUp';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


import Feed from "react-instagram-authless-feed"

import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const HomeComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const [state, setState] = useState({
    name: "",
    message: "",
    anonymous: false,
    info: ""
  });

  


  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })

  };

  
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {

    setOpen(false);
  };

  


  const handleSubmit = (e) => {
    const images = [
      'a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg'
      ];
      const randomNumber = Math.floor(Math.random() * images.length);
      state.info = images[randomNumber];
    props.postMessage(state.name, state.message, state.anonymous, state.info);
    //props.fetchMessages(1);
    e.preventDefault();
    setOpen(false);
    
    
  }
  
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const images = [
    {
      original: 'images/a.jpg',
      thumbnail: 'images/a.jpg',
    },
    {
      original: 'images/b.jpg',
      thumbnail: 'images/b.jpg',
    },
    {
      original: 'images/c.jpg',
      thumbnail: 'images/c.jpg',
    }, {
      original: 'images/d.png',
      thumbnail: 'images/d.png',
    }, {
      original: 'images/e.jpg',
      thumbnail: 'images/e.jpg',
    },
    {
      original: 'images/f.jpg',
      thumbnail: 'images/f.jpg',
    },
    {
      original: 'images/g.jpg',
      thumbnail: 'images/g.jpg',
    }
  ]



  const name = '' ? '' : "Anonymous";

  return (
    <>
    <div style={styles}>

    </div>
   
    <Grid item container>
      <Grid item xs={0} sm={3}></Grid>

      <Grid item xs={12} sm={6}>
        <ImageGallery items={images} />
      </Grid>

      <Grid item xs={0} sm={3}></Grid>


    </Grid>

    <Grid item container>
      <Grid item xs={0} sm={1}></Grid>

      <Grid item xs={12} sm={10}>


        <Grid item container>

          <Grid item container justify="space-between" style={{ marginTop: 50 }}>

            <Grid item xs={8} style={{ float: 'right' }}>
              <Typography variant="h5" style={{ width: '70vw' }} gutterBottom className="topic">Birthday Messages</Typography>
            </Grid>


            <Grid item xs={4} style={{ float: 'right', flex: 1 }} className="send">
              <Button variant="contained" color="primary"  onClick={onOpenModal} style={{ padding: 3 }}>Send Message</Button>
            </Grid>

          </Grid>



          <Modal open={open} onClose={onCloseModal}>


            <form onSubmit={handleSubmit}>
              <Paper style={{ padding: 16, width: '50vw' }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Typography variant="h5" align="center" style={{ width: '70vw' }} gutterBottom>Wish Tomilola A Happy Birthday</Typography>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" name="name" value={state.name} onChange={handleChange} 
                    defaultValue="Name" variant="outlined" style={{ width: '50vw' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox name="anonymous" />}
                      label={<Typography style={{color:'black'}}>Remain Anonymous</Typography>}
                      checked={state.anonymmous}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="standard-multiline-flexible"
                      label="Message"
                      multiline
                      rowsMax={6}
                      name="message"
                      onChange={handleChange}
                      value={state.message}
                      style={{ width: '50vw' }}
                    />
                  </Grid>

                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                    >
                      Clear
                  </Button>
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Send
                  </Button>
                  </Grid>

                </Grid>

              </Paper>
            </form>
          </Modal>

          
          <MessageCardComponent messages={props.messages} postLike={props.postLike} fetchMessages={props.fetchMessages} />

        </Grid>

      </Grid>

      <Grid item xs={0} sm={1}></Grid>


    </Grid>


    <Grid item container justify="space-between" style={{ marginTop: 50 }}>
      <Grid item xs={0} sm={2}></Grid>

      <Grid item xs={12} sm={8} style={{ float: 'right' }}>
        <Typography variant="h5" style={{ width: '70vw',marginLeft:'5px' }} gutterBottom className="topic">Hot on IG</Typography>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>

    <Grid item container>
      <Grid item xs={0} sm={2}></Grid>

      <Grid item xs={12} sm={8}>
      {/*<Feed userName="official_falolatomilola" className="Feed" classNameLoading="Loading" limit="16" />*/}
      </Grid>

      <Grid item xs={0} sm={2}></Grid>


    </Grid>

    </>
  );
}

export default HomeComponent;