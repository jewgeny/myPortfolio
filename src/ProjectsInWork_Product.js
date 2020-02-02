import React, {Component} from "react";
import {FaSignInAlt, FaChevronRight, FaChevronLeft} from "react-icons/fa";

class ProjectsInWorkProduct extends Component{
    constructor(props){
      super(props);
      this.state = {counter: -2}
    }

    incArrow(){
      let count = this.state.counter;
      let images = this.props.projects_in_work.images;
      count++;
        if (count >= images.length-2) {
          count = -2;
        }

      this.setState({
        counter: count
      })
    }

    decArrow(){
      let count = this.state.counter;
      let images = this.props.ownprojects.images;
       count--;
       console.log(count);
       if (count < -2) {
        count = images.length-3 ;
       }

      this.setState({
        counter: count
      })
    }


   render(){

     return(

       <div className="wrapperSingleProduct my-5">
           <span className="d-flex justify-content-center align-items-center px-2">
             <FaChevronLeft onClick={this.decArrow.bind(this)} className="arrow" />
             <div className="wrapperCarusal d-flex justify-content-center align-items-center">
               {this.props.projects_in_work.images.map((elem, index) => {
                   return <img key={index} src={elem} alt={elem} style={{transform: `translate(${this.state.counter * -100}%,0)`,  transition: 'transform .5s',}} className="imgPortfolio" />
                 })
                }
              </div>

             <FaChevronRight onClick={this.incArrow.bind(this)} className="arrow" />
          </span>

          <div className="d-flex flex-column wrapperProjekt">
             <h3 className="h3SingleProduct">Über das Projekt</h3>
              <hr className="hrProjects"/>
              <ul className="text-white my-3">
                  <li className="p-1"><b>Projektname: </b>{this.props.projects_in_work.titel}</li>
                  <li className="p-1"><b>Branche: </b> {this.props.projects_in_work.branche}</li>
                  <li className="p-1"><b>Aufgaben: </b> {this.props.projects_in_work.tasks}</li>
                  <li className="p-1"><b>Tools: </b> {this.props.projects_in_work.tools}</li>
                  {this.props.projects_in_work.url.length > 0 &&
                        <li className="p-1"><b>Website-Link: </b>
                           <a className="link" target="_blank" rel="noopener noreferrer" href={"http://"+this.props.projects_in_work.url}>
                             {this.props.projects_in_work.url}
                            </a>
                        </li>
                  }
              </ul>
              {this.props.projects_in_work.url.length > 0 &&
                 <a target="_blank" rel="noopener noreferrer" href={"http://"+this.props.projects_in_work.url} className="backToSelection">zu der Website<FaSignInAlt className="iconToWebsite" /></a>
              }
          </div>
       </div>

     )
   }
}

export default ProjectsInWorkProduct;
