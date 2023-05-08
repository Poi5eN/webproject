import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = (props) => {

  return (
    <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className='logo' alt='...' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notice">Notice Board</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admission">Admission Online</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/prospectus">Prospectus</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/extra" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Extra Activities
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/image">Image Gallery</Link></li>
                <li><Link className="dropdown-item" to="/video">Video Gallery</Link></li>
                {/* <li><hr className="dropdown-divider"/></li> */}
                {/* <li><Link className="dropdown-item" to="/">Something else here</Link></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar