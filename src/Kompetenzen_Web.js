import React, {Component} from "react";
import {FaReact, FaJs, FaCss3, FaHtml5, FaAngular} from "react-icons/fa";
import $ from 'jquery';
import jquery from './images/jquery.svg';

class KompetenzWeb extends Component{
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
     let angularDivElement = document.querySelector(".divAngular");
     let pAngularElement = document.querySelector(".pAngular");


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
       makeProgress(counter, 50, jQueryDivElement, pjQueryElement);
       makeProgress(counter, 75, reactDivElement,  pReactElement);
       makeProgress(counter, 50, angularDivElement,  pAngularElement);
      
  }


   render(){
     return(
            <>
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
                       <p><img className="jquery" alt="jquery" src={jquery} /> jQuery</p>
                           <div className="divjQuery progressState d-flex align-items-center" style={{width: "0"}} ><p className="pjQuery pProgress"></p></div>
                      </div>

                      <div className="wrapperSkills d-flex flex-column">
                        <p><FaReact className="iconSkills react"/> React</p>
                            <div className="divReact progressState d-flex align-items-center" style={{width: "0"}} ><p className="pReact pProgress"></p></div>
                       </div>

                       <div className="wrapperSkills d-flex flex-column">
                        <p><FaAngular className="iconSkills"/> Angular</p>
                            <div className="divAngular progressState d-flex align-items-center" style={{width: "0"}} ><p className="pAngular pProgress"></p></div>
                       </div>

          </>
      )
   }
}

export default KompetenzWeb;
