import React from 'react'
import './about.css'

export default function AboutMe() {
    return (
        <div className='mainDiv'>
            <h2 className="pageHeading">About Me</h2>
            {/* <p className="pageSubHeading">Why choose me?</p> */}
            <div className='containerDiv'>
                {/* <div>
                    <img src=".././akash.jpeg" alt="" />
                </div> */}
                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                    I have diverse set of skills ranging from HTML CSS JavaScript 
                    React to ExpressJs MongoDb NodeJs</p>
                    <ul>
                        <li>I have worked on several different projects solo as well as collaboratively</li>
                        <li>Passionate about implementing and launching new projects</li>
                        <li>Ability to translate business requirements into technical solutions</li>
                    </ul>
                   <p className="aboutme">Looking to start the career as a web developer</p>
                    <div className='aboutBtnDiv'>
                        <button className='hireMeBtn'>Hire Me</button>
                        <a href="resume.pdf" download='resume.pdf'>
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
