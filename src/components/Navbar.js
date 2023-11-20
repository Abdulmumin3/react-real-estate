import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nLinkv className="NavbarItems">
      <h1 className="navbar-logo">Travlly</h1>

      <div className="menu-icons" onClick={handleClick}>
        {/* <FaBars /> */}
        {clicked ? (
          <FaTimes style={{ fontSize: "1.2rem", color: "#222" }} />
        ) : (
          <FaBars style={{ fontSize: "1.2rem", color: "#222" }} />
        )}
        {/* <FaTimes /> */}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cNames} to={item.url}>
                <i>
                  {<item.icon style={{ fontSize: "1.2rem", color: "#222" }} />}
                </i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nLinkv>
  );
};

export default Navbar;
