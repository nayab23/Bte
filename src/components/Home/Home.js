import React, { Component } from 'react';
import logo from '../app_assets/img/home/logo-white.svg';
import banner1 from '../app_assets/img/home/why-expert-banner-1.png';
import banner2 from '../app_assets/img/home/why-expert-banner-2.png';
import challenges1 from '../app_assets/img/home/challenges-icon1.svg';
import challenges2 from '../app_assets/img/home/challenges-icon2.svg';
import challenges3 from '../app_assets/img/home/challenges-icon3.svg';
import challengs from '../app_assets/img/home/challengs-banner.png';
import platform from '../app_assets/img/home/platform.png';
import access from '../app_assets/img/home/acccess-img.png';
import { Horse, Heart, Cube } from "phosphor-react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaFacebookF,FaTwitter, FaLinkedinIn,FaInstagram} from "react-icons/fa"; 

class Home extends Component {
    state = {
        isTop: true,
      };
      componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }
    render() {
        return (
        <div className="main---bte">
        {/*======================================= Home Section =================================*/}
             <div className="bte-home-wrapper">
                <div className="rect-shape1"></div>
                <div className="rect-shape2"></div>
                <div className="landing-home-overlay">
                    {/*------------------------------------ Home Nav Bar ------------------------------- */}
                    <div className={`home-header--nav space-between ${this.state.isTop ? 'down' : 'up'}` } >
                        <img src={logo} className="white-logo" alt="logo" />
                        <ul className="header--nav-list mb-0">
                            <li>why experts?</li>
                            <li>challenges</li>
                            <li>platform</li>
                            <li><Link to={'/login'}>Get Early Access</Link></li>
                        </ul>
                    </div>
                    {/*----------------------------------- Home Hader Content  ------------------------------- */}
                    <div className="home-header--content">
                        <h1>
                            Hire The Best<br/>
                            Get Hired By The Best
                        </h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                        <button className="nav--button-white">Subscribe for Early Access</button>
                    </div>
                </div>
            </div>
        {/*======================================= Why Experts Section =================================*/}
            <div className="why-experts">
                {/*------------------------------------ Why Experts title ----------------------- */}
                <div className="display-flex landing-title">
                    <div></div>
                    <h2>Why Experts</h2>
                </div>
                {/*-------------------------------- Why Experts row ----------------------- */}
                <div className="why-experts-row">
                    <div className="row ml-0 mr-0">
                    {/*-------------------------------- Why Experts COL-1 ----------------------- */}
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="landing-Experts-card">
                                <div className="relative">
                                    <img src={banner1}  alt="Experts?" />
                                    <button className="nav--button-white">Subscribe for Early Access</button>
                                </div>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                    {/*-------------------------------- Why Experts COL-2 ----------------------- */}
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="landing-Experts-card">
                                <div className="relative">
                                    <img src={banner2}  alt="Experts?" />
                                    <button className="nav--button-white">QUICK RESPONSE TIME</button>
                                </div>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                    {/*-------------------------------- Why Experts COL-2 ----------------------- */}
                        <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-0">
                            <div className="landing-Experts-card">
                                <div className="relative">
                                    <img src={banner1}  alt="Experts?" />
                                    <button className="nav--button-white">TIMELY DELIVERY</button>
                                </div>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div> {/*----  col end ---*/}
                    </div>
                </div>
            </div>
        {/*======================================= Challenges Section =================================*/}
        <div className="why-experts">
                {/*------------------------------------ Challenges title ----------------------- */}
                <div className="display-flex landing-title">
                    <div></div>
                    <h2>challenges</h2>
                </div>
                {/*-------------------------------- Challenges row ----------------------- */}
                <div className="why-experts-row">
                    <div className="row ml-0 mr-0">
                    {/*-------------------------------- Challenges COL-1 ----------------------- */}
                        <div className="col-lg-6 col-md-12 col-sm-12  pl-0 pr-0">
                                <img src={challengs} className=" challenges-img"  alt="Experts?" />
                        </div>
                    {/*-------------------------------- Challenges COL-2 ----------------------- */}
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-3 pl-0 pr-0 align-center">
                            <div>
                                <div className="challenges-list">
                                    <div className="challenges-list-img">
                                        <img src={challenges1} className="img-fluid"  alt="Experts?" />
                                    </div>
                                    <div className="challenges-list-content">
                                        <h2>repudiandae sint et molestiae</h2>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                                    </div>
                                </div>

                                <div className="challenges-list my-37">
                                    <div className="challenges-list--img">
                                        <img src={challenges2} className="img-fluid"  alt="Experts?" />
                                    </div>
                                    <div className="challenges-list-content">
                                        <h2>repudiandae sint et molestiae</h2>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                                    </div>
                                </div>

                                <div className="challenges-list">
                                    <div className="challenges-list-img">
                                        <img src={challenges3} className="img-fluid"  alt="Experts?" />
                                    </div>
                                    <div className="challenges-list-content">
                                        <h2>repudiandae sint et molestiae</h2>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                                    </div>
                                </div>
                            </div>
                        </div> {/*----  col end ---*/}
                    </div>
                </div>
            </div>
        {/*======================================= PLATFORM Section =================================*/}
        <div className="why-experts">
                {/*------------------------------------ PLATFORM title ----------------------- */}
                <div className="display-flex landing-title">
                    <div></div>
                    <h2>PLATFORM</h2>
                </div>
                {/*-------------------------------- PLATFORM row ----------------------- */}
                <div className="platform-row display-flex">
                {/*-------------------------------- PLATFORM Feature ----------------------- */}
                    <div className="platform-features">
                        <div className="display-flex platform-feature">
                            <div className="bg-accent"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                        <div className="display-flex platform-feature">
                            <div className="bg-primary-bte m-25"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                        <div className="display-flex platform-feature">
                            <div className="bg-accent"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                    </div>
                    <img src={platform} className="platform-img" alt="" />
                     {/*-------------------------------- PLATFORM Feature ----------------------- */}
                     <div className="platform-features">
                        <div className="display-flex platform-feature">
                            <div className="bg-primary-bte"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                        <div className="display-flex platform-feature">
                            <div className="bg-accent m-25"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                        <div className="display-flex platform-feature">
                            <div className="bg-primary-bte"></div>
                            <p className="mb-0">Add Tickets</p>
                        </div>
                    </div>
                </div>
            </div>
{/*======================================= Get Early Access Section =================================*/}
        <div className="get-access">
            <div className="access-top-shape"></div>
            {/*------------------------------------ Get Early Access title ----------------------- */}
            <div className="display-flex landing-access-title">
                <div></div>
                <h2>Get Early Access</h2>
            </div>
            {/*-------------------------------- Access row ----------------------- */}
              {/*-------------------------------- Access row ----------------------- */}
                <div className="access-row">
                    <div className="row ml-0 mr-0">
                    {/*-------------------------------- Access COL-1 ----------------------- */}
                        <div className="col-sm-12 col-md-8 col-lg-8 pl-0 pr-0 ">
                            <img src={access} className="access-img" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 pl-0 pr-0 align-center">
                            <div className="access--content">
                                <h1>
                                Get Access <br />To The <br />Expert’s<br /> Platform
                                </h1>
                                <form className="access-form">
                                    <input type="email" className="" name="email" placeholder="Enter Email"/>
                                    <button>Sign-up for Early Access</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    {/*======================================= Footer Section =================================*/}
            <div className="landing-footer space-between">
                <img src={logo} className="white-logo" alt="logo" />
                <div className="terms-conditions d-flex d-md-none hide">
                    <a href="#">Terms  & Conditions Privacy statement</a>
                </div>
                <h2>© 2017-2019 Back to Experts Pty Ltd.</h2>
                <div className="display-flex landing-footer-icons">
                    <FaTwitter className="icon"/>
                    <FaFacebookF className="icon"/>
                    <FaLinkedinIn className="icon"/>
                    <FaInstagram className="icon"/>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;