import React, {Component} from "react";
import {NavLink, Route, Redirect} from "react-router-dom";
import "../css/navbar.css";

class NavList extends Component{

   render(){
     return(
      <>

        <ul className="menuMobil nav navBarOpacity">
              <li className="nav-item">
                 <NavLink to="/" onClick={this.props.setIsHome} className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Home</NavLink>
              </li>
             <li className="nav-item">
                <NavLink to="/aboutMe" onClick={this.props.setIsAboutMe} className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Über mich</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/kompotenzen" onClick={this.props.setIsKompotenzen} className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Kompotenzen</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/" className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Portfolio</NavLink>
             </li>
             <li className="nav-item">
                <NavLink to="/contact" onClick={this.props.setIsContact} className="liMobil nav-link text-white display-4 navListUnderline navListBorderTranparent">Kontakt</NavLink>
             </li>
        </ul>

        </>
     )
   }
}

export default NavList;
