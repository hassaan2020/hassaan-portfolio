 import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Work.scss"
import p1 from '../imgs/p1.png'
import p2 from '../imgs/p2.png'
import p3 from '../imgs/p3.png'
import p4 from '../imgs/p4.png'
import p5 from '../imgs/p5.png'
import p6 from '../imgs/p6.png'
// import p7 from '../imgs/p7.png'
// import p8 from '../imgs/p8.png'
// import p9 from '../imgs/p9.png'
// import p10 from '../imgs/p10.png'
// import p11 from '../imgs/p11.png'
// import p12 from '../imgs/p12.png'
import p13 from '../imgs/pp13.png'
import p14 from '../imgs/pp14.png'
import p15 from '../imgs/pp15.png'

class Works extends Component{
    state = {
        projects : [
            {name:"Chinook Dashboard",
            descr: "A analytics dashboard visualizing digital media sales, genre trends, customer demographics, and regional performance.", 
            lang: ["Power BI", "DAX", "SQL", "Data Warehouse"], 
            link: "https://github.com/hassaan2020/Chinook-DDashboard/blob/main/Chinook%20Dashboard.pdf", 
            img: p15 },
            {name:"Premier League 2020-2021 Dashboard",
            descr: "A sports analytics dashboard evaluating player statistics, team standings, match outcomes, and performance metrics.", 
            lang: ["Power BI", "DAX"], 
            link: "https://github.com/hassaan2020/Premier-League-Dashboard/blob/main/Premier%20League20_21.pdf", 
            img: p14 },
            {name:"World Wide Importers (WWI) Dashboard",
            descr: "A comprehensive business dashboard analyzing wholesale supply chain efficiency, inventory flow, and revenue distribution.", 
            lang: ["Power BI", "DAX"], 
            link: "https://github.com/hassaan2020/WWI-Dashboard/blob/main/WWI.pdf", 
            img: p13 },
         
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
                    <img src={pro.img} alt=""/>
                    <h1 title={pro.name}>{pro.name}</h1>
                    <p title={pro.descr}>{pro.descr}</p>
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
