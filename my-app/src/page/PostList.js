import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./page.css";
import data from "../data.json";
import whiteHeart from "../images/w-heart.png";
import whiteComment from "../images/w-comments.png";

function PostList() {
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
                <Grid container spacing={4}>
                  <Grid item className="img-text" container alignItems="center" justifyContent="center" spacing={0.5} xs={12} md={6}>
                    <Grid item><img src={whiteHeart} alt="white-favorite"/></Grid>
                    <Grid item><Typography>{post.like}</Typography></Grid>
                  </Grid>
                  <Grid item className="img-text" container alignItems="center" justifyContent="center" spacing={0.5} xs={12} md={6}>
                    <Grid item><img src={whiteComment} alt="white-heart"/></Grid>
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

export default PostList;