import { Avatar, Input } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "../firebase";
import firebase from "firebase";
import { Button } from "@material-ui/core";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });

    setInput("");
    setImageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar className="messageSender__topAvatar" src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            className="messageSender__fileSelector"
            placeholder="image URL (Optional)"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "#42B35D" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <LocalOfferIcon style={{ color: "#1A77F2" }} />
          <h4>Tag friends</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "#EBB026" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
