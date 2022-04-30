import styled from "styled-components";

export const CreativeSection = styled.div`
  height: 500px;
  background: url("imgs/about-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 991px) {
    height: auto;
  }
`;

export const CreativeContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
`

export const CreativeInfo = styled.div`
  padding-top: 100px;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    
  }
`;
export const CreativeTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

export const Span = styled.span`
  font-weight: normal;
`;

export const CreativeDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const CreativeDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;
