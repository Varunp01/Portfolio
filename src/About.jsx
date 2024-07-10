import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import { MutatingDots } from 'react-loader-spinner';
import { faBootstrap, faCss3, faCss3Alt, faGitAlt, faGithub, faGithubSquare, faGitSquare, faHtml5, faJsSquare, faNodeJs, faReact, faWebflow } from "@fortawesome/free-brands-svg-icons";
import { faC, faCirclePlus, faComputer } from "@fortawesome/free-solid-svg-icons";
export default function () {
    return (
        <div className="AboutContainer">
            <div className="intocontainer">
                <div className="htmltag">&lt;h1&gt;</div>
                <div className="Intro"><h1>
                    <div className='space'>&nbsp;&nbsp;&nbsp;</div>
                    <div className='Varun'>A</div>
                    <div className='arun'>B</div>
                    <div className='run'>O</div>
                    <div className='un'>U</div>
                    <div className='n'>T</div>
                    <div className='space'>&nbsp;</div>
                    <div className='Pandey'>M</div>
                    <div className='andey'>E</div>
                </h1></div>
                <div className="htmltag">&lt;h1&gt;</div>
            </div>
            <div className="cubeContainer">
                <div className="cubeSpinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9"></FontAwesomeIcon>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGithubSquare} color="black"></FontAwesomeIcon>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faComputer} color="DD0031"></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="AboutContent">
                <MutatingDots visible={true} height="100" width="100" color='#4fa94d' secondaryColor='#4fa94d' ariaLabel='mutating-dots-loading' wrapperClass='MutatingDots'></MutatingDots>
                <h1>Varun Pandey</h1>
                <div>
                    <br></br>
                    I am a very ambitious Full-Stack Developer, looking for a role of Web Developer with the opportunity to work with the latest technologies on challenging and diverse projects.
                    <br></br>
                    <br></br>
                    I am eager to contribute to the creation of user-centric and impactful web experiences. I am passionate about collaborating with professionals and continuously learning within the dynamic and ever-evolving web development landscape. Through dedication and hard work, I am determined to make a valuable contribution to your team's success.
                    <br></br>
                    <br></br>
                    I am a confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </div>
            </div>
        </div>
    )
}