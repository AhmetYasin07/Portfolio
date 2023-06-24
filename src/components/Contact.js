import React, { useState} from 'react'
import '../styles/Contact.css';
import emailjs from 'emailjs-com'

const Contact = () => {
    const posY = sessionStorage.getItem("posY")
    const pageHeight = sessionStorage.getItem("pageHeight")
    const activePosition = (pageHeight / 4)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [isFieldsFilled, setIsFieldsFilled] = useState(true);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const validate = () => {
        if (validateEmail(email)) {
            return true
        } else {
            return false
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (name && email && message && subject && validate()) {
            const serviceId = 'service_y6vm49h';
            const templateId = 'template_fz0igfs';
            const userId = 'user_TrO3PZCHJiDszI0zsETNE';
            const templateParams = {
                from_name: name,
                email: email,
                message: message,
                subject: subject
            };
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubject('')
                    setEmailSent(true);
                    setIsFieldsFilled(true)
                    setTimeout(() => setEmailSent(false) , 3000)
                })
                .then(error => {
                    
                });
         }
         if (!(name && email && message && subject)) {
             setIsFieldsFilled(false)
             setTimeout(() => setIsFieldsFilled(true), 3000)
         } else {
            if (validate() === false) {
                const element = document.getElementById("email-input")
                element.style.boxShadow = "0px 0 8px 2px #ef5771"
                element.style.border = "1px solid #ef5771"
             }
         }
    }

    const resetInputFocus = (e) => {
        e.target.style.boxShadow = ""
        e.target.style.border = ""
    }
    return (
        <div id="contact" className="contact">
            <div className={(posY >= (activePosition * 4) - (activePosition * (80/100))) ? "contact-pageHeader topToDown" : "contact-pageHeader"}>Contact Me</div>
            <div className="contact-form">
                <div className={(posY >= (activePosition * 4) - 750) ? "form-desc leftToRight" : "form-desc"}>
                    <img alt="" className="form-desc-img" src="contact_form.png" />
                    <div className="form-desc-text">Get in touch with me for any detailed information like services, pricing, technical support etc. Your messages will be replied as soon as possible.</div>
                </div>
                <div className={(posY >= (activePosition * 4) - 750) ? "form rightToLeft" : "form"}>
                    <div className="form-upper">
                        <input value={name} onChange={e => setName(e.target.value)} style={{marginRight: "8px"}} type="text" placeholder="Name" className="form-item"/>
                        <input onFocus={e => resetInputFocus(e)} value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" id="email-input" className="form-item"/>
                    </div>
                    <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder="Subject" className="form-item"/>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" className="form-item form-textarea"/>
                    <div className="form-lower">
                        <div className={emailSent ? "successful-message active" : "successful-message"}>Message successfully sent!</div>
                        <div className={isFieldsFilled ? "unsuccessful-message" : "unsuccessful-message active"}>Please fill in all fields</div>
                        <button onClick={e => handleFormSubmit(e)} className="form-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
