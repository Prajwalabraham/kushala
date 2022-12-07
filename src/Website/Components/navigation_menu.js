import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navigation_menu.css'
import Logo from '../Images/LogoBold.png';
import { motion } from "framer-motion"
import 'font-awesome/css/font-awesome.min.css';




const Navigation_menu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
      setClick(!click);
      window.scrollTo(0,0)
    };
    
  return (
    <React.Fragment>
    <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img className="Main-Logo" src={Logo} alt="Logo"/>
        </NavLink>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Features"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Stocklist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Stocks
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              exact
              to="/Crypto"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
                Crypto
            </NavLink>
          </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Help"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Help
              </NavLink>
            </li>
            <li className="nav-item mobile_link">
            <NavLink              
              exact
              to="/Login"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
                Sign in
            </NavLink>
          </li>
            <li className="nav-item mobile_link">
              <NavLink
                exact
                to="/AppPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Download App
              </NavLink>
            </li>
           

            <motion.li className="nav-btn-light mobile_btn"
            whileHover={{scale:1.05}}>
                <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-btn-light-link"
                onClick={handleClick}
                >
                Sign in
              </NavLink>
            </motion.li>

            <motion.li className="nav-btn mobile_btn"            
            whileHover={{scale:1.05}}>
              <NavLink
                exact
                to="/AppPage"
                activeClassName="active"
                className="navbtn"
                onClick={handleClick}
              >
              Download App
              </NavLink>
            </motion.li>

          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times-circle" : "fa fa-bars"}></i>
          </div>
       

        </div>
      </nav> 
    </React.Fragment>
    
  )
}
export default Navigation_menu;
