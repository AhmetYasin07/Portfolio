import React from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTop = () => {
    const posY = sessionStorage.getItem("posY")
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    const renderScroll = () => {
        if (posY > 200) {
            return <div onClick={e => scrollToTop(e)} className="scrollToTop"><FaArrowUp/></div>
        }
    }
    return (
        <div>
            {renderScroll()}
        </div>
    )
}

export default ScrollToTop
