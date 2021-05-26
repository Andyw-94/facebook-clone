import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Post = ({ profilePic, message, timestamp, image, username }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p className="post__message">{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__optionAvatar">
          <AccountCircleOutlinedIcon src={profilePic} />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
