import React from 'react';
import Footer from './Footer';
import AboutImg from '../images/about.png';
import 'react-circular-progressbar/dist/styles.css';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import resume from '../images/palash-nath-resume.pdf';

export default function Home() {
    return (
        <>
            <div className="page-wrapper">

                {/* <!-- START: HOME --> */}
                <section className="section-home " id="home" style={{ backgroundPosition: '50 % -12px' }}>
                    <div className="glass flex flex-column " >
                        <span>Palash Nath</span>
                        <Link
                            to={resume}
                            className='fs-6 bg-light text-dark fw-semibold border-0 py-2 px-4 text-uppercase'
                            style={{ letterSpacing: '3px' }}
                            target='__blank'
                            download={true}
                        >Download Resume</Link>
                    </div>
                </section>
                {/* <!-- END: HOME --> */}

                {/* <!-- START: ABOUT --> */}
                <section className="section section-about" id="about">
                    <div className="container">
                        <div className="section-head">
                            <span>Get to know</span>
                            <h2>About Me</h2>
                        </div>

                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img className="about-img" src={AboutImg} alt="About thumbnail" />
                            </div>
                            <div className="col-md-6">
                                <div className="about-desc wow fadeInUp" data-wow-duration="1s" data-wow-delay="500ms">
                                    <div className="about-desc-content">
                                        <h1 className="font-weight-light mb-5">I'm Palash Nath</h1>
                                        <p className="font-weight-light my-3">I'm born in Chittagong, Bangladesh. I have 2 years of experience in the web development field. I'm expertise with HTML, CSS3, JavaScript, Bootstrap, Tailwind CSS, jQUery, React.js and Node.js and comfortable with php and mysql. </p>
                                    </div>

                                    <div className="about-desc-more text-left mt-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Age : </b>
                                                    <span>22</span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Location : </b>
                                                    <span>Chittagong, Bangladesh</span>
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Degree : </b>
                                                    <span>Master</span>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Skype : </b>
                                                    <a href="tel:beingeorge">beingeorge</a>
                                                </div>
                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Phone : </b>
                                                    <a href="tel:+8801304780828">+8801304780828</a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="about-desc-info">
                                                    <b>Email :</b>
                                                    <a href="mailto:palashnath880@gmail.com">palashnath880@gmail.com</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Skills />
                    </div>
                </section>
                {/* <!-- END: ABOUT --> */}

                {/* <!-- START: SERVICES --> */}
                <section className="section section-dark section-services" id="services">
                    <div className="container">
                        <div className="section-head">
                            <span>WHAT I DO</span>
                            <h2>My Services</h2>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-6 col-lg-6">
                                <div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s">
                                    <div className="mt-4">
                                        <h5 className="mb-0">Front-end Development</h5>
                                        <p className=" mt-3">Front-end web development, also known as client-side development.Creating a website or web application UI with HTML, CSS, and JavaScript, Bootstrap, Tailwind CSS, React.js so that a user can directly view and interact with them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="services-list cursor-pointer b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                                    <div className="mt-4">
                                        <h5 className="mb-0">Back-end Development</h5>
                                        <p className=" mt-3">Back-end development refers to the development of server-side logic that powers websites and web apps from behind the scenes. Backend development with node.js, express.js, and PHP and used MySQL and MongoDB as databases.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6">
                                <div className="services-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                                    <div className="mt-4">
                                        <h5 className="mb-0">WP Theme & Plugin Development</h5>
                                        <p className=" mt-3">I have lots of experience with WordPress themes and plugin development.I have been working in this field for 2 years.I can any kind of plugin and theme develop.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END: SERVICES --> */}

                {/* <!--START: FOOTER--> */}
                <Footer />
                {/* <!--END: FOOTER--> */}
            </div >
        </>
    )
}
