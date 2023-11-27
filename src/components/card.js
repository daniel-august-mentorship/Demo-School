import React from "react";
import "./card.css";
import { SlLogin } from "react-icons/sl";
import Stack from "react-bootstrap/Stack";

function Card({ title, content, label }) {
  const getArrowDirection = () => {
    return content >= 150 ? "up" : "down";
  };

  const getArrowColor = () => {
    return getArrowDirection() === "up" ? "#009E0F" : "#CC0000";
  };

  return (
    <Stack gap={3}>
      <div className="cardArea">
        <div className="cardTitle d-flex justify-content-between p-2">
          {title}
          <SlLogin className="icon" />
        </div>
        <div className="cardContent p-2">{content}</div>
        <div className="arrowWrap">
          <div className="cardArrow" style={{ color: getArrowColor() }}>
            {getArrowDirection() === "up" ? "↑20%" : "↓20%"}
          </div>
          <div className="cardLabel">{label}</div>
        </div>
      </div>
    </Stack>
  );
}

export default Card;
