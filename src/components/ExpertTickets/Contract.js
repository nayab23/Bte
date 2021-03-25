import React, { Component } from 'react';
import contract from '../app_assets/img/contract.svg';
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import viewCover from '../app_assets/img/view cover white.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import location from "../app_assets/img/location.svg";
import messageblue from "../app_assets/img/message-blue.svg"
import backArrow from '../app_assets/img/back-arrow.svg';
import printer from '../app_assets/img/printer.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';

class Contract extends Component {
    render() {
        return (
            <div>
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="space-between">
                        <div className="contract-wrapper">
                        <img className="contract-img" src={contract} alt="" />
                        <h2 className="contract-title"style={{marginLeft: "18px"}}>Contract</h2>
                        </div>
                        <img className="contract-printer-img" src={printer} alt="" />
                    </div>
                    <div className="">
                    <h2 className="contract-title">Title</h2>
                    <h3 className="contract-row__name">Full Stack Developer, Databases, Web Architecture &amp; Storage</h3>
                    {/* <p className="contract-row__subtext">Created on April 07, 2020 </p> */}
                    <hr />
                    <h3 className="contract-details__name">Contract Details</h3>
                    <div className="row">
                    <div className="col-12 col-md-12 contract-details">
                    <div className="contract-circle"></div>
                    <p className="contract-details__subtext">Active</p>
                    </div>
                    <div className="col-12 col-md-3 contract-details">
                    <div className="contract-circle"></div>
                    <p className="contract-details__subtext">Contract Number:    <span className="contract-number">9809</span></p>
                    </div>
                    <div className="col-12 col-md-9 contract-details" style={{justifyContent: "space-between"}}>
                    <div className="contract-details">
                    <div className="contract-circle"></div>
                    <p className="contract-details__subtext">since Oct 19</p>
                    </div>
                    <ViewOriginalTicket />
                    </div>
                    
                    <div className="col-12 col-md-5 contract-details">
                    <button type="button" className="button-white d-md-inline max-200">
                    Renew Contract</button>
                    <Link to="/client-dashboard/hiring/hire-and-payment/payment-summary"
                     type="button" className="button-white d-md-inline max-200 end-button" style={{marginLeft:"30px"}}>
                        <span>Payment Summary</span>
                    </Link>
                    </div>
                    </div>
                    <hr />
                    <h3 className="contract-row__name">Contract Value</h3>
                    <form method="post" action="#" className="form contract-form" id="">
                    <div className="row">
                    <div className="col-12 col-md-4 ">
                        <p className="contract-input__title input__title--half">Agree</p>
                        <label className="input__wrapper input__wrapper--half" style={{display: "flex"}}>
                        <input className="input input-check disabled" placeholder="0.000" value="70" name="Agree" required=""/>
                        <h1 className="contract-payment-val">$</h1>
                        <p className="input__notification">Agree Payment is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <p className="contract-input__title input__title--half">Paid</p>
                        <label className="input__wrapper input__wrapper--half " style={{display: "flex"}}>
                        <input className="input input-check disabled" placeholder="0.000" value="35" name="Paid" required="" />
                        <h1 className="contract-payment-val">$</h1>
                        <p className="input__notification">Paid Payment is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <p className="contract-input__title input__title--half">Remaining</p>
                        <label className="input__wrapper input__wrapper--half " style={{display: "flex"}}>
                        <input className="input input-check disabled" placeholder="0.000" value="35" name="remainingF" required="" />
                        <h1 className="contract-payment-val">$</h1>
                        <p className="input__notification">Remaining Payment is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-12 ">
                        <p className="contract-input__title input__title--half">Scope Of Work</p>
                        <label className="input__wrapper input__wrapper--half ">
                        <textarea class="input height-100 disabled" name="description" placeholder="Scope Of Work..." maxlength="2000" id="description77">
                            Teamwork is my main strategy for working on any project. I am delivering results with no delay and UX/UI expertise. I am a Top Rated UI/UX and Cross Platform designer with more than 3+ years of extensive experience and I am here to help you to achieve your goals and solve your issues.
                        </textarea>
                        <p className="input__notification">Please Write Scope Of Work ?</p>
                        </label>
                    </div>
                    
                    </div>
                    </form>
                    <hr />
                    <h3 className="contract-row__name">Expert Information</h3>
                     <div className="contract-row-card">
                        <div className="modal-expert-card ">
                            <div className="contract-expert-wrapper">
                                <div className="modal-avatar"
                                    style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
                                </div>
                                <div className="modal-inner-wrapper">
                                    <div className="modal-rating-wrapper"><img
                                            src={star}
                                            className="modal-rating-star"/><img
                                            src={star}
                                            className="modal-rating-star"/><img
                                            src={star}
                                            className="modal-rating-star"/><img
                                            src={star}
                                            className="modal-rating-star"/><img
                                            src={star}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">5/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(570 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Abdullah Ahmad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Databases, Web Architecture &amp; Storage</div>
                                        <div className="expert-location-wrapper">
                                            <div className="expert-location"><img
                                                    src={location}
                                                    className="expert-location-icon"/>
                                                <div className="location-text">Pakistan</div>
                                            </div>
                                            <div className="expert-location"><img
                                                    src={hourprice}
                                                    className="expert-location-icon"/>
                                                <div className="location-text">$ 600 / hour <span className="contract-rate">Hourly Rate</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper" style={{width: "27%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button"><img
                                                    src={viewCover}
                                                    className="modal-buttons-icon"/>
                                                <div className="modal-buttons-text">View Cover</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="modal-skills-wrapper">
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</div>
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst
                                    </div>
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization
                                    </div>
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</div>
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</div>
                                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-skills-wrapper modal-hidden-skills">
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</div>
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst</div>
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization</div>
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</div>
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</div>
                            <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</div>
                        </div>
                    </div> 
                    
                    <div className="contract-next-row">
                    {/* <h3 className="contract-next-title">Review Ticket</h3> */}
                    <Link to="/" className="contract-back-img"><img src={backArrow} alt="" /> </Link>
                    </div>

                    </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        );
    }
}

export default Contract;