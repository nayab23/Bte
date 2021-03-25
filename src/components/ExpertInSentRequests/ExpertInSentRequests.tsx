import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import location from "../app_assets/img/location.svg"
import silver from "../app_assets/img/silver.svg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const ExpertInSentRequests: React.FC = () => (
  <div>
<main className="main-content main-content--dashboard main__my-tickets--sent">
    <div className="container container-fluid-small">
    <div className="row">
        <div className="col-12 col-lg-4" id="tickets-list">
            <div className="tile tile--2">
                <label className="input__wrapper input__wrapper--select">
                    <MDBDropdown>
                    <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da",fontSize: "16px",borderRadius: "6px"}}>
                    Sent applications
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic style={{width:"100%"}}>
                        <Link to={'/expert-dashboard/mytickets/my-feed'}>
                            <MDBDropdownItem >
                                My Feed
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/tickets-in-progress'} >
                            <MDBDropdownItem>
                            Tickets in progress
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/recieved-propositions'}>
                            <MDBDropdownItem>
                            Received propositions
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/sent-requests'}>
                            <MDBDropdownItem active>
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
                            data-ticket-id="197" id="197" >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Zoom Meeting
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing Screen Sharing on BTE
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="143" id="143"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    System test 01
                                </h3>
                                <p className="tickets-list__subtext">
                                    Attach necessary files to show ideas of your project more understandable
                                    +
                                    Upload Files
                                    Attach necessary files to show ideas of your project more understandable
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="122" id="122"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test on 18 Dec 2019
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing Posting form and maximum characters for details field. Testing Posting form
                                    and maximum characters for details field.Testing Posting form and maximum characters
                                    for details field.Testing Posting form and maximum characters for details
                                    field.Testing Posting form and maximum characters for details field.Testing Posting
                                    form and maximum characters for details field.
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="89" id="89"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Project 02
                                </h3>
                                <p className="tickets-list__subtext">
                                    Re testing for fixed price....
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="88" id="88"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Project 01
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="71" id="71"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test 0006
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="36" id="36"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    100320190153
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing a new ticket
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="59" id="59"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test - Database expert
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="64" id="64"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Database replication Expert Needed
                                </h3>
                                <p className="tickets-list__subtext">
                                    Interested in trainings dedicated to Oracle, SQL Server, MySQL/MariaDB, or
                                    PostgreSQL technologies?
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="67" id="67"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test 0004
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing new application
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="62" id="62"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test 0001
                                </h3>
                                <p className="tickets-list__subtext">
                                    Test 0001
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="60" id="60"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test - Database expert 2
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="59" id="59"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Test - Database expert
                                </h3>
                                <p className="tickets-list__subtext">
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                    Tell us more about your business and the whole project overall. (2000 Caracters max)

                                    Tell us more about your business and the whole project overall. (2000 Caracters max)
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="52" id="52"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Firewall Configuration
                                </h3>
                                <p className="tickets-list__subtext">
                                    Our firewall constantly scans and mitigates possible attacks. $299.99/Year! Joomla
                                    Security. WordPress Security. Sitecheck Scanner. Get Rewards For Referrals. Drupal
                                    Security. Global Customer Support. Website Security. 24/7/365. Fast Response Team.
                                    Magento Security. Services: Remove Malware, Clean Hacks, Remove Blacklist, Stop Hack
                                    Attempts, Stop DDoS Attacks.
                                    Basic
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="52" id="52"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Firewall Configuration
                                </h3>
                                <p className="tickets-list__subtext">
                                    Our firewall constantly scans and mitigates possible attacks. $299.99/Year! Joomla
                                    Security. WordPress Security. Sitecheck Scanner. Get Rewards For Referrals. Drupal
                                    Security. Global Customer Support. Website Security. 24/7/365. Fast Response Team.
                                    Magento Security. Services: Remove Malware, Clean Hacks, Remove Blacklist, Stop Hack
                                    Attempts, Stop DDoS Attacks.
                                    Basic
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="36" id="36"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    100320190153
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing a new ticket
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="34" id="34"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    10032019
                                </h3>
                                <p className="tickets-list__subtext">
                                    Test Oct 03
                                    Forbidden You don't have permission to access this resource. Additionally, a 403
                                    Forbidden error was encountered while trying to use an ErrorDocument to handle the
                                    request. Forbidden You don't have permission to access this resource. Additionally,
                                    a 403 Forbidden error was encountered while trying to use an ErrorDocument to handle
                                    the request.
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="16" id="16"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Oct 01 Test _ 001
                                </h3>
                                <p className="tickets-list__subtext">
                                    Testing my new ticket with changes.
                                    Testing my new ticket with changes
                                    Testing my new ticket with changes
                                    Testing my new ticket with changesTesting my new ticket with changesTesting my new
                                    ticket with changesTesting my new ticket with changesTesting my new ticket with
                                    changesTesting my new ticket with changes
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>
                        <li className="tickets-list__item js-tickets-list__item" data-ticket-id="11" id="11"
                            >
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Testing Dev sep 30
                                </h3>
                                <p className="tickets-list__subtext">
                                    an event or situation that reveals the strength or quality of someone or something
                                    by putting them under strain.
                                    "this is the first serious test of the peace agreement"
                                    an examination of part of the body or a body fluid for medical purposes, especially
                                    by means of a chemical or mechanical procedure rather than simple inspection.
                                    "researchers developed a test for the virus"
                                    Chemistry
                                    a procedure employed to identify a substance or to reveal the presence or absence of
                                    a constituent within a substance.
                                    the result of a medical examination or analytical procedure.
                                    "a positive test for protein"
                                    a means of establishing whether an action, item, or situation is an instance of a
                                    specified quality, especially one held to be undesirable.
                                    "a statutory test of obscenity"
                                    h
                                    Similar:
                                    criterion
                                    proof
                                    indication
                                    yardstick
                                    touchstone
                                    standard
                                    measure
                                    litmus test
                                    barometer
                                    2.
                                    short for Test match.
                                    "the first Test against New Zealand"
                                    3.
                                    Metallurgy
                                    a movable hearth in a reverberating furnace, u
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>


                    </ul>
                </div>
            </div>

            <div className="col-6 col-lg-8 order-1 order-lg-1 d-block">
                <div className="tile tile--2 mb-3  tile--ticket tile--ticket-active tile--ticket-in-progress tile--ticket-hourly"
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
                            <li className="ticket-header__list-item d-block disabled" data-tab="files" >
                                <a href="#">
                                    Files
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block disabled" data-tab="contract" >
                                <a href="#">
                                    Contract
                                </a>
                            </li>
                            <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
                        </ul>
                    </div>
                    <div className="ticket-body" data-tab="ticket" id="197">
                        <h2 className="ticket__name" id="197">Zoom Meeting</h2>
                        <div className="ticket__details-row ticket__details-row--top-aligned">
                            <div className="opened-ticket__details" style={{width: "80%"}}>
                                <div className="feed-item__name opened-ticket__name" id="client_name">
                                    Abdullah Ahmad
                                </div>

                                <div className="expert-lineitem__location">
                                    <img src={location} alt="location icon"/>
                                    <span className="d-none d-md-inline">Australia</span>
                                    <span className="d-inline d-md-none">aus</span>


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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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

                                <p className="ticket__date opened-ticket__date" id="open_date">
                                    June 11 - 2020,
                                    6:55 PM

                                </p>
                            </div>
                            <div className="opened-ticket__cta-container d-block">

                                <a href="#" className="link link--blue d-none d-md-block"> Applied to the job </a>

                                {/* <!--<button className="button--sent-message js-open-dialog">--> */}
                                <button className="button--sent-message">
                                    <span className="d-none d-md-inline button__sent-message">Message</span>
                                </button>
                                <a href="#" className="link link--blue d-none d-md-block"
                                    style={{float: "right", marginRight: "40px"}} >Delete</a>
                                <input type="hidden" id="ticket_id" value="197"/>

                            </div>

                        </div>
                        <div className="opened-ticket__details-row">
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Category:</span>
                                <span className="opened-ticket__detail-value" id="category_name">Cloud Solutions</span>

                            </div>
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Vendor:</span>
                                <span className="opened-ticket__detail-value" id="vender_name">Microsoft</span>

                            </div>
                        </div>

                        <div className="ticket__description opened-ticket__description">Project description</div>

                        <p className="ticket__description-text" id="ticket_description">
                            Testing Screen Sharing on BTE
                        </p>
                        <div className="ticket__description">
                            Skills required
                        </div>
                        <p className="ticket__description-text skills__list" id="skillset_name">
                            <a href="#" className="skills__item"> SQL 2016 </a>
                            <a href="#" className="skills__item"> O365 </a>
                            <a href="#" className="skills__item"> AWS </a>


                        </p>
                        <div className="ticket__description">
                            Attachments
                        </div>
                        <div className="ticket__description-text opened-ticket__description-text" id="ticket_attachments">

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
                                        <span>$100</span>/hour

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
                                        <img src={silver} alt="silver status icon"/>
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
                                        Hello, I will work on it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Ticket dialog START --> */}
                    <div className="ticket-body ticket-body--dialog hide" data-tab="dialog" style={{height: "550px"}}>
                        <ul className="#" data-tab="dialog" style={{display: "block", height:"400px", overflowY: "scroll"}}
                            id="messages">
                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Abdullah Ahmad
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        Hi
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 06:56 pm

                                    </span>
                                </div>
                            </li>
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
                                        Hello
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 06:56 pm

                                    </span>
                                </div>
                            </li>
                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Abdullah Ahmad
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        Lets Share the Screen
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 06:57 pm

                                    </span>
                                </div>
                            </li>
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
                                        message was still on chatbox
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 06:57 pm

                                    </span>
                                </div>
                            </li>
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
                                        hello
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 07:06 pm

                                    </span>
                                </div>
                            </li>
                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Abdullah Ahmad
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        Send Request
                                    </p>
                                    <span className="message__time">
                                        11-Jun-20, 07:09 pm

                                    </span>
                                </div>
                            </li>
                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Abdullah Ahmad
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        Hello
                                    </p>
                                    <span className="message__time">
                                        1-Jul-20, 09:17 pm

                                    </span>
                                </div>
                            </li>
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
                                        Hello
                                    </p>
                                    <span className="message__time">
                                        1-Jul-20, 09:17 pm

                                    </span>
                                </div>
                            </li>
                            <li className="tickets-list__item message-list__item" data-ticket-id="1">
                                <div className="tickets-list__img message-list__img">
                                    {/* <!-- <img src="" alt=""> --> */}
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text message__text-container">
                                    <h3 className="tickets-list__name message__name">
                                        Abdullah Ahmad
                                    </h3>
                                    <p className="tickets-list__subtext message__text">
                                        Work with me on 75 Dollars
                                    </p>
                                    <span className="message__time">
                                        1-Jul-20, 09:18 pm

                                    </span>
                                </div>
                            </li>
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
                                        Ok, but for 20 hours
                                    </p>
                                    <span className="message__time">
                                        1-Jul-20, 09:18 pm

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
                                    <input type="hidden" id="dialouge_id" value="9" />
                                    <input type="hidden" id="client" value="74" />
                                </div>

                                <input type="hidden" id="csrf_token_input"
                                    value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
                                <input type="text" placeholder="Here will be written the message" className="input"
                                    id="text" disabled style={{cursor: "not-allowed"}}/>
                                <button type="button" className="button new-message-container__send-button" id="btnsend"
                                    disabled style={{cursor: "not-allowed"}}>
                                    Send
                                </button>
                                <label className="button button--no-style button--attach disabled" id="image-upload" 
                                    style={{cursor: "not-allowed"}}>
                                    <span className="visually-hidden">Attach</span>
                                    <input type="file" id="avatar" className="visually-hidden" disabled
                                        style={{cursor: "not-allowed"}}/>
                                </label>
                            </form>

                            <div id="pools">
                                <input type="hidden" id="pool" value="9" />
                                <input type="hidden" id="from_client" value="74" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- Ticket dialog END --> */}

                    <div className="ticket-body hide" data-tab="files">
                        <h2 className="ticket__name">
                            Files
                        </h2>
                    </div>

                    {/* <!-- Ticket payment START --> */}
                    <div className="ticket-body ticket-body--payment hide" data-tab="contract">
                        <h2 className="ticket__name">
                            Anti Virus not Functioning
                        </h2>

                        <div className="ticket__details-row payment-row payment-row--last">
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title">Deposit</p>
                                <p className="estimate__value line-1">$200</p>
                            </div>
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title">Fixed Price </p>
                                <p className="estimate__value">$400</p>
                            </div>
                            <div className="payment-info-block payment-info-block-2">
                                <p className="estimate__title">Estimate</p>
                                <p className="estimate__value">$400</p>
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
                                    <div className="estimate__title">
                                        Total Expert Amount
                                    </div>
                                </div>
                                <div className="col-4 offset-2">
                                    <div className="estimate__value">
                                        $400
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
                                    <div className="estimate__value">
                                        $200
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
                                    <div className="estimate__value">
                                        $200
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
                                    <div className="estimate__value">
                                        $10
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
                                    <div className="estimate__value">
                                        $360.05
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="payment-buttons d-none js-payment-closure">
                            <button type="button" className="button max-160 js-get-report">
                                Get report
                            </button>
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

export default ExpertInSentRequests;
