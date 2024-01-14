import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LeftNavigation from "../components/left-navigation";
import Overview from "../components/overview";
import { FaBarsStaggered } from "react-icons/fa6";
import "./pages.css";

function Home() {
  const [showNav, setShowNav] = useState(false);
  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);

  return (
    <Container>
      <LeftNavigation show={showNav} onHide={handleClose} />
      <button className="nav-button" onClick={handleShow}>
        <FaBarsStaggered />
      </button>
      <Overview />
    </Container>
  );
}

export default Home;
