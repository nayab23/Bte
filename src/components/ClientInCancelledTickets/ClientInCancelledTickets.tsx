import React from 'react';
import styles from './ClientInCancelledTickets.module.css';
import step1 from "../app_assets/img/step-1-pic.svg";
import step3 from "../app_assets/img/step-3-pic.svg";
import step2 from "../app_assets/img/step-2-pic.svg";
import step4 from "../app_assets/img/step-4-pic.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const ClientInCancelledTickets: React.FC = () => (
    <div className="container container-fluid-small">
<main className="main-content main-content--dashboard">
    <div className="container container-fluid-small">
        <div className="row justify-content-center por moving-container">

            <div className="col-12 col-lg-8 order-0 order-lg-1 search-box-wrapper search_box_wrapper"  style={{position: "absolute"}}>
                <form action="" method="post" id="search-box"
                    className="">
                    <input type="hidden" name="_token" value="O8sXcIs335BaBKHiPPW1KOKyYn3eeV80zLEKK4Oh"/> <label
                        className="input__wrapper input__wrapper--search">
                        <input type="text" className="input input-seach" placeholder="Search Expert" name="expert_name"/>
                        <button type="submit" className="button--no-style">
                            <i className="search-icon-blue"></i>
                        </button>
                    </label>
                </form>
                <Link to={"/client-dashboard/post-ticket"} type="button" className="button rounded-small post-a-ticket-cta max-160"
                    >
                    <span className="d-none d-md-inline">Post a ticket</span>
                    <span className="d-inline d-md-none">+</span>
                </Link>
            </div>

            <div className="col-6 col-lg-4 order-1 order-lg-1" id="tickets-list">
                <div className="tile tile--2 tile__2">
                    <label className="input__wrapper input__wrapper--select">
                        <MDBDropdown>
                            <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#372E75",fontSize:"16px",borderRadius: "6px"}}>
                                Cancelled tickets
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic style={{width:"100%"}}>
                                <Link to='/client-dashboard/tickets-in-progess'>
                                    <MDBDropdownItem>
                                        Tickets in progress
                                    </MDBDropdownItem>
                                </Link>
                                <Link to='/client-dashboard/posted-tickets' style={{color:"#ffffff"}}>
                                    <MDBDropdownItem>
                                    Posted Tickets
                                    </MDBDropdownItem>
                                </Link>
                                <Link to='/client-dashboard/closed-tickets'>
                                    <MDBDropdownItem>
                                    Closed tickets
                                    </MDBDropdownItem>
                                </Link>
                                <Link to='/client-dashboard/cancelled-tickets'>
                                    <MDBDropdownItem active>
                                    Cancelled tickets
                                    </MDBDropdownItem>
                                </Link>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        {/* <div className="ui dropdown dropdown-2 dropdown-3 selection dropdown--my-tickets" tabIndex={0}>
                            <a href="#" className="text">
                                Tickets cancelled
                            </a>
                            <i className="dropdown icon" tabIndex={0}>
                                <div className="menu" tabIndex={-1}></div>
                            </i>
                            <div className="menu" tabIndex={-1}>

                            <div className="item dropdown-active-link active ">
                                        <Link to={'/client-dashboard/tickets-in-progess'} className="item dropdown-active-link"> Tickets in progress </Link>
                                        </div>

                                        <div className="item dropdown-active-link ">
                                           <Link to={'/client-dashboard/posted-tickets'} className="item dropdown-active-link"> Posted tickets </Link>
                                        </div>

                                        <div className="item dropdown-active-link">
                                        <Link to={'/client-dashboard/closed-tickets'} className="item dropdown-active-link"> Closed tickets </Link>
                                       </div>

                                    <div className="item dropdown-active-link">
                                    <Link to={'/client-dashboard/cancelled-tickets'} className="item dropdown-active-link active"> Cancelled tickets</Link>     
                                    </div>
                            </div>
                        </div> */}
                    </label>
                </div>


                <div className="tile tile--2 tile__2 tile--tickets-list">
                    <ul className="tickets-list">
                        <li className="tickets-list__item js-tickets-list__item tickets-list__item--active">
                            <div className="tickets-list__img">
                                {/* <!-- <img src="" alt=""> --> */}
                                <span className="status-icon online"></span>
                            </div>
                            <div className="tickets-list__text">
                                <h3 className="tickets-list__name">
                                    Laravel Livewire Expert Required Testing Directly A S Signed
                                </h3>
                                <p className="tickets-list__subtext">
                                    I need a strong Laravel developer to take over my current Laravel + Livewire project
                                    ... Need an expert in Laravel to work on many different projects Need ... Full-stack
                                </p>
                            </div>
                            <div className="tickets-list__text">

                            </div>
                        </li>


                    </ul>
                </div>
            </div>

            <div className="col-6 col-lg-8 order-1 order-lg-1 d-block" id="ticket-section-wrapper">
                <div className="tile tile--2 tile__2 tile--ticket tile--ticket-active tile--ticket-cancelled tile--ticket-hourly"
                    data-ticket-id="1">
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
                            <li className="ticket-header__list-item disabledd-block disabled" data-tab="dialog">
                            <Link to={"/client-dashboard/post-ticket"}>
                                    Dialog
                            </Link>
                            </li>
                            <li className="ticket-header__list-item disabled d-block" data-tab="files">
                                <a href="#">
                                    Files
                                </a>
                            </li>
                            <li className="ticket-header__list-item disabled d-block" data-tab="payment">
                                <a href="#">
                                    Payment
                                </a>
                            </li>
                            <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
                        </ul>
                    </div>
                    {/* <!-- Ticket info START --> */}
                    <div className="ticket-body" data-tab="ticket">
                        <h2 className="ticket__name" id="ticket_name"> Laravel Livewire Expert Required Testing Directly A S
                            Signed</h2>
                        <div className="ticket__details-row">
                            <p className="ticket__category">
                                <span className="category--line"> Category: </span>
                                <span className="t-category" style={{color:"#6c757d"}} id="ticket_category"> Development </span>

                            </p>
                            <p className="ticket__rate" id="ticket_hours_2">

                            </p>
                        </div>

                        <div className="ticket__description" style={{color:"#388ccb"}}>
                            Project description
                        </div>
                        <p className="ticket__description-text" id="ticket_description_text">
                            I need a strong Laravel developer to take over my current Laravel + Livewire project ...
                            Need an expert in Laravel to work on many different projects Need ... Full-stack
                        </p>




                        <hr/>

                    </div>
                    {/* <!-- Ticket info END --> */}


                </div>
            </div>
        </div>





    </div>
</main>
</div>
);

export default ClientInCancelledTickets;
