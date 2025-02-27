import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
import { useRef, useEffect } from 'react';

const About = () => {

    const animatedRef = useRef(null);

    useEffect(() => {
        const aboutElement = animatedRef.current;

        const handleScroll = () => {
            const { top, bottom } = aboutElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                aboutElement.classList.add('slideInFromRight');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam assumenda facere impedit libero vitae qui saepe cupiditate suscipit ipsum reprehenderit nulla rem quasi tenetur, consequatur ducimus, perferendis dignissimos reiciendis explicabo?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid distinctio fugiat, perspiciatis nulla animi?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS</p> <div className="liner1"></div>65%</div>
                        <div className="about-skill"> <p>Ract JS</p> <div className="liner2"></div>75%</div>
                        <div className="about-skill"> <p>JavaScript</p> <div className="liner3"></div>60%</div>
                        <div className="about-skill"> <p>Node Js</p> <div className="liner4"></div>50%</div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="liner"></div>
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="liner"></div>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About