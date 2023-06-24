import React from 'react'
import "../styles/Sidebar.css"

const Sidebar = ({sidebar, handleSidebar}) => {
    const posY = sessionStorage.getItem("posY")
    const pageHeight = sessionStorage.getItem("pageHeight")
    const activePosition = (pageHeight / 4)
    return (
        <div>
            <div onClick={e => handleSidebar(e)} className={sidebar ? "sidebar-back active" : "sidebar-back"}></div>
            <div className={sidebar ? "sidebar active" : "sidebar"}>
                <div className="sidebar-items">
                    <a onClick={e => handleSidebar(e)} href="#homepage" className={posY < (activePosition) - 300 ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
                        <span className="sidebar-item-text">Home</span>
                    </a>
                    <a onClick={e => handleSidebar(e)} href="#aboutme" className={(posY < (activePosition * 2) - 300) && (posY >= activePosition-300) ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
                        <span className="sidebar-item-text">About</span>
                    </a>
                    <a onClick={e => handleSidebar(e)} href="#services-page" className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 300) ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
                        <span className="sidebar-item-text">Services</span>
                    </a>
                    <a onClick={e => handleSidebar(e)} href="#projects" className={(posY < (activePosition * 4) - 300) && (posY >= (activePosition * 3) - 300) ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
                        <span className="sidebar-item-text">Projects</span>
                    </a>
                    <a onClick={e => handleSidebar(e)} href="#contact" className={(posY >= (activePosition * 4) - 300) ? "sidebar-item sidebar-item-active" : "sidebar-item"}>
                        <span className="sidebar-item-text">Contact</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
