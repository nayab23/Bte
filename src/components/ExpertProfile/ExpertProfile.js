import React, { Component } from 'react';
import banarMan from '../app_assets/img/images/banner/man.png';
import about1 from '../app_assets/img/images/about/1.png';
import shapeL2 from '../app_assets/img/images/shapes/light/2.png';
import shapeL3 from '../app_assets/img/images/shapes/light/3.png';
import ishape from '../app_assets/img/images/shapes/i-shape.png';
import portfolios1 from '../app_assets/img/images/portfolios/1.png';
import portfolios2 from '../app_assets/img/images/portfolios/2.png';
import portfolios3 from '../app_assets/img/images/portfolios/3.png';
import portfolios4 from '../app_assets/img/images/portfolios/4.png';
import portfolios5 from '../app_assets/img/images/portfolios/5.png';
import portfolios6 from '../app_assets/img/images/portfolios/6.png';
import user from '../app_assets/img/client-user.svg';
import blog1 from '../app_assets/img/images/blog/1.png';
import blog2 from '../app_assets/img/images/blog/2.png';
import blog3 from '../app_assets/img/images/blog/3.png';
import Slider from 'react-slick';
import { FaFacebookF, FaDribbble,FaTwitter, FaLinkedinIn, FaEnvira, FaCaretRight, FaPalette, FaLaptopCode,
 FaCode, FaQuoteLeft, FaPlus, FaStar, FaTicketAlt, FaLink, FaSearchPlus} from "react-icons/fa";  
import { IoMdPerson, IoLogoApple,IoLogoGoogle } from "react-icons/io";
import { AiOutlineDollar, AiOutlineShareAlt } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";
import ProjectDetailModal from './ExpertEditModal/ProjectDetailModal';
import EditEaducation from './ExpertEditModal/EditEaducation';
import ProjectDetailLightBox from './ExpertEditModal/ProjectDetailLightBox';

