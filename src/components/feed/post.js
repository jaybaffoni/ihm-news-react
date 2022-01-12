import React from "react"
import Avatar from "../common/avatar";

const Post = ({postData}) => {

    let {id, avatar, timeStamp, displayName, edited, text} = postData;
  
    return (
        <div>
            <p>id: {id}</p>
            <Avatar source={avatar}/>
            <p>timeStamp: {timeStamp}</p>
            <p>displayName: {displayName}</p>
            <p>edited: {edited}</p>
            <p>text: {text}</p>
        </div>
    )
};

export default Post;
