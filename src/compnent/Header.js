
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   <>
    <div className= 'header'>
      <div className='logo'>
      <img src = "image/logo3.jpg" alt ="logo"/></div>
      <div style ={{color:'white',padding:'4px 9px 2px',margin :'-1rem'}}>
       <h1> Modern Dance  Academy</h1>
        </div>
   
     <ul>
        <li className='list'>
        <Link to="/">Home</Link></li>
        <li className='list'>
        <Link to="/Course">Course</Link></li>
        <li className='list'>
        <Link to="/Contact">Contact</Link></li>
        
        <li className='list'>
        <Link to="/Review">Register</Link></li>
        <li className='list'>
        <Link to="/About">About</Link></li>
        <li className='list'>
        <Link to="/Services">Services</Link></li>
        
     </ul>
     </div>
     </>
  )
}








