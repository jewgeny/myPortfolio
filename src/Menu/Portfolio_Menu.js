import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "../css/portfolio_menu.css";
import { FaUser, FaUserGraduate, FaWrench } from "react-icons/fa";
import { MdSchool } from "react-icons/md";


class PortfolioMenu extends Component{
   

   toggleMobileMenu = () => {
      let toggleSign = document.querySelector(".toggleSign");
      let activeSelectionWrapper = document.querySelector(".activeSelectionWrapper");

      if(activeSelectionWrapper.classList.contains("showActiveSelection")){
         toggleSign.innerHTML = "+";
      }
      else{
         toggleSign.innerHTML = "-";
      }

      if(activeSelectionWrapper.classList.contains("closeSelectionWrapper")){
         activeSelectionWrapper.classList.remove("closeSelectionWrapper");
         activeSelectionWrapper.classList.toggle("showActiveSelection");
         toggleSign.innerHTML = "-";
      }
      
      activeSelectionWrapper.classList.toggle("showActiveSelection");
     
   }

   closeToggleMobileMenu = () => {
      let toggleSign = document.querySelector(".toggleSign");
      let activeSelectionWrapper = document.querySelector(".activeSelectionWrapper");
      if(activeSelectionWrapper.classList.contains("showActiveSelection")){
         toggleSign.innerHTML = "+";
      }
      else{
         toggleSign.innerHTML = "-";
      }

      activeSelectionWrapper.classList.add("closeSelectionWrapper");
   
   }

/*
   componentDidMount(){
      let buttonDci = document.querySelector("#dci");
      buttonDci.style.border = "1px solid #909800";
   }
*/
   
   render(){
      return(
        <>
        <div onClick={this.toggleMobileMenu} className="toggleMenu">
           <p className="selectionMobile">Auswahl<span className="toggleSign">+</span></p>
        </div>
        <span className="activeSelectionWrapper buttonWrapper">
            <NavLink onClick={this.closeToggleMobileMenu} activeClassName="activeSelection" to="/portfolio/own_projects"  className="boxProjekte">
               <div  className="projectsSelectonWrapper">
                   <FaUser className="iconProjectsSelection" />
                   <p className="textProjectsSelecton">Eigene Projekte</p>
               </div>
            </NavLink>
            <NavLink onClick={this.closeToggleMobileMenu}  activeClassName="activeSelection" to="/portfolio/projects_in_work"  className="boxProjekte">
              <div className="projectsSelectonWrapper">
                  <FaWrench className="iconProjectsSelection" />
                  <p className="textProjectsSelecton">Projekte in Arbeit</p>
               </div>
            </NavLink>
            <NavLink   onClick={this.closeToggleMobileMenu} activeClassName="activeSelection" to="/portfolio/dci_projects"  className="boxProjekte">
            <div className="projectsSelectonWrapper">
               <MdSchool className="iconProjectsSelection" />
               <p className="textProjectsSelecton">DCI Projekte</p>
               </div>
            </NavLink>
        </span>

        </>
      )
   }
}

export default PortfolioMenu;
