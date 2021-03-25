import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ClientInProgressTickets.module.css';
import pencil from "../app_assets/img/pencil.svg"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ClientInProgressTickets: React.FC = () => (
    <div className="container container-fluid-small">
        <main  className="main-content main-content--dashboard">
            <div className="row justify-content-center por moving-container">
                <div className="col-12 col-lg-8 order-0 order-lg-1 search-box-wrapper"  style={{position: "absolute"}}>
                    <form action="#" method="post" id="search-box" className="">
                        <label className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search Expert" name="expert_name"></input>
                            <button type="submit" className="button--no-style">
                                <i className="search-icon-blue"></i>
                            </button>
                        </label>
                    </form>
                    <Link to={'/client-dashboard/post-ticket'} type="button" className="button rounded-small post-a-ticket-cta max-160">
                        <span className="d-none d-md-inline">Post a ticket</span>
                        <span className="d-inline d-md-none">+</span>
                    </Link>
                </div>
                <div className="col-6 col-lg-4 order-1 order-lg-1" id="tickets-list">
                    <div className="tile tile--2">
                        <label className="input__wrapper input__wrapper--select">
                            <MDBDropdown>
                                <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#372E75",fontSize: "16px",borderRadius: "6px"}}>
                                Tickets in progress
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic style={{width:"100%"}}>
                                    <Link to='/client-dashboard/tickets-in-progess'>
                                        <MDBDropdownItem active>
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
                                        {/* 
                                    <Link to='/client-dashboard/cancelled-tickets'>
                                        <MDBDropdownItem >
                                        Cancelled tickets
                                        </MDBDropdownItem>
                                    </Link> */}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            {/* <div className="ui dropdown dropdown-2 dropdown-3 selection dropdown--my-tickets">
                                <a href="#" className="text">
                                    Tickets in progress
                            </a>
                                <i className="dropdown icon">
                                    <div className="menu"></div>
                                </i>
                                <div className="menu">
                                    <div className="item dropdown-active-link active ">
                                    <Link to={'/client-dashboard/tickets-in-progess'} className="item dropdown-active-link active "> Tickets in progress </Link>
                                    </div>

                                    <div className="item dropdown-active-link ">
                                    <Link to={'/client-dashboard/posted-tickets'} className="item dropdown-active-link"> Posted tickets </Link>
                                    </div>

                                    <div className="item dropdown-active-link">
                                    <Link to={'/client-dashboard/closed-tickets'} className="item dropdown-active-link"> Closed tickets </Link>
                                </div>

                                <div className="item dropdown-active-link">
                                <Link to={'/client-dashboard/cancelled-tickets'} className="item dropdown-active-link"> Cancelled tickets</Link>     
                                </div>
                            </div>
                            </div> */}
                        </label>
                    </div>
                    <div className="tile tile--2 tile--tickets-list">
                        <ul className="tickets-list">
                            <li className="tickets-list__item js-tickets-list__item tickets-list__item--active">
                                <div className="tickets-list__img">
                                    <span className="status-icon online"></span>
                                </div>
                                <div className="tickets-list__text">
                                    <h3 className="tickets-list__name">Test ticket</h3>
                                    <p className="tickets-list__subtext">Test deatils  Test deatils  Test deatils</p>
                                </div>
                                <div className="tickets-list__text"></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-6 col-lg-8 order-1 order-lg-1 d-block" id="ticket-section-wrapper">
                    <div className="tile tile--2 tile--ticket tile--ticket-active tile--ticket-in-progress tile--ticket-hourly" data-ticket-id="1">
        <Tabs className="ticket-tab">
            <div className="ticket-header">
                <TabList className="ticket-header__list ticket-list">
                    <Tab className="ticket-header-list-item" data-tab="ticket">
                        <a href="#"> Ticket</a>
                    </Tab>
                    <Tab className="ticket-header-list-item " data-tab="dialog">
                        <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
                    </Tab>
                    <Tab className="ticket-header-list-item ">
                        <a href="#"> Files </a>
                    </Tab>
                    <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                        <a href="#"> Payment</a>
                    </Tab>
                </TabList>
            </div> 
            {/* <!-- Ticket info START --> */}  
            <TabPanel className="ticket-body" data-tab="ticket" id="ticketd" >
               <div className="ticket__rate-details">
               <h2 className="ticket__name" id="ticket_name"> Test Ticket </h2>
                <div className="ticket__details-row">
                    <p className="ticket__category" >
                        <span className="category--line">Category: </span> <span id="ticket_category">Web Development</span>
                    </p>
                    <p className="ticket__rate" id="ticket_hours_2">10 hours</p>
                    <p className="ticket__price" id="ticket_price_2">$200</p>
                </div>
               </div>
            </TabPanel>
            {/* <!-- Ticket info END --> */} 
            {/* <!-- Ticket dialog START --> */}
            <TabPanel className="ticket-body ticket-body--dialog ticket-body-content" data-tab="dialog" >
               <div className="hide">
               <ul className="messages"></ul>
                <div className="new-message-container">
                    <form action="#">
                        <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                        <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                        <label className="button button--no-style button--attach">
                            <span className="visually-hidden">Attach</span>
                            <input type="file" className="visually-hidden" />
                        </label>
                    </form>
                </div>
               </div>
            </TabPanel>
            {/* <!-- Ticket dialog END --> */}
            {/* <!-- Ticket files START --> */}
            <TabPanel className="ticket-body ticket-body--files ticket-body-content" >
            {/* <ul className="messages"></ul>
                <div className="new-message-container">
                    <form action="#">
                        <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                        <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                        <label className="button button--no-style button--attach">
                            <span className="visually-hidden">Attach</span>
                            <input type="file" className="visually-hidden" />
                        </label>
                    </form>
                </div> */}
            </TabPanel>
            {/* <!-- Ticket files END --> */}
            {/* <!-- Ticket payment START --> */}
            <TabPanel className="ticket-body ticket-body--payment ticket-body--contract myfirsttab ticket-body-content" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
                <h2 className="ticket__name"> Hire details </h2>
                <div className="applied-experts__list expert-lineitem expert-line-static">
                    <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
                    <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                        <div className="expert-lineitem__line">
                            <div className="expert-lineitem__name-section">

                                <a href="#" className="card-header-right text-right card-link d-block">
                                    <p className="expert-lineitem__name"> Muhammad Asif </p>
                                </a>
                                <p className="expert-lineitem__title">
                                    <span className="d-none d-md-inline">Software Developer</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
                <div className="contract__row contract__row--title">
                    <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                        ... Need an expert in Laravel to work on many different projects Need ... Full-stack
                    </p>
                    <button className="button--no-style button--edit">
                        <img src={pencil} alt="edit button" />
                        <span>Edit</span>
                    </button>
                </div>

                <div className="contract__row contract__row--flex">
                    {/* <!--START FIXED-RATE--> */}
                    <div className="contract-info-block js-fixed ">
                        <h2 className="contract-info-block__header">Fixed Price</h2>
                        <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                            <span>$</span>
                            <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                            <label className="input__wrapper mb-0 hide">
                                <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                            </label>
                        </div>
                        <button type="button" className="button--no-style button--edit js-edit-button">
                            <img src={pencil} alt="edit button" />
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className="contract-info-block">
                        <input type="hidden" id="type77" value="fixed" />
                        <input type="hidden" id="contract_fixed_value77" value="" />
                        <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
                    </div>
                </div>
                <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
                {/* <!--END FIXED-RATE--> */}
                <h2 className="mb-0">Add Payment Method</h2>
                <p className="post-ticket__subtitle">
                    Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
                    for done work
                </p>
                <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
                <span className="text " >Add a payment method</span>
                </button>
                <h2 className="mt-5 mb-0">Details for your Expert</h2>
                <p className="post-ticket__subtitle mb-2">
                    Give your Expert more info about the project or something additional
                </p>
                <label className="input__wrapper mb-2">
                    <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
                    <input type="hidden" id="user_id77" value="97" />
                    <input type="hidden" id="expert_id77" value="77" />
                    <input type="hidden" id="ticket_id77" value="225" />
                    <p className="input__notification">Proffesion title is required</p>
                </label>

                <p className="post-ticket__subtitle d-block d-md-none">
                Attach necessary files to show ideas of your project more understandable
                </p>
                <div id="multiple-upload"></div>
                <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
                    <div className="file_upload__label"></div>
                    <input type="file" name="fileupload" value="" id="upload-file" multiple
                        className="visually-hidden" />
                    <label htmlFor="fileupload" className="fileupload__button">
                    <span>+</span> Upload Files
                    </label>
                    <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
                    ideas of your project more understandable</p>
                    </div>
                <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
                    <input type="checkbox" className="checkbox checkbox--2" />
                    <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
                </label>
                <div className="payment-buttons">
                <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                        Hire this Expert
                </button>
                <button className="button--no-style link js-discart-contract">Discard</button>
                </div>

                {/* <!-- Payment closure section START --> */}
                <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
                <div className="ticket__details-row payment-row d-none js-payment-closure">
                    <div className="row align-items-center full-width">
                        <div className="col-6">
                            <div className="estimate__title">Total Expert Amount </div>
                        </div>
                        <div className="col-4 offset-2">
                            <div className="estimate__value"> $400 </div>
                        </div>
                    </div>
                </div>
                <div className="ticket__details-row payment-row d-none js-payment-closure">
                    <div className="row align-items-center full-width">
                        <div className="col-6">
                            <div className="estimate__title"> Initial Deposit </div>
                        </div>
                        <div className="col-4 offset-2">
                            <div className="estimate__value"> $200</div>
                        </div>
                    </div>
                </div>
                <div className="ticket__details-row payment-row d-none js-payment-closure">
                    <div className="row align-items-center full-width">
                        <div className="col-6">
                            <div className="estimate__title">Balance</div>
                        </div>
                        <div className="col-4 offset-2">
                            <div className="estimate__value"> $200 </div>
                        </div>
                    </div>
                </div>
                <div className="ticket__details-row payment-row d-none js-payment-closure">
                    <div className="row align-items-center full-width">
                        <div className="col-6">
                            <div className="estimate__title"> BTE Collaboration charges</div>
                        </div>
                        <div className="col-4 offset-2">
                            <div className="estimate__value">$10</div>
                        </div>
                    </div>
                    <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                        <div className="row align-items-center full-width">
                            <div className="col-6">
                                <div className="estimate__title"> Total Amount Due</div>
                            </div>
                            <div className="col-4 offset-2">
                                <div className="estimate__value"> $360.05</div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-buttons d-none js-payment-closure">
                        <button type="button" className="button max-160 js-get-report"> Get report</button>
                    </div>
                    {/* <!-- Payment closure section END --> */}
                </div>
            </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
                    </div>
                </div>
            </div>  
        </main>
    </div>
);

export default ClientInProgressTickets;
