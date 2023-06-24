import React from 'react'
import '../styles/Services.css';

const Services = () => {
    const posY = sessionStorage.getItem("posY")
    const pageHeight = sessionStorage.getItem("pageHeight")
    const activePosition = (pageHeight / 4)
    return (
        <div id="services-page" className="services-page">
            <div className="services-page-header">Services</div>
            <div className="services-cards">
                <div className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 500) ? "services-card" : "services-card services-card1"}>
                    <svg className="services-card-logo" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    <span>Website Development</span>
                    <p>My services are including developing personal or company websites, web apps and custom web pages. </p>
                </div>
                <div className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 500) ? "services-card" : "services-card services-card2"}>
                    <svg className="services-card-logo" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>Collaborative Jobs</span>
                    <p>I am open to collaborative jobs like working as a teammate or taking a job for long and short terms. </p>
                </div>
                <div className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 500) ? "services-card" : "services-card services-card3"}>
                    <svg className="services-card-logo" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg>
                    <span>Technical Support</span>
                    <p>Giving technical support about JavaScript, ReactJS or many other technologies. Check my bio for all!</p>
                </div>
            </div>
            <a href="#contact" className={(posY < (activePosition * 3) - 300) && (posY >= (activePosition * 2) - 500) ? "services-page-button" : "services-page-button services-page-button-animate"}>
                Get in Touch Now!
            </a>
        </div>
    )
}

export default Services;
