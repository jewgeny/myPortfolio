import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "../css/navbar.css";
import Logo from "../Logo";

class NavList extends Component{

   render(){
     return(
      <>

        <ul className="menuMobil nav navBarOpacity">
              <Logo />
              <li onClick={this.props.handleClick} className="nav-item">
                 <NavLink exact to="/" activeClassName="activeLink" className="liMobil nav-link display-4 navListUnderline navListBorderTranparent">Home</NavLink>
              </li>
             <li onClick={this.props.handleClick} className="nav-item">
                <NavLink to="/aboutMe" activeClassName="activeLink" className="liMobil nav-link display-4 navListUnderline navListBorderTranparent">Über mich</NavLink>
             </li>
             <li onClick={this.props.handleClick} className="nav-item">
                <NavLink to="/kompetenzen" activeClassName="activeLink" className="liMobil nav-link display-4 navListUnderline navListBorderTranparent">Kompetenzen</NavLink>
             </li>
             <li onClick={this.props.handleClick} className="nav-item">
                <NavLink to="/portfolio" activeClassName="activeLink" className="liMobil nav-link display-4 navListUnderline navListBorderTranparent">Portfolio</NavLink>
             </li>
             <li onClick={this.props.handleClick} className="nav-item">
                <NavLink to="/contact" activeClassName="activeLink" className="liMobil nav-link display-4 navListUnderline navListBorderTranparent">Kontakt</NavLink>
             </li>
        </ul>

        </>
     )
   }
}

export default NavList;
