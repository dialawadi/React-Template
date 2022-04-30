import React , { useState, useEffect } from "react";
import axios from "axios";
import "./profileStyle.js";
import {
  ProfileSection,
  ProfileContainer,
  ProfileCon,
  ProfileItem,
  Span,
  Skills,
  SkillsDesc,
  SkillsBar,
  Title,
  Perc,
  Parent,
  ParentSpan,
  SkillsTitle,
  ProfileTitle,
  TitleSpan,
} from "./profileStyle";

const Profile = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSkills(res.data.skills);
    });
  }, []);

  const profileSkills = skills.map((skill) => {
    return (
      <SkillsBar key={skill.id}>
              <Title>{skill.title}</Title>
              <Perc>{skill.prec}</Perc>
              <Parent>
                <ParentSpan sp={skill.sp}></ParentSpan>
              </Parent>
            </SkillsBar>

    )
  })
  return (
    <>
      <ProfileSection id="resume">
        <ProfileContainer className="container">
          <ProfileCon>
            <ProfileTitle>
              <TitleSpan>My </TitleSpan>Profile
            </ProfileTitle>
            <ul className="profile-list">
              <ProfileItem>
                <Span>Name</Span>
                Diala Wadi
              </ProfileItem>
              <ProfileItem>
                <Span>Birthday</Span>
                4/10/2000
              </ProfileItem>
              <ProfileItem>
                <Span>Address</Span>
                Khalda
              </ProfileItem>
              <ProfileItem>
                <Span>Phone</Span>
                0781860685
              </ProfileItem>
              <ProfileItem>
                <Span>Email</Span>
                dialaghassan1366@gmail.com
              </ProfileItem>
              <ProfileItem>
                <Span>Website</Span>
                <Span web>www.google.com</Span>
              </ProfileItem>
            </ul>
          </ProfileCon>

          <Skills>
            <SkillsTitle>
              Some <TitleSpan>skills</TitleSpan>
            </SkillsTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {profileSkills}
          </Skills>
        </ProfileContainer>
      </ProfileSection>
    </>
  );
};

export default Profile;
