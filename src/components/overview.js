import React from "react";
import Card from "./card";
import { FaChartLine } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { FcPackage } from "react-icons/fc";
import { Col, Row } from "react-bootstrap";

function Overview() {
  return (
    <Row className="ps-4d-flex justify-content-center">
      <Col xs lg="3">
        <Card
          title="Daily Logins"
          content={"150"}
          footer={{
            isPositive: false,
            label: "Since Last Month",
            growth: "20",
          }}
          icon={<FiLogIn style={{ strokeWidth: 3, fontSize: "35px" }} />}
        />
      </Col>
      <Col xs lg="3">
        <Card
          title="Activities Completed"
          content={"2,000"}
          footer={{
            isPositive: true,
            label: "Since January",
            growth: "10",
          }}
          icon={<FaChartLine />}
        />
      </Col>
      <Col md="auto">
        <Card
          footer={{
            label: (
              <p>
                The next scheduled test
                <br />
                is on <span style={{ fontWeight: "bold" }}>Jan 03, 2024</span>.
                <br />
                Let's prepare for it
              </p>
            ),
          }}
          icon={<FcPackage style={{ fontSize: "48px" }} />}
        />
      </Col>
    </Row>
  );
}

export default Overview;
