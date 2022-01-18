import moment from "moment";
import React from "react"
import Avatar from "../common/avatar";
import { config } from "../config";

const Post = ({postData}) => {

    let {id, avatar, timeStamp, displayName, edited, text} = postData;
    let relativeTimeString = moment(timeStamp).fromNow();
    
    const boxStyle = {
        backgroundColor: config.colors.light,
        textAlign: "left",
        padding: 24,
        width: '100%',
        maxWidth: 500,
        borderBottom: '1px solid ' + config.colors.primary
      };

      const avatarStyle = {
        display:"flex",
        flexDirection: "horizontal"
      };

      const avatarDisplayBoxStyle = {
          display: "flex",
          flexDirection: "horizontal"
      }

      const innerContainer = {
        marginLeft: 20,
        flex: 1
      };

      const displayNameStyle = {
        fontWeight: "bold",
        color: config.colors.primary,
        margin: 0,
      };

      const textStyle = {
        fontStyle: "Arial",
        margin: 0,
      };

      const timeStampStyle = {
        fontSize: "12px",
        color: config.colors.secondary,
        textAlign: 'end',
        margin: 0,
      };
     
    return (
          <div style={boxStyle}>
              <div style={avatarDisplayBoxStyle}>
                  <div style={avatarStyle}>
                      <Avatar source={avatar}/>
                  </div>
                  <div style={innerContainer}>
                      <p style={displayNameStyle}>{displayName}</p>
                      <p style={textStyle}>{text}</p>
                      <p style={timeStampStyle}>{relativeTimeString}</p>
                  </div>
                </div>
          </div>
    )
};

export default Post;
