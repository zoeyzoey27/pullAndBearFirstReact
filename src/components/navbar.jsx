import React from 'react'
import "../style.css"
import "../mobile.css"
import logo from "../images/logo.png"
import {
    Link
  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className='navbar-left'>
                    <span className="language">VI</span>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Tìm kiếm" />
                        <i className="search-icon fas fa-search"></i>
                    </div>
                </div>
                <div className='navbar-center'>
                    <Link className='link' to="/"> <img className="logo" src={logo} alt="" /></Link>
                </div>
                <div className='navbar-right'>
                    <div className="menu-item">
                        <Link  className='link' to="/login"><i className="menu-item-icon far fa-user"></i></Link>
                        <Link   className='link' to="/cart"><i className="menu-item-icon fas fa-shopping-bag"></i></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
