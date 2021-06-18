import logo from "../assets/logo.webp";
import Dropdown from "./dropdown";
import "./navbar.css";
const Navbar = () => {
  let navItems = [
    { name: "Home", dropdown: false },
    { name: "Online Courses", dropdown: false },
    { name: "We are Hiring", dropdown: false },
    { name: "Others", dropdown: true },
  ];
  //Hello World
  //hello
  return (
    <div className="header">
      {/* <div>
      <img className="navbar-logo" src={logo}></img>
      </div>
     */}
      <nav className="nav-bar">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li className="list-items" key={index}>
              {item.name}
              {item.dropdown ? <Dropdown ></Dropdown> : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
