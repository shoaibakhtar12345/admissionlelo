import React, { useRef } from 'react'
import './Testimonials.css'
import NextIcon from '../../assests/images/next-icon.png'
import PreIcon from '../../assests/images/pre-icon.png'
import UserIcon_1 from '../../assests/images/testimonial-1.webp'
import UserIcon_2 from '../../assests/images/testimonial-2.webp'
import UserIcon_3 from '../../assests/images/testimonial-3.webp'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const nextSlider = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const PretSlider = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
    return (
        <>
            <div className="testimonials">
                <img src={NextIcon} alt="" className='next-icon' onClick={nextSlider} />
                <img src={PreIcon} alt="" className='pre-icon' onClick={PretSlider} />
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={UserIcon_1} alt="" />
                                    <div className="user-details">
                                        <h3>William Jackson</h3>
                                        <span>Sweta Tripathi</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto accusamus vero possimus autem, explicabo quos magni, aspernatur deserunt nam natus dolorum, numquam reiciendis similique iste harum suscipit quaerat quod?</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={UserIcon_2} alt="" />
                                    <div className="user-details">
                                        <h3>William Jackson</h3>
                                        <span>Ravi Kumar</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto accusamus vero possimus autem, explicabo quos magni, aspernatur deserunt nam natus dolorum, numquam reiciendis similique iste harum suscipit quaerat quod?</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={UserIcon_3} alt="" />
                                    <div className="user-details">
                                        <h3>William Jackson</h3>
                                        <span>Mohan Panday</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto accusamus vero possimus autem, explicabo quos magni, aspernatur deserunt nam natus dolorum, numquam reiciendis similique iste harum suscipit quaerat quod?</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={UserIcon_2} alt="" />
                                    <div className="user-details">
                                        <h3>William Jackson</h3>
                                        <span>Rehman Malik</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto accusamus vero possimus autem, explicabo quos magni, aspernatur deserunt nam natus dolorum, numquam reiciendis similique iste harum suscipit quaerat quod?</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Testimonials
