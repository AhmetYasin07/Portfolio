import React from 'react'
import "../styles/Home.css"

const Home = () => {
    const posY = sessionStorage.getItem("posY")
    return (
        <div id="homepage" className="home-page">
            <div className="home-page-header">
                <div className={posY < 650 ? "welcome-text welcome-text-animated" : "welcome-text"}>welcome</div>
                <div className={posY < 650 ? "seperator seperator-animated" : "seperator"}/>
                <div className={posY < 650 ? "welcome-text-1 welcome-text-animated" : "welcome-text-1"}>My Long Journey in My Short Life</div>
            </div>
        </div>
    )
}

export default Home 
