import React from 'react'
import Logo from '@components/Logo/Logo.jsx'

export default function Footer() {
  return (
      <div>
        <Logo onClick={() => setActiveLink('warehouse')}/>
        <div>
          <span className="">linkedin</span>
          <span>github</span>
          <span>email</span></div>
        <span className='mt-auto w-full py-8 text-center bg-instock-light-grey text-instock-slate'>
          &copy; SavvySit Inc. All Rights Reserved.
        </span>
      </div>
  )
}