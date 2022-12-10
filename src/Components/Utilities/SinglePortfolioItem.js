import React from 'react';
import { Link } from 'react-router-dom';

export default function SinglePortfolioItem({ portfolioImg, title, popupHandler, description }) {
    return (
        <>
            <li className="col-6 col-md-4 list-item" data-groups="all slideshow">
                <figure className='shadow rounded overflow-hidden'>
                    <img src={portfolioImg} alt="Portfolio Thumbnail" />
                    <figcaption>
                        <Link to='/' data-image={portfolioImg} data-caption={title} className="simple-ajax-popup" onClick={popupHandler}></Link>
                        <div className="caption-inner">
                            <h3 className="portfolio-item-title">{title}</h3>
                            <div className="portfolio-item-desc">{description}</div>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </>
    )
}
