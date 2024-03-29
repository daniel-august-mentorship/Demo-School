import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import LeftNavigation from "./left-navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import "./navigation.css";

function NavigationBar() {
  const [showNav, setShowNav] = useState(false);
  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);

  return (
    <Container>
      <LeftNavigation show={showNav} onHide={handleClose} />
      <Button className="nav-button" onClick={handleShow}>
        <FaBarsStaggered />
      </Button>
    </Container>
  );
}

export default NavigationBar;
