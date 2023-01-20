import React from "react";

type Props = {
  img?: Array<JSX.Element>;
  title: string;
  text: string;
};

const Skill = ({ title, img, text }: Props) => {
  return (
    <div className="Skill">
      <div className="container-logos">
        {img?.map((image, index) => (
          <div key={index}>{image}</div>
        ))}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Skill;
