import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Layout.css'
import 'animate.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
export default function Layout(){
    return(
        <>
            <div className="layoutContainer">
                <div className="logo">
                    <div className="cover1">
                        <div className="cover2">
                            <Link to="/"><img src="https://drive.google.com/file/d/1Q2zJA4nJp_Tj8sAc4vkJsHHC3peOpacK/view?usp=drive_link" alt="logo"/></Link>
                            {/* <Link to="/"><img src="../Assets\Logo.jpg" alt="logo"/></Link> */}
                        </div>
                    </div>
                </div>
                <div className="tags">
                    <Link to="/about"><span className="about">About</span></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/projects"><span className="projects">Projects</span></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/contact"><span className="contact">Contact</span></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                        <a className="social-icon" href="https://github.com/Varunp01"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        <a className="social-icon" href="https://www.linkdin.com/in/varun-pandey-109514274"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    </span>
                </div>
            </div>
            <div className="body"></div>
            <div className="footer">
                <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>&nbsp;2024 VARUN PANDEY
            </div>
        <Outlet></Outlet>
        </>
    )
}