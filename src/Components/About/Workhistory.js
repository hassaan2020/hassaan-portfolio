import { Component } from "react";

class Workhistory extends Component{
    state = {
        history : [
            { work: "IT SPECIALIST",
              company : "ABC Company for Investment and Construction",
              date : "( 02/2025 - Current )",
              exper: [
                    "Install, configure and maintain system and PCs.",
                    "Maintain IT infrastructure for Cameras, Printers, PCs, LAN-Network and Routers & Switches. ",
                    "Responsible for new hardware and software maintenance."] },

            { work: "IT SPECIALIST",
              company : "Heraa Company for Investment and Construction",
              date : " (06/2024 - 01/2025) ",
              exper: [
                    "Install, configure and maintain system and PCs. ",
                    "Maintain IT infrastructure for Cameras, Printers, PCs, LAN-Network and Routers & Switches. ",
                    "Responsible for new hardware and software maintenance. "] },

            { work: "Library Owner & Content Designer ",
              company : "Alebdaa Library ",
              date : "(  10/2022 – 02/2025 )",
              exper: [
                    "Designed study notes, worksheets, and customized documents using Word and Excel.  ",
                    "Created social media designs using Photoshop. ",
                    "Delivered tailored services for students and teachers"] },

            { work: "IT HELP DESK",
              company : "Contact cars ",
              date : "(  09/2022 – 05/2024 )",
              exper: [
                    "Respond to IT support tickets and inquiries from employees, diagnosing technical issues in a timely manner.",
                    "Provide remote assistance and troubleshooting for customer problems. ",
                    "Install, configure, and maintain computer systems, software, and peripheral devices.",
                    "Collaborate with other IT team members to escalate and resolve complex issues."] },
            ]
    }
    render(){
        const {history} = this.state;
        const myHistory = history.map(hist => {
            
            return(
                <div className="company">
                    <h2>{hist.work}</h2>
                    <h4>{hist.company} <br/> {hist.date} </h4>
                    <ul>
                        {hist.exper.map(ex => {
                            return(
                                <li>- {ex}</li> 
                            );
                        })}
                                                   
                    </ul>
                </div>
            );
        })
        return(
            <div className="history">
                {myHistory}
            </div>
        );
    }
}


export default Workhistory;