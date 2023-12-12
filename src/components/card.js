import React from "react";
import "./card.css";
import { Card as BsCard } from "react-bootstrap/";

function Card({ title, content, label, isPositive, icon }) {
  const getArrowColor = () => {
    return isPositive ? "#009E0F" : "#CC0000";
  };

  return (
    <BsCard.Body className="cardArea">
      <BsCard.Title className="cardTitle  p-2">
        {title}
        <div className="icon">{icon}</div>
      </BsCard.Title>
      <BsCard.Text className="cardContent p-2">{content}</BsCard.Text>
      <BsCard.Text className="arrowWrap">
        <div className="cardArrow" style={{ color: getArrowColor() }}>
          {isPositive ? "↑10%" : "↓20%"}
        </div>
        <div className="cardLabel">{label}</div>
      </BsCard.Text>
    </BsCard.Body>
  );
}

export default Card;
