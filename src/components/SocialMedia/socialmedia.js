import React , {useState, useEffect} from "react";
import axios from "axios";
import './socialStyle.js';
import {SocialMedia,SocialContent,Icon,SocialP,Span,Info} from './socialStyle'

const Social = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocials(res.data.socials);
    });
  }, []);

  let socialMedia = socials.map((social , index) => {
    let socialNames = ['face', 'twitter', 'pin']
    return (
      <SocialContent name = {socialNames[index]} key={social.id}>
      <Icon className={social.icon}></Icon>
        <SocialP>
          <Span className="info1">{social.title}</Span>
          <Info className="info2">{social.body}</Info>
        </SocialP>
      </SocialContent>
    )
  })
  return (
    <>
      <SocialMedia>
      {socialMedia}
      </SocialMedia>
    </>
  );
};

export default Social;
