import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title"></h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/nelithhhh/" className="home__social-icon" target='_blank'>
                <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/nelith-karunarathne-a32b5a186/" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/Nelithhh" className="home__social-icon" target='_blank'>
                <i class="uil uil-github-alt"></i>
            </a>
            </div>

            <span className='footer__copy'>
                &#169; Nelith Karunarathne. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
