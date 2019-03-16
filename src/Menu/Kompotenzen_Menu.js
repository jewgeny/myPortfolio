import React, {Component} from "react";
import {NavLink, Route} from "react-router-dom";


class Kompotenzen_Menu extends Component{
   render(){
      return(
        <>
        <span className="d-flex justify-content-center buttonWrapper mb-3">
            <NavLink exact to="/kompotenzen" activeStyle={{border: "1px solid #909800"}} ident="all" className="px-5 mx-3 buttonProjekte">Web</NavLink>
            <NavLink  to="/kompotenzen/print" activeStyle={{border: "1px solid #909800"}} ident="dci" className="px-5 mx-3 buttonProjekte">Print</NavLink>
        </span>

        </>
      )
   }
}

export default Kompotenzen_Menu;
