import React, { useState } from 'react';
import Footer from './Footer';
import SinglePortfolioItem from './Utilities/SinglePortfolioItem';
import PortfolioPopup from './Utilities/PortfolioPopup';

export default function Portfolio() {

    const [image, setImage] = useState("");
    const [imageCaption, setImageCaption] = useState("");
    const [activeClass, setActiveClass] = useState("");

    const popupHandler = (e) => {
        e.preventDefault();
        const getImage = e.target.getAttribute('data-image');
        const getImageCaption = e.target.getAttribute('data-caption');
        setActiveClass('active');
        setImage(getImage);
        setImageCaption(getImageCaption);
    }

    //popup close

    const PopupClose = () => {
        setActiveClass('');
        setImage('');
    }

    return (
        <>
            <div className="page-wrapper">
                <section className="section section-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="section-head">
                                    <span>TAKE A LOOK AT</span>
                                    <h2>Projects</h2>
                                </div>
                            </div>
                        </div>

                        <ul className="list-items-container row">
                            <SinglePortfolioItem
                                portfolioImg='https://i.ibb.co/pP31g4V/eshiki-92a8d-web-app.png'
                                title='eShiki.com'
                                description='A Coding Learning Platform.'
                                popupHandler={popupHandler} />
                            <SinglePortfolioItem
                                portfolioImg='https://i.ibb.co/1mcswdw/used-ss.png'
                                title='Used'
                                description='Used is a used car selling platform.'
                                popupHandler={popupHandler} />
                            <SinglePortfolioItem
                                portfolioImg='https://i.ibb.co/sRH3r5k/law-man-ss.png'
                                title='Law Man'
                                description='Lawyer service review website.'
                                popupHandler={popupHandler} />
                        </ul>
                        {/* <!-- .projects-container --> */}
                    </div>
                </section>
                <Footer />
                <PortfolioPopup Image={image} ImageCaption={imageCaption} PopupActive={activeClass} PopupClose={PopupClose} />
            </div>
        </>
    )
}
