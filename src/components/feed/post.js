import moment from "moment";
import React from "react"
import Avatar from "../common/avatar";
import { config } from "../config";
import TagList from "../common/tag-list";

const Post = ({postData}) => {

    let {id, avatar, timeStamp, displayName, edited, text} = postData;
    let relativeTimeString = moment(timeStamp).fromNow();
    
    const styles = {
      box: {
        backgroundColor: config.colors.light,
        textAlign: "left",
        padding: 24,
        width: '100%',
        maxWidth: 500,
        borderBottom: '1px solid ' + config.colors.primary
      },
      
      avatar: {
        display:"flex",
        flexDirection: "horizontal"
      },
     
      avatarDisplayBox: {
          display: "flex",
          flexDirection: "horizontal"
      },

      innerContainer: {
        marginLeft: 20,
        flex: 1
      },

      displayName: {
        fontWeight: "bold",
        color: config.colors.primary,
        margin: 0,
        flex: 1
      },

      text: {
        fontStyle: "Arial",
        margin: 0,
      },

      timeStamp: {
        fontSize: "12px",
        color: config.colors.secondary,
        textAlign: 'end',
        margin: 0,
      },

      headerContainer: {
        display: "flex",
        flexDirection: "row"
      }
    };
     
    return (
          <div style={styles.box}>
              <div style={styles.avatarDisplayBox}>
                  <div style={styles.avatar}>
                      <Avatar source={avatar}/>
                  </div>
                  <div style={styles.innerContainer}>
                    <div style={styles.headerContainer}>
                       <p style={styles.displayName}>{displayName}</p>
                       <p style={styles.timeStamp}>{relativeTimeString}</p>
                    </div>
                      <p style={styles.text}>{text}</p>
                      <TagList tags={["Band", "General", "High School", "Pro-Life", "Chapel", "Middle School"]}/>
                  </div>
                </div>
          </div>
    )
};

export default Post;
