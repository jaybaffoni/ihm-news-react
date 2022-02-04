import React, {useState, useEffect} from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import { config } from "../config";
import { AppButton } from "./app-button";
import CompanyLogo from "./company-logo";

const HeaderBar = ({color=config.colors.light, variant="light"}) => {

  //state variables here
  const [variable, setVariable] = useState(true);

  //runs on first load
  useEffect(() => {}, []);

  let links = config.headerLinks;

  const getLinks = () => {
      return links.map((item, i) => <Nav.Link href={item.link}>{item.name}</Nav.Link>)
  }

  const getExpansionSize = () => {
        const length = links.length;
        if(length <= 3) {
            return "sm";
        } else if (length <= 5) {
            return "md";
        } else if (length <= 7) {
            return "lg";
        } else {
            return "xl";
        }
  };
  
    return (
      <Navbar expand={getExpansionSize()} fixed="top" style={{backgroundColor: color, paddingLeft:16, paddingRight:16}} variant={variant}>
    <Navbar.Brand href="#home">
        <CompanyLogo size="xxs" rounded/>    
    </Navbar.Brand>
    <Navbar.Brand href="#home">{config.companyName}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="justify-content-end">
      {getLinks()}
      <AppButton variant={'outline-primary'} title={'Sign Out'} style={{marginLeft: 8}}/>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};
export default HeaderBar;
