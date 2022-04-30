import React from "react";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import {
  NavBarSection,
  NavBarContainer,
  LogoText,
  ListItem,
  NavLinks,
  } from "./navbarStyle.js";

const NavBar = () => {
  return (
    <>
      <NavBarSection>
        <NavBarContainer className="container">
          <div className="logo">
            <LogoText>Ultra Profile</LogoText>
          </div>
          <ul className="ul-list">
            <ListItem>
            <Link to="/" className="navlinks">Home</Link>
            </ListItem>
            <ListItem>
              <HashLink to="#work" className="navlinks">Work</HashLink>
            </ListItem>
            <ListItem>
              <HashLink to="#portfolio" className="navlinks">Portfolio</HashLink>
            </ListItem>
            <ListItem>
              <HashLink to="#resume" className="navlinks">Resume</HashLink>
            </ListItem>
            <ListItem>
              <HashLink to="#about" className="navlinks">About</HashLink>
            </ListItem>
            <ListItem>
            <Link to="/contact" className="navlinks">Contact</Link>
            </ListItem>
          </ul>
        </NavBarContainer>
      </NavBarSection>
    </>
  );
};

export default NavBar;
