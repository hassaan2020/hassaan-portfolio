 import React, { Component } from "react";
import "./Services.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faPalette, faGlobe, faRoute ,faPrint, faFileExcel, faPersonChalkboard, faPhotoFilm, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';



class Services extends Component{
    state ={
        services : [
            {   icon : faCode,
                name :"Front-End Web Development", 
                des : "Building responsive and dynamic websites using HTML, CSS, JavaScript, and React.js, with a focus on user experience and clean code."},

            {
                icon : faPalette, 
                name :"UI Design & Web Styling", 
                des : "Designing and styling user interfaces using modern CSS frameworks (Tailwind, Bootstrap), with smooth transitions and animations."},
            {
                icon : faGlobe, 
                name :"IT Support & Tech Solutions", 
                des : "Providing general IT support, troubleshooting, software setup, and helping individuals or businesses with tech-related tasks."},
            {
                icon : faRoute, 
                name :"Custom Tech & Design Solutions", 
                des : "Offering tailored digital solutions combining design, development, and IT knowledge to meet specific client needs."},
            {
                icon : faPrint, 
                name :" Educational Document Formatting", 
                des : "Creating and formatting high-quality study materials, notes, and worksheets using Microsoft Word, ready for print and distribution."},
            {
                icon : faFileExcel, 
                name :"Excel Sheet Design & Data Handling", 
                des : "Designing custom Excel sheets for data entry, tracking, calculations, and printing purposes with formulas and formatting."},
            {
                icon : faPersonChalkboard, 
                name :"PowerPoint Presentation Design", 
                des : "Developing clean and impactful PowerPoint presentations for educational or professional use."},
            {
                icon : faPhotoFilm, 
                name :"Social Media Graphic Design", 
                des : "Designing professional and engaging social media posts using Adobe Photoshop for marketing and announcements."},
            {
                icon : faWandMagicSparkles, 
                name :"Photo Editing & Print Design", 
                des : "Retouching images, designing posters, flyers, invitations, and preparing print-ready files with proper settings."},
        ]
    }
    render(){
        const {services} = this.state;
        const myServs = services.map(ser => {
            return(
                <div className="servCh">
                    <FontAwesomeIcon className="icSer" icon={ser.icon} />
                    <h3>{ser.name}</h3>
                    <p>{ser.des}</p>
                </div>
            );
        })
        return (
            <div className="page">
                <div className="container">
                    <h1 className="h1Ser">Services</h1>
                    <p className="ps">Building responsive and user-friendly interfaces. Skilled in problem-solving, teamwork, and adapting to new technologies.</p>
                    <div className="services">
                        {myServs}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;