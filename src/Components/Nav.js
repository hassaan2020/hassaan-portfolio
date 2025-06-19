import react, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import "./Nav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faUser, faTrophy, faHandshake, faEnvelope} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  render(){
    return (
        <div className="bodyNav">
            <div className="nav">
                    <NavLink to='/' className="i">
                        <FontAwesomeIcon className="ic" icon={faHouse} />
                    </NavLink>

                    <NavLink to='/about' className="i">
                        <FontAwesomeIcon className="ic" icon={faUser} />
                    </NavLink>
                    <NavLink to='/services' className="i">
                        <FontAwesomeIcon className="ic" icon={faHandshake} />
                    </NavLink>

                    <NavLink to='/works' className="i">
                        <FontAwesomeIcon className="ic" icon={faTrophy} />
                    </NavLink>

                    <NavLink to='/contactme' className="i">
                        <FontAwesomeIcon className="ic" icon={faEnvelope} />
                    </NavLink>                
            </div>
        </div>
      
    );
  }
  
}

export default Nav;
