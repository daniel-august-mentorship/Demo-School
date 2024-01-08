import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LeftNavigation from "../components/left-navigation";
import Overview from "../components/overview";

function Home() {
  const [showNav, setShowNav] = useState(false);
  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);

  return (
    <Container>
      <LeftNavigation show={showNav} s onHide={handleClose} />

      <button className="btn btn-primary" onClick={handleShow}>
        Where is this button position?
      </button>

      <Overview />
    </Container>
  );
}

export default Home;
