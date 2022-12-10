import React from 'react'
import Footer from './Footer'
import ServicesItem from './Utilities/ServicesItem'
import { FaPaintBrush, FaLaptop } from 'react-icons/fa';

export default function Services() {
    return (
        <>
            <div className="page-wrapper">
                {/* <!-- START: SERVICES --> */}
                <section className="section section-light section-services">
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
                <Footer />
            </div>
        </>
    )
}
