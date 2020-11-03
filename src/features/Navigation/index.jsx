import React from "react";
import {
  Home,
  Message,
  Phone,
  Hdd,
  Users,
  Folder,
  Settings
} from "../../utils/assets";

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="/" className="nav-link icon">
        <Home />
      </a>
      <a href="/" className="nav-link icon">
        <Message />
      </a>
      <a href="/" className="nav-link icon">
        <Phone />
      </a>
      <a href="/" className="nav-link icon">
        <Hdd />
      </a>
      <a href="/" className="nav-link icon">
        <Users />
      </a>
      <a href="/" className="nav-link icon">
        <Folder />
      </a>
      <a href="/" className="nav-link icon">
        <Settings />
      </a>
    </div>
  );
};

export default Navigation;
