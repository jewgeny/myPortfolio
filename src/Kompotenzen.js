import React, {Component} from "react";
import "./css/kompotenzen.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { Progress, Button } from 'reactstrap';
import Kompotenz_Web from "./Kompotenzen_Web";
import Kompotenz_Print from "./Kompotenzen_Print";
import Kompotenzen_Menu from "./Menu/Kompotenzen_Menu";
import {Route} from "react-router-dom";


class Kompotenzen extends Component{

   render(){

     return(

      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperKompotenzen">
            <h2>Kompotenzen</h2>
            <hr className="hrKompotenzen"/>
            <div className="progressWrapper">
                <Kompotenzen_Menu />
                <Route exact path="/kompotenzen/" render={() => <Kompotenz_Web />}  />
                <Route path="/kompotenzen/print" render={() => <Kompotenz_Print />} />

            </div>
        </div>
      </div>
     )
   }
}

export default Kompotenzen;
