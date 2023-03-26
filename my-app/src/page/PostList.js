import "./page.css"
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import data from "../data.json";
import { Typography } from "@mui/material";

function Page() {
  return ( 
    <Grid
      spacing={0.5} 
      container
      direction="row"
      justifyContent="start"
      alignItems="center"
    >
      {
        data?.post_list?.map((post, index) => {
          return (
            <Grid key={index} className="img-layout" item xs={4}>
              <img className="img-body" src={post.img_url} alt={`img+${index}`}/>
              <Box className="backdrop"></Box>
              <Box className="img-icon">
                <Grid container spacing={3}>
                  <Grid item container justifyContent="center" spacing={0.5} xs={12} md={6}>
                    <Grid item><FavoriteIcon/></Grid>
                    <Grid item><Typography>{post.like}</Typography></Grid>
                  </Grid>
                  <Grid item container justifyContent="center" spacing={0.5} xs={12} md={6}>
                    <Grid item><ChatBubbleIcon/></Grid>
                    <Grid item><Typography>{post.like}</Typography></Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )
        })
      }
    </Grid>
  );
}
export default Page;