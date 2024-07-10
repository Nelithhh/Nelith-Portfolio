import React from 'react';
import "./Portfolio.css";
import { Data } from "./Data";

function Portfolio() {
  return (
    <section className="portfolio container section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My projects</span>

        <div className="portfolio__container">
            {Data.map(({ id, image, title, description }) => {
                return (
                    <div className="portfolio__card" key={id}>
                        <img src={image} alt="" className="portfolio__img" />

                        <h3 className="portfolio__name">{title}</h3>
                        <p className="portfolio__description">{description}</p>
                    </div>
                );
            })}
        </div>
    </section>
  )
}

export default Portfolio
