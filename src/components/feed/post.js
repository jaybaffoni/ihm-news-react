import React from "react"
import Avatar from "../common/avatar";
import { config } from "../config";

const Post = ({postData}) => {

    let {id, avatar, timeStamp, displayName, edited, text} = postData;
    
    const boxStyle = {
        color: "White",
        backgroundColor: config.colors.primary,
        textAlign: "left",
        padding: 35,
        margin: 10,
        position: "relative"
      };

      const avatarStyle = {
        display:"flex",
        flexDirection: "horizontal"
      };

      const avatarDisplayBoxStyle = {
          display: "flex",
          flexDirection: "horizontal"
      }

      const senderNameTextStyle = {
        marginLeft: 20
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
        color: config.colors.secondary,
        position: "absolute",
        bottom: 3,
        right: 30
      };
     
    return (
        <div>
            <div container style={boxStyle}>
                <div container style={avatarDisplayBoxStyle}>
                    <div container style={avatarStyle}>
                        <Avatar source={avatar}/>
                    </div>
                    <div container style={senderNameTextStyle}>
                        <p style={displayNameStyle}>{displayName}</p>
                        <p style={textStyle}>{text}</p>
                    </div>
                    </div>
                <p style={timeStampStyle}>{timeStamp}</p>
            </div>
        </div>
    )
};

export default Post;
