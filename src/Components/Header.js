import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AsideFooter from './AsideFooter';
import HeaderImg from '../images/palashnath880.png';
import { FaHome, FaGraduationCap, FaPhoneAlt, FaWrench } from 'react-icons/fa';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle('aside-open', isMenuOpen);
    }, [isMenuOpen]);

    const mobileNavHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            {/* <!-- START: Aside --> */}
            <aside className="aside">
                {/* <!-- START: NAVBAR --> */}

                <div className="nav-wrapper">
                    <div className="navbar-toggler" onClick={mobileNavHandler}>
                        <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="60">
                            <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path className="line middle" d="m 30,50 h 40" />
                            <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </div>
                    <nav className="navbar text-center align-items-center justify-content-center">
                        <div className="collapse navbar-collapse show" id="navbarCollapse">
                            <div className="about-avatar mb-5">
                                <NavLink to='/'>
                                    <img src={HeaderImg} alt="Palash Nath" className="img-fluid mx-auto d-block shadow-sm rounded-full" />
                                </NavLink>
                                <div className="about-avatar-details mt-4">
                                    <h1>Palash Nath</h1>
                                    <p className="badge">Web Developer</p>
                                </div>

                            </div>
                            <ul className="navbar-nav mx-auto" onClick={() => setIsMenuOpen(false)}>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>
                                        <FaHome />
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/projects'>
                                        <FaGraduationCap />
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/services'>
                                        <FaWrench />
                                        Services
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to='/blog'>
                                        <FaPencilAlt />
                                        Blog
                                    </NavLink>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/contact'>
                                        <FaPhoneAlt />
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <AsideFooter />
                    </nav>
                </div >
                {/* < !--END: NAVBAR-- > */}
            </aside >
            {/* < !--START: Aside-- > */}
            {/* Page overlay */}
            {/* <div className="page-overlay">
                <span className="overlay-1"></span>
                <span className="overlay-2"></span>
            </div> */}
        </>
    )
}
