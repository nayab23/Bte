import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import jobs from '../app_assets/img/Final-ICONS_SVG_2-Completed Jobs.svg';
import payment from '../app_assets/img/Final-ICONS_SVG_4-Pending Payments.8458574d.svg';
import fixe from '../app_assets/img/Final-ICONS_SVG_6-Message.3c89a663.svg';
import hour from '../app_assets/img/Final-ICONS_SVG_11-Hours-Grey.cbf4b775.svg';
import date from '../app_assets/img/Final-ICONS_SVG_13-Date-Completed.909d6a8a.svg';
import payments from '../app_assets/img/1299b1e8b2f9885448095ee23581e939.20e959d0.png';
import contract from '../app_assets/img/Final-ICONS_SVG_10-Category-Type-contract.9d3bd42b.svg';
import threeDots from '../app_assets/img/three-dots.svg';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import filter_icon from '../app_assets/img/Final-ICONS_SVG_11-Hours.svg'
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import bell from '../app_assets/img/Final-ICONS_SVG_0-Bell.svg';
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';
import AppliedModal from './ApplideModal';
import ChatModal from './ChatModal';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './ComponentStyle/chatStyle.css';
// import './ComponentStyle/messageComponent.css';
import { AiFillCaretDown } from "react-icons/ai";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Ticket extends Component {
  
  state = {
    filter_title: 'All Tickets'
}
setFilter = (filter) =>{
    switch (filter) 
    {
        case 0:
            this.setState({filter_title: 'Search'})
            break;
        case 1:
            this.setState({filter_title: 'In Progress'})
            break;
        case 2:
            this.setState({filter_title: 'In Complete'})
            break;
        case 3:
            this.setState({filter_title: 'Completed'})
            break;
        default:
            break;
    }
    this.setState({filter: true});
}

setActive = (filter) =>
{
    for (let item = 0 ; item < 4 ; item++)
    {
        document.getElementById(`contract-filter-${item}`).classList.remove('active-filter')
    }
    document.getElementById(`contract-filter-${filter}`).classList.add('active-filter')
}

componentDidMount = () =>
{
    this.setFilter(0)
}
    render() {
      var settings = {
        // dots: true,
        infinite: true,
        swipe: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 772,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        return (
            <div>
                {/* <!-- Animated Tab --> */}
                
        <div className="tab-wrapper row-top-margin">
          <Tabs defaultTab="my-tickets" style={{position: "relative"}}>
            <TabList  className="experts-list">
              <div className="tab-browser">
                <Tab className="slider-experts" tabFor="my-tickets">Tickets</Tab>
                <Tab className="slider-experts" tabFor="my-contracts">Contracts</Tab>
                {/* <form className="main-search-form">
                  <img src={search} className="search-icon" />
                  <div>
                  <MDBDropdown className="dropdown--hire-now mr-1">
                    <MDBDropdownToggle className="dropdown-search" style={{padding:0}} color="none">
                      <AiFillCaretDown />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <Link to="/client-dashboard/find_experts/search-result">
                            <MDBDropdownItem  className="item dropdown-active-link">
                             Experts
                             </MDBDropdownItem>
                        </Link>
                        <Link to="#">
                            <MDBDropdownItem  className="item dropdown-active-link">
                             Category
                             </MDBDropdownItem>
                        </Link>
                        <Link to="#">
                            <MDBDropdownItem  className="item dropdown-active-link">
                             Skills
                             </MDBDropdownItem>
                        </Link>
                    </MDBDropdownMenu>
                </MDBDropdown>
                  </div>
                  <input placeholder="Search" name="search" className="search--input" type="text" />
                </form> */}
                    <div className='tab-dropdown-wrapper' style={{position: "absolute", right: "0px"}}>
                    <img src={filter_icon} className="filter-icon" />
                    {this.state.filter_title}
                    <MDBDropdown>
                        <MDBDropdownToggle caret color="white" id="tab-dropdown-button">
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                            <div className="menu-item-wrapper">    
                                <MDBDropdownItem onClick={()=>{this.setFilter(0)}} id="ticket-filter-0" className="filter-item">
                                    <div className="status-icon status-icon-aqua menu-status-icon tranparent-icon"></div>
                                    All Tickets
                                </MDBDropdownItem>
                                <MDBDropdownItem onClick={()=>{this.setFilter(1)}} id="ticket-filter-1" className="filter-item">
                                    <div className="status-icon status-icon-blue menu-status-icon"></div>
                                    Posted Tickets
                                </MDBDropdownItem>
                                <MDBDropdownItem onClick={()=>{this.setFilter(2)}} id="ticket-filter-2" className="filter-item">
                                    <div className="status-icon status-icon-yellow menu-status-icon"></div>
                                    Pending Tickets
                                </MDBDropdownItem>
                                <MDBDropdownItem onClick={()=>{this.setFilter(3)}} id="ticket-filter-3" className="filter-item">
                                    <div className="status-icon status-icon-red menu-status-icon"></div>
                                    Rejected Tickets
                                </MDBDropdownItem>
                                <MDBDropdownItem onClick={()=>{this.setFilter(4)}} id="ticket-filter-4" className="filter-item">
                                    <div className="status-icon status-icon-aqua menu-status-icon"></div>
                                    Negotiation Tickets
                                </MDBDropdownItem>
                            </div>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
              </div>
            </TabList>
            <div className="panel-body expert-panel">
              <TabPanel tabId="my-tickets">
                <div id="my-tickets" role="tabpanel" aria-expanded="true"
                  aria-hidden="false" aria-labelledby="my-tickets-tab" className="rwt__tabpanel">
                  <div className="tab-body">
                    <div id="ticket-page-1" className="hide-page active-page">
                      <div >
                        <div data-test="container" className="container"></div>
                        <div data-test="container" className="container"></div>
                        <div className="ticket-row js-tickets-list__item tickets-list__item ">
                          <div className="title-wrapper">
                            <div className="title">Ticket Title: Full Stack Developer, Databases, Web Architecture & Storage</div>
                            <div className="date">Created at: April 07, 2020</div>
                          </div>
                          <div className="expert-name-wrapper hide">
                            <div className="avatar"
                              style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                            </div>
                            <div className="expert-name">
                              <div className="name">Saad Asad</div>
                              <div className="rating"><img
                                src={star}
                                className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /></div>
                            </div>
                          </div>
                          <div className="tab-stat-wrapper">
                            <div className="badge-wrapper hide"><span className="hire-badge">Hire
                                            Requested</span></div>
                            <div className="stats-wrapper">
                              <div className="stat">
                              <ChatModal />
                                <div className="value value20">20</div>
                              </div>
                              <div className="stat">
                               <AppliedModal/>
                                <div className="value value10">10</div>
                              </div>
                              <div className="stat"><img className="icon"
                                src={jobs} />
                                <div className="value">30</div>
                              </div>
                            </div>
                            <div className="status-wrapper hide">
                              <div className="status-icon status-icon-aqua"></div>
                              <div className="status-text">Negotiation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div data-test="container" className="container"></div>
                        <div data-test="container" className="container"></div>
                        <div className="ticket-row js-tickets-list__item tickets-list__item ">
                          <div className="title-wrapper">
                            <div className="title">Ticket Title: Sharepoint configuration requirement required
                                        for a startup</div>
                            <div className="date">Created at: May 09, 2020</div>
                          </div>
                          <div className="expert-name-wrapper hide">
                            <div className="avatar"
                              style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center cente", backgroundSize: "cover" }}>
                            </div>
                            <div className="expert-name">
                              <div className="no-request">No hire request</div>
                              <div className="rating"></div>
                            </div>
                          </div>
                          <div className="tab-stat-wrapper">
                            <div className="badge-wrapper hide"></div>
                            <div className="stats-wrapper">
                              <div className="stat">
                              <ChatModal />
                                <div className="value value20">20</div>
                              </div>
                              <div className="stat">
                              <AppliedModal/>
                                <div className="value value10">10</div>
                              </div>
                              <div className="stat"><img className="icon"
                                src={jobs} />
                                <div className="value">30</div>
                              </div>
                            </div>
                            <div className="status-wrapper hide">
                              <div className="status-icon status-icon-red"></div>
                              <div className="status-text">Rejected</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div data-test="container" className="container"></div>
                        <div data-test="container" className="container"></div>
                        <div className="ticket-row js-tickets-list__item tickets-list__item ">
                          <div className="title-wrapper">
                            <div className="title">Ticket Title: showing all tickets list</div>
                            <div className="date">Created at: April 08, 2020</div>
                          </div>
                          <div className="expert-name-wrapper hide">
                            <div className="avatar"
                              style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                            </div>
                            <div className="expert-name">
                              <div className="name">name</div>
                              <div className="rating"><img
                                src={star}
                                className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /></div>
                            </div>
                          </div>
                          <div className="tab-stat-wrapper">
                            <div className="badge-wrapper hide"><span className="hire-badge">Hire
                                            Requested</span></div>
                            <div className="stats-wrapper">
                              <div className="stat">
                              <ChatModal />
                                <div className="value value20">20</div>
                              </div>
                              <div className="stat">
                              <AppliedModal/>
                                <div className="value value10">10</div>
                              </div>
                              <div className="stat"><img className="icon"
                                src={jobs} />
                                <div className="value">30</div>
                              </div>
                            </div>
                            <div className="status-wrapper hide">
                              <div className="status-icon status-icon-red"></div>
                              <div className="status-text">Rejected</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div data-test="container" className="container"></div>
                        <div data-test="container" className="container"></div>
                        <div className="ticket-row js-tickets-list__item tickets-list__item ">
                          <div className="title-wrapper">
                            <div className="title">Ticket Title</div>
                            <div className="date">Created at: Jun 03, 2020</div>
                          </div>
                          <div className="expert-name-wrapper hide">
                            <div className="avatar"
                              style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                            </div>
                            <div className="expert-name">
                              <div className="no-request">No hire request</div>
                              <div className="rating"></div>
                            </div>
                          </div>
                          <div className="tab-stat-wrapper">
                            <div className="badge-wrapper hide"></div>
                            <div className="stats-wrapper">
                              <div className="stat">
                              <ChatModal />
                                <div className="value value20">20</div>
                              </div>
                              <div className="stat">
                              <AppliedModal/>
                                <div className="value value10">10</div>
                              </div>
                              <div className="stat"><img className="icon"
                                src={jobs} />
                                <div className="value">30</div>
                              </div>
                            </div>
                            <div className="status-wrapper hide">
                              <div className="status-icon status-icon-red"></div>
                              <div className="status-text">Rejected</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="ticket-page-2" className="hide-page">
                      <div>
                        <div data-test="container" className="container"></div>
                        <div data-test="container" className="container"></div>
                        <div className="ticket-row js-tickets-list__item tickets-list__item ">
                          <div className="title-wrapper">
                            <div className="title">title</div>
                            <div className="date">Created at: April 07, 2020</div>
                          </div>
                          <div className="expert-name-wrapper hide">
                            <div className="avatar"
                              style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                            </div>
                            <div className="expert-name">
                              <div className="name">name</div>
                              <div className="rating"><img
                                src={star}
                                className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={star}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /><img
                                  src={hollowstar}
                                  className="rating-icon" /></div>
                            </div>
                          </div>
                          <div className="tab-stat-wrapper">
                            <div className="badge-wrapper hide"><span className="hire-badge">Hire
                                            Requested</span></div>
                            <div className="stats-wrapper">
                              <div className="stat">
                              {/* <ChatModal />  */}
                              <div className="value value20">20</div>
                              </div>
                              <div className="stat">
                              <AppliedModal/>
                                <div className="value value10">10</div>
                              </div>
                              <div className="stat"><img className="icon"
                                src={jobs} />
                                <div className="value">30</div>
                              </div>
                            </div>
                            <div className="status-wrapper hide">
                              <div className="status-icon status-icon-red"></div>
                              <div className="status-text">Rejected</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                    <MDBPagination>
                      <MDBPageItem disabled>
                          <MDBPageNav aria-label="Previous">
                          <span aria-hidden="true">Previous</span>
                          </MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem active>
                          <MDBPageNav>
                          1 <span className="sr-only">(current)</span>
                          </MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                          <MDBPageNav>2</MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                          <MDBPageNav>3</MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                          <MDBPageNav aria-label="Previous">
                          <span aria-hidden="true">Next</span>
                          </MDBPageNav>
                      </MDBPageItem>
                  </MDBPagination>
                  </div>
                  </div> 
                </div>
              </TabPanel>
              <TabPanel tabId="my-contracts">

                <div id="contracts" role="tabpanel" aria-expanded="false"
                  aria-hidden="true" aria-labelledby="contracts-tab" className="rwt__tabpanel ">
                  <div className="tab-body">
                    <div id="contract-page-1" className="hide-page active-page">
                      <Link to="/client-dashboard/contract" className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Full Stack Developer, Databases, Web Architecture &amp; Storage</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </Link>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={date} />
                              <div className="value contract-value contract-row-icon-date">
                                30-Apr-20</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-orange"></div>
                            <div className="status-text">In Progress</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/client-dashboard/contract" className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">Saad Asad</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </Link>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Hourly</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={contract} />
                              <div className="value contract-value">N/A</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={payments} />
                              <div className="value contract-value contract-row-icon-date">$
                                            500</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-pink"></div>
                            <div className="status-text">In Complete</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/client-dashboard/contract" className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </Link>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={date} />
                              <div className="value contract-value contract-row-icon-date">
                                30-Apr-20</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-orange"></div>
                            <div className="status-text">In Progress</div>
                          </div>
                        </div>
                      </Link>
                      <Link to="/client-dashboard/contract" className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </Link>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={payments} />
                              <div className="value contract-value contract-row-icon-date">$
                                            500</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-green"></div>
                            <div className="status-text">Completed</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div id="contract-page-2" className="hide-page">
                      <div className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </Link>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={payments} />
                              <div className="value contract-value contract-row-icon-date">$
                                            200</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-green"></div>
                            <div className="status-text">Completed</div>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <div className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={date} />
                              <div className="value contract-value contract-row-icon-date">
                                30-Apr-20</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-pink"></div>
                            <div className="status-text">In Complete</div>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-row js-tickets-list__item tickets-list__item ">
                        <div className="title-wrapper">
                          <div className="title">Ticket Title: Exchange hybrid configuration wizard system
                                    requirements</div>
                          <div className="contract-date">
                            <div className="date"><span>Start date: </span>April 07, 2020</div>
                            <div className="date"><span>Due date: </span>April 27, 2020</div>
                          </div>
                        </div>
                        <div className="expert-name-wrapper hide">
                          <div className="avatar"
                            style={{ backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover" }}>
                          </div>
                          <div className="expert-name">
                            <div className="name">name</div>
                            <div className="rating"><img
                              src={star}
                              className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={star}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /><img
                                src={hollowstar}
                                className="rating-icon" /></div>
                          </div>
                        </div>
                        <div className="tab-stat-wrapper contract-tab">
                          <div className="stats-wrapper contract-stat-wrapper">
                            <div className="stat contract-stat"><img className="icon"
                              src={payment} />
                              <div className="value contract-value">$ 20</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={fixe} />
                              <div className="value contract-value">Fixed</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={hour} />
                              <div className="value contract-value">30(hrs)</div>
                            </div>
                            <div className="stat contract-stat"><img className="icon"
                              src={date} />
                              <div className="value contract-value contract-row-icon-date">
                                30-Apr-20</div>
                            </div>
                          </div>
                          <div className="status-wrapper hide">
                            <div className="status-icon status-icon-orange"></div>
                            <div className="status-text">In Progress</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pagination"><span className="disabled-page">&lt; Previous</span><span
                      className="page-number">1</span><span className="page-number">2</span><span
                        className="page-button">Next &gt;</span></div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
{/* /slider---------------------------------------------------- */}
            <div className="tab-wrapper row-top-margin">
            <Tabs className="ticket-tab">
                <TabList className="experts-list">
                      <Tab className="slider-experts" data-tab="online-tab">
                           Online Experts
                      </Tab>
                      <Tab className="slider-experts" data-tab="favourite-experts">
                          Favourite Experts
                      </Tab>
                </TabList>
                <TabPanel className="experttabbody" id="favourite-experts">
                  <Slider {...settings} className="lazy slider" data-sizes="50vw">
                    {/* <div style={{display:"flex"}}> */}
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                          <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">David Forest</h3>
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                            </div>
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Mehar Ali</h3>
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Anees Khan</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">M.Usman</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Mustafa Mahmood</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Zeeshan Ahmed</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Irfan Zafar</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Tahir Saleem</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Nadeem Abbasi</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Shagufya Ambreen</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Ahsan S. Sher</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Muhammad Asad</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>   
                        </div>
                      </div>

                  </Slider>
                </TabPanel>
                <TabPanel className="experttabbody" id="favourite-experts" style={{marginTop:"-40px",}} >
                <Slider {...settings} className="lazy slider" data-sizes="50vw">
                    {/* <div style={{display:"flex"}}> */}
                      
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Mehar Ali</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">David Forest</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Anees Khan</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                          <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">M.Usman</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Mustafa Mahmood</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Zeeshan Ahmed</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Irfan Zafar</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Tahir Saleem</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Nadeem Abbasi</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Shagufya Ambreen</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={star} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                              <img src={hollowstar} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Ahsan S. Sher</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            </div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>
                      <div className="card-shadow" style={{margin: "10px"}}>
                        <div className="short-card">
                        <MDBDropdown className="short-card-dropdown">
                            <MDBDropdownToggle color="none" style={{marginLeft: "40px"}}>
                              <img src={threeDots} className="short-card-selection" alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown--hire-now short-card-drop-w" >
                              <Link to="/client-dashboard/expert-profile">
                                  <MDBDropdownItem  className="item dropdown-active-link"> View profile </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/post-ticket">
                                  <MDBDropdownItem  > Hire to new ticket </MDBDropdownItem>
                              </Link>
                              <Link to="/client-dashboard/hire-to-existing-ticket">
                                  <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                              </Link>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                          <div className="modal-avatar"
                            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                          </div>
                          <h3 className="short-card-title mb-0">Muhammad Asad</h3>
                          
                          <div className="short-card-work-title">(Full Stack Developer)</div>
                          <div className="modal-inner-wrapper">
                            <div className="modal-rating-wrapper">
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={star} className="modal-rating-star" />
                            <img src={hollowstar} className="modal-rating-star" /></div>
                            {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                            </div> */}
                          </div>
                          <div className="modal-feedback-wrapper">(560 Feedback)</div>
                          <Link to="/client-dashboard/hiring" className="modal-favorite-button hidden-modal-hire-button"><img
                            src={hirenow} className="modal-buttons-icon hidden-modal-hire-button-icon" />
                          <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                          </Link>
                        </div>
                      </div>

                  </Slider>
                </TabPanel>
              </Tabs>
            </div>
            </div>
        );
    }
}

export default Ticket;