
import React, { Component } from "react";
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faUpwork, faBehance} from '@fortawesome/free-brands-svg-icons'
import log from '../imgs/HassaanLogo.png'
import myImg from '../imgs/Hassaan3.png'
import { NavLink } from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div className="page">
                <div className="container">
                    <div className="logo">
                        <img  src={log} />
                    </div>
                    <div className="detailsP">
                        <div className="detailsCh">
                            <h3>Hello, I'm</h3>
                            <h1>Hassaan Nabil</h1>
                            <h3>Data Analyst | Creative Writer & Designer</h3>
                            <br/>
                            <NavLink to="/ContactMe">
                                <button>Contact Me</button>
                            </NavLink>
                            <br/><br/>
                            <div className="social">
                                <NavLink to="https://www.linkedin.com/in/hassaan-nabil-5b95a31a4/" className="icn">
                                    <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
                                </NavLink>
                                <NavLink to="https://github.com/hassaan2020" className="icn">
                                    <FontAwesomeIcon className="socialIcon" icon={faGithub} />
                                </NavLink>
                                <NavLink to="https://upwork.com/freelancers/hassaannabil2" className="icn">
                                    <FontAwesomeIcon className="socialIcon" icon={faUpwork} />
                                </NavLink>
                                <NavLink to="https://www.behance.net/hassaannabil" className="icn">
                                    <FontAwesomeIcon className="socialIcon" icon={faBehance} />
                                </NavLink>
                            </div>
                        </div>
                        <div className="my-Image1">
                            <img  src={myImg} />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
export default Home;
