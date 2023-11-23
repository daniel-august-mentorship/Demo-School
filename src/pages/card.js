import React from "react";
import "./card.css";
import { SlLogin } from "react-icons/sl";

function Card() {
  const content = 150;
  const label = " Since Last Month";

  const getArrowDirection = () => {
    return content >= 150 ? "up" : "down";
  };

  const getArrowColor = () => {
    return getArrowDirection() === "up" ? "#009E0F" : "#CC0000";
  };

  return (
    <div className="cardWrap">
      <div className="cardArea">
        <div className="cardTitle">
          Daily Logins
          <SlLogin className="icon" size="25" color="#134F5C" />
        </div>
        <div className="cardContent">{content}</div>
        <div className="arrowWrap">
          <div className="cardArrow" style={{ color: getArrowColor() }}>
            {getArrowDirection() === "up" ? "↑ 20%" : "↓ 20%"}
          </div>
          <div className="cardLabel">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
