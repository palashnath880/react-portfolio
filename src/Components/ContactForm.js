import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toast } from 'bootstrap';
import { useEffect } from 'react';

export default function ContactForm() {

    const form = useRef();
    const toastRef = useRef();
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(true);

    const EMAIL_JS_SERVCICE_ID = process.env.REACT_APP_EMAIL_JS_SERVCICE_ID;
    const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
    const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

    console.log(process.env);

    const formHandler = (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs.sendForm(EMAIL_JS_SERVCICE_ID, EMAIL_JS_TEMPLATE_ID, form.current, EMAIL_JS_PUBLIC_KEY)
            .then(res => {
                setLoading(false);
                setToast(true);
            }, error => {
                setLoading(false);
                console.error(error);
            });
    }
    useEffect(() => {
        const myToast = toastRef.current
        let bsToast = Toast.getInstance(myToast);

        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, { autohide: false })
            // hide after init
            bsToast.hide()
            setToast(false)
        }
        else {
            // toggle
            toast ? bsToast.show() : bsToast.hide()

        }
    }, [toast]);

    return (
        <>
            <form method="post" onSubmit={formHandler} ref={form} id="contactForm" data-toggle="validator">
                <div className="contact-form--wrap">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s">
                                <input
                                    name="name"
                                    type="text"
                                    className="form-control rounded-0 shadow-none b-box"
                                    placeholder="Your Name *"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control rounded-0 shadow-none b-box"
                                    placeholder="Your Email *"
                                />
                            </div>
                        </div>
                        {/* 
                        <div className="col-md-12">
                            <div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                                <input
                                    name="subject"
                                    type="text"
                                    className="form-control rounded-0 shadow-none b-box"
                                    placeholder="Your Subject.."
                                />
                            </div>
                        </div> */}

                        <div className="col-md-12">
                            <div className="form-group mt-3 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <textarea
                                    name="message"
                                    id="comments"
                                    rows="4"
                                    className="form-control rounded-0 shadow-none b-box"
                                    placeholder="Your message..."
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="col-lg-12 text-center mt-4 mb-5  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <button disabled={loading} type="submit" className="submit-btn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* toast */}
            <div className="toast position-fixed top-0 end-0 m-4 rounded-2 overflow-hidden" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
                <div className="toast-header bg-success py-3 border-0">
                    <strong className="me-auto text-light">Mail Send Successfully.</strong>
                    <button type="button" onClick={() => setToast(false)} className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </>
    )
}
