import React, {Component} from "react";
import "./css/aboutMe.css";
import meImg from "./images/me.jpg";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {NavLink} from "react-router-dom";

class AboutMe extends Component{

   render(){
  
     return(

      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperAboutMe">
           <h2>Über mich</h2>
           <hr className="hrAboutMe"/>
          <div className="contentWrapper">
           <img src={meImg} className="meImg showImg"/>
               <div className="pContainer">
                 <p>Darf ich mich vorstellen? Eugen Kuhn.
                   Ich bin 33 Jahre alt und wohne in Hamburg, der schönsten Stadt der Welt :).<br/>
                   Seit vielen Jahren interessiere ich mich für die visuelle Gestaltung. Dazu zählen Web -und Printdesign.
                   Ich konnte bereits ein paar Projekte für StartUps und kleineren Unternehmen realisieren.
                   Diese finden Sie bei <NavLink to="/portfolio" className="link"> Portfolio</NavLink>.
                   Seit letztem Jahr habe ich die Möglichkeit bekommen bei DCI eine Umschulung zum Webentwickler zu absolvieren,
                   welches mir von Tag zu Tag immer mehr Spaß macht. Ich wollte schon immer wissen, worauf es ankommt,
                   wenn man von null anfängt eine Webite zu programmieren. Und bei DCI bin ich nun fündig geworden.
                   Ich möchte mich auch an dieser Stelle meinen tiefsten Dank an meinen Lehrer Kostas Diakogiannis ausprechen, der
                   mich jeden Tag mit einer abnormalen Leidenschaft für's Erstellen der Websites motiviert!
                   <br/>
                   Ich liebe, was ich tue und ich habe einen hohen Anspruch an Qualität und Funktionalität.
                   Das ist für mich die Voraussetzung für konstant gute Ergebnisse.
                 </p>
              </div>

          </div>
        </div>
      </div>
     )
   }
}

export default AboutMe;
