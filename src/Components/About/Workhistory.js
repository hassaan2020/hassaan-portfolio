import { Component } from "react";

class Workhistory extends Component{
    state = {
        history : [
            { work: "Data Analyst | IT Specialist ",
              company : "ABC - Garden City",
              date : "( 5/2026 – Present )",
              exper: [
                    "Data Analysis & Dashboards: Developed dynamic expense analysis reports and interactive dashboards using Power BI and Excel to track operational spending.",
                    "Cost Optimization: Identified spending patterns and financial trends, delivering actionable insights to support strategic management decisions. ",
                    "Data Management: Processed, cleaned, and structured raw financial datasets to ensure high accuracy in reporting and visualization.",
                    "KPIs & Automation: Designed key performance indicator (KPI) reports and automated monthly expense summaries, reducing manual reporting effort."] },
            { work: "IT SPECIALIST",
              company : "Life Capital Group",
              date : "( 12/2025 – 5/2026 )",
              exper: [
                    "Managed IT support and operations for 20+ pharmacies and hospitals.",
                    "Installed and maintained CCTV systems, NVR/DVR devices, and healthcare applications. ",
                    "Provided technical support for hardware, software, networks, POS systems, and printers.",
                    "Configured basic networks (IP, Gateway, DNS), resolved connectivity issues, and supported remote access tools."] },
            { work: "IT SPECIALIST",
              company : "ABC - Garden City",
              date : "( 02/2025 – 12/2025 )",
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

            { work: "Administrative Assistant",
              company : "Contact cars ",
              date : "(  09/2022 – 05/2024 )",
              exper: [
                    "Entered and maintained accurate client records in the company database.",
                    "Monitored employee attendance and prepared daily and weekly reports.",
                    "Organized and maintained office files, documents, and records.",
                    "Coordinated internal communication between departments.",
                    "Assisted in scheduling meetings and managing calendars.",
                    "Supported daily administrative operations to ensure smooth workflow.",
                    "Handled basic office tasks such as data entry, reporting, and documentation."] },
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
