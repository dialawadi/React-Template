import React from "react";
import './aboutStyled.js'
import {CreativeSection,CreativeInfo,CreativeTitle,Span,CreativeDir,CreativeDesc , CreativeContainer} from './aboutStyled'
const About = () => {
  return <> <CreativeSection id="about">
  <CreativeContainer className="container">
      <CreativeInfo>
          <CreativeTitle><Span>This is</Span> Me</CreativeTitle>
          <CreativeDir>Creative Director</CreativeDir>
          <CreativeDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="/">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeDesc>
          <CreativeDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </CreativeDesc>
      </CreativeInfo>
  </CreativeContainer>
</CreativeSection></>;
};

export default About;
