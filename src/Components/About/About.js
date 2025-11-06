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
                            <h2>Data Analyst | Creative Writer & Designer</h2>
                            <p>I’m a Data Analyst, Creative Writer, and Web Designer who combines analytical thinking with creative design, I turn data into clear insights, craft clean and engaging websites, and create meaningful content that helps brands stand out with purpose and simplicity.</p>
                            {this.Id()}
                            <p>This field combines data analysis, creative writing, and web design to connect logic with creativity, It focuses on turning data into insights, crafting clear content, and designing user-friendly websites that deliver both meaning and impact, It’s where numbers meet storytelling to create smart, engaging digital experiences.</p>
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
