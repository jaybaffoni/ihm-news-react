import React, {useState, useEffect} from "react"
import { config } from "../config";

const Tag = ({name}) => {
    const styles = {
        tag:{
        fontSize: 12,
        color: config.colors.light,
        backgroundColor: config.colors.primary,
        margin: "2px 4px 2px 0px",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 32,
        width: "fit-content"
        }
    }
  return (
    <p style={styles.tag}>{name}</p>
  )
};

export default Tag;
