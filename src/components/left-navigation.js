import React from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";
import { FaUserFriends } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

function LeftNavigation({ show, onHide }) {
  return (
    <Offcanvas show={show} onHide={onHide} backdrop="static">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">
            <FaHouseChimney className="nav-icon" />
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/classes">
            <HiUserGroup className="nav-icon" />
            Classes
          </Nav.Link>
          <Nav.Link as={Link} to="/students">
            <FaUserFriends className="nav-icon" />
            Students
          </Nav.Link>
          <Nav.Link as={Link} to="/reports">
            <BsFillFileEarmarkBarGraphFill className="nav-icon" />
            Reports
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LeftNavigation;
