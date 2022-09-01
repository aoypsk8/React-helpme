import { useState } from "react";
import { Link } from "react-router-dom";
import DataMenu from "../data/DataMenu";
import "./menu.css";

const Menu = () => {
  const [togglState, setToggleState] = useState(0);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="menu">
      <div className="line"></div>
      {DataMenu.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}  style={{ textDecoration: 'none' }}>
            <div className={togglState===index?"active-menu menu-bar":"menu-bar"} onClick={() => toogleTab(index) }>
              <div className="icon-bar">{menu.icon}</div>
              <div className="title-bar">{menu.title}</div>
            </div>
          </Link>
        );  
      })}
    </div>
  );
};
export default Menu;
