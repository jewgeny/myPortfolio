import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";


class Portfolio_Menu extends Component{
   render(){
      return(
        <>
        <span className="d-flex justify-content-center buttonWrapper mb-3">
            <NavLink  exact to="/portfolio/" activeStyle={{border: "1px solid #909800"}} ident="all" className="buttonProjekte">DCI Projekte</NavLink>
            <NavLink   to="/portfolio/own_projects" activeStyle={{border: "1px solid #909800"}} ident="dci" className="buttonProjekte">Eigene Projekte</NavLink>
        </span>

        </>
      )
   }
}

export default Portfolio_Menu;
