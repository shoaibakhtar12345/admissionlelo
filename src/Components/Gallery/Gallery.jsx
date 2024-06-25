import React from 'react'
import './Gallery.css'
import Gallery_1 from '../../assests/images/gallery-1.jpg'
import Gallery_2 from '../../assests/images/gallery-2.webp'
import Gallery_3 from '../../assests/images/gallery-3.webp'
import Btnarrow from '../../assests/images/btn-arrow-white.png'

const Gallery = () => {
    return (
        <>
            <div className="gallery-section">
                <div className="gallery-images">
                    <img src={Gallery_1} alt="" />
                    <img src={Gallery_2} alt="" />
                    <img src={Gallery_3} alt="" />
                </div>
                <button className='btn dark-btn'>Read More <img src={Btnarrow} alt="" /></button>
            </div>
            

        </>
    )
}

export default Gallery
