import React, { Component } from "react";
import Home from "./../Home/home";
import Work from "./../Work/work";
import Portfolio from "./../Portfolio/portfolio";
import Profile from "./../Profile/profile";
import About from "./../About/about";
import SocialMedia from "./../SocialMedia/socialmedia";
import Footer from "./../Footer/footer";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default Index;
