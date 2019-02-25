import React, {Component} from "react";
import "./css/kompotenzen.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { Progress, Button } from 'reactstrap';
import $ from 'jquery';
import {FaReact, FaJs, FaSass, FaCss3, FaHtml5} from "react-icons/fa";
import jquery from './images/jquery.svg';


class Kompotenzen extends Component{
  componentDidMount(){
     let counter = 0;
     let htmlDivElement = document.querySelector(".divHtml");
     let htmlPElement = document.querySelector(".pHtml");
     let cssDivElement = document.querySelector(".divCss");
     let pCssElement = document.querySelector(".pCss");
     let javaDivElement = document.querySelector(".divJava");
     let pJavaElement = document.querySelector(".pJava");
     let jQueryDivElement = document.querySelector(".divjQuery");
     let pjQueryElement = document.querySelector(".pjQuery");
     let reactDivElement = document.querySelector(".divReact");
     let pReactElement = document.querySelector(".pReact");


         let makeProgress = (count, max, elemDiv, elemP) => {
              let myTimeout = setInterval((ev) => {
                 if(count > max){
                    clearInterval(myTimeout);
                    count = 0;
                 }
                 else{

                   $(elemDiv).width(count + "%");
                   $(elemP).text(count+"%");
                   count++;

                 }
              }, 30)
         }

       makeProgress(counter, 90, htmlDivElement, htmlPElement);
       makeProgress(counter, 85, cssDivElement, pCssElement);
       makeProgress(counter, 75, javaDivElement, pJavaElement);
       makeProgress(counter, 80, reactDivElement, pjQueryElement);
       makeProgress(counter, 70, jQueryDivElement, pReactElement);

  }

   render(){

     return(
      <div className="wrapper wrapperUp">
        <div className="my-4 wrapperKompotenzen">
           <h2>Kompotenzen</h2>
           <hr className="hrKompotenzen"/>

           <div className="progressWrapper">

              <div className="wrapperSkills d-flex flex-column">
                <p><FaHtml5 className="iconSkills"/> HTML5</p>
                    <div className="divHtml progressState d-flex align-items-center" style={{width: "0"}} ><p className="pHtml pProgress"></p></div>
               </div>

               <div className="wrapperSkills d-flex flex-column">
                 <p><FaCss3 className="iconSkills" /> CSS3</p>
                     <div className="divCss progressState d-flex align-items-center" style={{width: "0"}} ><p className="pCss pProgress"></p></div>
                </div>

                <div className="wrapperSkills d-flex flex-column">
                  <p><FaJs className="iconSkills" /> JavaScript</p>
                      <div className="divJava progressState d-flex align-items-center" style={{width: "0"}} ><p className="pJava pProgress"></p></div>
                 </div>

                 <div className="wrapperSkills d-flex flex-column">
                   <p><img className="jquery" src={jquery} /> jQuery</p>
                       <div className="divjQuery progressState d-flex align-items-center" style={{width: "0"}} ><p className="pjQuery pProgress"></p></div>
                  </div>

                  <div className="wrapperSkills d-flex flex-column">
                    <p><FaReact className="iconSkills react"/> React</p>
                        <div className="divReact progressState d-flex align-items-center" style={{width: "0"}} ><p className="pReact pProgress"></p></div>
                   </div>

          </div>

        </div>
      </div>
     )
   }
}

export default Kompotenzen;
