import React, {Component} from "react";
import "./css/welcome.css";
import {NavLink} from "react-router-dom";
import {FaSignInAlt} from "react-icons/fa";


let count = 0;
class Welcome extends Component{
  _isMounted = false;
    state = {
      showPortfolioButon: false,
    }
  
  

  componentDidMount(){

        let typeWriter = (txt, elem, time) => {
          
          let myTimeout = setInterval(() => {
            if (time >= txt.length) {
              clearInterval(myTimeout);
              time = 0;
              this.setState({showPortfolioButon: true})
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
      
       if(count === 0){
        typeWriter(text, welcomeText, i);//show the welcome-Text
       }
       
  }

  componentWillUnmount() {
   count = 1;
  }

   render(){

      return(
        <div className="welcomeContainer">
          <h3 className="welcome"> </h3> 
          {this.state.showPortfolioButon && <NavLink to="/portfolio" className="toPrortfolioButton">Zu meinen Projekten<FaSignInAlt className="iconToWebsite"/></NavLink>}
          {count === 1 && <div>
            <h3 className="welcome"> Willkommen auf meiner Website. Hier können Sie sich ein Bild von mir und meinen bisherigen Projekten machen.</h3>   
            <NavLink to="/portfolio" className="toPrortfolioButton">Zu meinen Projekten<FaSignInAlt className="iconToWebsite"/></NavLink>
          </div>
          }
       </div>
       )
   }

}

export default Welcome;
