import React from "react";
import "./card.css";
import { Card as BsCard, Row, Col } from "react-bootstrap/";

function Card({ title, content, footer, icon }) {
  const getArrowAndColor = () => {
    return footer?.isPositive
      ? {
          color: "#009E0F",
          arrow: "↑",
        }
      : {
          color: "#CC0000",
          arrow: "↓",
        };
  };

  const arrowAndColor = getArrowAndColor();

  return (
    <BsCard.Body className="cardArea">
      <Row>
        <Col xs={8} className="cardTitle">
          {title && <div>{title}</div>}
        </Col>
        <Col xs={4}>
          <div className="icon">{icon}</div>
        </Col>
      </Row>
      <BsCard.Text className="cardContent p-2">{content}</BsCard.Text>
      {footer && (
        <BsCard.Text className="arrowWrap">
          {footer.isPositive !== undefined && (
            <div className="cardArrow" style={{ color: arrowAndColor.color }}>
              {arrowAndColor.arrow} {footer.isPositive ? "10%" : "20%"}
            </div>
          )}
          {footer.label && <div className="cardLabel">{footer.label}</div>}
        </BsCard.Text>
      )}
    </BsCard.Body>
  );
}

export default Card;
