import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, } from 'mdbreact';
import attachement from "../../app_assets/img/attachement.svg";
import printer from '../../app_assets/img/printer.svg';
import letter from "../../app_assets/img/LETTER.svg";
import messageblue from "../../app_assets/img/message-blue.svg"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaFacebookF, FaDribbble,FaTwitter, FaLinkedinIn, FaEnvira, FaCaretRight, FaPalette, FaLaptopCode,
    FaCode, FaQuoteLeft, FaPlus, FaStar, FaTicketAlt} from "react-icons/fa";
import hourprice from '../../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import location from "../../app_assets/img/location.svg";
import ViewOriginalTicket from '../../Modal/ViewOriginalTicket';

class SendingOfferLetter extends Component {
    state = {
        modal8: false,
        modal9: false
      }
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    render() {
        return (
            <div>
                <h3> <span className="counter" style={{cursor: "pointer"}} onClick={this.toggle(9)}>Offer Letter</span></h3>
                <MDBContainer className="sending-offer-letter-modal" >
                    <MDBModal className="sending-offer-letter-modal mb-0" style={{display:"flex"}} isOpen={this.state.modal9} fullHeight position="right" toggle={this.toggle(9)} backdrop={true} >
                        <MDBModalHeader toggle={this.toggle(9)} className="modal-ticket-header quali-head">
                        
                        </MDBModalHeader>
                            <MDBModalBody className="body-scroll offer-wrapper">
                            <div className="offer-letter-wrapper">
                            <div className="offer-letter--wrapper">
                                <div className="printer">
                                    <div className="contract-wrapper">
                                        <img className="contract-img" src={letter} alt="" />
                                        <h2 className="contract-title"style={{marginLeft: "18px"}}>Offer Letter</h2>
                                    </div>
                                    {/* <div className="contract-wrapper" toggle={this.toggle(9)} >
                                        <img className="contract-img" src={printer} alt="" />
                                    </div> */}
                                </div>
                                <div className="">
                                    <h2 className="contract-title">To</h2>
                                    <h2 className="mt-2">Mr. Gilhooley</h2>
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-12 ">  
                                        <label for="check-scope" className="input__wrapper input__wrapper--half ">
                                            Hello there,
                                            <br/>
                                            I am writing to apply for the programmer position advertised in the Times Union. As requested, I enclose a completed job application, my certification, my resume, and three references.
                                            I provide exceptional contributions to customer service for all customers.
                                            With a BS degree in Computer Programming, I have a comprehensive understanding of the full lifecycle for software development projects. I also have experience in learning and applying new technologies as appropriate. Please see my resume for additional information on my experience.
                                            Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.
                                            <br/>
                                            Sincerely,
                                        </label>
                                    </div>                              
                                </div>
                                <div className="">
                                    <h2 className="contract-title">Ticket Title</h2>
                                    <h2 className="mt-2">Figma Designer Needed for web development project, additionally  responsive designer for mobile development</h2>
                                    <hr />
                                </div>
                                <h2 className="contract-title">Quotation</h2>
                                <form className="payment-summary-table mt-3">
                                    {/* <input id="check-scope" type="checkbox" className="check-input-lab check-scope" />
                                    <p style={{bottom: "0px"}} className="input__title input__title--half  mx-4 mt-1 check-scope-p">Please check to commit the scope</p> */}
                                    <div className="offer-letter-table-head">
                                        <div>Option</div>
                                        <div style={{marginLeft: "40px"}}>Contract Type </div>
                                        <div>Estimated Time Period</div>
                                        <div style={{marginRight: "20px"}}>Price</div>
                                    </div>
                                    <div className="offer-payment-option mt-3">
                                        <label className="js-tickets-list__item tickets-list__item  small-hire-ticket" for="option-1">
                                            <div data-label="option">
                                                <input id="option-1" className="hire-radio-button ml-2" type="radio" name="hire-tickrt" autoComplete="off" />
                                            </div>
                                            <div data-label="FixColabelact">Hour Contract</div>
                                            <div data-label="time">20 hours</div>
                                            <div data-label="PaymentValue">40 $</div>
                                        </label>
                                        <label className="js-tickets-list__item tickets-list__item  small-hire-ticket" for="option-2">
                                            <div data-label="option">
                                                <input className="hire-radio-button ml-2" id="option-2" type="radio" name="hire-tickrt" autoComplete="off" />
                                            </div>
                                            <div data-label="FixContract">Fix Contract</div>
                                            <div data-label="time">4 days</div>
                                            <div data-label="PaymentValue">500 $</div>
                                        </label>
                                        <label className="js-tickets-list__item tickets-list__item  small-hire-ticket" for="option-3">
                                            <div data-label="option">
                                                <input className="hire-radio-button ml-2" id="option-3" type="radio" name="hire-tickrt" autoComplete="off" />
                                            </div>
                                            <div data-label="FixContract" style={{ marginLeft: "-48px"}}>Open to Negotiate</div>
                                            <div data-label="time"></div>
                                            <div data-label="PaymentValue"></div>
                                        </label>
                                    </div>
                                <div className="check-expert-detail"></div>
                                </form>
                                <div className="row mb-3">
                                    <div className="col-12 col-md-12 ">
                                        <h2 className="offer---title mt-2">Attachement</h2>
                                        <label for="check-scope" className="input__wrapper input__wrapper--half ">
                                        <div className="attachment-file">
                                            <img src={attachement} alt="" />
                                            <p className="ml-4">file.jpg</p>
                                        </div>
                                        <div className="attachment-file mt-2">
                                            <img src={attachement} alt="" />
                                            <p className="ml-4">file.jpg</p>
                                        </div>
                                        </label>
                                    </div>                              
                                </div>
                                <hr />
                                {/* ticket start */}
                                <h2 className="offer---title mt-3" >Expert Information</h2>
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
                                                    <div className="expert-location">
                                                        <img src={messageblue} className="modal-buttons-icon"/>
                                                            <div className="modal-buttons-text">Message</div>
                                                    </div>
                                                </div>
                                                <div className="modal-button-wrapper" style={{width: "30%",textAlign: "end"}}>
                                                    <ViewOriginalTicket/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ticket end */}
                                <hr/>
                                <div className="contract-details" style={{ justifyContent: "flex-end"}}>
                                    <div className="attachment-file">
                                        <p className="offer-last-date mt-0 mr-3">Offer valid till : 10 , jan 2021</p>
                                        <img src={printer} alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className="contract-details" style={{ justifyContent: "flex-end"}} >
                                    <button toggle={this.toggle(9)} style={{ width: "318px"}}
                                    type="button" className="button-white d-md-inline end-button edu-save-btn" style={{marginLeft:"30px"}}>
                                    <span className="mb-0">Shortlist</span></button>
                                </div>
                                <br />
                                <br />
                            </div>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
            </div>
        );
    }
}

export default SendingOfferLetter;