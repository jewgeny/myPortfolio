import React, { Component } from 'react';
import './css/body.css';
import "./css/logo.css";
import './loader.js';
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Menu from "./Menu/Menu";
import Cup from "./Cup";
import AboutMe from "./AboutMe";
import Kompetenzen from "./Kompetenzen";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      showMenu: false,
    }
  }

    handleClick() {
      this.setState({toggle: !this.state.toggle,
                   showMenu: !this.state.showMenu});
  }


  render() {
    return (
     <BrowserRouter>
     <>

         <Route exact path="/" component={Welcome} />

         <Cup />
          <Menu    toggle={this.state.toggle}
                   showMenu={this.state.showMenu}
                   handleClick={this.handleClick.bind(this)}
          />
           <Route path="/aboutMe" render={() => <AboutMe />} />
           <Route path="/kompetenzen" render={()=> <Kompetenzen />} />
           <Route path="/portfolio" render={() => <Portfolio />} />
           <Route path="/contact" render={() => <Contact />} />



    </>
     </BrowserRouter>
    );
  }
}

export default App;
