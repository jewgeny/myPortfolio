import React, {Component} from "react";
import {Motion, spring, presets} from 'react-motion';
import NavList from "./NavList";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "../css/navbar.css";


class Menu extends Component {



  render() {
    const style = {
      overflow: 'visible',
      cursor: 'pointer',
      color: "#909800",
      fontSize: "40px",
      margin: "2vw",
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    }

    return (
              <div className="d-flex float-right">
                  <svg
                    viewBox="0 0 96 96"
                    height="1.2em"
                    onClick={this.props.handleClick}
                    style={style}
                    className="menuMobilIcon position"
                  >
                    <Motion
                      style={{
                        x: spring(this.props.toggle ? 1 : 0, presets.wobbly ),
                        y: spring(this.props.toggle ? 0: 1, presets.wobbly ),
                      }}
                    >
                      {({ x, y }) =>
                        <g
                          id="navicon"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="12"
                         
                         >
                          <line
                            transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                            x1="7" y1="26" x2="89" y2="26"
                           />
                          <line
                            transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                            x1="7" y1="70" x2="89" y2="70"
                           />
                          <line
                            transform={`translate(${x * -96})`}
                            opacity={y}
                            x1="7" y1="48" x2="89" y2="48"
                           />
                        </g>
                      }
                    </Motion>
                  </svg>

                      <TransitionGroup component={null}>
                            {this.props.showMenu && (
                               <CSSTransition timeout={200} classNames="">
                                 <NavList handleClick={this.props.handleClick} />

                               </CSSTransition>
                           )}
                      </TransitionGroup>
              </div>
    )
  }
}

export default Menu;
