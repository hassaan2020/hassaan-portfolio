import { Component } from "react";
class Workhistory extends Component{
    state = {
        history : [
            { work: "Data Analyst | IT Specialist",
              company : "ABC - Garden City",
              date : "( 05/2026 – Present )",
              exper: [
                    "Built interactive Power BI and Excel dashboards to track operational spending and dynamic expense patterns.",
                    "Cleaned raw financial datasets and automated monthly KPI summaries, significantly reducing manual reporting.",
                    "Analyzed spending trends to deliver actionable insights, directly supporting strategic cost optimization decisions."]},
              { work: "IT SPECIALIST",
              company : "Life Capital Group",
              date : "( 12/2025 – 05/2026 )", 
              exper: [
                    "Managed IT support and operations for 20+ pharmacies and hospitals.",
                    "Installed and maintained CCTV systems, NVR/DVR devices, and healthcare applications. ",
                    "Provided technical support for hardware, software, networks, POS systems, and printers.",
                    "Configured basic networks (IP, Gateway, DNS), resolved connectivity issues, and supported remote access tools."]},
            { work: "IT SPECIALIST",
              company : "ABC - Garden City",
              date : "( 02/2025 – 12/2025 )",
              exper: [
                    "Install, configure and maintain system and PCs.",
                    "Maintain IT infrastructure for Cameras, Printers, PCs, LAN-Network and Routers & Switches. ",
                    "Responsible for new hardware and software maintenance."]},
            { work: "IT SPECIALIST",
              company : "Heraa Company for Investment and Construction",
              date : " (06/2024 - 01/2025) ",
              exper: [
                    "Install, configure and maintain system and PCs. ",
                    "Maintain IT infrastructure for Cameras, Printers, PCs, LAN-Network and Routers & Switches.",
                    "Responsible for new hardware and software maintenance. "]},
            { work: "Administrative Assistant",
              company : "Contact cars",
              date : "(  09/2022 – 05/2024 )",
              exper: [
                    "Maintained accurate client records, database integrity, and organized office documentation.",
                    "Monitored employee attendance and generated daily/weekly administrative workflow reports.",
                    "Facilitated cross-departmental communication and managed meeting schedules and calendars."]},
            { work: "Library Owner & Content Designer ",
              company : "Alebdaa Library",
              date : "(  10/2022 – 02/2025 )",
              exper: [
                    "Designed study notes, worksheets, and customized documents using Word and Excel.",
                    "Created social media designs using Photoshop. ",
                    "Delivered tailored services for students and teachers"]},
            ]
    }
    render(){
        const {history} = this.state;
        const myHistory = history.map(hist => {
            
            return(
                <div className="company">
                    <h2>{hist.work}</h2>
                    <h4>{hist.company} " - " {hist.date} </h4>
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
