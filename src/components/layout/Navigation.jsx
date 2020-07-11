import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const nav_links = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact" },
  { title: "Signin", path: "/signin" },
];

const Navigation = ({ user }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation">
      <span className="menu-title">My React Blog</span>
      <div className={`menu-content-container ${menuActive ? "active" : ""}`}>
        <ul>
          {nav_links.map((link, index) => {
            return (
              <Link to={link.path} className="nav_link" key={index}>
                {link.title}
              </Link>
            );
          })}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={36}
          />
          <span className="menu-avatar-name">
            {user.first_name} {user.last_name}
          </span>
        </span>
      </div>
      <i
        className={`ionicons icon ${
          !menuActive ? "ion-ios-menu" : "ion-ios-close"
        }`}
        onClick={() => setMenuActive(!menuActive)}
      ></i>
    </nav>
  );
};

export default Navigation;
