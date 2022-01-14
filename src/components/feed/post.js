import React from "react"
import Avatar from "../common/avatar";
import { config } from "../config";

const Post = ({postData}) => {

    let {id, avatar, timeStamp, displayName, edited, text} = postData;
    
    const boxStyle = {
        color: "White",
        backgroundColor: config.colors.primary,
        textAlign: "center",
        padding: "35px"
      };

      const displayNameStyle = {
          fontWeight: "bold",
          color: config.colors.secondary
      };

      const textStyle = {
            fontStyle: "Arial",
      };

      const timeStampStyle = {
            fontSize: "12px",
            color: config.colors.secondary
      };
     
    return (
        <div>
            <div container style={boxStyle}>
                <p>{id}</p>
                <Avatar source={avatar}/>
                <p style={displayNameStyle}>{displayName}</p>
                <p style={textStyle}>{text}</p>
                <p style={timeStampStyle}>{timeStamp}</p>
                <p>edited: {edited}</p>
            </div>
        </div>
    )
};

export default Post;
