import React from 'react';
import styles from './ExpertDashboard.module.css';
import menu from '../app_assets/img/menu-2.svg';
import checklist from '../app_assets/img/checklist.svg';
import expert from '../app_assets/img/step-2-pic-expert.svg';
import apply from '../app_assets/img/step-2-pic.svg';
import work from '../app_assets/img/step-4-pic.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


const ExpertDashboard: React.FC = () => (
    <div className={styles.ExpertDashboard} data-testid="ExpertDashboard">
        <main className="main-content main-content--dashboard">
            <div className="container container-fluid-small">
                <div className="row">
                    <div className="col-12 col-lg-4" id="tickets-list">
                        <div className="tile tile--2">
                            <label className="input__wrapper input__wrapper--select">
                                <MDBDropdown>
                                <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da",fontSize: "16px",borderRadius: "6px"}}>
                                <span></span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic style={{width:"100%"}}>
                                    <Link to={'/expert-dashboard/expert-feed'}>
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
                    <div className="row">
                    <div className="col-12 col-lg-4" id="tickets-list">
                        <div className="tile tile--2 tile--tickets-list">
                        <div className="tile tile--2 tile--no-tickets tile--experts-no-tickets">
                            No tickets yet

                            <p className="d-block text-align-center no-tickets-text">
                                Here will be displayed your tickets after you create one
                            </p>
                        </div>
                        </div>
                    </div>
                        <div className="col-12 col-lg-8" >
                        <h1 className="text-align-center search-title">No Tickets yet?</h1>
                            <p className="search-subtitle search-subtitle--long">
                                Try to search for Tickets and apply the ones that fit your expertise.
                                Fill your profile information and make yourself a productive
                                account by solving client's work.
                            </p>
                            <Link to={'/expert-dashboard/expert-feed'} type="button" className="button search-post-cta">
                            Go to my Feeds
                            </Link>
                        </div>
                    </div>
                    <div className="tile tile--2">
                    <section className="how-it-works how-it-works--expert">
                        {/* <!-- <button type="button" className="button button--no-style how-it-works__remove-button">
                            <img src="../img/close.png" alt="">
                        </button> --> */}
                        <h2 className="how-it-works__title">How it works</h2>
                        <ul className="how-it-works__list">
                            <li className="how-it-works__list-item">
                                <img src={checklist} alt="" className="how-it-works__img" />
                                <h3 className="how-it-works__list-item-title">
                                    <span>1</span> You fill your account information
                                </h3>
                                <p className="how-it-works__list-item-text">
                                    In order to find the right Ticket you need
                                    to fill in information about your expertise
                                </p>
                            </li>
                            <li className="how-it-works__list-item">
                                <img src={expert} alt="" className="how-it-works__img"/>
                                <h3 className="how-it-works__list-item-title">
                                    <span>2</span> Find your Ticket
                                </h3>
                                <p className="how-it-works__list-item-text">
                                    Search for tickets and reach out potential
                                    clients by messaging them.
                                </p>
                            </li>
                            <li className="how-it-works__list-item">
                                <img src={apply} alt="" className="how-it-works__img"/>
                                <h3 className="how-it-works__list-item-title">
                                    <span>3</span> Apply and submit contracts
                                </h3>
                                <p className="how-it-works__list-item-text">
                                    After you found the right job that fits you,
                                    submit a contract with him to start the job.
                                </p>
                            </li>
                            <li className="how-it-works__list-item">
                                <img src={work} alt="" className="how-it-works__img"/>
                                <h3 className="how-it-works__list-item-title">
                                    <span>4</span> Get the work done and receive Paiments
                                </h3>
                                <p className="how-it-works__list-item-text">
                                    After the work is done, you get payed. Remember
                                    to add your payment methods.
                                </p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    </div>
);

export default ExpertDashboard;
