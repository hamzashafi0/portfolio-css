import Link from 'next/link'
import React from 'react'
import "../app/style/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <header className="navbar-container">
        <div className="navbar-content">
          <a className="navbar-logo">
            <span className="navbar-title">HAMZA SHAFI</span>
          </a>
          <nav className="navbar-links">
            <Link href={"/"} className="navbar-link">Home</Link>
            <Link href={"#about"} className="navbar-link">About</Link>
            <Link href={"#skills"} className="navbar-link">Skills</Link>
            <Link href={"#project"} className="navbar-link">Project</Link>
            <Link href={"#contact"} className="navbar-link">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
