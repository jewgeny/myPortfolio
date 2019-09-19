import React, {Component} from "react";
import "./css/aboutMe.css";
import meImg from "./images/me.jpg";
import {NavLink} from "react-router-dom";
import ModalPortfolio from "./ModalLebenslauf";


class AboutMe extends Component{

   state = {
    showCV: false
   }
   updateModalShow = () => {
      this.setState(prevState => ({showCV: !prevState.showCV}))
   }

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
                   Ich liebe was ich tue und ich habe einen hohen Anspruch an Qualität und Funktionalität.
                   Das ist für mich die Voraussetzung für konstant gute Ergebnisse.
                   <br></br>
                   <button onClick={this.updateModalShow} className="cvButton">Vollstänger Lebenslauf</button>  
                   <ModalPortfolio updateModalShow={this.updateModalShow} modalShow={this.state.showCV} />            
                   
                  
                 </p>
              </div>

          </div>
        </div>
      </div>
     )
   }
}

export default AboutMe;
