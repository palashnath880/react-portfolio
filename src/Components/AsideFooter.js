import React from 'react';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function AsideFooter() {
    return (
        <>
            <div className="aside-footer">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a href="https://web.facebook.com/pknath.palash/" rel="noreferrer" target='__blank'><FaFacebook /></a></li>
                    <li className="list-inline-item"><a href='https://github.com/palashnath880/' rel="noreferrer" target='__blank' ><FaGithub /></a></li>
                    <li className="list-inline-item"><a href='https://www.twitter.com/palashnath880/' rel="noreferrer" target='__blank'><FaTwitter /></a></li>
                    <li className="list-inline-item"><a href='https://www.linkedin.com/in/palashnath880/' rel="noreferrer" target='__blank'><FaLinkedin /></a></li>
                </ul>
            </div>
        </>
    )
}
