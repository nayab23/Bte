import React, { Component } from 'react';
import depositPayment from '../app_assets/img/deposit payment.svg';
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import viewCover from '../app_assets/img/view cover white.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import location from "../app_assets/img/location.svg";
import messageblue from "../app_assets/img/message-blue.svg"
import backArrow from '../app_assets/img/back-arrow.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';

class PaymentSummary extends Component {
    render() {
        return (
            <div>
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="contract-wrapper">
                    <img className="contract-img" src={depositPayment} alt="" />
                    <h2 className="contract-title"style={{marginLeft: "10px"}}>Payment Summary</h2>
                    </div>
                    <div className="">
                    <h2 className="contract-title">Ticket Title</h2>
                    <h3 className="contract-row__name">Full Stack Developer, Databases, Web Architecture &amp; Storage</h3>
                    <hr />
                    <h3 className="contract-row__name">Expert Information</h3>
                     <div className="contract-row-card">
                        <div className="modal-expert-card ">
                            <div className="contract-expert-wrapper" style={{justifyContent: "space-around"}}>
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
                                    {/* <div className="modal-rating-number">4/<div className="modal-total-rating">5</div></div> */}
                                </div>
                                {/* <div className="modal-feedback-wrapper">(560 Feedback)</div> */}
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
                                        </div>
                                        <div className="expert-location"><img
                                                    src={hourprice}
                                                    className="expert-location-icon"/>
                                                <div className="location-text">$ 600 / hour <span className="contract-rate">Hourly Rate</span></div>
                                            </div>
                                    </div>
                                    <div className="modal-button-wrapper" style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button" style={{width: "100%"}}>
                                                <ViewOriginalTicket/>
                                            </div>
                                            <Link to="/client-dashboard/dialogs/dialogs" className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                <div className="modal-buttons-text">Message</div>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr />
                    <h3 className="contract-row__name">Summary</h3>
                    <div className="payment-summary">
                    <h3 className="contract-details__name">Total Payment : <span className="summary-payment-value">70$</span></h3>
                    <h3 className="contract-details__name">Paid Amount : <span className="summary-payment-value">35$</span></h3>
                    <div className="contract-details">
                    <h3 className="contract-details__name">Remaining Payment : <span className="summary-payment-value" style={{color: "red"}}>35$</span></h3>
                    <h4 className="remaning-payment-now">Pay Now</h4>
                    </div>
                    </div>
                    <hr />
                    <table className="payment-summary-table">
                    <thead className="payment-summary-table-head">
                        <tr>
                        <th>No</th>
                        <th>Payment Date</th>
                        <th>Type</th>
                        <th>Comments</th>
                        <th>Paid Amount</th>
                    </tr></thead>
                    <tbody className="payment-summary-table-body">
                        <tr>
                        <td data-label="No">1</td>
                        <td data-label="Date">October 27, 2020</td>
                        <td data-label="FixContract">Fixed Contract</td>
                        <td data-label="FirstPayment">First Payment</td>
                        <td data-label="PaymentValue">35 $</td>
                        </tr>
                        <tr>
                        <td data-label="No">2</td>
                        <td data-label="Date"></td>
                        <td data-label="FixContract"></td>
                        <td data-label="FirstPayment"></td>
                        <td data-label="PaymentValue"></td>
                        </tr>
                        <tr>
                        <td data-label="No">3</td>
                        <td data-label="Date"></td>
                        <td data-label="FixContract"></td>
                        <td data-label="FirstPayment"></td>
                        <td data-label="PaymentValue"></td>
                        </tr>
                    </tbody>
                    </table>
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
                    <p className="contract-details__subtext">Sience Oct 19</p>
                    </div>
                    </div>
                    
                    <div className="col-12 col-md-5 contract-details">
                    <Link to="/client-dashboard/contract"
                     type="button" className="button-white d-md-inline max-200 end-button">
                    <span>Renew Contract</span>
                    </Link>
                    <Link to="/client-dashboard/hiring/hire-and-payment/contract/contract-feedback"
                     type="button" className="button-white d-md-inline max-200 end-button" style={{marginLeft:"30px"}}>
                    <span>End Contract</span>
                    </Link>
                    </div>
                    </div>
                    <p class="contract-row__subtext" style={{paddingBottom: "44px",paddingTop: "10px"}}>* Any over due remaning payment shall be paid before renew or end contract.  </p>
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

export default PaymentSummary;