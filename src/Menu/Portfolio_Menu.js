import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../css/portfolio_menu.css";


class PortfolioMenu extends Component{
   constructor(props){
      super(props);
      this.activateDciButton = this.activateDciButton.bind(this);
      this.activateOwnButton = this.activateOwnButton.bind(this);
   }

   componentDidMount(){
      let buttonDci = document.querySelector("#dci");
      buttonDci.style.border = "1px solid #909800";
   }
   
   activateDciButton(){
     let buttonDci = document.querySelector("#dci");
     let buttonOwn = document.querySelector("#own");
     buttonOwn.style.border = "1px solid white";
     buttonDci.style.border = "1px solid #909800";
   }

   activateOwnButton(){
      let buttonOwn = document.querySelector("#own");
      let buttonDci = document.querySelector("#dci");
      buttonOwn.style.border = "1px solid #909800";
      buttonDci.style.border = "1px solid white";
    }

   render(){
      return(
        <>
        <span className="d-flex justify-content-center buttonWrapper mb-3">
            <Link onClick={this.activateDciButton}   to="/portfolio/"  ident="all" id="dci" className="buttonProjekte">DCI Projekte</Link>
            <Link onClick={this.activateOwnButton} to="/portfolio/own_projects"  id="own" ident="dci" className="buttonProjekte">Eigene Projekte</Link>
        </span>

        </>
      )
   }
}

export default PortfolioMenu;
