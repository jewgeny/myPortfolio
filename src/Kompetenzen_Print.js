import React, {Component} from "react";
import $ from 'jquery';
import ps from './images/printIcons/ps.svg';
import id from "./images/printIcons/id.svg";
import ai from "./images/printIcons/ai.svg";
import corel_draw from "./images/printIcons/corel_draw.svg";

class Kompetenz_Print extends Component{
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

       makeProgress(counter, 80, htmlDivElement, htmlPElement);
       makeProgress(counter, 85, cssDivElement, pCssElement);
       makeProgress(counter, 80, javaDivElement, pJavaElement);
       makeProgress(counter, 75, jQueryDivElement, pjQueryElement);

  }


   render(){
     return(
            <>
                  <div className="wrapperSkills d-flex flex-column">
                   <p><img className="icons" src={ps} /> Photoshop</p>
                        <div className="divHtml progressState d-flex align-items-center"><p className="pHtml pProgress"></p></div>
                   </div>

                   <div className="wrapperSkills d-flex flex-column">
                      <p><img className="icons" src={id} /> Indesign</p>
                         <div className="divCss progressState d-flex align-items-center"><p className="pCss pProgress"></p></div>
                    </div>

                    <div className="wrapperSkills d-flex flex-column">
                      <p><img className="icons" src={ai} /> Illustrator</p>
                          <div className="divJava progressState d-flex align-items-center" style={{width: "0"}} ><p className="pJava pProgress"></p></div>
                     </div>

                     <div className="wrapperSkills d-flex flex-column">
                       <p><img className="icons" src={corel_draw} /> CorelDraw</p>
                           <div className="divjQuery progressState d-flex align-items-center" style={{width: "0"}} ><p className="pjQuery pProgress"></p></div>
                      </div>
          </>
      )
   }
}

export default Kompetenz_Print;
