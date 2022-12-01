import React from 'react'


const NavLink = ({ image, title, isActive }) => {
  return (
    <div className='nav-link'>
      {isActive && <div className='active-link'></div>}
      <img src={image}
        alt={`${title} icon`}
        className='h-[24px] w-[24px]'
      />

      <p className='link-title'>{title}</p>
    </div>
  )
}

export default NavLink