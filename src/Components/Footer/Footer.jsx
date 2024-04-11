import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import pattern from '../../assets/theme_pattern.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Elxan</h1>
                    <img src={pattern} alt="" />
                    <p>I am a frontend developer from , USA with 10 year of experience in  companies like Microsoft, Tesla and Apple.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <div className="liners"></div>

            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2024 Elxan meherremli.All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Police</p>
                    <p>connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer