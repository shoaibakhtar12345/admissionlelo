import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assests/images/logo_2.png'
import LogoWhite from '../../assests/images/logo-white.png'
import Menu from '../../assests/images/menu.png'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [sticky, Setsticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? Setsticky(true) : Setsticky(false);
        })
    }, []);


    const [mobile, setmobilemenu] = useState(false);
    const toggleMenu = () => {
        mobile ? setmobilemenu(false) : setmobilemenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <a href="" className="nav-brand">
                <img src={LogoWhite} alt="Logo" className='logo' />
            </a>
            <ul className={mobile ? '' : 'hideMenu'}>
                <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
                <li><Link to='programs-section' offset={-270} smooth={true} duration={500}>Courses</Link></li>
                <li><Link to='about-section' offset={-150} smooth={true} duration={500}>About Us</Link></li>
                <li><Link to='gallery-section' offset={-260} smooth={true} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
                <li><Link to='contactUs-section' offset={-260} smooth={true} duration={500} className='btn' >Conatct Us</Link></li>
            </ul>
            <img src={Menu} alt="" className='Menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar
