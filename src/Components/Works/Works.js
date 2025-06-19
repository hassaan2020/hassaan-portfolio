 import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Work.scss"
import p1 from '../imgs/p1.png'
import p2 from '../imgs/p2.png'
import p3 from '../imgs/p3.png'
import p4 from '../imgs/p4.png'
import p5 from '../imgs/p5.png'
import p6 from '../imgs/p6.png'

class Works extends Component{
    state = {
        projects : [
            {name:"Simple Portfolio 1",
            descr: "A basic personal website showcasing my skills as a frontend developer. ", 
            lang: ["React", "JavaScript", "SASS"], 
            link: "/", 
            img: p1 },
            {name:"Simple Portfolio 2",
            descr: "A basic personal website showcasing my skills as a frontend developer. ", 
            lang: ["JavaScript", "SASS"], 
            link: "https://hassaan2020.github.io/portfolio/home.html", 
            img: p2 },
            {name:"Educational Courses",
            descr: "A platform for showcasing online courses with detailed course pages.  ", 
            lang: ["React", "JavaScript"], 
            link: "https://hassaan2020.github.io/Infinity-website/#/", 
            img: p3 },
            {name:"Simple Portfolio 3",
            descr: "A basic personal website showcasing my skills as a frontend developer. ", 
            lang: ["React", "JavaScript"], 
            link: "https://hassaan2020.github.io/Profile/#/", 
            img: p4 },
            {name:" Online Bookstore",
            descr: "A frontend for an e-commerce bookstore where users can browse and filter books. ", 
            lang: ["JavaScript"], 
            link: "https://hassaan2020.github.io/BS/", 
            img: p5 },
            {name:"Event Planning Team",
            descr: " An event planning team featuring service sections, a photo gallery, and customer testimonials.  ", 
            lang: ["JavaScript"], 
            link: "https://hassaan2020.github.io/NazamlyTeam/", 
            img: p6 },
        ]
    }
    render(){
        const {projects} = this.state;
        const myProjects = projects.map(pro => {
            return(
                <div className="proj">
                    <img src={pro.img}/>
                    <h1>{pro.name}</h1>
                    <p>{pro.descr}</p>
                    {pro.lang.map(ln => {
                        return(
                            <span>{ln}</span>
                        );
                    })}
                    <br />
                    <NavLink to={pro.link}><button>Live Demo</button></NavLink> 
                </div>
            );
        })
        return (
            <div className="page">
                <div className="container">
                    <h1 className="h1W">My Simple Projects</h1>
                    <div className="dasboard">
                        {myProjects}
                    </div>
                </div>
            </div>
        );
    }
}

export default Works;