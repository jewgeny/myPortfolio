import React, {Component} from "react";
import {NavLink, Route, Redirect} from "react-router-dom";
import "../css/navbar.css";

class NavList extends Component{

   render(){
     return(
      <>

        <ul className="menuMobil nav navBarOpacity">
              <li className="nav-item">
                 <NavLink to="/" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Home</NavLink>
              </li>
             <li className="nav-item">
                <NavLink to="/aboutMe" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Über mich</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/kompotenzen" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Kompotenzen</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/portfolio" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Portfolio</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/contact" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Kontakt</NavLink>
             </li>
        </ul>

        </>
     )
   }
}

export default NavList;
