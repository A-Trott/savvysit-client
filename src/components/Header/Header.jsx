import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from '@components/NavItem/NavItem.jsx'
import NavLinks from '@components/NavItem/headerLinks.json'

export default function Header() {

  const [ActiveLink, setActiveLink] = useState('warehouse')
  console.log(NavLinks)
  return (
      <header className=''>
        <nav className=''>
          <div className='flex justify-between'>
            <NavLink to='/'>
              {/*<img*/}
              {/*    onClick={() => setActiveLink('warehouse')}*/}
              {/*    src={logo}*/}
              {/*    alt='instock-logo'*/}
              {/*/>*/}
            </NavLink>
          </div>
          <div className=''>
            {NavLinks.map((link, index) => (
                <NavItem
                    key={index}
                    to={link.path}
                    name={link.name}
                    active={ActiveLink}
                    setActiveLink={setActiveLink}
                />
            ))}
          </div>
        </nav>
      </header>
  )
}