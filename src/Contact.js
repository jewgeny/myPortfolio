import React, {Component} from "react";
import "./css/contact.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import $ from 'jquery';


class Contact extends Component{
  componentDidMount(){

  }

   render(){

     return(
      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperKompotenzen">
           <h2>Kontakt</h2>
           <hr className="hrKompotenzen"/>

           <div className="contactWrapper">


          </div>

        </div>
      </div>
     )
   }
}

export default Contact;
