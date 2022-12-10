import React from 'react'
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function Contact() {
    return (
        <>
            <div className="page-wrapper">

                {/* <!-- START: CONTACT --> */}
                <section className="section section-light section-contact" id="contact">
                    <div className="container">
                        <div className="section-head">
                            <span>say Hello</span>
                            <h2>Contact </h2>
                        </div>
                    </div>

                    <div className="contact-Otherdetails section-dark">
                        <div className="container">
                            <div className="contact-details mt-5">
                                <h5 className="section-subHead pt-5 mb-4"> Get in Touch</h5>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s">
                                            <div className="mb-3">
                                                <i className="lni-mobile"></i>
                                            </div>
                                            <div className="mt-2">
                                                <a href="tel:+8801304780828" className="">+8801304780828</a>
                                                <p className="mt-2">Call Us</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                                            <div className="mb-3">
                                                <i className="lni-envelope"></i>
                                            </div>
                                            <div className="mt-2">
                                                <a href="mailto:palashnath880@gmail.com">palashnath880@gmail.com</a>
                                                <p className="mt-2">Email Us</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form mt-5">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- END: CONTACT --> */}


                {/* <!--START: FOOTER--> */}
                <Footer />
                {/* <!--END: FOOTER--> */}
            </div>
        </>
    )
}
