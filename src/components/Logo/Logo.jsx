import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Logo.scss';

export default function Logo(props) {
  return <div className="logo" onClick={props.onClick}>
    <NavLink to="/">
      <FontAwesomeIcon icon={faPaw} className='logo'/>
      <span className='logo'>SavvySit</span>
    </NavLink>
  </div>;
}