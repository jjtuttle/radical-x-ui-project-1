import React from 'react'
// import dashboardIcon from '../images/dashboard-icon.svg';



function SideBarIcon(props) {



  return (
    <>
      <div className='flex bg-white mb-[12px]  text-[color:var(--color-dark)] hover:bg-[color:var(--color-light-purple)] hover:text-[color:var(--color-purple)] hover:rounded-[16px] py-[12px] border-[1px] border-transparent hover:border-[1px] hover:border-[color:var(--color-purple)] hover:cursor-pointer '>
        <img className='bg-transparent ml-4 mr-3 hover:fill-[#793EF5] '
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