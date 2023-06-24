import React from 'react'
import "../styles/Footer.css"
import { FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="copy-right">&copy; 2021</div>
            <div className="footer-icons">
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ahmetyasinoztop/" className="footer-icon"><FaInstagram/></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ahmet-yasin-%C3%B6ztop-66b5b8205/" className="footer-icon"><FaLinkedin/></a>
                <a rel="noreferrer" target="_blank" href="https://github.com/AhmetYasin07" className="footer-icon"><FaGithub/></a>
            </div>
        </div>
    )
}

export default Footer
