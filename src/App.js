import React, { Component } from 'react';
import logo from './logo.svg';
import './css/body.css';
import './loader.js';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Welcome from "./Welcome";
import Menu from "./Menu/Menu";
import Cup from "./Cup";
import AboutMe from "./AboutMe";
import Kompotenzen from "./Kompotenzen";
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
           <Route path="/kompotenzen" render={()=> <Kompotenzen />} />
           <Route path="/portfolio" render={() => <Portfolio />} />
           <Route path="/contact" render={() => <Contact />} />



    </>
     </BrowserRouter>
    );
  }
}

export default App;
