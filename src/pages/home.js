import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/card";
import { FaChartLine } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { FcFile } from "react-icons/fc";

function Home() {
  return (
    <Row>
      <Col>
        <Card
          title="Daily Logins"
          content={150}
          label="Since Last Month"
          isPositive={false}
          icon={<SlLogin />}
        />
      </Col>
      <Col>
        <Card
          title="Activities Completed"
          content={2000}
          label="Since January"
          isPositive={true}
          icon={<FaChartLine />}
        />
      </Col>
      <Col>
        <Card
          label={
            <p>
              The next scheduled test is on
              <span style={{ fontWeight: "bold" }}>Jan 03, 2024</span>.<br />
              Let's prepare for it
            </p>
          }
          icon={<FcFile />}
        />
      </Col>
    </Row>
  );
}

export default Home;
