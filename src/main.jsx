import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css"
import logo from './img/logo.svg';
import lamp from './img/lamp.svg';
// import twoMen from './img/two-men.svg';
// import keyboard from './img/keyboard.svg';
// import bookshelves from './img/house-bookshelves.svg';
import manAndWoman from './img/man-and-woman.svg';
import dollar from './img/dollar.svg';
import womanDoctor from './img/woman-doctor.svg';
import price599 from './img/5.99.svg';
import lesson from './img/lesson.svg';
import prise1299 from './img/12.99.svg';
import prise2099 from './img/20.99.svg';
import onlineLesson from './img/online-lesson.svg';
import child from './img/child.svg';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
    <header>
        <div className="container">
          <div className="navigation">
            <a href="#"><img src={logo} alt="photo" /></a>
            <nav>
              <ul className="navigation-ul">
                <li className="navigation-li"><a className="navigation-a" href="#home">Home</a></li>
                <li className="navigation-li"><a className="navigation-a" href="#skills">Skills</a></li>
                <li className="navigation-li"><a className="navigation-a" href="#about-us">About Us</a></li> 
                <li className="navigation-li"><a className="navigation-a" href="#pricing">Pricing</a></li>
                <li className="navigation-li"><a className="navigation-a" href="#contact-us">Contacts</a></li>
              </ul>
            </nav>
            <a className="navigation-right-a" href="#">Let`s Talk</a>
          </div>
        </div>
      </header>


    <main>
    <section id="home" className="first-section">
          <div className="container">
            <div className="div-for-first-section-flex">
              <div className="first-section-left-box">
                <h2 className="first-h2">
                  Learn <br/>
                  Any Foreign <br/>
                  Language
                </h2>
                <img className="img-of-lamp" src={lamp} alt="photo" />
                <p className="first-p">With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
                <a className="first-a-in-section" href="#">Get Started</a>
              </div>
              <div className="first-section-right-box">
                <img src={manAndWoman} alt="photo" />
              </div>
                </div>


            </div>
        {/* </div> */}
    </section>


    <section id="about-us" className="third-section">
       <div className="container">
        <div className="flex-for-third-section">
            <div className="left-box-in-third-section">
                <h3 className="second-h3">About Us</h3>

                
                <p className="third-section-p">The model offers a framework for discussing problems related to the users experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>

                <div className="small-box-in-left">
                    <div className="small-boxes-in-left">
                        <p className="for-number-p">800</p>
                        <p className="third-section-p-3">Pupils</p>
                    </div>

                    <div className="small-boxes-in-left">
                        <p className="for-number-p-2">18</p>
                        <p className="third-section-p-2">Teachers</p>
                    </div>
                    
                    <div className="small-boxes-in-left">
                        <p className="for-number-p-2">6</p>
                        <p className="third-section-p-2">Foreign languages</p>
                    </div>
                </div>
          </div>

          <div className="right-box-in-third-section">
          <img src={dollar} alt="photo" />
          </div>
        </div>
       </div>
    </section>

    <section id="pricing" className="fourth-section">
        <h3 className="first-h3">Pricing</h3>

        <div className="container">
            <div className="flex-for-fourth-section">

                <div className="box-in-flex-fourth-section">
                <img src={womanDoctor} alt="photo" />

                    <h4>Self-study online course</h4>
                    <p className="second-section-p">Start learning English online in live classNamees
                        with qualified EC teachers and students 
                        from all over the world.
                    </p>

                    <div className="box-in-price">
                    <img className="img-of-price" src={price599} alt="photo" />
                        <p className="fourth-section-p"> per month</p>
                    </div>
                </div>

                <div className="box-in-flex-fourth-section">
                <img src={lesson} alt="photo" />

                    <h4>Live online classNamees</h4>
                    <p className="second-section-p">Interactive group classNamees with expert
                        teachers. Free 7-day trial
                    </p>

                    <div className="box-in-price">
                    <img className="img-of-price" src={prise1299} alt="photo" />
                        <p className="fourth-section-p"> per month</p>
                    </div>
                </div>

                <div className="box-in-flex-fourth-section">
                <img src={onlineLesson} alt="photo" />

                    <h4>Personal Tuition</h4>
                    <p className="second-section-p">Online one-to-one English tutoring – enjoy
                        our first session for only $1
                    </p>

                    <div className="box-in-price">
                    <img className="img-of-price" src={prise2099} alt="photo" />
                        <p className="fourth-section-p"> per month</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section id="contact-us" className="fifth-section">
        <div className="container">
            <div className="flex-for-fifth-section">

                <div className="fifth-section-left-box">
                <img src={child} alt="photo" />
                </div>

                <div className="fifth-section-right-box">

                    <h3 className="second-h3">Contact Us</h3>

                    <p className="fifth-section-p">Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>

                   <div className="small-fifth-right-div">
                        <form >
                            <input placeholder="Enter Your E-mail" type="email" name="email" />
                        </form>

                        <button className="fifth-section-button">Subscribe</button>
                   </div>

                    
                </div>
            </div>
        </div>
    </section>
</main>
   

<footer>
    <div className="container">
        <div className="line"></div>

        <div className="flex-for-footer">
            <div className="left-box-footer">
            <img src={logo} alt="photo" />
            </div>

           <div className="right-box-footer">
                <p className="footer-p">Terms and Conditions • Privacy Policy • Cookie Policy</p>
           </div>

        </div>
    </div>
  </footer>
    </div>
  </React.StrictMode>
);
