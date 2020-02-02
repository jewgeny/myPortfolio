import React, {Component} from "react";
import {projects_in_work} from "./data/projects_in_work";
import {NavLink} from "react-router-dom";


class ProjectsInWork extends Component{
   render(){
     return(
      <>
           <div className="mt-5 d-flex flex-wrap justify-content-center containerProjects">
              {projects_in_work.map((elem, index) => {
                  return(
                      <NavLink to={"/portfolio/projects_in_work/" + elem.titel_url} key={index} className="">
                          <img src={elem.img} alt={elem.titel} className="m-2 imgPortfolio" />
                      </NavLink>
                  )
              })}
            </div>

       </>
     )
   }
}

export default ProjectsInWork;
