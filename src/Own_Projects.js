import React, {Component} from "react";
import {ownprojects} from "./data/own_projects";
import {NavLink} from "react-router-dom";


class OwnProjects extends Component{
   render(){
     return(
      <>

           <div className="mt-5 d-flex flex-wrap justify-content-start containerProjects">
              {ownprojects.map((elem, index) => {
                  return(

                      <NavLink to={"/portfolio/own_projects/" + index} key={index} className="">
                          <img src={elem.img} alt={elem.titel} className="m-2 imgPortfolio" />
                      </NavLink>

                  )
              })}
            </div>

       </>
     )
   }
}

export default OwnProjects;
