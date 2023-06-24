import React from 'react'
import '../styles/Navbar.css';

import { FaBars  } from 'react-icons/fa';

const Navbar = ({handleSidebar}) => {
    const posY = sessionStorage.getItem("posY")
    const pageHeight = sessionStorage.getItem("pageHeight")
    const activePosition = (pageHeight / 4)
    return (
        <div className="navbar">
            <div className="nav-header">Ahmet Yasin</div>
            <FaBars onClick={e => handleSidebar(e)} className="sidebar-bars"/>
            <div className="nav-items">
                <a href="#homepage" className={posY <= (activePosition) - 300 ? "nav-item nav-item-active" : "nav-item"}>
                    <span className="nav-item-text">Home</span>
                    <div className="nav-item-bottom"/>
                </a>
                <a href="#aboutme" className={(posY < (activePosition * 2) - 300) && (posY >= activePosition - 300) ? "nav-item nav-item-active" : "nav-item"}>
                    <span className="nav-item-text">About</span>
                    <div className="nav-item-bottom"/>
                </a>
                <a href="#services-page" className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 300) ? "nav-item nav-item-active" : "nav-item"}>
                    <span className="nav-item-text">Services</span>
                    <div className="nav-item-bottom"/>
                </a>
                <a href="#projects" className={(posY < (activePosition * 4) - 300) && (posY >= (activePosition * 3) - 300) ? "nav-item nav-item-active" : "nav-item"}>
                    <span className="nav-item-text">Projects</span>
                    <div className="nav-item-bottom"/>
                </a>
                <a href="#contact" className={(posY >= (activePosition * 4) - 300) ? "nav-item nav-item-active" : "nav-item"}>
                    <span className="nav-item-text">Contact</span>
                    <div className="nav-item-bottom"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar
