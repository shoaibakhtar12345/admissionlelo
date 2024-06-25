import React from 'react'
import './ContactUs.css'
import ContactIcon from '../../assests/images/coontact-image.png'
import Location from '../../assests/images/location.png'
import Mail from '../../assests/images/mail.png'
import Phone from '../../assests/images/phone.png'
import Btnarrow from '../../assests/images/btn-arrow-white.png'

const ContactUs = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2c31a205-1269-4ae7-9256-24224967b6c8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <>
            <div className="contactUs-section">
                <div className="contact-info">
                    <img src={ContactIcon} alt="" className='contact-icon' />
                    <h4>Send Us a Message</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure consequatur cum iusto voluptate voluptates ab veritatis qui assumenda velit!</p>
                    <ul>
                        <li><img src={Mail} alt="" /> admissionlelo@.in</li>
                        <li><img src={Phone} alt="" /> +91 7398765556</li>
                        <li><img src={Location} alt="" />Nehru Place Delhi, India </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <form action="" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Enter Your Name' required  name='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Enter Your Email' required name='email'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone</label>
                            <input type="tel" placeholder='Enter Your Phone' required name='phone'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <textarea name="message" id="" placeholder='Enter Message' ></textarea>
                        </div>
                        <div className="form-group">
                            <button className='btn dark-btn' type='submit'>Submit Now <img src={Btnarrow} alt="" /></button>
                        </div>
                    </form>
                    <span>{result}</span>
                </div>
            </div>

        </>
    )
}

export default ContactUs
