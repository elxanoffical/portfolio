import React from 'react'
import './Contact.css'
import pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import loaction_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fc863aed-132a-4811-9688-d477f111b6e1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
        }
    };

    const { register, watch, handleSubmit, formState: { errers } } = useForm()


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repellendus eius. Recusandae sapiente dolor modi?</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />  <p>elxan.offical.07@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+994 55 492 67 31</p>
                        </div>
                        <div className="contact-detail">
                            <img src={loaction_icon} alt="" /> <p>Azerbaycan,Baku</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input required type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input required type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea required name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact