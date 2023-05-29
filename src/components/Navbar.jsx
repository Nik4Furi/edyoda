import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <Link to={"/"} className="navbar-brand text-highlight" >EVYODA</Link> */}
          <Link to={"/"} className="navbar-brand " ><span><img src="/favicon_io/android-chrome-192x192.png" alt="logo" style={{maxWidth : "72px"}}/></span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Web Development</Link></li>
                  <li><Link className="dropdown-item" href="#">App Development</Link></li>
                  <li><Link className="dropdown-item" href="#">Machine Learning</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Programs
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Self Reflection</Link></li>
                  <li><Link className="dropdown-item" href="#">Animation</Link></li>
                  <li><Link className="dropdown-item" href="#">Exploration</Link></li>
                </ul>

              </li>

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" data-aos="fade-left">
              <li > <Link to="/login" className="nav-link text-dark" >Log In</Link>     </li>

              <Link to={"/login"} > <button className="btn btn-first mx-2 rounded-pill">Join Now</button></Link>
            </ul>
            {/* <div className="flex justify-content-center" data-aos="fade-left">
              <li > <Link to="/login" className="nav-link text-dark" >Log In</Link>     </li>

              <Link to={"/login"} > <button className="btn btn-first mx-2 rounded-pill">Join Now</button></Link>
            </div> */}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar