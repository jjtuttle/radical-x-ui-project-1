import React from 'react'
import logo from '../images/radicallX-black-logo-1.svg'
import SideBarIcon from './SideBarIcon'

import dashboardIcon from '../images/dashboard-icon.svg';
import apprentershipsIcon from '../images/apprenterships-icon.svg'
import internshipsIcon from '../images/internships-icon.svg'
import jobsIcon from '../images/jobs-icon.svg';
import settingsIcon from '../images/settings-icon.svg';


function SidePanel() {


  return (
    <div className='bg-white m-5 pt-[1px] h-[950px] w-[229px] rounded-[24px] '>
      {/* //! LOGO - RadicalX */}
      <img
        className='m-10 bg-transparent '
        src={logo}
        alt="logo"
        width="160px"
        height="32px"
      />
      {/* //TODO:: Make a JSON Obj. for each component's data props.*/}
      <div className='bg-white '>
        <SideBarIcon img={dashboardIcon} title={'Dashboard'} />

        <SideBarIcon img={apprentershipsIcon} title={'Apprenterships'} />

        <SideBarIcon img={internshipsIcon} title={'Internships'} />

        <SideBarIcon img={jobsIcon} title={'Jobs'} />

        <SideBarIcon img={settingsIcon} title={'Settings'} />
      </div>

      <div className='bg-transparent relative '>
        <div className='bg-transparent flex absolute inset-y-0  bottom-0'>
          <div className='w-[50px] h-[50px] bg-[#E2E6EB] rounded-[16px] ml-[20px]'></div>
          <p className='ml-[10px]'>Adam Scott</p>
        </div>
      </div>

    </div>
  )
}

export default SidePanel