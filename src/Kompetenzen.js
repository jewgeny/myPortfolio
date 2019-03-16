import React, {Component} from "react";
import "./css/kompotenzen.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { Progress, Button } from 'reactstrap';
import Kompetenz_Web from "./Kompetenzen_Web";
import Kompetenz_Print from "./Kompetenzen_Print";
import Kompetenzen_Menu from "./Menu/Kompetenzen_Menu";
import {Route} from "react-router-dom";


class Kompetenzen extends Component{

   render(){

     return(

      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperKompotenzen">
            <h2>Kompetenzen</h2>
            <hr className="hrKompotenzen"/>
            <div className="progressWrapper">
                <Kompetenzen_Menu />
                <Route exact path="/kompetenzen/" render={() => <Kompetenz_Web />}  />
                <Route path="/kompetenzen/print" render={() => <Kompetenz_Print />} />

            </div>
        </div>
      </div>
     )
   }
}

export default Kompetenzen;
