import React, { Component } from 'react';
import { MDBContainer, MDBModalHeader, MDBBtn, MDBModal, MDBModalBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import printer from '../app_assets/img/printer.svg';
import attachement from "../app_assets/img/attachement.svg";
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';
import archive from "../app_assets/img/archive-blue.svg"
import archiveWhite from "../app_assets/img/archive-white.svg"
import message from "../app_assets/img/message-blue.svg"
import messageWhite from "../app_assets/img/message-white.svg"
import heart from '../app_assets/img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import letter from "../app_assets/img/LETTER.svg";
import messageblue from "../app_assets/img/message-blue.svg"
import location from "../app_assets/img/location.svg"
class SendOfferLetter extends Component {
    state = {
        modal8: false,
        modal7: false,
        
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
          <div className="sending-offer-letter-modal" >
          <div className="modal-favorite-button"  onClick={this.toggle(7)}>
                <div className="favourite-like js-resolution-share " style={{ marginLeft: "6px"}}>
                    <img src={letter} alt="share" className="modal-buttons-icon"/>
                </div>
                <div className="modal-buttons-text">Offer letter</div>
            </div>
            <MDBModal className="sending-offer-letter-modal mb-0" style={{display:"flex"}} fullHeight position="right"  isOpen={this.state.modal7} toggle={this.toggle(7)} backdrop={true} >
                <MDBModalHeader toggle={this.toggle(7)} className="p-background modal-ticket-header quali-head">
                
                </MDBModalHeader>
                    <MDBModalBody  className="body-scroll offer-wrapper">
                    <div className="offer-letter-wrapper">
                    <div className="offer-letter--wrapper">
                        <div className="printer">
                            <div className="contract-wrapper">
                                <img className="contract-img" src={letter} alt="" />
                                <h2 className="contract-title"style={{marginLeft: "18px"}}>Offer Letter</h2>
                            </div>
                            {/* <div className="contract-wrapper" toggle={this.toggle(7)} >
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
                        <form className="payment-summary-table mt-3">
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
                            </div>
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
                                            <ViewOriginalTicket />
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
                            <button toggle={this.toggle(7)} style={{ width: "318px"}}
                            type="button" className="button-white d-md-inline end-button edu-save-btn" style={{marginLeft:"30px"}}>
                            <span className="mb-0">Shortlist</span></button>
                        </div>
                    </div>
                    </div>
                </MDBModalBody>
            </MDBModal>
        </div>
            </div>
        );
    }
}

export default SendOfferLetter;