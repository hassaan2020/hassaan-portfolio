import React, { Component } from "react";
import { useEffect } from "react";
import './About.scss';
import myImg2 from '../imgs/Hassaan2.jpg'
import Skills from "./Skills";
import Workhistory from "./Workhistory";
class About extends Component{
    state = {
        id :{
            Birthdate : "1 October 1998",
            Phone : "01558225726",
            City: "Suhag, Egypt",
            Degree: "Bachelor, Computer science",
            Email: "hassaan6666nabil@gmail.com",
            Freelance: "Available"
        },

    }
    Id = () =>{
        return(
            <div className="details">
                <p><b>Birthdate:</b> {this.state.id.Birthdate} </p>
                <p><b>Phone:</b> {this.state.id.Phone} </p>
                <p><b>City:</b> {this.state.id.City} </p>
                <p><b>Degree:</b> {this.state.id.Degree} </p>
                <p><b>Email:</b> {this.state.id.Email} </p>
                <p><b>Freelance:</b> {this.state.id.Freelance} </p>
            </div>
        );
    }

    
    render(){
        return (
            <div className="page">
                <div className="container he100VH">
                    <h1 className="h1A">About</h1>
                    <div className="aboutMe">
                        <div className="imgAbout">
                            <img src={myImg2}/>
                        </div>
                        <div className="idDet">
                            <h2>Front end developer</h2>
                            <p>Front-End Developer with solid experience in HTML, CSS, JavaScript, and React. Passionate about building responsive and user-friendly interfaces. Skilled in problem-solving, teamwork, and adapting to new technologies.</p>
                            {this.Id()}
                            <p>A front-end developer is a type of software developer who creates the user-facing side of websites and applications. They are well-versed in web development languages such as HTML, CSS, and JavaScript that are designed for coding dynamic, interactive user experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="mySkills" >
                    <div className="container">
                        <h1 className="h1S"> Skills</h1>
                            <Skills />
                    </div>
                </div>
                <div className="experience" >
                    <div className="container">
                        <h1 className="h1E"> Work History</h1>
                        <Workhistory />
                    </div>
                </div>
            </div>
        );
    }
}


export default About