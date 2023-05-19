import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.scss';


export default function NavItem({ to, name, active, setActiveLink, className }) {
  return (
    <NavLink
      className={`${active === name ? className : 'nav-link'}`}
      to={to}
      onClick={() => setActiveLink(name)}
    >
      {name}
    </NavLink>)

}
