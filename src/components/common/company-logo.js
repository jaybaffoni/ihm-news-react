import React from "react"
import companyLogo from "../../images/company-logo.jpg"
import { config } from "../config";

const CompanyLogo = ({size='large', rounded=false}) => {
  return (
    <div>
      <img style={{width:config.sizes[size], borderRadius:rounded ? '50%' : 0}} src={companyLogo} alt={"Company logo"}/>
    </div>
  )
};

export default CompanyLogo;
