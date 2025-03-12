import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <NavLink className='none' to="/"><h3>Asosiypage</h3></NavLink>
      <NavLink className='none' to="/addpage"><h3>Addpage</h3></NavLink>
      <NavLink className='none' to="/korzinkapage"><h3>Korzinkapage</h3></NavLink>
      <NavLink className='none' to="/Maxsulotlarpage"><h3>Maxsulotlarpage</h3></NavLink>
    </div>
  )
}
export default Header;