import React, {Component} from "react";
import "./css/portfolio.css";
import OwnProjects from "./Own_Projects";
import DciProjects from "./Dci_Projects";
import {Route} from "react-router-dom";
import PortfolioMenu from "./Menu/Portfolio_Menu";
import OwnSingleProduct from "./Own_Project_Product";
import DciSingleProduct from "./Dci_Project_Product";
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
              <PortfolioMenu />
              <Route exact path="/portfolio" render={() => <DciProjects />} />
              <Route exact path="/portfolio/own_projects" render={() => <OwnProjects />} />


              <Route  path="/portfolio/own_projects/:index" render={({match}) => {
               const selectIndexOwn = match.params.index;
               return <OwnSingleProduct ownprojects={ownprojects[selectIndexOwn]}  />
               }} />

               <Route path="/portfolio/dci_projects/:index" render={({match}) => {
                 const selectIndexDci = match.params.index;
                 return <DciSingleProduct dciprojects={dciprojects[selectIndexDci]} />
               }} />




           </div>

        </div>
      </div>
     )
   }
}

export default Portfolio;
