import React from 'react'
import { NavLink } from 'react-router-dom'
import dashboardIcon from '../assets/dashboard-icon.svg'

function Sidebar() {
  return (
    <div>
      <NavLink title="Dashboard" image={dashboardIcon} />
    </div>
  )
}

export default Sidebar