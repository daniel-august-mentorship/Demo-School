import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <NavDropdown className="dropdown-toggle nav-link" title={selectedLanguage}>
      <NavDropdown.Item onClick={() => handleLanguageSelect("English")}>
        English
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => handleLanguageSelect("Korean")}>
        Korean
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default LanguageDropdown;
