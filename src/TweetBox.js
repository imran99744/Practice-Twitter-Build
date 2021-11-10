import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9YcCIpXEL-m3QPsL2RrTFN74klqcR9oqpA&usqp=CAU" />
          <input type="text" placeholder="What's happening" />
        </div>
        <input
          className="tweetBox_inputImage"
          type="text"
          placeholder="Enter image URL"
        />
        <Button className="tweet__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
