import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LanguageDropdown from "./dropdown";
import { BiBell } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

function TopNavigation() {
  const [userInfo] = useState({
    username: "August",
    role: "Teacher",
  });
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary nav-bar ">
        <Container className="justify-content-end flex-grow-1 pe-3">
          <Nav className="d-flex align-items-center">
            <LanguageDropdown />
            <Nav.Link className="tnav-link" as={Link} to="/inbox">
              <BiBell />
            </Nav.Link>
            <Nav.Link className="tnav-link " as={Link} to="/setting">
              <BiCog />
            </Nav.Link>
            <Nav.Link className="tnav-link" as={Link} to="/mypage">
              <BiUserCircle />
              <div>
                <div className="userinfo">{userInfo.username}</div>
                <div className="userinfo">{userInfo.role}</div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNavigation;
