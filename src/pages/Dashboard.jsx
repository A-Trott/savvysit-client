import React from 'react';
import SideBar from '@components/Sidebar/SideBar.jsx';
import { Outlet } from 'react-router-dom';
import '@pages/Dashboard.scss'
export default function Dashboard(){

  return (
      <div className='dashboard'>
        <SideBar />
        <Outlet />
      </div>
  )
}