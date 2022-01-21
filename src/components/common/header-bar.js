import React, {useState, useEffect} from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import { config } from "../config";
import { AppButton } from "./app-button";
import CompanyLogo from "./company-logo";

const HeaderBar = (props) => {

  //state variables here
  const [variable, setVariable] = useState(true);

  //runs on first load
  useEffect(() => {}, []);

  let links = config.headerLinks;

  const getLinks = () => {
      return links.map((item, i) => <Nav.Link href={item.link}>{item.name}</Nav.Link>)
  }

  return (
      <Navbar expand="sm" fixed="top" style={{backgroundColor: config.colors.light, paddingLeft:16, paddingRight:16}} variant="light">
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
