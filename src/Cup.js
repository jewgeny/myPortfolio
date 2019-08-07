import React, {Component} from "react";
import "./css/cup.css";
import rauch from "./images/rauch.png";

class Cup extends Component{
   render(){
     return(
        <div className="cup">
          <img src={rauch} alt="smoke" className="smokeEffect" />
        </div>
     )
   }
}

export default Cup;
