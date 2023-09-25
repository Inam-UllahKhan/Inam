import React from 'react'
import { NavLink } from 'react-router-dom'

export const Fifth_NavBar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar top-0 navbar-expand-lg bg-body-tertiary shadow mb-3">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">INAM</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink   className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink   className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink   className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink   className="nav-link" to='/contact'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
