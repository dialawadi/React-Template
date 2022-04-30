import React, { Component } from "react";
import "./workStyle.js";
import axios from "axios";
import {
  WorkSection,
  WorkContainer,
  WorkTitle,
  Span,
  Part,
  Icon,
  PartTitle,
  Line,
  PartDesc,
} from "./workStyle";

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({
        works: res.data.works,
      });
    });
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((work) => {
      return (
        <Part key={work.id}>
          <Icon className={work.icon_name}></Icon>
          <PartTitle>{work.title}</PartTitle>
          <Line />
          <PartDesc>{work.body}</PartDesc>
        </Part>
      );
    });
    return (
      <>
        {" "}
        <WorkSection id="work">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          <WorkContainer className="container">
            {worksList}
          </WorkContainer>
        </WorkSection>
      </>
    );
  }
}

export default Work;
