import React from 'react'
import logo from '../assets/radicallX-black-logo-1.svg'
import SideBarIcon from './SideBarIcon'

import dashboardIcon from '../assets/dashboard-icon.svg';
import apprentershipsIcon from '../assets/apprenterships-icon.svg'
import internshipsIcon from '../assets/internships-icon.svg'
import jobsIcon from '../assets/jobs-icon.svg';
import settingsIcon from '../assets/settings-icon.svg';


function SidePanel() {


  return (
    <div className='bg-white m-5 pt-[1px] h-[100vh] w-[229px] rounded-[24px] shadow-lg'>
      {/* //! LOGO - RadicalX */}
      <img
        className='m-10 bg-transparent '
        src={logo}
        alt="logo"
        width="160px"
        height="32px"
      />

      <div className='bg-white m-5'>

        <SideBarIcon  img={dashboardIcon} title={'Dashboard'} />

        <SideBarIcon img={apprentershipsIcon} title={'Apprenterships'} />

        <SideBarIcon img={internshipsIcon} title={'Internships'} />

        <SideBarIcon img={jobsIcon} title={'Jobs'} />

        <SideBarIcon img={settingsIcon} title={'Settings'} />
      </div>


      <div className='bg-transparent flex absolute bottom-0'>
        <div className='w-[50px] h-[50px] bg-[#E2E6EB] rounded-[16px] ml-[20px] '></div>
        <p className='ml-[10px] py-3 px-2 bg-transparent'>Adam Scott</p>
      </div>


    </div>
  )
}

export default SidePanel