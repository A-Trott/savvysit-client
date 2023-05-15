import React, {useState} from 'react'
import NavItem from '@components/NavItem/NavItem.jsx'
import NavLinks from '@components/NavItem/headerLinks.json'
import Logo from '@components/Logo/Logo.jsx'



export default function Header() {
  const [ActiveLink, setActiveLink] = useState('warehouse')
  return (
      <header className=''>
        <Logo onClick={() => setActiveLink('warehouse')}/>
        <nav className=''>
          {NavLinks.map((link, index) => (
              <NavItem
                  key={index}
                  to={link.path}
                  name={link.name}
                  active={ActiveLink}
                  setActiveLink={setActiveLink}
              />
          ))}
        </nav>
      </header>
  )
}