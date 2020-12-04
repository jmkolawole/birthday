import React from 'react';
import Gallery from 'react-grid-gallery';
import { Grid, Typography, Button } from '@material-ui/core';

const GalleryComponent = () => {

    const IMAGES =
    [{
            src: "images/gallery/1.jpg",
            thumbnail: "images/gallery/1.jpg",
            
    },
    {
            src: "images/gallery/2.jpg",
            thumbnail: "images/gallery/2.jpg",
                        
    },
    
    {
            src: "images/gallery/3.jpg",
            thumbnail: "images/gallery/3.jpg",
            
    },
    {
        src: "images/gallery/4.jpg",
        thumbnail: "images/gallery/4.jpg",
        
},
{
        src: "images/gallery/5.jpg",
        thumbnail: "images/gallery/5.jpg",
        
},
{
        src: "images/gallery/6.jpg",
        thumbnail: "images/gallery/6.jpg",
        
},
{
        src: "images/gallery/7.jpg",
        thumbnail: "images/gallery/7.jpg",
        
},
{
        src: "images/gallery/8.jpg",
        thumbnail: "images/gallery/8.jpg",
        
},
{
        src: "images/gallery/9.jpg",
        thumbnail: "images/gallery/9.jpg",
        
},
{
        src: "images/gallery/10.jpg",
        thumbnail: "images/gallery/10.jpg",
        
},
{
        src: "images/gallery/11.jpg",
        thumbnail: "images/gallery/11.jpg",
        
},
{
        src: "images/gallery/12.jpg",
        thumbnail: "images/gallery/12.jpg",
        
},
{
        src: "images/gallery/13.jpg",
        thumbnail: "images/gallery/13.jpg",
        
},
{
        src: "images/gallery/14.jpg",
        thumbnail: "images/gallery/14.jpg",
        
},
{
        src: "images/gallery/15.jpg",
        thumbnail: "images/gallery/15.jpg",
        
},
{
        src: "images/gallery/16.jpg",
        thumbnail: "images/gallery/16.jpg",
        
},
{
        src: "images/gallery/17.jpg",
        thumbnail: "images/gallery/17.jpg",
        
}
,
{
        src: "images/gallery/18.jpg",
        thumbnail: "images/gallery/18.jpg",
        
},
{
        src: "images/gallery/19.jpg",
        thumbnail: "images/gallery/19.jpg",
        
},
{
        src: "images/gallery/20.jpg",
        thumbnail: "images/gallery/20.jpg",
        
},
{
        src: "images/gallery/21.jpg",
        thumbnail: "images/gallery/21.jpg",
        
},
{
        src: "images/gallery/22.jpg",
        thumbnail: "images/gallery/22.jpg",
        
},
{
        src: "images/gallery/23.jpg",
        thumbnail: "images/gallery/23.jpg",
        
},
{
        src: "images/gallery/24.jpg",
        thumbnail: "images/gallery/24.jpg",
        
},
{
        src: "images/gallery/25.jpg",
        thumbnail: "images/gallery/25.jpg",
        
},
{
        src: "images/gallery/26.jpg",
        thumbnail: "images/gallery/26.jpg",
        
},
{
        src: "images/gallery/27.jpg",
        thumbnail: "images/gallery/28.jpg",
        
},
{
        src: "images/gallery/28.jpg",
        thumbnail: "images/gallery/28.jpg",
        
},
{
        src: "images/gallery/29.jpg",
        thumbnail: "images/gallery/29.jpg",
        
},
{
        src: "images/gallery/30.jpg",
        thumbnail: "images/gallery/30.jpg",
        
}



]
    
  return (
     <>
          

    <Grid item container>
      
      <Grid item xs={12} sm={2}>
          
      </Grid>
      <Grid item xs={12} sm={8}>
      <Typography variant="h5" style={{ width: '70vw', display:'inline' }} gutterBottom className="topic">Gallery Pictures</Typography> 
      <Typography variant ='h6' style={{display:'inline', marginLeft:'5px', fontSize:'13px'}} className="topic">(Click On Any Image To Start Gallery View)</Typography>
      
      <Gallery images={IMAGES} enableImageSelection={false}/>
      </Grid>
      <Grid item xs={12} sm={2}>
     
      </Grid>


      </Grid>  
     </>
  );
}

export default GalleryComponent;