class ExpertProfile extends Component { 
    render() {
      var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false
            }
          },
          {
            breakpoint: 401,
            settings: {
              slidesToShow: 1,
              dots: false
            }
          }
        ]
      }
      
        return (
              <div className="container-fluid-small topclassName">
    <main className="main-content main-content--dashboard">
      <div className="container container-fluid-small"   style={{overflow:"hidden"}}>
  {/* <!--banner-area start--> */}
  <div id="home" className="banner-area banner-shape banner-white fix bg-pf">
    <div className="container ps-relative">
      <div className="row profile-view">
          {/* <!--banner-left--> */}
          <div className="banner-left">
            <div className="banner-text banner-text-light">
              <h4>I am</h4>
              <h2 className="cd-headline clip is-full-width">
                <span className="cd-words-wrapper">
                  <b className="is-visible">Faisal, Asad</b>
                  <b>Passionate</b>
                  <b>Developer</b>
                  <b>Designer</b>
                </span>
              </h2>
              <br/>
              <p>Senior Product Designer Based On Pakistan Islamabad</p>
              <div className="mt-4">
                <input type="button" className="button btn-common mr-20 button--post frm______a" id="review"
                value="Download Resume" data-modal-id="ticket-posted-modal"/>
                <input type="button" className="button-white d-md-inline max-200 end-button" id="review"
                  value="Hire Me" data-modal-id="ticket-posted-modal" />
              </div>
            </div>
            <div className="social-icons text-light mt-4">
              <h5>Find Me On</h5>
              <div className="profile-social-link">
              <div>
              <a href="#"> <FaFacebookF className="icon-facebook"/> </a>
              <a href="#"> <FaTwitter className="icon-behance"/></a>
              <a href="#"> <FaLinkedinIn className="icon-linkedin"/></a>
              <a href="#"> <FaPlus className="icon-linkedin"/></a>
              </div>
              <div className="social-popup">
                <MDBPopover
                  placement="top"
                  popover
                  clickable
                  id="popper5"
                  style={{top: "-70px !important"}}
                >
            <h4 className="popo-share-link">share</h4>
              <div>
                <MDBPopoverBody>
              <a href="#"> <FaFacebookF className="icon-facebook"/> </a>
              <a href="#"> <FaTwitter className="icon-behance"/></a>
              <a href="#"> <FaLinkedinIn className="icon-linkedin"/></a>
              <a href="#"> <FaPlus className="icon-linkedin"/></a>
                </MDBPopoverBody>
              </div>
            </MDBPopover>
            </div>
              </div>
            </div>
          </div>
          {/* <!--banner-right--> */}
          <div className="banner-w">
          <div className="banner-right d-none d-lg-block">
            <div className="banner-image d-none d-lg-block">
              <div className="b-shape-3"></div>
              <div className="banner-image-inner">
                <img src={banarMan} alt="" />
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  <br/>
  {/* <!--fact-area start--> */}
  <div className="fact-area bg-dark-light bg-pf">
    <div className="container" style={{marginTop: "29px"}}>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="fact-single mb-sm-60">
            <FaStar className="fact-icon icon-trophy" />
            <h3>5.0</h3>
            <p>Current Rating</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="fact-single mb-sm-60">
            <FaTicketAlt className="fact-icon icon-rocket"/>
            <h3>10<span className="counter-add">+</span></h3>
            <p>Tickets Completed</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="fact-single mb-sm-60">
            <IoMdPerson className="fact-icon icon-user" />
            <h3> <span className="counter">9</span><span className="counter-add">+</span></h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="fact-single">
            <AiOutlineDollar className="fact-icon icon-coffee-cup" />
            <h3> <span className="counter">5</span>K<span className="counter-add">+</span></h3>
            <p>Earnings</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  {/* <!--about-start--> */}
  <div className="fix">
    <div id="about" className="about-area ps-relative bg-pf">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title text-light mb-25">
            <h4 className="contact-title mb2">About Me </h4>
              <h2 className="">Awarded Designer</h2>
            </div>
            <div className="about-text text-dark mb-sm-150">
              <p>I create User Interfaces according to solve specific problems. I specialize in 
              Creative, User-Friendly, and Trending User Interfaces. I have 5+ years of 
              experience Designing Beautiful, Eye-catchy, and modern trending websites.</p>
              <p>If you have any task regard for these skills, please don't hesitate to contact me. 
              I'll be happy to participate!</p>
              <div className="mt-40">
               <a href="#" className="video-box venobox wow slideInUp" data-wow-duration="3s" data-wow-delay="2s" data-vbtype="video"> 
                  <span className="video-icon"><FaCaretRight /></span>
                  <span className="video-text">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4 offset-lg-1 bg-pf">
            <div id="parallax" className="image-with-bg">
              <img src={about1} alt=""/>
            </div>
            <div className="i-shape ds-xs-none"><img src={shapeL2} alt=""/></div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    {/* <!-- Skills start--> */}
    <div className="skills-experiences-area bg-dark-light ps-relative bg-pf">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-sm-40">
            <h4 className="contact-title mb-2">My Skills </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 mt-30">
            <div className="skills-list hover-border">
              <div className="modal-skills-wrapper">
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst
                  </button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization
                  </button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">User Interface Design</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">User Experience Design</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">UX Research</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Front-end Design</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">UX Copyrighting</button>
                  <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Logo Design</button>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br/>
    {/* <!--Education start--> */}
    <div className="skills-experiences-area9 ps-relative bg-pf">
      <div className="round-shape-dashed ds-xs-none"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-sm-40">
            <h4 className="contact-title mb-2">Education </h4>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single">
              <h4>Diploma in Arts</h4>
              <span>Envato Academy</span>
              <small>Jan 2012 - Dec 2015</small>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single">
              <h4>Visual Grammer</h4>
              <span>Art University</span>
              <small>Jan 2008 - Mar 2011</small>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single">
              <h4>UI Design Intensive </h4>
              <span>Oxford University</span>
              <small>Sep 2016 - May 2018</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  <br/>
  {/* <!-- Experiences start--> */}
  <div className="skills-experiences-area9 ps-relative bg-pf">
      <div className="e-shape ds-xs-none" style={{bottom: "44px"}}><img src={shapeL3} alt=""/></div>
      <div className=" ds-xs-none"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-sm-40">
            <h4 className="contact-title mb-2">Experiences</h4>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single d-flex ">
              <div className="edu-icon">
                <span><IoLogoGoogle /></span>
              </div>
              <div className="edu-text">
                <h4>Diploma in Arts</h4>
                <span>Envato Academy</span>
                <small>Jan 2012 - Dec 2015</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single d-flex ">
              <div className="edu-icon">
                <span><FaEnvira /></span>
              </div>
              <div className="edu-text">
                <h4>Visual Designer</h4>
                <span>Art University</span>
                <small>Jan 2008 - Mar 2011</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single d-flex ">
              <div className="edu-icon">
                <span><FaEnvira /></span>
              </div>
              <div className="edu-text">
                <h4>Visual Designer</h4>
                <span>Art University</span>
                <small>Jan 2008 - Mar 2011</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single d-flex mt-30">
              <div className="edu-icon">
                <span><IoLogoApple /></span>
              </div>
              <div className="edu-text">
                <h4>UI Design Intensive </h4>
                <span>Oxford University</span>
                <small>Sep 2016 - May 2018</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <br/>
   {/* <!--services start--> */}
   <div id="services" className="services-area bg-darks ps-relative bg-pf">
    <div className="round-shape-dashed left ds-xs-none"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title mb-95">
            <h4 className="contact-title mb-2">Services </h4>
            <h2>What I Offer</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="service-single hover-border">
            <FaPalette className="service-icon icon-paint-palette" />
            <h4>UX UI Design</h4>
            <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismoddiam.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-single hover-border mt-sm-95 mt-sm-0">
            <FaLaptopCode className="service-icon icon-web-design"/>
            <h4>Web Design</h4>
            <p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus lorem in.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-single hover-border mt-sm-95">
            <FaCode className="service-icon icon-web-programming" />
            <h4>Development</h4>
            <p>Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
    {/* <!--portfolio start--> */}
  <div id="projects" className="portfolio-area bg-dark-light ps-relative fix bg-pf">
    <div className="container">
    <Tabs>
      <div className="row align-items-center mb-sm-50">
        <div className="col-lg-4">
          <div className="section-title mb-50">
           <h4 className="contact-title mb-2">Projects </h4>
            <h2>Portfolio</h2>
            <p>Etiam facilisis ligula nec velit posuere egestas. <br/> Nunc dictum lectus sem.</p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="portfolio-menu">     
            <TabList className="list-none list-inline">
              <Tab data-filter="*" className="active">All Works</Tab>
              <Tab data-filter=".website">Website</Tab>
              <Tab data-filter=".apps">Apps</Tab>
              <Tab data-filter=".branding">Branding</Tab>
              <Tab data-filter=".illustration">Illustration</Tab>
            </TabList>
          </div>
        </div>
      </div>
        <TabPanel className="row portfolio-items">
        <div className="col-lg-4 col-sm-6 website">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios1} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Product Landing Page</a></h3>
              <span>UI UX Design</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 apps illustration">
          <div className="portfolio-single mb-45">
               <div class="portfolio-wrapper">
            <img src={portfolios2} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 branding website">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios3} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 branding illustration">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios4} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Product Landing Page</a></h3>
              <span>UI UX Design</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 illustration branding">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios5} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 website apps">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios6} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  className="row portfolio-items">
        <div className="col-lg-4 col-sm-6 website apps">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios6} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 branding website">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios3} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 website">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios1} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Product Landing Page</a></h3>
              <span>UI UX Design</span>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  className="row portfolio-items">
        <div className="col-lg-4 col-sm-6 website apps">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios6} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 apps illustration">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios2} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  className="row portfolio-items">
        <div className="col-lg-4 col-sm-6 branding illustration">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios4} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Product Landing Page</a></h3>
              <span>UI UX Design</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 apps illustration">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios2} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 illustration branding">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios5} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 branding website">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios3} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Business Development</a></h3>
              <span>UX Research</span>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel  className="row portfolio-items">
        <div className="col-lg-4 col-sm-6 branding illustration">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios4} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Product Landing Page</a></h3>
              <span>UI UX Design</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 illustration branding">
          <div className="portfolio-single mb-45">
          <div class="portfolio-wrapper">
            <img src={portfolios5} alt="Portfolio Title" />						
            <div className="portfolio-overlay">
              <div className="portfolio-overlay-inner">
                <div className="portfolio-overlay-content">
                  <div className="portfolio-link">
                    <ProjectDetailModal />
                    <ProjectDetailLightBox />
                  </div>{/* <!--End portfolio-link --> */}
                  <div className="portfolio-caption">
                    <h3 className="mt-4"><a href="#">Product Landing Page</a></h3>
                    <h3>UI UX Design</h3>
                    <h3 className="by-name">by jhon Doe</h3>
                  </div>{/* <!--End portfolio-caption --> */}
                </div>{/* <!--End portfolio-overlay-content --> */}
              </div>{/* <!--End portfolio-overlay-inner --> */}
            </div>
          </div>
            <div className="portfolio-text">
              <h3><a href="#">Ecommerce Website</a></h3>
              <span>Ecommerce</span>
            </div>
          </div>
        </div>
        </TabPanel>
    </Tabs>
    </div>
  </div>
