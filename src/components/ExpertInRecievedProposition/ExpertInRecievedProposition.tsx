import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import location from "../app_assets/img/location.svg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
const ExpertInRecievedProposition: React.FC = () => (
  <div>
  <main className="main-content main-content--dashboard main__my-tickets--received">
  <div className="container container-fluid-small">
        {/* Dropdownand search row */}
    <div className="row">
        <div className="col-12 col-lg-4" id="tickets-list">
            <div className="tile tile--2">
                <label className="input__wrapper input__wrapper--select">
                    <MDBDropdown>
                    <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da",fontSize: "16px",borderRadius: "6px"}}>
                    Received propositions
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
                            <MDBDropdownItem active>
                            Received propositions
                            </MDBDropdownItem>
                        </Link>
                        <Link to={'/expert-dashboard/mytickets/sent-requests'}>
                            <MDBDropdownItem>
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
                      <li id="req"></li>
                      <li className="tickets-list__item js-tickets-list__item tickets-list__item--active"
                          data-ticket-id="223" id="223" >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Direct a ssign testing
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign
                                  testingDirect a ssign testingDirect a ssign testingDirect a ssign testingDirect a
                                  ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign testing
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="221" id="221"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Profile Hire Process
                              </h3>
                              <p className="tickets-list__subtext">
                                  Profile Hire Process Profile Hire Process Profile Hire Process Profile Hire Process
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="220" id="220"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Direct Hire
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct Hire Test
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="204" id="204"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Configure eDMS and upload files are having an error
                              </h3>
                              <p className="tickets-list__subtext">
                                  SAPeDMS configuration has a vulnerability , looking for someone to fix and secure
                                  the SOD and Access review for Corporate users. SAPeDMS configuration has a
                                  vulnerability , looking for someone to fix and secure the SOD and Access review for
                                  Corporate users. SAPeDMS configuration has a vulnerability , looking for someone to
                                  fix and secure the SOD and Access review for Corporate users.


                                  SAPeDMS configuration has a vulnerability , looking for someone to fix and secure
                                  the SOD and Access review for Corporate users.
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="198" id="198"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Confirmation Page Test
                              </h3>
                              <p className="tickets-list__subtext">
                                  Tell us more about your business and the whole project overall. (2000 Caracters max)
                                  Tell us more about your business and the whole project overall. (2000 Caracters
                                  max)Tell us more about your business and the whole project overall. (2000 Caracters
                                  max) Tell us more about your business and the whole project overall. (2000 Caracters
                                  max)
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="189" id="189"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Ihor is testing the system
                              </h3>
                              <p className="tickets-list__subtext">
                                  in order for BTE work better, we need to make it more consistentand make sure
                                  everything works
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="173" id="173"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Direct a s sign 2701
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct a s sign 2701Direct a s sign 2701Direct a s sign 2701Direct a s sign
                                  2701Direct a s sign 2701Direct a s sign 2701Direct a s sign 2701Direct a s sign
                                  2701Direct a s sign 2701Direct a s sign 2701
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="147" id="147"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  System test 05
                              </h3>
                              <p className="tickets-list__subtext">
                                  What time are doing well and that you are you going to be able to make it to the
                                  meeting tonight but I will be there in 20 minutes to get to know you better and
                                  better than the last one is the deposit.
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="70" id="70"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Test 0005
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct Assign
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="69" id="69"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Test 0005
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct Assign
                              </p>
                          </div>
                          <div className="tickets-list__text">

                          </div>
                      </li>
                      <li className="tickets-list__item js-tickets-list__item" data-ticket-id="68" id="68"
                          >
                          <div className="tickets-list__img">
                              {/* <!-- <img src="" alt=""> --> */}
                              <span className="status-icon online"></span>
                          </div>
                          <div className="tickets-list__text">
                              <h3 className="tickets-list__name">
                                  Test 0005
                              </h3>
                              <p className="tickets-list__subtext">
                                  Direct Assign
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
                          <li className="ticket-header__list-item d-block disabled" data-tab="files">
                              <a href="#">
                                  Files
                              </a>
                          </li>
                          <li className="ticket-header__list-item d-block disabled" data-tab="contract">
                              <a href="#">
                                  Contract
                              </a>
                          </li>
                          <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
                      </ul>
                  </div>
                  <div className="ticket-body" data-tab="ticket">
                      <h2 className="ticket__name" id="ticket_title">Direct a ssign testing</h2>
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
                                  September 07 - 2020,
                                  12:15 AM

                              </p>
                          </div>
                          <div className="opened-ticket__cta-container d-none d-md-block" id="accept">

                              <a href="#"
                                  className="button opened-ticket__cta">Accept </a>


                              <button className="button opened-ticket__cta opened-ticket__cta--secondary" id="223"
                                  >
                                  {/* <!-- <img src="../img/archive-blue.svg" alt="delete"> --> */}
                                  Decline
                              </button>
                          </div>

                      </div>




                      <div className="opened-ticket__details-row">
                          <div className="opened-ticket__details-2">
                              <span className="opened-ticket__detail-title">Category:</span>
                              <span className="opened-ticket__detail-value" id="category_name">Database</span>

                          </div>
                          <div className="opened-ticket__details-2">
                              <span className="opened-ticket__detail-title">Vendor:</span>
                              <span className="opened-ticket__detail-value" id="vender_name">Delphi</span>

                          </div>
                      </div>

                      <div className="ticket__description opened-ticket__description">Project description</div>

                      <p className="ticket__description-text" id="ticket_description">
                          Direct a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign
                          testingDirect a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign
                          testingDirect a ssign testingDirect a ssign testingDirect a ssign testing
                      </p>
                      <div className="ticket__description opened-ticket__description">Contract description</div>
                      <p className="ticket__description-text" id="contract_description">
                      </p>


                      <div className="ticket__description">
                          Skills required
                      </div>
                      <p className="ticket__description-text skills__list" id="skillset_name">
                          <a href="#" className="skills__item"> Database 01 </a>


                      </p>
                      <div className="ticket__description">
                          Attachments
                      </div>
                      <div className="ticket__description-text opened-ticket__description-text" id="ticket_attachments">

                      </div>

                      <hr />
                      <div className="expert-lineitem expert-line-static" style={{display:"none"}}>
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
                                      <span>$</span>/fixed

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

                                  {/*<!-- <div className="expert-lineitem__status">
                                          <img src="/public/app_assets/img/golden.svg" alt="golden status icon">
                                      Golden status
                                   </div> --> */}
                                  <div className="expert-lineitem__status">
                                      <img src="/public/app_assets/img/silver.svg" alt="silver status icon" />
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

                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>


                  {/* <!-- Ticket dialog START --> */}
                  <div className="ticket-body ticket-body--dialog hide" data-tab="dialog" style={{height:"550px"}}>
                      <ul className="#" data-tab="dialog" style={{display: "block", height:"400px", overflowY: "scroll"}}
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
                                  <small id="feedback" style={{marginTop:"0px"}}></small>
                              </div>
                          </div>
                          {/* <!--end files and typing--> */}

                          <form action="#" style={{paddingTop: "0px"}}>
                              <div id="kkk_value">
                                  <input type="hidden" id="dialouge_id" value="0"/>
                                  <input type="hidden" id="client" value="0"/>
                              </div>

                              <input type="hidden" id="csrf_token_input"
                                  value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />
                              <input type="text" placeholder="Here will be written the message" className="input"
                                  id="text"/>
                              <button type="button" className="button new-message-container__send-button" id="btnsend">
                                  Send
                              </button>
                              <label className="button button--no-style button--attach" id="image-upload">
                                  <span className="visually-hidden">Attach</span>
                                  <input type="file" id="avatar" className="visually-hidden"/>
                              </label>
                          </form>

                          <div id="pools">
                              <input type="hidden" id="pool" value="0" />
                              <input type="hidden" id="from_client" value="0" />
                              <input type="hidden" id="reference_id" value="0" />

                          </div>
                      </div>
                  </div>
                  {/* <!-- Ticket dialog END --> */}

                  <div className="ticket-body hide" data-tab="files">
                      <div className="files-container" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                          id="attached_files">

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






                  <div className="tile tile--2 tile--sticky-bottom d-flex d-md-none" id="accept1">

                      <a href="#"
                          className="button opened-ticket__cta">Accept </a>


                      <button className="button opened-ticket__cta opened-ticket__cta--secondary" id="223"
                          >
                          <img src="/app_assets/img/archive-blue.svg" alt="delete" />
                          Archivee
                      </button>
                  </div>

              </div>
          </div>
      </div>
  </div>
</main>
</div>
);

export default ExpertInRecievedProposition;
