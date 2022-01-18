import React, {useEffect, useState} from "react"
import { config } from "../config";
import Post from "./post";
import { getPosts } from "./services/api";

const Feed = () => {

    const [posts, setPosts] = useState([]);
  //runs on first load
  useEffect(() => {
      //call api
      setPosts(getPosts());
  }, []);

  const displayPosts = () => {
      //loop through all posts and display
      return posts.map((post, i) => {
          return (
              <Post postData={post} key={i}/>
          )
      })
  }

  let style = {
    width: '100%', 
    alignItems: 'center', 
    backgroundColor: config.colors.primary,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }

  return (
    <div style={style}>
      {displayPosts()}
    </div>
  )
};

export default Feed;
