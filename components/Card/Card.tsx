import React from "react";
import { CardContainer, CardTextContainer } from "./CardStyle";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <CardContainer>
      <i className={`fa ${icon} fa-lg`}></i>
      <CardTextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardTextContainer>
    </CardContainer>
  );
};

export default Card;
