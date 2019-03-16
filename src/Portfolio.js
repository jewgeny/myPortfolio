import React, {Component} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import $ from 'jquery';
import "./css/portfolio.css";
import OwnProjects from "./Own_Projects";
import DciProjects from "./Dci_Projects";
import {Route} from "react-router-dom";
import Portfolio_Menu from "./Menu/Portfolio_Menu";
import Own_Single_Product from "./Own_Project_Product";
import Dci_Single_Product from "./Dci_Project_Product";
import {ownprojects} from "./data/own_projects";
import {dciprojects} from "./data/dci_projects";



class Portfolio extends Component{

   render(){

     return(
      <div className="wrapperPortfolio wrapperUp">
        <div className="my-4">
           <h2 className="text-center">Portfolio</h2>
           <hr className="hrKompotenzen"/>
           <div className="my-5 d-flex flex-column justify-content-center">
              <Portfolio_Menu />
              <Route exact path="/portfolio" render={() => <DciProjects />} />
              <Route exact path="/portfolio/own_projects" render={() => <OwnProjects />} />


              <Route  path="/portfolio/own_projects/:index" render={({match}) => {
               const selectIndexOwn = match.params.index;
               return <Own_Single_Product ownprojects={ownprojects[selectIndexOwn]}  />
               }} />

               <Route path="/portfolio/dci_projects/:index" render={({match}) => {
                 const selectIndexDci = match.params.index;
                 return <Dci_Single_Product dciprojects={dciprojects[selectIndexDci]} />
               }} />




           </div>

        </div>
      </div>
     )
   }
}

export default Portfolio;
