import style from "styled-components";

export const SocialMedia = style.div`
height: auto;
display: flex;
@media (max-width: 768px) {
 flex-direction: column;
}
`;
export const SocialContent = style.div`
width: 33.33%;
padding: 100px 0 100px 60px;
background: ${(props) =>
  props.name === 'face'
    ? "#3b5998"
    : props.name === 'twitter'
    ? "#498cbf"
    : props.name === 'pin'
    ? "#cc2127"
    : ""};
@media (max-width:991px) {
width: 100%;
}
@media (max-width: 768px) {
padding: 30px 0 30px 50px;
}
`;

export const Icon = style.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px;
`;
export const SocialP = style.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff;
`;
export const Span = style.span`
display: block;
margin-bottom: 8px;
`;

export const Info = style.span`
font-weight: normal;
`;
