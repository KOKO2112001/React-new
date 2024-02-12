import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
<nav className="py-5 navbar bg-info-subtle navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Start Frame Work</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  pe-3 me-5">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}