import React from 'react'
import { NavLink } from 'react-router-dom'
import dashboardIcon from '../assets/dashboard-icon.svg'

function Sidebar() {
  return (
    <div className='sidebar-container bg-red-500 max-h-full'>
      sidebar?
      <NavLink title="Dashboard" image={dashboardIcon} />
    </div>
  )
}

export default Sidebar