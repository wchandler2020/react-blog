import React from "react";
import { Link } from "react-router-dom";

const nav_links = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Signin", path: "/signin" },
];

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <span>My React Blog</span>
      <ul>
        {nav_links.map((link, index) => {
          return <Link to={link.path}>{link.title}</Link>;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
