import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {FaTh, FaChevronRight, FaChevronLeft} from "react-icons/fa";

class Dci_Single_Product extends Component{
    constructor(props){
      super(props);
      this.state = {counter: -2}
    }

    incArrow(){
      let count = this.state.counter;
      let images = this.props.dciprojects.images;
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
      let images = this.props.dciprojects.images;
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
               {this.props.dciprojects.images.map((elem, index) => {
                   return <img key={index} src={elem} style={{transform: `translate(${this.state.counter * -100}%,0)`,  transition: 'transform .5s',}} className="imgPortfolio" />
                 })
                }
              </div>

             <FaChevronRight onClick={this.incArrow.bind(this)} className="arrow" />
          </span>

          <div className="d-flex flex-column wrapperProjekt">
             <h3 className="h3SingleProduct">Über das Projekt</h3>
              <hr className="hrProjects"/>
              <ul className="text-white my-3">
                  <li className="p-1"><b>Projektname: </b>{this.props.dciprojects.titel}</li>
                  <li className="p-1"><b>Aufgaben: </b> {this.props.dciprojects.tasks}</li>
                  <li className="p-1"><b>Tools: </b> {this.props.dciprojects.tools}</li>
                  {this.props.dciprojects.url.length > 0 &&
                        <li className="p-1"><b>Website-Link: </b>
                           <a className="link" target="_blank" href={"http://"+this.props.dciprojects.url}>
                             {this.props.dciprojects.url}
                            </a>
                        </li>
                  }
              </ul>
              <NavLink to="/portfolio" className="backToSelection">zurück zur Auswahl <FaTh className="mb-1" /></NavLink>

          </div>
       </div>

     )
   }
}

export default Dci_Single_Product;
