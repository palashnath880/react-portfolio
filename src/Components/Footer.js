import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="footer section section-light">
                <div className="container">
                    <p className="copyright text-center mb-0"> &copy; {year !== null ? year : ''} | Develop By <Link to={'/'}>Palash</Link> </p>
                </div>
            </footer>
        </>
    )
}
