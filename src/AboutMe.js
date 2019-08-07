import React, {Component} from "react";
import "./css/aboutMe.css";
import meImg from "./images/me.jpg";
import {NavLink} from "react-router-dom";

class AboutMe extends Component{

   render(){
  
     return(

      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperAboutMe">
           <h2>Über mich</h2>
           <hr className="hrAboutMe"/>
          <div className="contentWrapper">
           <img src={meImg} alt="me :-)" className="meImg showImg"/>
               <div className="pContainer">
                 <p>Darf ich mich vorstellen? Mein Name ist Eugen Kuhn.
                   Ich bin 33 Jahre alt und wohne in Hamburg (Stadtteil Rissen), der schönsten Stadt der Welt :).<br/>
                   Seit vielen Jahren interessiere ich mich für die visuelle Gestaltung. Dazu zählen Web -und Printdesign.
                   Ich konnte bereits ein paar Projekte für StartUps und kleineren Unternehmen realisieren.
                   Diese finden Sie bei <NavLink to="/portfolio/own_projects" className="link"> Portfolio</NavLink>.
                  <br></br><br></br>                  
                   Seit letztem Jahr (Juni 2018) habe ich die Möglichkeit bekommen bei DCI (Digital Career Institute) eine Umschulung zum Webentwickler zu absolvieren,
                   welches ich Ende Juli dieses Jahres erfolgreich abschließen konnte.
                   Ich wollte schon immer wissen, worauf es ankommt,
                   wenn man von null anfängt eine Webite zu programmieren. Das alles und vieles mehr konnte ich bei DCI erlernen.
                   Ich möchte mich auch an dieser Stelle meinen tiefsten Dank an meinen damaligen Lehrer Kostas Diakogiannis ausprechen, der
                   mich jeden Tag mit einer abnormalen Leidenschaft für's Programmieren ermutigt und motiviert hat!
                   <br/>
                   Ich liebe was ich tue und ich habe einen hohen Anspruch an Qualität und Funktionalität.
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
