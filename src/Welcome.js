import React, {Component} from "react";
import "./css/welcome.css";

class Welcome extends Component{

  componentDidMount(){
    let typeWriter = (txt, elem, time) => {
       let myTimeout = setInterval(ev => {
         if (time >= txt.length) {
            clearInterval(myTimeout);
            time = 0;
         }
         else{
           elem.innerHTML += txt.charAt(time);
           time++;
         }
       }, 100);
    }

   let i = 0;
   let welcomeText = document.querySelector(".welcome");
   let text = "Willkommen auf meiner Website. Hier können Sie sich ein Bild von mir und meinen bisherigen Projekten machen.";

   typeWriter(text, welcomeText, i);//show the welcome-Text

  }

   render(){


      return(
        <div className="welcomeContainer">
          <h3 className="welcome"></h3>
       </div>
       )
   }

}

export default Welcome;
