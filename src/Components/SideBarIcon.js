import React from 'react'
// import dashboardIcon from '../images/dashboard-icon.svg';



function SideBarIcon(props) {



  return (
    <>
      <div className='flex bg-white mb-[12px]  text-[#1E1E1E] hover:bg-[#665FEF]/20 hover:text-[#793EF5] hover:rounded-[16px] py-[12px] hover:border-[1px] hover:border-[#793EF5] hover:cursor-pointer'>
        <img className='bg-transparent ml-10 mr-3 hover:fill-[#793EF5] '
          src={props.img}
          alt="dashboard icon"
          width="24px"
          height="24px"
        />

        {props.title}

      </div>
    </>
  )
}

export default SideBarIcon