 import React, { Component } from "react";
import "./ContactMe.scss"

class ContactMe extends Component{
    state = {
        name : '',
        email: '',
        phone: '',
        msg: ''
    }
    handleChange = (e) => {
                this.setState({[e.target.name] : e.target.value});
            };
    handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, phone, msg} = this.state;
        const phNum = '201558225726';
        const whMsg = `${name} %0A${email} %0A${phone} %0A ${msg}`;
        const whURL = `https://api.whatsapp.com/send?phone=${phNum}&text=${whMsg}`;

        window.open(whURL, '_blank');
    }
    render(){
        
        return (
            <div className="page">
                <div className="container">
                    <h1 className="h1C">Contact Me</h1>
                    <div className="contact">
                        <form onSubmit={this.handleSubmit}> 
                            <div className="form">
                                <div>
                                    <label>Name</label> 
                                    <input 
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label>E-mail</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label>Phone</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            
                            <label>Message</label>
                            <textarea 
                                name="msg"
                                value={this.state.msg}
                                onChange={this.handleChange}
                                rows="15"
                                required
                            />
                            <br />
                            <button type="submit">SEND FORM</button>

                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ContactMe;
