import React from 'react'
import NavLink from './NavLink'
import '../styles/sidebar.css';
// Image imports
import radicalxLogo from '../assets/radicallX-black-logo-1.svg'
import dashboardIcon from '../assets/dashboard-icon.svg'
import apprentIcon from '../assets/apprenticeships-icon.svg'
import internIcon from '../assets/internships-icon.svg'
import jobsIcon from '../assets/jobs-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'



function Sidebar() {


  return (
    <div className='sidebar-container'>
      <img src={radicalxLogo} alt="RadicalX Logo" className='nav-logo' />

      <NavLink title="Dashboard" image={dashboardIcon} />
      <NavLink title="Apprenticeships" image={apprentIcon} />
      <NavLink title="Internships" image={internIcon} isActive={true}/>
      <NavLink title="Jobs" image={jobsIcon} />
      <NavLink title="Settings" image={settingsIcon} />
    </div>
  )
}

export default Sidebar