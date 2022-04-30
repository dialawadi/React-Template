import style from "styled-components";

export const WorkSection = style.div`
height: auto;
padding: 50px 0;
overflow: hidden;
background: #fff;
`;

export const WorkContainer = style.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 40px;
`;

export const WorkTitle = style.h2`
font-size: 60px;
text-align: center;
@media (max-width: 768px) {
font-size: 30px;
}
`;

export const Span = style.span`
font-weight: normal;
`;

export const Part = style.div`
margin-top: 50px;
padding: 80px 0px;
border: 1px solid #888;
text-align: center;
`;
export const Icon = style.i`
color: #888;
margin-bottom: 20px;
`;

export const PartTitle = style.h4`
font-size: 25px;
color: #eb5424;
margin-bottom: 20px;
`;

export const Line = style.hr`
width: 60%;
margin: auto;
margin-bottom: 20px;
`;

export const PartDesc = style.p`
font-size: 14px;
color: #888;
padding: 20px;
`;
