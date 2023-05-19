import React, {useState} from 'react'
import NavItem from '@components/NavItem/NavItem.jsx'
import NavLinks from '@components/NavItem/headerLinks.json'
import Logo from '@components/Logo/Logo.jsx'
import {ButtonPrimary} from '@components/Button/Button.jsx'
import '@components/Header/Header.scss'


export default function Header() {
  const [ActiveLink, setActiveLink] = useState('home')
  return (
      <header className='header'>
        <Logo onClick={() => setActiveLink('home')}/>
        <nav className='header__nav'>
          {NavLinks.map((link, index) => (
              <NavItem
                  className='header__nav-item'
                  key={index}
                  to={link.path}
                  name={link.name}
                  active={ActiveLink}
                  setActiveLink={setActiveLink}
              />
          ))}
          <ButtonPrimary type='button' link='/login' text='LOGIN'  />
          <ButtonPrimary type='button' link='/sign-up' text='SIGN UP'/>
        </nav>

      </header>
  )
}