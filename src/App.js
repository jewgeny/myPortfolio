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
import Contact from "./Contact";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      showMenu: false,
      isAboutMe: false,
      isHome: false,
      isKompotenzen: false,
      isContact: false
    }
  }

  handleClick() {
    this.setState({toggle: !this.state.toggle,
                   showMenu: !this.state.showMenu})
  }

  setIsAboutMe(){
    this.setState({
        isAboutMe: true,
        isHome: false,
        isKompotenzen: false
    })
  }

  setIsHome(){
    this.setState({
       isHome: true,
       isAboutMe: false,
       isKompotenzen: false
    })
  }

  setIsKompotenzen(){
    this.setState({
      isHome: false,
      isAboutMe: false,
      isKompotenzen: true
    })
  }

  setIsContact(){
    this.setState({
      isContact: true,
      isHome: false,
      isAboutMe: false,
      isKompotenzen: false
    })
  }


  render() {
    return (
     <BrowserRouter>
     <>

         <Route exact path="/" component={Welcome} />
         {this.state.isHome && <Redirect to="/" />}
         <Cup />
          <Menu    toggle={this.state.toggle}
                   showMenu={this.state.showMenu}
                   isAboutMe={this.state.isAboutMe}
                   setIsAboutMe={this.setIsAboutMe.bind(this)}
                   handleClick={this.handleClick.bind(this)}
                   setIsHome={this.handleClick.bind(this)}
                   setIsKompotenzen={this.setIsKompotenzen.bind(this)}
                   setIsContact={this.setIsContact.bind(this)}

          />



         <Switch>

           <Route path="/aboutMe" render={() => <AboutMe />} />
           {this.state.isAboutMe && <Redirect to="/aboutMe" />}
           <Route path="/kompotenzen" render={()=> <Kompotenzen />} />
           {this.state.isKompotenzen && <Redirect to="/kompotenzen" />}
           <Route path="/contact" render={() => <Contact />} />
           {this.state.isContact && <Redirect to="/contact" />}

         </Switch>

    </>
     </BrowserRouter>
    );
  }
}

export default App;
