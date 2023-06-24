import React, {useState} from 'react'
import "../styles/About.css"
import { FaCode, FaBook, FaGuitar, FaCity, FaArrowRight } from 'react-icons/fa';

const About = () => {
    const [aboutContent, setAboutContent] = useState("biography")
    const posY = sessionStorage.getItem("posY")
    const pageHeight = sessionStorage.getItem("pageHeight")
    const activePosition = (pageHeight / 4)
    const handleAboutContent = (e) => {
        setAboutContent(e.target.id)
        if (!(e.target.className === document.getElementById(aboutContent).className)) {
            document.getElementById(aboutContent).className = "about-link"
        }
        e.target.className = "about-link about-link-active"
     }
    const renderAboutContent = () => {
        const bioData = [{key: "Name", value: "Ahmet Yasin"}, {key: "Surname", value: "Öztop"}, {key: "Address", value: "İstanbul/Turkey"}, {key: "School Degree", value: "High School"}]
        switch (aboutContent) {
            case "top_skills":
                return (
                    <div>
                        <ul className="about-link-content">
                            <li><FaArrowRight/>JavaScript</li>
                            <li><FaArrowRight/>ReactJS (Next.js)</li>
                            <li><FaArrowRight/>NodeJS</li>
                            <li><FaArrowRight/>HTML CSS</li>
                            <li><FaArrowRight/>Mongo DB</li>
                            <li><FaArrowRight/>Python</li>
                        </ul>
                    </div>
                )
            case "social_media":
                return (
                <div>
                    <ul className="about-link-content">
                        <li><FaArrowRight/><a rel="noreferrer" target="_blank" href="https://github.com/AhmetYasin07">Github</a></li>
                        <li><FaArrowRight/><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ahmet-yasin-%C3%B6ztop-66b5b8205/">LinkedIn</a></li>
                        <li><FaArrowRight/><a rel="noreferrer" target="_blank" href="https://www.instagram.com/ahmetyasinoztop/">Instagram</a></li>
                    </ul>
                </div>
                )
            case "interests":
                return (
                <div>
                    <ul className="about-link-content">
                        <li><FaArrowRight/>Coding <FaCode className="about-link-icon"/></li>
                        <li><FaArrowRight/>Reading Books <FaBook className="about-link-icon"/></li>
                        <li><FaArrowRight/>Playing Guitar <FaGuitar className="about-link-icon"/></li>
                        <li><FaArrowRight/>Travelling <FaCity className="about-link-icon"/></li>
                    </ul>
                </div>
                )
            default:
                return (
                    <div>
                        {bioData.map((item, key) => {
                            return (
                            <div key={key} className="about-content-line">
                                <div className="about-content-key">{item.key} : </div>
                                <div className="about-content-value">{item.value}</div>
                            </div>
                            )  
                        })}
                    </div>
                )
        }
    }
    return (
        <div id="aboutme" className="about-page">
            <div className={(posY < (activePosition * 2) - (activePosition * (12/100))) && (posY >= activePosition-(activePosition * (80/100))) ? "profile-photo profile-photo-animated" : "profile-photo"}>
                <img className="profile-photo-img" alt="" src="Ahmet_Yasin_Öztop.jpeg" /> 
                <span className="profile-photo-text">Photo By <a target="_blank" rel="noreferrer" href="https://www.instagram.com/arifsahin010/" alt="">Arif Buğra Şahin</a></span>
            </div> 
            <div className="about-me">
                <div className="about-me-header">About Me</div>
                <div className="about-me-text">Hello, my name is Ahmet Yasin. I am living in Istanbul/Turkey. I am student at high school. My web development adventure has been started nearly three years ago. I don't have any job experience because of my school but I am a freelancer. I am learning new things and applying these in my projects.</div>
                <div className="about-links">
                    <div onClick={e => handleAboutContent(e)} id="biography" className="about-link about-link-active">
                        <span className="about-link-text">Biography</span>
                        <div className="about-link-bottom"/>
                    </div>
                    <div onClick={e => handleAboutContent(e)} id="top_skills" className="about-link">
                        <span className="about-link-text">Top Skills</span>
                        <div className="about-link-bottom"/>
                    </div>
                    <div onClick={e => handleAboutContent(e)} id="social_media" className="about-link">
                        <span className="about-link-text">Social Media</span>
                        <div className="about-link-bottom"/>
                    </div>
                    <div onClick={e => handleAboutContent(e)} id="interests" className="about-link">
                        <span className="about-link-text">Interests</span>
                        <div className="about-link-bottom"/>
                    </div>
                </div>
                <div className="about-content">
                    {renderAboutContent()}
                </div>
            </div>
        </div>
    )
}

export default About
