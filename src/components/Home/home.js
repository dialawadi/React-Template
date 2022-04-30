import React from "react";
import "./homeStyle.js";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
} from "./homeStyle";

const Home = () => {
  return (
    <>
      <HomeSection>
        <div className="container">
          <HomeInformation>
            <HomeTitle>Diala</HomeTitle>
            <HomeInfo>Front-End Developer</HomeInfo>
            <HomeDesc>
              Iam a professional <Span>UX Designer</Span> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </div>
      </HomeSection>
    </>
  );
};

export default Home;
