import React, {Component} from "react";
import {NavLink} from "react-router-dom";


class KompetenzenMenu extends Component{
   render(){
      return(
        <>
        <span className="d-flex justify-content-center buttonWrapper mb-3">
            <NavLink exact to="/kompetenzen" activeStyle={{border: "1px solid #909800"}} ident="all" className="px-5 mx-3 buttonProjekte">Web</NavLink>
            <NavLink  to="/kompetenzen/print" activeStyle={{border: "1px solid #909800"}} ident="dci" className="px-5 mx-3 buttonProjekte">Print</NavLink>
        </span>

        </>
      )
   }
}

export default KompetenzenMenu;
