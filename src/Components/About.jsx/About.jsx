import React from 'react'
import './About.css'
import AboutIMg from '../../assests/images/about-us.webp'
import PlayIcon from '../../assests/images/play-icon.png'

const About = () => {
    return (
        <>
            <div className="about-section">
                <div className="about-images">
                    <img src={AboutIMg} alt="" className='about-img' />
                    <img src={PlayIcon} alt="" className='play-icon' />
                </div>
                <div className="about-content">
                    <h2>About Admissionlelo</h2>
                    <h3>“Education is the most powerful weapon which you can use to change the world”
                        as rightly said by Nelson Mandela, AdmissionLelo truly believes the same.</h3>
                    <p>AdmissionLelo, one of India’s largest Career Counselling Consultants, is here to mentor the
                        students towards their educational goals and drive them to create a better world.</p>
                    <p>We understand that every student has a unique requirement that is exclusively monitored and catered to by our team. Our dedicated team of experts is focused on the value of education and the effort that a student puts in to shine in life, and therefore,
                       we strive to give the best and impartial advice so that each student can move ahead to reach the goal.</p>
                    <p>We understand that every student has a unique requirement that is exclusively monitored and catered to by our team. Our dedicated team of experts is focused on the value of education and the effort that a student puts in to shine in life, and therefore,
                       we strive to give the best and impartial advice so that each student can move ahead to reach the goal.</p>
                </div>
            </div>

        </>
    )
}

export default About
