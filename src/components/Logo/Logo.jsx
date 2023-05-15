import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Logo(props) {
  return <div className="" onClick={props.onClick}>
    <NavLink to="/">
      <FontAwesomeIcon icon={faPaw} style={{color: "#3367c1",}}/>
      <span>SavvySit</span>
    </NavLink>
  </div>;
}