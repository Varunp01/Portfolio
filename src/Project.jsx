import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileButton } from '@fortawesome/free-solid-svg-icons'
import './Project.css'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Project() {
    return (
        <div className="projectContainer">
            <div className="intocontainer">
                <div className="htmltag">&lt;h1&gt;</div>
                <div className="Intro"><h1>
                    <div className='space'>&nbsp;&nbsp;&nbsp;</div>
                    <div className='Varun'>M</div>
                    <div className='arun'>Y</div>
                    <div className='space'>&nbsp;</div>
                    <div className='run'>P</div>
                    <div className='un'>R</div>
                    <div className='n'>O</div>
                    <div className='Pandey'>J</div>
                    <div className='andey'>E</div>
                    <div className='ndey'>C</div>
                    <div className='dey'>T</div>
                    <div className='ey'>S</div>
                </h1></div>
                <div className="htmltag">&lt;h1&gt;</div>
            </div>
            <div className="blockContainer">
                <div className="Project1">
                    <div className="contentImg"><img src="projects/Animation.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Mini-Front-End-Projects.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project2">
                    <div className="contentImg"><img src="projects/portfolio.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Portfolio.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project3">
                    <div className="contentImg"><img src="projects/tic-tac-toe.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Tic-Tac-Toe-React.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project4">
                    <div className="contentImg"><img src="projects/Task-Wave.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Mini-Front-End-Projects/tree/73e17b3a532f44018414d1ae702c4ba16a31a1ea/To-Do-List' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project5">
                    <div className="contentImg"><img src="projects/Spotify Clone.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Major-Front-End-Projects/tree/main/1-Spotify%20clone' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project6">
                    <div className="contentImg"><img src="projects/Weather App.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Major-Front-End-Projects/tree/main/2-Weather%20App' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project7">
                    <div className="contentImg"><img src="projects/Animal Factory.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Animal-Factory.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project8">
                    <div className="contentImg"><img src="projects/Bookshelf.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Personal-Bookshelf.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project9">
                    <div className="contentImg"><img src="projects/React Quiz.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/Quiz-react.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="Project10">
                    <div className="contentImg"><img src="projects/wanderlust.png"></img></div>
                    <br></br>
                    <div className="icons">
                    <a href='' className='LIVE'><FontAwesomeIcon icon={faMobileButton} color="black"></FontAwesomeIcon></a>
                    <a href='https://github.com/Varunp01/WanderLust-Project.git' className='GITHUB'><FontAwesomeIcon icon={faGithub} color="black"></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
