import React, {useState} from 'react';
import NavItem from '@components/NavItem/NavItem.jsx';
import NavLinks from "@components/NavItem/sideBarLinks.json";
import '@components/SideBar/SideBar.scss'
export default function SideBar(){
  const [ActiveLink, setActiveLink] = useState('overview')
  return (
      <nav className='sideBar'>


        {NavLinks.map((link, index) => (
            <NavItem
                className='sideBar__link--active'
                key={index}
                to={link.path}
                name={link.name}
                active={ActiveLink}
                setActiveLink={setActiveLink}
            />
        ))}
      </nav>
  )
}