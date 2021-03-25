import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import level from "../app_assets/img/Level.svg"
import sallary from "../app_assets/img/sallary.svg"
import experience from '../app_assets/img/experience.svg';
import employ from '../app_assets/img/employ.svg'
import messageblue from "../app_assets/img/message-blue.svg"
import messagewhite from "../app_assets/img/message-white.svg"
import offerPimary from "../app_assets/img/send-offer-primary.svg"
import offerWhite from "../app_assets/img/send-offer-white.svg"
import { FaThList, FaTh, FaFacebookF, FaDribbble,FaTwitter, FaLinkedinIn, FaEnvira, FaCaretRight, FaPalette, FaLaptopCode,
    FaCode, FaQuoteLeft, FaPlus, FaStar, FaTicketAlt} from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OfferLetter from '../ExpertProfile/OfferLetter';
// import autosize from 'autosize';

class FeedDetailModal extends Component {
    
    // componentDidMount(){
    //     this.textarea.focus();
    //     autosize(this.textarea);
    // }
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
        <h3 onClick={this.toggle(8)}>View Detail</h3>
        <MDBContainer>
            <MDBModal  className="expert-feed-detail-modal"  style={{display:"flex"}} isOpen={this.state.modal8} toggle={this.toggle(8)} backdrop={true} fullHeight position="right">
                <MDBModalHeader toggle={this.toggle(8)} className="profile-modal-header">Ticket</MDBModalHeader>
                    <MDBModalBody className="body-scroll">
                    <div className="mb--style">
                    <div className="mb-style">
                    {/* <!----------------------------- Expert Feed detail ---------------------------> */}
                            <h3 className="feed-ticket-title">Case Manager is needed to assist customers with claims - we will train!</h3>
                            
                            <div className="flex-end feed-post-date">
                                <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                            </div>
                            <hr className="mt-0" />
                            <h3 className="mb-3">Ticket Details</h3>
                            <p className="feed-text-flow">
                            CSI Claims is a 3rd party claims company helping to mediate and reach a satisfactory settlement between movers and customers in a just, courteous, and timely manner.
                            We are looking for a meticulous and dedicated case manager to join our growing team as a full-time position. The individual in this role will be responsible for customer service and customer support over the phone and email. Our market is US based and candidates should be comfortable communicating in English with movers, customers, and team members verbally and in writing.
                            </p>
                            <div className="feed-job-details p-0 mb-0 space-between">
                    {/* <!----------------------------- Expert Skills ---------------------------> */}
                                <div className="p-20">
                                    <div className="display-flex">
                                        <img src={experience} className="feed-job-img feed-img-height" alt="" />
                                        <div className="feed-job-title">Skills Required</div>
                                    </div>
                                    <div className="modal-skills-wrapper mt-0">
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</button>
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst
                                        </button>
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization
                                        </button>
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</button>
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</button>
                                        <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</button>
                                    </div>
                                </div>
                    {/* <!----------------------------- Expert Experience ---------------------------> */}
                                <div className="p-20">
                                    <div className="display-flex">
                                        <img src={level} className="feed-job-img feed-img-height" alt="" />
                                        <div className="feed-job-title">Work Experience required</div>
                                    </div>
                                    <div className="feed-job-text">
                                        Beginner/ 
                                        <span>Mid Level</span>
                                        /Professional
                                    </div>
                                </div>
                            </div>
                            <div className="space-between">
                    {/* <!----------------------------- Expert Contract  ---------------------------> */}
                                <div className="p-20">
                                    <div className="display-flex">
                                        <img src={employ} className="feed-job-img feed-img-height" alt="" />
                                            <div className="feed-job-title">Contract time period</div>
                                    </div>
                                    <div className="feed-job-text">
                                        Month/
                                        <span>Open</span>
                                    </div>
                                </div>
                    {/* <!----------------------------- Expert Payment ---------------------------> */}
                                <div className="p-20">
                                    <div className="display-flex">
                                        <img src={sallary} className="feed-job-img feed-img-height" alt="" />
                                        <div className="feed-job-title">Payment</div>
                                    </div>
                                    <div className="feed-job-text">
                                        Hourly/ Fixed/ 
                                        <span>Open</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            
                    {/* <!-------------------------- Expert message or letter Tabs start  ---------------------> */}
                    <Tabs className="">
                        <TabList className="display-flex">
                        <Tab></Tab>
                        <Tab className="expert-offer-list-item">
                            <div className="display-flex mt-2 offer-tab-list mr-3">
                                <img src={messageblue} className="hover-hide" />
                                <img src={messagewhite} className="hover"  />
                                <div >Send Message</div>
                            </div>
                        </Tab>
                        <Tab className="expert-offer-list-item">
                        <div className="display-flex mt-2 offer-tab-list">
                            <img src={offerPimary} className="hover-hide" />
                            <img src={offerWhite} className="hover"  />
                            <div >Send Offer</div>
                        </div>
                        </Tab>
                        </TabList>
                        <hr />
                        <TabPanel>
                        </TabPanel>
                         {/* <!-------------------------- Exper message send body  ---------------------> */}
                   
                        <TabPanel>
                        <form>
                            <div className="row">
                                <div className="col-12 col-md-12 mt-3">  
                                    <label for="check-scope" className="input__wrapper input__wrapper--half ">
                                        <textarea style={{ maxHeight:'auto', minHeight:'90px', resize:'none',}}
                                        // ref={c=>this.textarea=c} rows={1} 
                                         type="text" className="input input-check" placeholder="Message..." name="message-send" required>
                                       
                                        </textarea>
                                        <p className="input__notification">Message is required</p>
                                    </label>
                                </div>                              
                            </div>
                            <div className="flex-end">
                            <button type="submit" className="button-con d-md-inline mt-3">Send Message</button>
                        </div>
                        </form>
                        </TabPanel>
                         {/* <!-------------------------- Exper offer letter send body  ---------------------> */}
                        <TabPanel>
                            <div className="offerLetter--white">
                                <OfferLetter />
                            </div>
                        </TabPanel>
                    </Tabs>
                    {/* <!-------------------------- Exper message or letter Tabs end  ---------------------> */}
                        </div>
                    </div>
                    </MDBModalBody>
                    {/* <MDBModalFooter>
                        <div className="contract-details">
                            <button toggle={this.toggle(8)} style={{ width: "318px"}}
                            type="button" className="button-con d-md-inline  ">
                            <span>Send Offer</span></button>
                        </div>
                    </MDBModalFooter> */}
                </MDBModal>
            </MDBContainer>
    </div>
        );
    }
}

export default FeedDetailModal;