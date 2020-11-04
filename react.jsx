import React from 'react';
import ReactDOM from 'react-dom';

import jirafa from "../../assets/pictures/jirafa.png";
import leon from "../../assets/pictures/leon.png";
import mono from "../../assets/pictures/mono.png";
import pinguino from "../../assets/pictures/pinguino.png";

import "./About.css";

import { Layout  } from 'antd'

class About extends React.Component{
    constructor() {
        super();
        this.state = {
            controller: "0px",
            slider: "translateX(0)"
        }
      }

    changeSlider1 = (height, translate) => {
        this.setState({ controller: "0px", slider: "translateX(0)"})
    }

    changeSlider2 = (height, translate) => {
        this.setState({ controller: "80px", slider: "translateX(-25%)"})
    }

    changeSlider3 = (height, translate) => {
        this.setState({ controller: "160px", slider: "translateX(-50%)"})
    }

    changeSlider4 = (height, translate) => {
        this.setState({ controller: "240px", slider: "translateX(-75%)"})
    }
    

    render() {
        return (
            <div>
                <div className="site-layout-background" style={{ padding: 24, overflow: "hidden" }}>
                    <div className="msg-container">
                        <div id="slider" style={{ transform: this.state.slider }}>
                            <div className="msg-col">
                                <div className="msg-container-inline">
                                    <div style={{ width: "600px"}}>
                                        <h1>Misión</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga totam quae dolorum ut laborum, corporis quasi omnis minima ad nulla ullam explicabo officiis delectus eum harum inventore et perferendis?</p>
                                    </div>
                                    <img src={jirafa}/>
                                </div>
                            </div>
                            <div className="msg-col">
                                <div className="msg-container-inline">
                                    <div style={{ width: "600px"}}>
                                        <h1>Visión</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga totam quae dolorum ut laborum, corporis quasi omnis minima ad nulla ullam explicabo officiis delectus eum harum inventore et perferendis?</p>
                                    </div>
                                    <img src={leon}/>
                                </div>
                            </div>
                            <div className="msg-col">
                                <div className="msg-container-inline">
                                    <div style={{ width: "600px"}}>
                                        <h1>Valores</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga totam quae dolorum ut laborum, corporis quasi omnis minima ad nulla ullam explicabo officiis delectus eum harum inventore et perferendis?</p>
                                    </div>
                                    <img src={mono}/>
                                </div>
                            </div>
                            <div className="msg-col">
                                <div className="msg-container-inline">
                                    <div style={{ width: "600px"}}>
                                        <h1>Historia</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga totam quae dolorum ut laborum, corporis quasi omnis minima ad nulla ullam explicabo officiis delectus eum harum inventore et perferendis?</p>
                                    </div>
                                    <img src={pinguino}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controller">
                    <div id="line1" onClick = {this.changeSlider1}></div>
                    <div id="line2" onClick = {this.changeSlider2}></div>
                    <div id="line3" onClick = {this.changeSlider3}></div>
                    <div id="line4" onClick = {this.changeSlider4}></div>
                    <div id="active" style = {{top: this.state.controller}}></div>
                </div>
            </div>
            
        )
    }
}

export default About;