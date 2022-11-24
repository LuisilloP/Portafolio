import React from "react";

type Props = {
  img?: Array<JSX.Element>;
  title: string;
  text: string;
};

const Skill = ({ title, img, text }: Props) => {
  return (
    <div className="skill">
      <div className="container-logos">{img}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Skill;
