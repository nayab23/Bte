import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import location from "../app_assets/img/location.svg"
import silver from "../app_assets/img/silver.svg"
import checkmark from "../app_assets/img/checkmark-r.svg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const ExpertInProgressTickets: React.FC = () => (
  <div>
  <main className="main-content main-content--dashboard main__my-tickets--sent">
    <div className="container container-fluid-small">
        {/* <!--Audio Call---> */}
        <div className="col-md-12 col-lg-12 col-xl-12" id="audioside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <audio id="localAudio" controls autoPlay muted playsInline ></audio>
                                </div>
                                <div className="user_info">
                                    <small className="text-muted" style={{display:"block"}} id="activemice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedmice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">
                                    <audio id="remoteAudio" controls autoPlay playsInline ></audio>

                                </div>
                            </div>
                        </li>
                        <li id="audiohangoutli" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="audiocallStatus"></span>
                                    <button className="btn btn-danger right" id="audiocancelCall">Hang Out</button>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

        {/* <!--End Audio Call-->/ */}












        <div className="col-md-12 col-lg-12 col-xl-12" id="screenside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <iframe id="localscreens" scrolling="no" className="iframe1"
                                        style={{width:"100%", border:"none", display:"none"}}></iframe>
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">

                                    <iframe id="remotescreens" scrolling="no" className="iframe2"
                                        style={{width:"100%", border:"none", display:"none"}}></iframe>

                                </div>
                            </div>
                        </li>
                        <li id="stops" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="screenshareStatus"></span>
                                    <button className="btn btn-danger right" id="stopscreen">Stop
                                        sharing</button>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>




        <div className="col-md-12 col-lg-12 col-xl-12" id="videoside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">

                                    <video id="localVideo" controls autoPlay muted playsInline 
                                        style={{width: "350px"}}></video>
                                    {/* <!--<iframe  id="localscreen" scrolling="no" className="iframe1"  style={{width:"100%", border:"none", display:"none"}}></iframe>--> */}
                                </div>
                                <div className="user_info">
                                    <small className="text-muted" style={{display:"block"}} id="activecam"><a href="#"><i
                                                className="fa fa-camera fa-2x" aria-hidden="true" title="Mute Camera"
                                                data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedcam">
                                        <a href="#"><i
                                            className="fa fa-camera fa-2x" aria-hidden="true" title="Mute Camera"
                                            data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"block"}} id="activemice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedmice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" id="StartScreenSharing" 
                                        style={{display:"none"}}><a href="#"><img src="/screensharing.png"
                                                title="Screen share" data-toggle="tooltip"
                                                style={{width:"70%"}}/></a></small>
                                    <small className="text-muted" id="StopScreenSharing" 
                                        style={{display:"none"}}><a href="#"><img src="/screensharing.png"
                                                title="Stop Screen Sharing" data-toggle="tooltip"
                                                style={{width:"70%"}}/></a></small>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">
                                    <video id="remoteVideo" controls autoPlay playsInline 
                                        style={{width: "350px"}}></video>
                                    {/* <!--<iframe  id="remotescreen" scrolling="no" className="iframe2" style={{width:"100%", border:"none", display:"none"}}></iframe>--> */}

                                </div>
                            </div>
                        </li>
                        <li id="hangoutli" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="callStatus"></span>
                                    <button className="btn btn-danger right" id="cancelCall">Hang Out</button>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
        {/* Dropdownand search row */}
        <div className="row">
        <div className="col-12 col-lg-4" id="tickets-list">
            <div className="tile tile--2">
                <label className="input__wrapper input__wrapper--select">
                    <MDBDropdown>
                    <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da",fontSize: "16px",borderRadius: "6px"}}>
                    Tickets in progress
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic style={{width:"100%"}}>
                        <Link to={'/expert-dashboard/mytickets/my-feed'}>
                            <MDBDropdownItem >
                                My Feed
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/tickets-in-progress'} >
                            <MDBDropdownItem active>
                            Tickets in progress
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/recieved-propositions'}>
                            <MDBDropdownItem>
                            Received propositions
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/sent-requests'}>
                            <MDBDropdownItem >
                            Sent Applications
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/closed-tickets'}>
                            <MDBDropdownItem >
                            Closed
                            </MDBDropdownItem>
                        </Link>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </label>
            </div>
        </div>
            <div className="col-12 col-lg-8" >
            <div className="row">
            <form action="#" method="post" id="search-box"
                className="w-90">
                <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" /> <label
                    className="input__wrapper input__wrapper--search">
                    <input type="text" className="input input-seach" placeholder="Search a Ticket" name="search_ticket"/>
                    <button type="submit" className="button button--no-style">
                        <i className="search-icon-blue"></i>
                    </button>
                </label>
            </form>
            <a href="#" type="button" className="button post-a-ticket-cta button--square">
                <span className="d-flex">
                    <img src={menu} alt="menu"/>
                </span>
            </a>
            </div>
        </div>
        </div>
        <div className="row justify-content-center por moving-container">
            <div className="col-6 col-lg-4 order-1 order-lg-1" id="tickets-list">
                <div className="tile tile--2 tile--tickets-list">
                    <ul className="tickets-list">

                        <li className="tickets-list__item js-tickets-list__item tickets-list__item--active"
                            data-ticket-id="72" id="72" >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test 0007
                                </h3>
                                <p className="tickets-list__subtext">
                                    Please Name your project in few words Please Name your project in few words Please
                                    Name your project in few words Please Name your project in few words
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="61" id="61"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test - Database expert 3
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Attach necessary files to show ideas of your project more understandable
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="63" id="63"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test 0002
                                </h3>
                                <p className="tickets-list__subtext">
                                    Test 0002
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="142" id="142"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    I am looking for new ticket testing
                                </h3>
                                <p className="tickets-list__subtext">
                                    Hello,
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="138" id="138"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Home Test - Web Development - HTML/CSS/JS/PHP
                                </h3>
                                <p className="tickets-list__subtext">
                                    I need help on the web test that I got to make - Details on the files that I
                                    attached.I need help on the web test that I got to make - Details on the files that
                                    I attached.I need help on the web test that I got to make - Details on the files
                                    that I attached.I need help on the web test that I got to make - Details on the
                                    files that I attached.
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="129" id="129"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Pluggin developer
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="136" id="136"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Jan 9 Ticket Test
                                </h3>
                                <p className="tickets-list__subtext">
                                    It is a known fact that the ultimate result of a poor service and unsatisfied
                                    customers is loss of profits. Every customer wants the maximum attention, regardless
                                    of the number of other customers waiting to be served. Customers crowded at a
                                    counter become frustrated and soon create a stressful environment.
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="91" id="91"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Project 04
                                </h3>
                                <p className="tickets-list__subtext">
                                    Fixed price test.
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="90" id="90"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Project 03
                                </h3>
                                <p className="tickets-list__subtext">
                                    New testing fixed price...
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="49" id="49"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Oct 22, 2019 Test
                                </h3>
                                <p className="tickets-list__subtext">
                                    Reactive Revolution. ReactiveX is more than an API, it's an idea and a breakthrough
                                    in programming. It has inspired several other APIs, frameworks, and even
                                    Reactive Revolution. ReactiveX is more than an API, it's an idea and a breakthrough
                                    in programming. It has inspired several other APIs, frameworks, and even
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="51" id="51"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    241020190425 Test new
                                </h3>
                                <p className="tickets-list__subtext">
                                    Firefox clears your search and browsing history when you quit the app or close all
                                    Private Browsing tabs and windows. While this doesn’t make you anonymous to websites
                                    or your internet service provider, it makes it easier to keep what you do online
                                    private from anyone else who uses this computer.
                                    Common myths about private browsingFirefox clears your search and browsing history
                                    when you quit the app or close all Private Browsing tabs and windows. While this
                                    doesn’t make you anonymous to websites or your internet service provider, it makes
                                    it easier to keep what you do online private from anyone else who uses this
                                    computer.
                                    Common myths about private browsing
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>


                    </ul>
                </div>
            </div>

            <div className="col-6 col-lg-8 order-1 order-lg-1 d-block">
                <div className="tile tile--2 mb-3  tile--ticket tile--ticket-active tile--ticket-posted tile--ticket-hourly"
                    data-ticket-id="1" id="active-ticket">

                    <div className="ticket-header">
                        <ul className="ticket-header__list">
                            <li className="d-block d-lg-none">
                                <button className="button button--no-style mobile-section-title__back-button">
                                    <i className="back-blue-icon"></i>
                                </button>
                            </li>
                            <li className="ticket-header__list-item d-block ticket-header__list-item--active"
                                data-tab="ticket">
                                <a href="#">
                                    Ticket
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block" data-tab="dialog">
                                <a href="#">
                                    Dialog
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block" data-tab="files">
                                <a href="#">
                                    Files
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block" data-tab="contract">
                                <a href="#">
                                    Contract
                                </a>
                            </li>
                            <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
                        </ul>
                    </div>



                    <div className="ticket-body" data-tab="ticket">
                        <h2 className="ticket__name" id="ticket_title"> Test 0007 </h2>
                        <div className="ticket__details-row">
                            <p className="ticket__category" id="category_name"
                                style={{fontFamily: "Roboto, sans-serif", fontWeight: "normal", fontStyle: "normal", color: "#388ccb"}}>
                                Category: Database

                            </p>


                            <p className="ticket__rate worked">

                                209.8/10 hours



                            </p>

                            <p className="ticket__rate ticket__request" id="tickte_estimated_p">
                                $50

                            </p>
                        </div>
                        <div className="ticket__details-row">
                            <p className="ticket__date" id="open_date">
                                Created on November - 2019 - Present
                            </p>

                            <p className="ticket__rate-2" id="ticket_type_rate">
                                $5/hour

                            </p>
                        </div>
                        <div className="ticket__description">
                            Project description
                        </div>

                        <p className="ticket__description-text" id="ticket_description">
                            Please Name your project in few words Please Name your project in few words Please Name your
                            project in few words Please Name your project in few words
                        </p>
                        <div className="ticket__description opened-ticket__description">Contract description</div>
                        <p className="ticket__description-text" id="contract_description">
                            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay for
                            done work Adding Payment Method is necessary to be able to Post Tickets, Start contracts and
                            pay for done work
                        </p>
                        <div className="ticket__description">Contract Price </div>
                        <p className="ticket__description-text" id="contract_description_price">
                            <span style={{fontWeight: 500, color: "#212529"}}> $5</span>/hour
                        </p>


                        <div className="ticket__description">
                            Skills required
                        </div>
                        <p className="ticket__description-text skills__list">
                            <a href="#" className="skills__item"> Data Protection </a>


                        </p>
                        <div className="ticket__description">
                            Attachments
                        </div>
                        <div className="ticket__description-text" id="ticket_attachments">


                        </div>
                        <hr />
                        <div className="expert-lineitem expert-line-static">
                            <div className="expert-lineitem__img">
                                {/* <!-- <img src="" alt=""> --> */}
                            </div>
                            <div className="expert-lineitem__info-wrapper">
                                <div className="expert-lineitem__line">
                                    <div className="expert-lineitem__name-section">
                                        <p className="expert-lineitem__name" id="expert_name">
                                            Expert Naeem
                                        </p>
                                        <p className="expert-lineitem__title" id="expert_title">
                                            <span className="d-none d-md-inline">Expert Naeem</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="expert-lineitem__line">
                                    <div className="expert-lineitem__hourly-rate" id="hourly_rate">
                                        <span>$5</span>/hour

                                    </div>

                                    <div className="expert-lineitem__location">
                                        <img src={location} alt="location icon"
                                            id="exp_country_name"/>
                                        Saudi Arabia
                                    </div>

                                    <div className="expert-lineitem__rating">

                                        <div className="stars-wrapper stars-wrapper--static">
                                            <label htmlFor="r1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                    viewBox="0 0 14.798 14.112">
                                                    <g id="star_with_fill" data-name="star with fill"
                                                        transform="translate(0)">
                                                        <path id="Path_91" data-name="Path 91"
                                                            d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                            transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                    </g>
                                                </svg>
                                            </label>
                                            <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />

                                            <label htmlFor="r2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                    viewBox="0 0 14.798 14.112">
                                                    <g id="star_with_fill" data-name="star with fill"
                                                        transform="translate(0)">
                                                        <path id="Path_91" data-name="Path 91"
                                                            d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                            transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                    </g>
                                                </svg>
                                            </label>
                                            <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />

                                            <label htmlFor="r3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                    viewBox="0 0 14.798 14.112">
                                                    <g id="star_with_fill" data-name="star with fill"
                                                        transform="translate(0)">
                                                        <path id="Path_91" data-name="Path 91"
                                                            d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                            transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                    </g>
                                                </svg>
                                            </label>
                                            <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />

                                            <label htmlFor="r4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                    viewBox="0 0 14.798 14.112">
                                                    <g id="star_with_fill" data-name="star with fill"
                                                        transform="translate(0)">
                                                        <path id="Path_91" data-name="Path 91"
                                                            d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                            transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                    </g>
                                                </svg>
                                            </label>
                                            <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />

                                            <label htmlFor="r5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                    viewBox="0 0 14.798 14.112">
                                                    <g id="star_with_fill" data-name="star with fill"
                                                        transform="translate(0)">
                                                        <path id="Path_91" data-name="Path 91"
                                                            d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                            transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                    </g>
                                                </svg>
                                            </label>
                                            <input type="radio" className="visually-hidden" value="5" name="rating" id="r5"
                                                checked />
                                        </div>
                                    </div>

                                    {/* <!-- <div className="expert-lineitem__status">
                                            <img src="/public/app_assets/img/golden.svg" alt="golden status icon">
                                        Golden status
                                    </div> --> */}
                                    <div className="expert-lineitem__status">
                                        <img src={silver} alt="silver status icon" />
                                        Silver status
                                    </div>
                                    {/* <!-- <div className="expert-lineitem__status">
                                            <img src="/public/app_assets/img/bronze.svg" alt="bronze status icon">
                                        Bronze status
                                    </div>--> */}
                                </div>
                                <div className="expert-lineitem__line mb-2">
                                    <p className="expert-lineitem__title-text">
                                        Cover letter
                                    </p>
                                </div>
                                <div className="expert-lineitem__line">
                                    <p className="expert-lineitem__text" id="expert_description">
                                        If you know the exact estimate switch to Fixed price If you know the exact
                                        estimate switch to Fixed price If you know the exact estimate switch to Fixed
                                        price If you know the exact estimate switch to Fixed price If you know the exact
                                        estimate switch to Fixed price If you know the exact estimate switch to Fixed
                                        price If you know the exact estimate switch to Fixed price If you know the exact
                                        estimate switch to Fixed price If you know the exact estimate switch to Fixed
                                        price If you know the exact estimate switch to Fixed price If you know the exact
                                        estimate switch to Fixed price If you know the exact estimate switch to Fixed
                                        price If you know the exact estimate switch to Fixed price
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Ticket dialog START --> */}
                    <div className="ticket-body ticket-body--dialog hide" data-tab="dialog" style={{height:"530px"}}>
                        <ul className="messages" data-tab="dialog" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                            id="messages">




                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Expert Naeem
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        test 0007
                                    </p>
                                    <span className="message__time" style={{width:"133px"}}>
                                        <span className="d-inline"><img src={checkmark}
                                                style={{width:"15%", marginBottom: "-5%", marginTop: "-5%"}}/></span>
                                        <span className="d-inline">
                                            29-Dec-19, 12:07 pm
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <div className="new-message-container">
                            {/* <!--files & typing--> */}

                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="showfiles"></small>
                                </div>
                            </div>
                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="feedback" style={{marginTop: "0px"}}></small>
                                </div>
                            </div>
                            {/* <!--end files and typing--> */}

                            <form action="#" style={{paddingTop: "0px"}}>
                                <div id="kkk_value">

                                    <input type="hidden" id="dialouge_id" value="153"/>
                                    <input type="hidden" id="client" value="74" />
                                </div>

                                <input type="hidden" id="csrf_token_input"
                                    value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
                                <input type="text" placeholder="Here will be written the message" className="input"
                                    id="text" />
                                <button type="button" className="button new-message-container__send-button" id="btnsend">
                                    Send
                                </button>
                                <label className="button button--no-style button--attach" id="image-upload">
                                    <span className="visually-hidden">Attach</span>
                                    <input type="file" id="avatar" className="visually-hidden"/>
                                </label>
                            </form>

                            <div id="pools">
                                <input type="hidden" id="pool" value="153"/>
                                <input type="hidden" id="from_client" value="74"/>
                                <input type="hidden" id="ticketid" value="72"/>

                            </div>
                        </div>
                    </div>
                    {/* <!-- Ticket dialog END --> */}

                    <div className="ticket-body hide" data-tab="files">
                        <div className="files-container" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                            id="attached_files">





                        </div>
                        <div className="new-message-container">
                            {/* <!--files & typing--> */}

                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="showfiles0"></small>
                                </div>
                            </div>
                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="feedback0" style={{paddingTop: "0px"}}></small>
                                </div>
                            </div>
                            {/* <!--end files and typing--> */}
                            <form action="#" style={{paddingTop: "0px"}}>
                                <div id="values0">
                                    <input type="hidden" id="dialouge_id0" value="153"/>
                                    <input type="hidden" id="client0" value="74"/>

                                </div>
                                <input type="hidden" id="csrf_token_input"
                                    value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
                                <input type="text" placeholder="Here will be written the message" className="input"
                                    id="text0" disabled />
                                <button type="button" className="button new-message-container__send-button" id="btnsend0">
                                    Send
                                </button>
                                <label className="button button--no-style button--attach" id="image-upload0">
                                    <span className="visually-hidden">Attach</span>
                                    <input type="file" id="avatar0" className="visually-hidden"/>
                                </label>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Ticket payment START --> */}
                    <div className="ticket-body ticket-body--payment hide" data-tab="contract">
                        <h2 className="ticket__name" id="payment_c_ticket_title">
                            Test 0007
                        </h2>

                        <div className="ticket__details-row payment-row payment-row--last">
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title ">Deposit</p>
                                <p className="estimate__value line-1 c_initial_d">$1049</p>
                            </div>
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title">Fixed Price </p>
                                <p className="estimate__value c_fixed_d">$5</p>
                            </div>
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title ">Estimate</p>
                                <p className="estimate__value c_estimated_cost">$50</p>


                            </div>
                        </div>

                        <div className="ticket__details-row payment-row payment-row--info payment-row--last d-none">
                            <div className="estimate__title">
                                To make a new deposit you need to pay the existing one
                            </div>
                        </div>

                        <div className="payment-buttons">
                            <button type="button" className="button max-160 js-pay-deposit">
                                Pay deposit
                            </button>

                            <button className="button button--no-style link">
                                Close Ticket
                            </button>
                        </div>

                        {/* <!-- Payment closure section START --> */}
                        <h2 className="ticket__name d-none js-payment-closure">
                            Payment closure
                        </h2>

                        <div className="ticket__details-row payment-row d-none js-payment-closure">
                            <div className="row align-items-center full-width">
                                <div className="col-6">
                                    <div className="estimate__title ">
                                        Total Expert Amount
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value c_estimated_cost">
                                        <p className="estimate__value">$50</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ticket__details-row payment-row d-none js-payment-closure">
                            <div className="row align-items-center full-width">
                                <div className="col-6">
                                    <div className="estimate__title">
                                        Initial Deposit
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value c_initial_d">
                                        <p className="estimate__value line-1">$1049</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ticket__details-row payment-row d-none js-payment-closure">
                            <div className="row align-items-center full-width">
                                <div className="col-6">
                                    <div className="estimate__title">
                                        Balance
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value c_balance">
                                        $-999


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ticket__details-row payment-row d-none js-payment-closure">
                            <div className="row align-items-center full-width">
                                <div className="col-6">
                                    <div className="estimate__title">
                                        BTE Collaboration charges
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value c_collab">
                                        $-199.8



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                            <div className="row align-items-center full-width">
                                <div className="col-6">
                                    <div className="estimate__title">
                                        Total Amount Due
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value c_total">
                                        $249.8


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="payment-buttons d-none js-payment-closure">
                            <a type="button" className="button max-160 js-get-report">
                                Get report
                            </a>
                        </div>
                        {/* <!-- Payment closure section END --> */}

                    </div>
                    {/* <!-- Ticket payment END --> */}
                </div>
            </div>
        </div>
    </div>

</main>
</div>
);

export default ExpertInProgressTickets;
