import React from "react"
import { config } from "../config";
import companyLogo from "../../images/company-logo.jpg"

const Avatar = ({size='xs', rounded=true, source=companyLogo}) => {
    return (
      <div>
        <img style={{width:config.sizes[size], borderRadius:rounded ? '50%' : 0}} src={source} alt={"Avatar"}/>
      </div>
    )
  };

export default Avatar;
