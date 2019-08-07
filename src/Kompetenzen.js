import React, {Component} from "react";
import "./css/kompotenzen.css";
import KompetenzWeb from "./Kompetenzen_Web";
import KompetenzPrint from "./Kompetenzen_Print";
import KompetenzenMenu from "./Menu/Kompetenzen_Menu";
import {Route} from "react-router-dom";


class Kompetenzen extends Component{

   render(){

     return(

      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperKompotenzen">
            <h2>Kompetenzen</h2>
            <hr className="hrKompotenzen"/>
            <div className="progressWrapper">
                <KompetenzenMenu />
                <Route exact path="/kompetenzen/" render={() => <KompetenzWeb />}  />
                <Route path="/kompetenzen/print" render={() => <KompetenzPrint />} />

            </div>
        </div>
      </div>
     )
   }
}

export default Kompetenzen;
