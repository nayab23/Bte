import React, { Component,useState } from 'react';
import contract from '../app_assets/img/contract.svg';
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import viewCover from '../app_assets/img/view cover white.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import location from "../app_assets/img/location.svg"
import messageblue from "../app_assets/img/message-blue.svg"
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';

class Hiring extends Component {    
    render() {
        return (
            <div>
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="contract-wrapper">
                    <img className="contract-img" src={hirenow} alt="" />
                    <h2 className="contract-title"style={{marginLeft: "18px"}}>Hiring</h2>
                    </div>
                    <div className="">
                    <h2 className="contract-title">Ticket Title</h2>
                    <h3 className="contract-row__name">Full Stack Developer, Databases, Web Architecture &amp; Storage</h3>
                    <p className="contract-row__subtext">Created on April 07, 2020 </p>
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
                                <div className="modal-expert-name login-social-buttons mb-3">Abdullah Ahmad <div  className="mr-3"><ViewOriginalTicket /></div></div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Databases, Web
                                            Architecture &amp; Storage</div>
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
                    <h2 className=" contract-row__name mt-3">Scope Of Work</h2>
                    <p className="contract-row__subtext">Give your Expert more info about the project or something additional </p>
                    <form method="post" action="#" className="form contract-form" id="">
                    <div className="row">
                    <div className="col-12 col-md">
                    <label class="input__wrapper input__wrapper--half">
                    <textarea class="input height-150 " name="description" placeholder="Details....." maxlength="2000" id="description77"></textarea>
                    <p class="input__notification">Description is required</p>
                    </label>
                    </div>
                    </div>
                    {/* <div className="row">
                    <div className="col-12 col-md-6 ">
                        <p className="contract-input__title input__title--half">Total Number of Hours</p><label className="input__wrapper input__wrapper--half "><input
                            type="number" className="input input-check" placeholder="Number of Hours" name="NumberofHours" required=""/>
                        <p className="input__notification">Number of Hours is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <p className="contract-input__title input__title--half">How much you want to deposit?</p>
                        <label className="input__wrapper input__wrapper--half"  style={{display: "flex"}}>
                        <input type="number" className="input input-check" placeholder="Deposit Payment" name="DepositPayment" required="" />
                        <h1 className="contract-payment-val">$</h1>
                        <p className="input__notification">Deposit Payment is required</p>
                        </label>
                    </div>
                    </div> */}
                    <h2 className="contract-title ">Contract Type</h2>
                    <Tabs>
                        <TabList>
                        <Tab className="customer-type contract-row__subtext"></Tab>
                            <Tab className="customer-type contract-row__subtext">Hourly contract</Tab>
                            <Tab className="customer-type contract-row__subtext">Fixed contract</Tab>
                            <Tab className="customer-type contract-row__subtext"> Long term contract</Tab>
                        </TabList>
                        <TabPanel>
                        </TabPanel>

                        <TabPanel>
                            <div className="row">
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">Total Number of Hours</p><label className="input__wrapper input__wrapper--half "><input
                                    type="number" className="input input-check" placeholder="Number of Hours" name="NumberofHours" required=""/>
                                <p className="input__notification">Number of Hours is required</p>
                                </label>
                            </div>
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">How much you want to deposit?</p>
                                <label className="input__wrapper input__wrapper--half"  style={{display: "flex"}}>
                                <input type="number" className="input input-check" placeholder="Deposit Payment" name="DepositPayment" required="" />
                                <h1 className="contract-payment-val">$</h1>
                                <p className="input__notification">Deposit Payment is required</p>
                                </label>
                            </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">Total Number of Days</p><label className="input__wrapper input__wrapper--half "><input
                                    type="number" className="input input-check" placeholder="Number of Hours" name="NumberofHours" required=""/>
                                <p className="input__notification">Number of Hours is required</p>
                                </label>
                            </div>
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">How much you want to deposit?</p>
                                <label className="input__wrapper input__wrapper--half"  style={{display: "flex"}}>
                                <input type="number" className="input input-check" placeholder="Deposit Payment" name="DepositPayment" required="" />
                                <h1 className="contract-payment-val">$</h1>
                                <p className="input__notification">Deposit Payment is required</p>
                                </label>
                            </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">Total Number of Month/Year</p><label className="input__wrapper input__wrapper--half "><input
                                    type="number" className="input input-check" placeholder="Number of Hours" name="NumberofHours" required=""/>
                                <p className="input__notification">Number of Hours is required</p>
                                </label>
                            </div>
                            <div className="col-12 col-md-6 ">
                                <p className="contract-input__title input__title--half">How much you want to deposit?</p>
                                <label className="input__wrapper input__wrapper--half"  style={{display: "flex"}}>
                                <input type="number" className=" input-check" placeholder="Deposit Payment" name="DepositPayment" required="" />
                                <h1 className="contract-payment-val">$</h1>
                                <p className="input__notification">Deposit Payment is required</p>
                                </label>
                            </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    
                    </form>
                    <div class="contract-next-row">
                    <h3 className="contract-next-title">Go back</h3>
                    <button class="primary contract-button"><Link to="/client-dashboard/hiring/hire-and-payment" class="button rounded-small">Next</Link></button>
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

export default Hiring;