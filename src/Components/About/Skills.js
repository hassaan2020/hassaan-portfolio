import React, { Component } from 'react';
class Skills extends Component{
    state = { 
    skills : [
        {name : "HTML", level: 90},
        {name : "CSS", level: 90},
        {name : "JavaScript", level: 85},
        {name : "ReactJS", level: 90},
        {name : "Bootstrap", level: 85},
        {name : "Tailwind", level: 75},
        {name : "UI/UX Design", level: 80},
        {name : "Java", level: 70},
        {name : "C++", level: 65},
        {name : "C#", level: 70},
        {name : "CCNA", level: 70},
        {name : "MCSA", level: 70},
        {name : "Python", level: 85},
        {name : "Data Analysis", level: 80},
    ]
}
    render(){
        const {skills} = this.state;
        const mySkills = skills.map(skill => {
            return(
                <div className="progressBars">
                    <h4>{skill.name}</h4>
                    <div className="prec100">
                        <div className="rate" style={{ width: `${skill.level}%` }}></div>
                    </div>
                </div>
            );
        })
        return(
            <div className="skills">
                {mySkills}
            </div>
                
            );
    }
}



 
export default Skills;