<br/>
    {/* <!--testimonial start--> */}
    <div className="testimonial-area pt-65 fix bg-pf">
      {/* <div className="ff-shape ds-xs-none"><img src={shapeL4} alt=""/></div> */}
      <div className="container">
      <Slider {...settings} className="testimonial-inner testimonial-carousel m-0" data-sizes="50vw">
        {/* <div className="testimonial-inner testimonial-carousel m-0 lazy slider"> */}
          {/* <!--testimonial-single--> */}
          <div className="testimonial-single">
            <div className="row">
              <div className="col-lg-5 align-self-end d-none d-xl-block d-lg-block">
                <div className="testimonial-thumb">
                  <span><img className="testimonial-thumb-user-img" src={user} alt=""/></span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-text testimonial-padi">
                  <span className="quotes-sign"><FaQuoteLeft /></span>
                  <h4 className="contact-title mb2">Testimonials </h4>
                  <h2>Client Reviews</h2>
                  <p>"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim <br/> neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet <br/> nibh. Curabitur auctor leo et libero consectetur gravida. Morbi <br/> gravida et sem dictum varius."</p>
                  <div className="testimonial-author-name">
                    <h4>Jessika Luisons</h4>
                    <span>Founder of Next</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--testimonial-single--> */}
          <div className="testimonial-single">
            <div className="row">
              <div className="col-lg-5 align-self-end d-none d-xl-block d-lg-block">
                <div className="testimonial-thumb">
                  <span><img className="testimonial-thumb-user-img" src={user} alt=""/></span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-text testimonial-padi">
                  <span className="quotes-sign"><FaQuoteLeft /></span>
                  <h5>Testimonials </h5>
                  <h2>Client Reviews</h2>
                  <p>"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim <br/> neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet <br/> nibh. Curabitur auctor leo et libero consectetur gravida. Morbi <br/> gravida et sem dictum varius."</p>
                  <div className="testimonial-author-name">
                    <h4>Jessika Luisons</h4>
                    <span>Founder of Next</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--testimonial-single--> */}
          <div className="testimonial-single">
            <div className="row">
              <div className="col-lg-5 align-self-end d-none d-xl-block d-lg-block">
                <div className="testimonial-thumb">
                  <span><img className="testimonial-thumb-user-img" src={user} alt=""/></span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-text testimonial-padi">
                  <span className="quotes-sign"><FaQuoteLeft /></span>
                  <h5>Testimonials </h5>
                  <h2>Client Reviews</h2>
                  <p>
                      "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim <br />
                    neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet <br/> 
                    nibh. Curabitur auctor leo et libero consectetur gravida. Morbi <br/> 
                    gravida et sem dictum varius."
                   </p>
                  <div className="testimonial-author-name">
                    <h4>Jessika Luisons</h4>
                    <span>Founder of Next</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        </Slider>
      </div>
    </div>
    <br/>
  {/* <!--blog start--> */}
  <div className="bg-pf blog-area bg-darks ps-relative hide" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title section-title-white text-center mb-50">
            <h2  className="contract-title mb2">Blog </h2>
            <h2>Latest News</h2>
          </div>
        </div>
      </div>
      <div className="row blog-carousel">
        <div className="col-lg-4 col-sm-6">
          <div className="blog-single">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src={blog1} alt=""/></a>
            </div>
            <div className="blog-text">
              <span>14 Oct, 2020</span>
              <h3><a href="blog-details.html">How UX UI Demonstrate the Future</a></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="blog-single">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src={blog2} alt=""/></a>
            </div>
            <div className="blog-text">
              <span>10 Sep, 2020</span>
              <h3><a href="blog-details.html">Developing an app is not much easier than think</a></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="blog-single">
            <div className="blog-thumb">
              <a href="blog-details.html"><img src={blog3} alt=""/></a>
            </div>
            <div className="blog-text">
              <span>05 Jan, 2020</span>
              <h3><a href="blog-details.html">Ecommerce industry got an high resource for devlop</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  {/* <!--contact--> */}
  <div id="contact" className="contact-area bg-dark-light pt-115 bg-pf">
    <div className="container">
      <div className="section-title contact-detais">
        <div>
          <h4 className="contact-title">Contact </h4>
          <h2>Request for Quote</h2>
        </div>
        <div className="contract-details" style={{width: "388px"}}>
          <Link to="/client-dashboard/expert-profile/contract-now" type="button" className="button-con d-md-inline max-200 ">
          Hire now
          </Link>
          <Link to="/client-dashboard/post-ticket" type="button" className="button-white d-md-inline max-200 end-button" style={{marginLeft:"30px"}}>
          Post a ticket
          </Link>
      </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="contact-form">
            <form id="contactForm" method="POST" action="#">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="First name"/>
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Last name"/>
                </div>
                <div className="col-lg-12">
                  <input type="email" placeholder="Email address"/>
                </div>
                <div className="col-lg-12">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="col-lg-12">
                  <button className="button btn-common width-185 mt-10" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div id="googleMap" className="google-map mt-sm-50">
          <iframe  width="335" height="562" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.499073050336!2d138.6180432149569!3d-34.8688120790791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c9eaf4f64b0b%3A0x90920a474e6658ec!2s7%20Colac%20St%2C%20Greenacres%20SA%205086%2C%20Australia!5e0!3m2!1sen!2s!4v1608146928505!5m2!1sen!2s" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </main>
            </div>
        );
    }
}

export default ExpertProfile;
