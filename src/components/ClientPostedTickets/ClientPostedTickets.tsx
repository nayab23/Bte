import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FlatData from './FlatData';

const ClientPostedTickets: React.FC = () => (
    <div className="container container-fluid-small">
        <main className="main-content main-content--dashboard">
            {/* <FlatData /> */}
            <div className="container container-fluid-small">
                <div className="row justify-content-center por moving-container">
                    <div className="col-12 col-lg-8 order-0 order-lg-1 search-box-wrapper search_box_wrapper" style={{ position: "absolute" }}>
                        <form action="#" method="post"
                            id="search-box" className="">
                            <input type="hidden" name="_token" value="n4itSO0991r0Fb4Nqav0hYncTZQ6Ot0Ddf2nMRdj" />
                            <label className="input__wrapper input__wrapper--search">
                                <input type="text" className="input input-seach" placeholder="Search Expert"
                                    name="expert_name" />
                                <button type="submit" className="button--no-style">
                                    <i className="search-icon-blue"></i>
                                </button>
                            </label>
                        </form>
                        <Link to={"/client-dashboard/post-ticket"} type="button" className="button rounded-small post-a-ticket-cta max-160">
                            <span className="d-none d-md-inline">Post a ticket</span>
                            <span className="d-inline d-md-none">+</span>
                        </Link>
                    </div>

                    <div className="col-6 col-lg-4 order-1 order-lg-1 post-drop-down" id="tickets-list" style={{ position: "absolute" }}>
                        <div className="tile tile--2 tile__2">
                        <label className="input__wrapper input__wrapper--select">
                            <MDBDropdown>
                                <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{ display: "flex", padding: "5px 17px", color: "#372E75", fontSize: "16px", borderRadius: "6px" }}>
                                    Posted tickets
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic style={{ width: "100%" }}>
                                    <Link to='/client-dashboard/tickets-in-progess'>
                                        <MDBDropdownItem>
                                            Tickets in progress
                                </MDBDropdownItem>
                                    </Link>
                                    <Link to='/client-dashboard/posted-tickets' style={{ color: "#ffffff" }}>
                                        <MDBDropdownItem active>
                                            Posted Tickets
                                </MDBDropdownItem>
                                    </Link>
                                    <Link to='/client-dashboard/closed-tickets'>
                                        <MDBDropdownItem >
                                            Closed tickets
                                    </MDBDropdownItem>
                                    </Link>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </label>
                        </div>

                    </div>
                </div>
                <div className="all-tickets">
                <FlatData/>
                </div>
                <AddPaymentMethod />
            </div>
        </main>
    </div>
);

export default ClientPostedTickets;
