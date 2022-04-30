import React, { useState, useEffect } from "react";
import axios from "axios";
import "./portfolioStyle.js";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  Box,
  Image,
  Overlay,
  OverlaySpan,
} from "./portfolioStyle";

const Portfolio = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImgs(res.data.portfolio);
    });
  }, []);

  const portfolioImgs = imgs.map(img => {
    return (
      <Box key={img.id}>
      <Image src={img.image} alt="" />
      <Overlay>
        <OverlaySpan>Show Image</OverlaySpan>
      </Overlay>
    </Box>

    )
  })

  return (
    <>
      <PortfolioSection id="portfolio">
        <PortfolioTitle>
          <Span>My</Span> Portfolio
        </PortfolioTitle>
        <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>

        <div className="box">
          {portfolioImgs}
        </div>
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
