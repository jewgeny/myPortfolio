import React, {Component} from "react";
import "./css/portfolio.css";
import OwnProjects from "./Own_Projects";
import DciProjects from "./Dci_Projects";
import ProjectsInWork from "./Projects_in_work";
import {Route} from "react-router-dom";
import PortfolioMenu from "./Menu/Portfolio_Menu";
import OwnSingleProduct from "./Own_Project_Product";
import DciSingleProduct from "./Dci_Project_Product";
import ProjectsInWorkProduct from "./ProjectsInWork_Product";
import {ownprojects} from "./data/own_projects";
import {dciprojects} from "./data/dci_projects";
import {projects_in_work} from "./data/projects_in_work";



class Portfolio extends Component{

   render(){

     return(
      <div className="wrapperPortfolio wrapperUp">
        <div className="my-4">
           <h2 className="text-center">Portfolio</h2>
           <hr className="hrKompotenzen"/>
           <div className="my-5 d-flex flex-column justify-content-center">
              <PortfolioMenu />
              <Route exact path="/portfolio/own_projects" render={() => <OwnProjects />} />
              <Route exact path="/portfolio/dci_projects" render={() => <DciProjects />} />
              <Route exact path="/portfolio/projects_in_work" render={() => <ProjectsInWork />} />


              <Route  path="/portfolio/own_projects/:index" render={({match}) => {
               const selectIndexOwn = match.params.index;
               let index = 0;
                 switch(selectIndexOwn){
                    case "Sidereum_Bestattungen":
                      index = 0;
                      break;
                    case "Daniel_Zurba":
                      index = 1;
                      break;
                    case "Yaku_Restaurante":
                      index = 2;
                      break;
                    case "angover":
                      index = 3;
                      break;
                    case "Klemenz_Elektrotechnik":
                      index = 4;
                      break;
                    case "Metalltechnik_Kuhn":
                      index = 5;
                      break;
                    case "Haifischbar":
                      index = 6;
                      break;
                    case "Flavor's":
                      index = 7;
                      break;
                    case "Teewi_Thaimassage":
                      index = 8;
                      break;
                    case "Pension_Cecilie":
                      index = 9;
                      break;
                    default:
                      return selectIndexOwn;
                 }
               return <OwnSingleProduct ownprojects={ownprojects[index]}  />
               }} />

<Route path="/portfolio/projects_in_work/:index" render={({match}) => {
                 const selectIndexProjectsInWork = match.params.index;
                 let index = 0;
                 switch(selectIndexProjectsInWork){
                    case "Metalltechnik_Kuhn_Konfigurator":
                      index = 0;
                      break;
                    case "Movement_Metropolitan":
                      index = 1;
                      break;
                    default:
                      return selectIndexProjectsInWork;
                 }
                 return <ProjectsInWorkProduct projects_in_work={projects_in_work[index]} />
               }} />


               <Route path="/portfolio/dci_projects/:index" render={({match}) => {
                 const selectIndexDci = match.params.index;
                 let index = 0;
                 switch(selectIndexDci){
                    case "Jewgeny's_Restaurant":
                      index = 0;
                      break;
                    case "to_do_list":
                      index = 1;
                      break;
                    case "Weather_App":
                      index = 2;
                      break;
                    case "Login-Area":
                      index = 3;
                      break;
                    case "Overferst&Kuhn":
                      index = 4;
                      break;
                    case "Evernote":
                      index = 5;
                      break;
                    default:
                      return selectIndexDci;
                 }
                 return <DciSingleProduct dciprojects={dciprojects[index]} />
               }} />




           </div>

        </div>
      </div>
     )
   }
}

export default Portfolio;
