import React, { Component } from 'react';
import banarMan from '../app_assets/img/images/banner/man.png';
import shapeL3 from '../app_assets/img/images/shapes/light/3.png';
import user from '../app_assets/img/client-user.svg';
import Slider from 'react-slick';
import { FaFacebookF, FaDribbble,FaTwitter, FaLinkedinIn, FaEnvira, FaCaretRight, FaPalette, FaLaptopCode,
 FaCode, FaQuoteLeft, FaPlus, FaStar, FaTicketAlt, FaLink, FaSearchPlus} from "react-icons/fa";  
import { IoMdPerson, IoLogoApple,IoLogoGoogle } from "react-icons/io";
import { AiOutlineDollar, AiOutlineShareAlt } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBContainer } from "mdbreact";

class ClientProfile extends Component { 
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
              <p>I create User Interfaces according to solve specific problems. I specialize in 
              Creative, User-Friendly, and Trending User Interfaces. I have 5+ years of 
              experience Designing Beautiful, Eye-catchy, and modern trending websites.</p>
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
              <div className="social-popup hide">
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
            <p>Ticket Posted</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="fact-single mb-sm-60">
            <IoMdPerson className="fact-icon icon-user" />
            <h3> <span className="counter">9</span><span className="counter-add">+</span></h3>
            <p>Completed Jobs</p>
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
              <h4>UI Design Intensive </h4>
              <span>Oxford University</span>
              <small>Sep 2016 - May 2018</small>
            </div>
          </div>
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
            <div className="education-single d-flex">
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
            <div className="education-single d-flex">
              <div className="edu-icon">
                <span><FaEnvira /></span>
              </div>
              <div className="edu-text">
                <h4>UI Design </h4>
                <span>Oxford University</span>
                <small>Sep 2016 - May 2018</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="education-single d-flex">
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
        </div>
      </div>
    </div>

  </div>
  <br/>
    {/* <!--testimonial start--> */}
    <div className="testimonial-area pt-65 fix bg-pf">
        {/* <div className="round-shape-dashed left ds-xs-none"></div> */}
      <div className="container">
      <Slider {...settings} className="testimonial-inner testimonial-carousel m-0" data-sizes="50vw">
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
        </Slider>
      </div>
    </div>
  </div>
  </main>
            </div>
        );
    }
}

export default ClientProfile;