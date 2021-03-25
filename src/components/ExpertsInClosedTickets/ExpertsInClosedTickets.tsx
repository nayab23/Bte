import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import location from "../app_assets/img/location.svg"
import silver from "../app_assets/img/silver.svg"
import checkmark from "../app_assets/img/checkmark-r.svg"
import styles from './ExpertsInClosedTickets.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const ExpertsInClosedTickets: React.FC = () => (
  <div>
  <main className="main-content main-content--dashboard main__my-tickets--sent">
      <div className="container container-fluid-small">
      <div className="row">
        <div className="col-12 col-lg-4" id="tickets-list">
            <div className="tile tile--2">
                <label className="input__wrapper input__wrapper--select">
                    <MDBDropdown>
                    <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da",fontSize: "16px",borderRadius: "6px"}}>
                     Closed
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
                            <MDBDropdownItem>
                            Sent Applications
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/closed-tickets'}>
                            <MDBDropdownItem active>
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
                              data-ticket-id="177" id="177" >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Testing of wrong values
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Expert price 100$ per hour
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="176" id="176"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Test Feb 4
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Expert request on 100
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="165" id="165"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Email sending test 03
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello, ticket posted successfully but couldn't get email.
                                      Maybe my email have issues.
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="160" id="160"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      testing again at
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      hello.. I am testin hourly rate of 50$
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="150" id="150"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      14 Jan Ticket process test
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello sir,
                                      I have 35 years of experience in AWS deployments.
                                      Will solve this issue in 10 hours.
                                      Kindly hire me.
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="141" id="141"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      12 Jan Invite to Ticket test
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello sir, how are you. I want to solve your issue @ 22$ per hour
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="140" id="140"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      12 Jan Test
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello sir,
                                      I can do it in 50$ fixed price.
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="137" id="137"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Live Log Active Tickets
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="133" id="133"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      A framework for ambitious web developers.
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hello
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="120" id="120"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Test ticket - standard hiring process _ hourly
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Request from expert for hiring
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="115" id="115"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      December 8 test - Hire Request
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Will work on this ticket
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="99" id="99"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Project 10
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      111$ fixed price ticket acceptance... normal flow.
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="92" id="92"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Project 05
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Testing hourly rate 5
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="87" id="87"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Tell us what's type of job you need to get done 02
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Hourly rate test... from pool
                                  </p>
                              </div>
                              <div className="tickets-list__text">
  
                              </div>
                          </li>
                          <li className="tickets-list__item js-tickets-list__item" data-ticket-id="55" id="55"
                              >
                              <div className="tickets-list__img">
                                  {/* <!-- <img src="" alt=""> --> */}
                                  <span className="status-icon online"></span>
                              </div>
                              <div className="tickets-list__text">
                                  <h3 className="tickets-list__name">
                                      Welcome Back
                                  </h3>
                                  <p className="tickets-list__subtext">
                                      Two thugs, Uday and Majnu, meet Rajeev, who belongs to a respectable family, and
                                      want to get their sister married to him. A series of funny situations occur when
                                      Rajeev's uncle opposes the marriage.
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
                              <li className="ticket-header__list-item d-block" data-tab="resolution" id="add--resolution-tab">
                                  <a href="Javascript:void(0);" id="177" >
                                      Add to resolution
                                  </a>
                              </li>
  
                              <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
                          </ul>
                      </div>
                      <div className="ticket-body" data-tab="ticket">
                          <h2 className="ticket__name ticket_title">Testing of wrong values</h2>
                          <div className="ticket__details-row ticket__details-row--top-aligned">
                              <div className="opened-ticket__details" style={{width: "80%"}}>
                                  <div className="feed-item__name opened-ticket__name" id="client_name">
                                      Naeem Qamar
                                  </div>
  
                                  <div className="expert-lineitem__location">
                                      <img src={location} alt="location icon" />
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
  
                                  <p className="ticket__date opened-ticket__date" id="open_date">
                                      October 08 - 2020,
                                      5:47 AM
  
                                  </p>
                              </div>
  
  
                          </div>
                          <div className="opened-ticket__details-row">
                              <div className="opened-ticket__details-2">
                                  <span className="opened-ticket__detail-title">Category:</span>
                                  <span className="opened-ticket__detail-value" id="category_name">Database</span>
  
  
                                  <p className="ticket__rate worked">
  
                                      10/10 hours
  
  
  
                                  </p>
  
                                  <p className="ticket__rate ticket__request" id="tickte_estimated_p">
                                      $200
  
                                  </p>
  
  
  
  
                              </div>
                              <div className="opened-ticket__details-2">
                                  <span className="opened-ticket__detail-title">Vendor:</span>
                                  <span className="opened-ticket__detail-value" id="vender_name">Delphi</span>
  
  
                                  <p className="ticket__rate-2" id="ticket_type_rate">
                                      $20/hour
  
                                  </p>
  
  
                              </div>
                          </div>
  
                          <div className="ticket__description opened-ticket__description">Project description</div>
  
                          <p className="ticket__description-text" id="ticket_description">
                              Expert price 100$ per hour
                          </p>
                          <div className="ticket__description">
                              Skills required
                          </div>
                          <p className="ticket__description-text skills__list" id="skillset_name">
                              <a href="#" className="skills__item"> Data Protection </a>
  
  
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
                                              id="exp_country_name" />
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
                                          Expert price 100$ per hour
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      {/* <!-- Ticket dialog START --> */}
                      <div className="ticket-body ticket-body--dialog hide" data-tab="dialog" style={{height:"530px"}}>
                          <ul className="messages" data-tab="dialog" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                              id="messages">
  
  
  
  
  
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
                                      value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />
                                  <input type="text" placeholder="Here will be written the message" className="input"
                                      id="text" readOnly style={{cursor: "not-allowed"}} disabled />
                                  <button type="button" className="button new-message-container__send-button" id="btnsend"
                                       style={{cursor: "not-allowed"}} disabled >
                                      Send
                                  </button>
                                  <label className="button button--no-style button--attach disabled " id="image-upload"
                                      style={{cursor: "not-allowed"}} >
                                      <span className="visually-hidden">Attach</span>
                                      <input type="file" id="avatar" className="visually-hidden" readOnly
                                          style={{cursor: "not-allowed"}} disabled />
                                  </label>
                              </form>
  
                              <div id="pools">
                                  <input type="hidden" id="pool" value="9" />
                                  <input type="hidden" id="from_client" value="74" />
                                  <input type="hidden" id="ticketid" value="177" />
  
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
                          <h2 className="ticket__name ticket_title">
                              Testing of wrong values
                          </h2>
  
                          <div className="ticket__details-row payment-row payment-row--last">
                              <div className="payment-info-block payment-info-block-2">
                                  <p className="estimate__title">Deposit</p>
                                  <p className="estimate__value line-1">$200</p>
                              </div>
                              <div className="payment-info-block payment-info-block-2">
                                  <p className="estimate__title">Fixed Price </p>
                                  <p className="estimate__value">$20</p>
  
                              </div>
                              <div className="payment-info-block payment-info-block-2">
                                  <p className="estimate__title">Estimate</p>
                                  <p className="estimate__value">$200</p>
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
                                          <p className="estimate__value">$200</p>
  
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
                                          <p className="estimate__value line-1">$200</p>
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
                                          $0
  
  
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
                                          $0
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
                                          $ $0
  
  
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

export default ExpertsInClosedTickets;
