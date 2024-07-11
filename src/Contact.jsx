import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMailBulk, faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import { faGoogle, faGoogleDrive, faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




export default function Contact() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_r568v69', 'template_77swjcm', form.current, {
          publicKey: 'shlbNfldynS6FvqKJ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("YOUR EMAIL IS SENT!");
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("SOMETHING IS WRONG WITH THE EMAIL SERVICE...");
          },
        );
    };
  
    
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
            <div className="blockContainer">
                <div className="contactForm">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li>THIS GOOGLE FORM WORKS. GIVE IT A TRY</li>
                        <li className="half"><input type="text" name="user_name" placeholder="Name" required/></li>
                        <li className="half"><input type="email" name="user_email" placeholder="Email" required/></li>
                        <li><input type="text" name="subject" placeholder="subject" required/></li>
                        <li><textarea name="message" placeholder="message" required/></li>
                        <li><input type="submit" className="button" value="SEND"/></li>
                    </ul>
                </form>
            </div>
            </div>
        </div>
    )
}