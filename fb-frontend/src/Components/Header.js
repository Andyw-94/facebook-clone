import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_(2019).svg/1200px-Facebook_f_logo_(2019).svg.png"
          alt="facebook logo"
        />
        <div className="header__input">
          <SearchIcon className="header__inputSearch" />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__avatar">
          <Avatar
            className="header__avatarIcon"
            src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-1/p720x720/123657469_4913000122073399_2566009842173868809_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=bigyGu8VYEAAX-MHNTr&_nc_ht=scontent-lax3-1.xx&tp=6&oh=ab0bac08d68cdc7e3ea0a9a2639f1e73&oe=60CD4A55"
          />
          <h4>{user.displayName}</h4>
        </div>
        <div className="header__info">
          <AddIcon />
        </div>
        <div className="header__info">
          <ForumIcon />
        </div>
        <div className="header__info">
          <NotificationsActiveIcon />
        </div>
        <div className="header__info">
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
