import React from 'react';
import { Button, Box, Grid, Typography } from "@mui/material";

import "./page.css"
import data from "../data.json";
import Setting from "../images/setting"; 

const btnProfile = {
  backgroundColor: "#DBDBDB",
  padding: "5px 15px",
  borderRadius: "10px",
  color: "#000", 
  fontWeight: "600", 
  fontSize: "15px"
}

function Profile() {
  return (
    <Grid container className="profile-container">
      <Grid container item xs={12} sm={4} justifyContent="center" alignItems="center">
        <img className="profile-img" src={data.image_profile} alt="profile-img"/>
      </Grid>
      <Grid container item xs={12} sm={8} rowSpacing={4}>
        <Grid container spacing={2} item xs={12} alignItems="center">
          <Grid item>
            <Typography variant={"h5"}>{data.name}</Typography>
          </Grid>
          <Grid item className='center'>
            <Button sx={btnProfile}>แก้ไขโปรไฟล์</Button>
          </Grid>
          <Grid item sx={{justifyContent: 'center'}}>
            <Setting />
          </Grid>
        </Grid>
        <Grid container spacing={6} item xs={12} alignItems="start">
          <Grid item>
            <Typography variant={"h6"}>
              <span className="profile-number">{data.total_post}</span> 
              Posts
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h6"}>
              <span className="profile-number">{data.follower}</span> 
              Followers
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h6"}>
              <span className="profile-number">{data.following}</span> 
              following
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} alignItems="center">
          <Typography sx={{marginLeft: "20px"}}>
            <div
              dangerouslySetInnerHTML={{__html: data.biography.replaceAll("\n", "<br/>")}}
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;