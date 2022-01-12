import React, {useEffect, useState} from "react"
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

  return (
    <div>
      {displayPosts()}
    </div>
  )
};

export default Feed;
