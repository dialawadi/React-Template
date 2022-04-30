import style from "styled-components";

export const ProfileSection = style.div`
padding: 50px 0;
`;
export const ProfileContainer = style.div`
display: flex;
@media (max-width:768px) {

    flex-direction: column;
    

}

`;
export const ProfileCon = style.div`
flex: 1;
@media (max-width:768px) {
    
    margin-bottom: 20px
    
}

`;

export const ProfileItem = style.li`
margin-bottom: 8px;
`;

export const Span = style.span`
display: inline-block;
width: 100px;
font-weight: ${(props) => (props.web ? "normal" : "bold")};
color: ${(props) => (props.web ? "#eb5424" : "#000")};
`;

export const Skills = style.div`
flex: 1;
`;

export const SkillsDesc = style.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px;
`;

export const SkillsBar = style.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px;
`;

export const Title = style.span`
float: left;
`;

export const Perc = style.span`
float: right;
margin-right: 100px;
`;

export const Parent = style.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;
`;

export const ParentSpan = style.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width: ${(props) =>
  props.sp === 'sp1' ? "100%" : props.sp === 'sp2' ? "90%" : props.sp === 'sp3' ? "80%" : ""};
`;

export const SkillsTitle = style.h2`
font-size: 40px; 
margin-bottom: 20px;
`;
export const ProfileTitle = style.h2`
font-size: 40px; 
margin-bottom: 20px;
`;

export const TitleSpan = style.span`
font-weight: normal;
`;
