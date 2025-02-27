import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Elxan meherremli,</span> frontend developer based in Azerbaycan.</h1>
        <p>I am an advanced developer from Baku, Azerbaijan with 2 years of experience in many companies like Microsoft, Adams and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero