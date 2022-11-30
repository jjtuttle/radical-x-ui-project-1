import React from 'react'

const NavLink = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default NavLink