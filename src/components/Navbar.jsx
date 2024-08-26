import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>finsweet</h1>
      <div id='nav-2'>
        <Link to='/' className='navItems'>Home</Link>
        <Link to='/' className='navItems'>Blog</Link>
        <Link to='/' className='navItems'>About Us</Link>
        <Link to='/' className='navItems'>Contact Us</Link>
        <a href='https://divyanshharne.github.io/first-portfolio/'><button id='subscribe'>Subscribe</button></a>
      </div>
    </nav>
  )
}

export default Navbar