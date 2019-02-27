import React, {Component} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import $ from 'jquery';
import {} from "react-icons/fa";
import "./css/portfolio.css";
import {projects} from "./projects";
import {NavLink} from "react-router-dom";



class Portfolio extends Component{

   render(){

     return(
      <div className="wrapperPortfolio wrapperUp">
        <div className="my-4">
           <h2 className="text-center">Portfolio</h2>
           <hr className="hrKompotenzen"/>
           <div className="my-5 d-flex flex-column justify-content-center">
              <span className="d-flex justify-content-center buttonWrapper">
                 <button ident="all" className="mx-3 buttonProjekte">Alle Projekte</button>
                 <button ident="dci" className="mx-3 buttonProjekte">DCI Projekte</button>
                 <button ident="own" className="mx-3 buttonProjekte">Eigene Projekte</button>
              </span>
            <div className=" mt-5 d-flex flex-wrap justify-content-center wrapPortfolio">
               {projects.map((elem, index) => {
                   return(
                          <div  key={index} className="d-flex flex-column m-2">
                            <NavLink className="text-center" to={elem.url}>
                              <img src={elem.img} className="card-img-top imgPortfolio" />
                            </NavLink>
                           </div>
                   )
               })}
             </div>

           </div>

        </div>
      </div>
     )
   }
}

export default Portfolio;
