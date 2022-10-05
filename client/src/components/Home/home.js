import { React, useState } from 'react'
import '../Home/home.css'
import image from '../../assests/image/streetart2.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/js/src/carousel'
import "bootstrap/dist/css/bootstrap.css"
import image1 from '../../assests/image/AZ-TouristPage.JPG'
import image2 from '../../assests/image/JavaScript-Calculator.JPG'
import image3 from '../../assests/image/Personal-Library.JPG'
import image4 from '../../assests/image/puppy.JPG'
import image5 from '../../assests/image/GenNext.JPG'
import link1 from '../../assests/image/link.png'
import link2 from '../../assests/image/github.png'


const Home = () => {
  const [show, setShow] = useState(true)
  // you can toggle true and false 
  const toggle = (e) => {
    e.preventDefault()

    show ? setShow(false) : setShow(true)
  }
  // onClick={toggle}
  return (
    <div >
      <body className="w3-light-grey">
        <div className="w3-content w3-margin-top" style={{ maxWidth: "2200px" }}>
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src={image} style={{ width: "100%" }} alt="Avatar" />
                  <h2 id='myname'>Oneida Galvez</h2>
                </div>
                <div id='info' className="w3-container">
                  <p id="title"><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo"></i>Full Stack Developer</p>
                  <p id='address'><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo"></i>Glendale, AZ</p>
                  <p id='email'><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo"></i>galvezoneida5@gmail.com</p>
                  <p id='phone'><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo"></i>623-878-5366</p>
                  <hr />

                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-indigo"></i>Skills</b></p>
                  <p>Adobe Illustrator</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>90%</div>
                  </div>
                  <p>HTML5</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "80%" }}>
                      <div className="w3-center w3-text-white">86%</div>
                    </div>
                  </div>
                  <p>CSS3</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "75%" }}>75%</div>
                    <div className="w3-center w3-text-white">86%</div>
                  </div>

                  <p>JavaScript</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>90%</div>
                  </div>

                  <p>Regular Expression (RegEx)</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>91%</div>
                  </div>

                  <p>ES6</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>84%</div>
                  </div>

                  <p>Bootstrap</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>86%</div>
                  </div>

                  <p>D3</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>78%</div>
                  </div>

                  <p>JQuery</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>77%</div>
                  </div>

                  <p>Mongoose</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>77%</div>
                  </div>

                  <p>Mongo DB</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>80%</div>
                  </div>

                  <p>Redux</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>81%</div>
                  </div>

                  <p>Express</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>83%</div>
                  </div>

                  <p>React</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>93%</div>
                  </div>

                  <p>Passport</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>82%</div>
                  </div>

                  <p>Node.js</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-indigo" style={{ width: "90%" }}>82%</div>

                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div id="experience" className="w3-twothird">

              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i> Summary</h2>
                <div className="w3-container">
                  <p>Full Stack Developer who is energetic, purpose driven and a dedicated team player.
                    Effective and motivated problem solver, at the deployment phase of a new and exciting career
                    path. Background in Psychology and a life long student focused on empowering, enhancing and motivating myself and others.</p>
                  <hr />
                </div>
              </div>
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>Work Experience</h2>
                {/* <div className="w3-container">
                  <h5 className="w3-opacity"><b>Web Developer Student & Teachers Assistant /Persevere  </b></h5>
                  <h6 className="w3-text-indigo"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June 2021 - <span className="w3-tag w3-indigo w3-round">Current</span></h6>
                  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                  <hr />
                </div> */}
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Televerde Sales Development Representative Team Lead/Campaign Champion  </b></h5>
                  <h6 className="w3-text-indigo"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2018- July 2021</h6>
                  <p>    • Managed team of agents and provided daily oversight of research and analysis
                    • Detail oriented, able to multi-task and organize strategically
                    • Experienced with campaigns integrated with marketing automation
                    • Observed and communicated constructive recommendation in calling techniques through collaboration, trend analysis and market insight
                    • Engaged in cold calling B2B generating opportunities and the creation of strategic campaigns for additional territories
                    • Excelled in the ability to learn quickly, accept feedback and the implementation of change to meet/exceed goals
                    .</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>ADOT Motor Vehicle Division/Customer Service Representative/Customer Service Representative Trainer  </b></h5>
                  <h6 className="w3-text-indigo"><i className="fa fa-calendar fa-fw w3-margin-right"></i> 2017 -  2018</h6>
                  <p> • Provided quality control, monitoring of calls and actionable feedback to agents
                    • Developed agents through training on ADOT procedure in accordance with Arizona Revised Statues
                    • Prioritized projects to meet deadlines in a high-paced environment
                    • Demonstrated effective problem-solving skills when dealing with complaints
                    • Responsible for providing accurate information, handling escalated calls and resolving customer or client complaints </p><br />
                </div>
              </div>
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>Education</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Persevere /Teachers Aide Upon Completion</b></h5>

                  <p>Attended Class 30 hours a week to become a Full Stack Developer focused on the MERN Stack.  Cerified in:
                    • Responsive Web Design (300 hours)
                    • JavaScript Algorithms and Data Structure (300 hours)
                    • Front End Libraries (300 hours)
                    • Data Visualization (300 hours)
                    • API and Microservices (300 hours)
                    • Information Security and Quality Assurance (300 hours)</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Rio Salado Community College</b></h5>
                  <p> Addiction Counselor AAS</p>
                  <hr />
                </div>
              </div>
              <div className="w3-container">
                <h2 id="projects">Projects</h2>
                <div id='card1' className="w3-card-4" style={{ width: "33%" }}>
                  <img src={image1} style={{ width: "100%" }} />
                </div>
                <div id='card2' className="w3-card-4" style={{ width: "33%" }}>
                  <img src={image2} style={{ width: "100%" }} />
                </div>
                <div id='card3' className="w3-card-4" style={{ width: "33%" }}>
                  <img src={image3} style={{ width: "100%" }} />
                </div>
                <div id='card4' className="w3-card-4" style={{ width: "33%" }}>
                  <img src={image4} style={{ width: "100%" }} />
                </div>
                <div id='card5' className="w3-card-4" style={{ width: "33%" }}>
                  <img src={image5} style={{ width: "100%" }} />
                </div>
              </div>

            </div>
          </div>
        </div>
        <br />
        <footer className="w3-container w3-indigo w3-center" id="foot">
          <p>Find me on social media.</p>
          <div className='col' id='footer-links'>
            <img src={link1} alt="Linkedin" id='image-link' />
            <img src={link2} alt="Github" id='image-git' />
          </div>
        </footer>
      </body>
    </div>
  )
}
export default Home