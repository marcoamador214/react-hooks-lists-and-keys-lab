import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkList = links.map((link) => {
    return <a key={link} href="#home">{link}</a>
  })

  return <nav>{linkList}</nav>;
}

export default NavBar;
