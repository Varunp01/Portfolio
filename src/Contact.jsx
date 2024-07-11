import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMailBulk, faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import { faGoogle, faGoogleDrive, faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
    return (
        <div className="contactContainer">
            <div className="intocontainer">
                <div className="htmltag">&lt;h1&gt;</div>
                <div className="Intro"><h1>
                    <div className='space'>&nbsp;&nbsp;&nbsp;</div>
                    <div className='Varun'>C</div>
                    <div className='arun'>O</div>
                    <div className='run'>N</div>
                    <div className='un'>T</div>
                    <div className='n'>A</div>
                    <div className='Pandey'>C</div>
                    <div className='andey'>T</div>
                    <div className='space'>&nbsp;</div>
                    <div className='ndey'>M</div>
                    <div className='dey'>E</div>
                    <div className='space'>&nbsp;</div>
                    <div className='ey'><FontAwesomeIcon icon={faPhone} color="black"></FontAwesomeIcon></div>
                </h1></div>
                <div className="htmltag">&lt;h1&gt;</div>
            </div>
            <div className="contactcontainer">
            <FontAwesomeIcon icon={faLinkedin} color="black"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGoogle} color="black"></FontAwesomeIcon>
            </div>
        </div>
    )
}