import React, {useState} from 'react'
import './Qualifications.css';

function Qualifications() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                </div>

                <div 
                    className={
                        toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

        <div className="qualification__sections">
            <div 
                className={
                    toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"
                }
            >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">BSc Hons Software Engineering</h3>
                        <span className="qualification__subtitle">
                            University of Plymouth
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2021 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification__title">Ordinary/Advanced Level</h3>
                        <span className="qualification__subtitle">
                            Royal College Colombo-07
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2010 - 2021
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Certificate in Professional Digital Marketing</h3>
                        <span className="qualification__subtitle">
                            Charted Institute of Marketing
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2020 - 2020
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification__title">Preliminaty Certificate in Markeitng</h3>
                        <span className="qualification__subtitle">
                            Sri Lanka Institute Marketing
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2019 - 2019
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Certificate in Web Design</h3>
                        <span className="qualification__subtitle">
                            University of Kelaniya
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2018 - 2019
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>


            </div>

            <div 
                className={
                    toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"
                }
            >
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Intern Business Analyst</h3>
                        <span className="qualification__subtitle">
                            MAS Holdings
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2024 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    
                    <div>
                        <h3 className="qualification__title">Chief Organizer</h3>
                        <span className="qualification__subtitle">
                            Royal College Buddhist Brotherhood
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            2019 - 2020
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Qualifications
