import React, {Component} from "react";
import {dciprojects} from "./data/dci_projects";
import {NavLink} from "react-router-dom";


class DciProjects extends Component{
   render(){
     return(
      <>
           <div className="mt-5 d-flex flex-wrap justify-content-start containerProjects">
              {dciprojects.map((elem, index) => {
                  return(

                      <NavLink to={"/portfolio/dci_projects/" + index} key={index} className="">
                          <img src={elem.img} alt={elem.titel} className="m-2 imgPortfolio" />
                      </NavLink>

                  )
              })}
            </div>

       </>
     )
   }
}

export default DciProjects;
