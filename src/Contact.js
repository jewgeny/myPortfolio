import React, {Component} from "react";
import "./css/contact.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import $ from 'jquery';
import {FaMobileAlt, FaEnvelope} from "react-icons/fa";



class Contact extends Component{
  componentDidMount(){

  }

   render(){

     return(
      <div className="wrapperContact wrapperUp">
        <div className="my-4 wrapperKompotenzen">
           <h2>Kontakt</h2>
           <hr className="hrKompotenzen"/>

           <div className="contactWrapper">
                 <div className="iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.9353726430836!2d9.749611300000012!3d53.57677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18247c168a763%3A0xfb875b95f927efd6!2sTinsdaler+Heideweg+26%2C+22559+Hamburg!5e0!3m2!1sde!2sde!4v1544203350483"
                      frameBorder="0"></iframe>
                 </div>
              <ul className="ulWrapper">
                 <li className="liContact">Eugen Kuhn</li>
                 <li className="liContact">Tinsdaler Heideweg 26</li>
                 <li className="liContact">22559 Hamburg</li>
                 <li className="liContact"><FaMobileAlt className="icon" /> 0176 23618806</li>
                 <li className="liContact"><FaEnvelope className="icon" />  &nbsp;info@jewgeny.com</li>
              </ul>

          </div>

        </div>
      </div>
     )
   }
}

export default Contact;
