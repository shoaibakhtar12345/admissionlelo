import React from 'react'
import './Programs.css'
import Programs_1 from '../../assests/images/programs_1.jpg'
import Programs_2 from '../../assests/images/programs_2.jpg'
import Programs_3 from '../../assests/images/programs_3.jpg'
import Programs_icon1 from '../../assests/images/program-icon-1.png'
import Programs_icon2 from '../../assests/images/program-icon-2.png'
import Programs_icon3 from '../../assests/images/program-icon-3.png'

const Programs = () => {
    return (
        <>
            <div className='programs-section'>
                <div className="program">
                    <img src={Programs_1} alt="programs_1" />
                    <div className="caption">
                        <img src={Programs_icon1} alt="" />
                        <p>Bachelore Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Programs_2} alt="programs_2" />
                    <div className="caption">
                        <img src={Programs_icon2} alt="" />
                        <p>Master Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Programs_3} alt="programs_3" />
                    <div className="caption">
                        <img src={Programs_icon3} alt="" />
                        <p>12th  Pass</p>
                    </div>
                </div>

            </div>
            <div className='programs-section'>
                <div className="program">
                    <img src={Programs_1} alt="programs_1" />
                    <div className="caption">
                        <img src={Programs_icon1} alt="" />
                        <p>Bachelore Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Programs_2} alt="programs_2" />
                    <div className="caption">
                        <img src={Programs_icon2} alt="" />
                        <p>Master Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Programs_3} alt="programs_3" />
                    <div className="caption">
                        <img src={Programs_icon3} alt="" />
                        <p>12th  Pass</p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Programs
