import React from "react";
import "./card.css";
import { Card as BsCard } from "react-bootstrap/";
import { SlLogin } from "react-icons/sl";

function Card({ title, content, label }) {
  const getArrowDirection = () => {
    return content >= 150 ? "up" : "down";
  };

  const getArrowColor = () => {
    return getArrowDirection() === "up" ? "#009E0F" : "#CC0000";
  };

  return (
    <BsCard.Body className="cardArea">
      <BsCard.Title className="cardTitle d-flex justify-content-between p-2">
        {title}
        <SlLogin className="icon" />
      </BsCard.Title>
      <BsCard.Text className="cardContent p-2">{content}</BsCard.Text>
      <BsCard.Text className="arrowWrap">
        <div className="cardArrow" style={{ color: getArrowColor() }}>
          {getArrowDirection() === "up" ? "↑20%" : "↓20%"}
        </div>
        <div className="cardLabel">{label}</div>
      </BsCard.Text>
    </BsCard.Body>
  );
}

export default Card;
