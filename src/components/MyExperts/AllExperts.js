import React, { Component } from 'react';
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import location from "../app_assets/img/location.svg"
import messageblue from "../app_assets/img/message-blue.svg"
import Favourite from "../app_assets/img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import letter from "../app_assets/img/LETTER.svg";
import heart from "../app_assets//img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import printer from '../app_assets/img/printer.svg';
import attachement from "../app_assets/img/attachement.svg";
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBModalHeader, MDBBtn, MDBModal, MDBModalBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

class AllExperts extends React.Component {

    state = {
        active:false,
        modal8: false,
        modal9: false,
      data: [
        {
        id:1,
        name: 'Saad Asad',
        title:'Sharepoint configuration requirement required for a startu',
        money:500,
        feedback:'560 Feedback',
        rating:4,
        star:hollowstar
        },
        {
            id:2,
            name: 'Abdullah Ahmad',
            title:'Full Stack Developer, Database, Web Architecture &amp; Storage',
            money:570,
            feedback:'560 Feedback',
            rating:5,
            star:star
        },
      ]
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }

  // shorter & readable 
  delete(item){
    const data = this.state.data.filter(i => i.id !== item.id)
    this.setState({data})
  }

  // or this way, it works as well
  //delete(item){
  //  const newState = this.state.data.slice();
  //    if (newState.indexOf(item) > -1) {
  //    newState.splice(newState.indexOf(item), 1);
  //    this.setState({data: newState})
  //  }
  //}

  render(){
    const listItem = this.state.data.map((item)=>{
        return <div className="modal-column expert-lineitem" key={item.id}>
        <div className="modal-expert-card ">
            <div className="modal-expert-wrapper">
                <div className="modal-avatar" style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
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
                            src={item.star}
                            className="modal-rating-star"/></div>
                    <div className="modal-rating-number">{item.rating}/<div className="modal-total-rating">5</div>
                    </div>
                </div>
                <div className="modal-feedback-wrapper">{item.feedback}</div>
                {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                        src={hirenow}
                        className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                    <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                </div> */}
            </div>
            <div className="expert-cred-wrapper">
                <div className="modal-expert-name">{item.name}</div>
                <div className="expert-description-wrapper">
                    <div className="modal-expert-description">
                        <div className="modal-expert-description">{item.title}</div>
                        <div className="expert-location-wrapper">
                            <div className="expert-location"><img
                                    src={location}
                                    className="expert-location-icon"/>
                                <div className="location-text">Pakistan</div>
                            </div>
                            <div className="expert-location"><img
                                    src={hourprice}
                                    className="expert-location-icon"/>
                                <div className="location-text">$ {item.money} / hour</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-button-wrapper">
                        <div className="mark-favorite-wrapper">
                            <div className="modal-favorite-button" >
                            <div className="favourite-like js-resolution-share" onClick={this.delete.bind(this, item)}>
                                <img src={Favourite} alt="share" className="hide-hover"/>
                                <img src={FavouriteWhite} alt="share" className="hover"/>
                            </div>
                            {/* <img src={heart} onClick={this.delete.bind(this, item)} className="modal-buttons-icon"/> */}
                                <div className="modal-buttons-text">Favourite</div>
                            </div>
                            <div className="modal-message-button"><img
                                    src={messageblue}
                                    className="modal-buttons-icon"/>
                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                            </div>
                        </div>
                        <div className="mark-favorite-wrapper">
                            <div className="modal-favorite-button"  onClick={this.toggle(9)}>
                                <div className="favourite-like js-resolution-share " style={{ marginLeft: "6px"}}>
                                    <img src={letter} alt="share" className="modal-buttons-icon"/>
                                </div>
                                <div className="modal-buttons-text">Offer letter</div>
                            </div>
                            <div className="modal-favorite-button modal-hire-text">
                                <img src={hirenow} className="modal-buttons-icon" style={{ marginLeft: "-18px"}}/>
                                    {/* <Link to="/client-dashboard/hiring" className="modal-buttons-text modal-hire-text"></Link> */}
                                <MDBDropdown className="dropdown--hire-now">
                                    <MDBDropdownToggle className="modal-buttons-text modal-hire-text" style={{padding:0}} color="none">
                                    Hire Now 
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <Link to="/client-dashboard/post-ticket">
                                            <MDBDropdownItem  className="item dropdown-active-link"> Hire to new ticket </MDBDropdownItem>
                                        </Link>
                                        <Link to="/client-dashboard/hire-to-existing-ticket">
                                            <MDBDropdownItem  className="item dropdown-active-link"> Hire to existing ticket </MDBDropdownItem>
                                        </Link>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-skills-wrapper">
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
        </div>
        <div className="modal-skills-wrapper modal-hidden-skills">
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</button>
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst</button>
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization</button>
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</button>
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</button>
            <button className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</button>
        </div>
    </div> 
    })
    return <div>
        {listItem}
        <div>
        <MDBContainer className=" sending-offer-letter-modal" >
            <MDBModal className=" sending-offer-letter-modal mb-0" style={{display:"flex"}} isOpen={this.state.modal9} fullHeight position="right" toggle={this.toggle(9)} backdrop={true} >
                <MDBModalHeader toggle={this.toggle(9)} className="p-background modal-ticket-header quali-head">
                
                </MDBModalHeader>
                <MDBModalBody  className="body-scroll offer-wrapper">
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
    </div>
  }
}


export default AllExperts;