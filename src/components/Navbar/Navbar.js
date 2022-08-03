import React from 'react'
import { Link } from 'react-router-dom'
import reactflixHeader from "../images/reactflix_header.png"

export const Navbar = () => {
  return (
    <ul className="navbar">
    <div className="navbar__item active">
      <Link to="">
        <img className="navbarLogo" src={reactflixHeader} />
      </Link>
    </div>
  </ul>
  )
}
