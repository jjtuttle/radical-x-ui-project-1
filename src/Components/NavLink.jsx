import React from 'react'

const NavLink = ({ image, title }) => {
  return (
    <div className='max-h-screen bg-orange-300'> 
    NavLink?
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default NavLink