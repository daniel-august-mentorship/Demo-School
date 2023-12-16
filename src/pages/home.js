// home.js

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
          content={"150"}
          footer={{
            isPositive: false,
            label: "Since Last Month",
          }}
          icon={<SlLogin />}
        />
      </Col>
      <Col>
        <Card
          title="Activities Completed"
          content={"2,000"}
          footer={{
            isPositive: true,
            label: "Since January",
          }}
          icon={<FaChartLine />}
        />
      </Col>
      <Col>
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
          icon={<FcFile />}
        />
      </Col>
    </Row>
  );
}

export default Home;
