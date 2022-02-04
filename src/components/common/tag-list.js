import React, {useState, useEffect} from "react"
import Tag from "./tag";

const TagList = ({tags}) => {

    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap"
        }
    }
    
    const getTags = () => tags.map(tag => <Tag name={tag}/>);
      
 
            
    

  return (
    <div style={styles.container}>
      {getTags()}
    </div>
  )
};

export default TagList;
