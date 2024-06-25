import React from 'react'
import './Hero.css';
import Btnarrow from '../../assests/images/btn-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Admission Process Made Easy</h1>
                <p>Career Counselling is an art of understanding the capabilities of the students and guide them
                    with roadmaps for a successful academic career.
                </p>
                <button className='btn'>Explore More <img src={Btnarrow} alt="button arrow" /></button>
            </div>
        </div>
    )
}

export default Hero
