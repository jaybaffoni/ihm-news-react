import React from "react"
import { config } from "./config";

const avatar = ({size='small', rounded=true}) => {
    return (
      <div>
        <img style={{width:config.sizes[size], borderRadius:rounded ? '50%' : 0}} src={avatar} alt={"Avatar"}/>
      </div>
    )
  };

export default avatar;
