import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import "./page.css";
import PostList from "./PostList";
import Profile from "./Profile";
import PostIcon from "../images/postIcon";
import Reels from "../images/reels";
import SaveIcon from "../images/saveIcon";
import Tag from "../images/tagIcon";

const iconTagStyle = {
  width: 55, 
  height: 55, 
  border: "1px solid #000", 
  borderRadius: "100%",
  padding: 10,
  marginTop: "5vw" 
} 

function Page() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const content = ({value}) => {
    switch (value) {
      case 1:
        return {
          "icon": <Reels marginTop="5vw" borderRadius={"100%"} border={"1px solid #000"} padding="10px" height={60} width={60} boxBtm={24} boxLeft={24} color={"#000"}/>,
          "content": "Reels of you",
          "subContent": "When you create reels, they'll appear hear."
        }
      case 2:
        return {
          "icon": <SaveIcon marginTop="5vw"  borderRadius={"100%"} border={"1px solid #000"} padding="10px" height={60} width={60} boxBtm={24} boxLeft={24} color={"#000"}/>,
          "content": "Save of you",
          "subContent": "When you save post and videoes, they'll appear hear."
        }
      case 3:
        return {
          "icon": <div className="center" style={iconTagStyle}>
                    <Tag height={50} width={50} viewBox={"0 0 24 24"} color={"#000"}/>
                  </div>,
          "content": "Photos and videoes of you",
          "subContent": "When people tag you in post and videoes, they'll appear hear."
        }
      default:
        return {
          "icon": "",
          "content": <PostList />,
          "subContent": ""
        }
    }
  };

  const Postcontent = (value) => {
    return (
      <Grid 
        container 
        justifyContent="center" 
      >
        <Grid item xs={12} container justifyContent="center">
          {content(value)?.icon}
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Grid item xs={12} container justifyContent="center">
            <Typography sx={{fontWeight: 600, fontSize: `calc(1.5vw + 20px)`}}>
              {content(value)?.content}
            </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Typography sx={{fontWeight: 200, fontSize: `calc(0.5vw + 10px)`}}>
              {content(value)?.subContent}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  };

  return (
    <div>
      <Profile/>
      <Divider/>
      <Tabs 
        className="tabs"
        centered 
        value={value} 
        onChange={handleChange}
      >
        <Tab icon={<PostIcon />} iconPosition="start" label="Posts" />
        <Tab icon={<Reels />} iconPosition="start" label="REELS" />
        <Tab icon={<BookmarkBorderOutlinedIcon />} iconPosition="start" label="Save" />
        <Tab icon={<Tag />} iconPosition="start" label="Tag" />
      </Tabs>
      <Postcontent value={value}/>
    </div>
  );
}

export default Page;