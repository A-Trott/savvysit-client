import React from 'react'
import Logo from '@components/Logo/Logo.jsx'
import '@components/Footer/Footer.scss'
export default function Footer() {
  return (
      <div className='footer'>
        <Logo onClick={() => setActiveLink('warehouse')}/>
        <div>
          <span className="">linkedin</span>
          <span>github</span>
          <span>email</span></div>
        <span className=''>
          &copy; SavvySit Inc. All Rights Reserved.
        </span>
      </div>
  )
}