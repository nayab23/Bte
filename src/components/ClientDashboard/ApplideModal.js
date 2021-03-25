import React, { Component } from 'react';
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import bell from '../app_assets/img/Final-ICONS_SVG_0-Bell.svg';
import location from "../app_assets/img/location.svg"
import Favourite from "../app_assets/img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import letter from "../app_assets/img/LETTER.svg";
import messageblue from "../app_assets/img/message-blue.svg"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBModalHeader, MDBBtn, MDBModal, MDBModalBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import SendOfferLetter from './SendOfferLetter';


class AppliedModal extends Component {
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
    <MDBContainer>
        <img onClick={this.toggle(8)} className="icon clickable" src={bell} />
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>    
        <h5 className="applied-modal-heading" style={{marginTop:"5px"}}>Applied Experts</h5>
        </MDBModalHeader>
        <MDBModalBody style={{background: "#f7fafd",height: "690px"}} className="body-scroll">
        <div className="modal-body-content" style={{width: "1040px"}}>
                <div className="modal-header-wrapper">
                    <div className="modal-ticket-title">Sharepoint configuration requirement required for a startup<div
                            className="modal-status">
                            <div className="header-status-icon status-icon-aqua"></div>
                            <div className="header-status-text">Negotiation</div>
                        </div>
                    </div>
                    <div className="modal-date">April 07, 2020
                        <div className="hidden-status">
                            <div className="header-status-icon hidden-status-icon status-icon-aqua"></div>
                            <div className="header-status-text">Negotiation</div>
                        </div>
                    </div>
                </div>
                <div>
                     <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                           <SendOfferLetter />
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
                    
                    <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                            <SendOfferLetter />
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
                    
                    
                    
                    <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                           <SendOfferLetter />
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
                    
                    
                    
                         <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                           <SendOfferLetter />
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
                    
                    
                     <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                           <SendOfferLetter />
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
                    
                    
                                   <div className="modal-column card-shadow expert-lineitem mb-3">
                        <div className="modal-expert-card ">
                            <div className="modal-expert-wrapper">
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
                                            src={hollowstar}
                                            className="modal-rating-star"/></div>
                                    <div className="modal-rating-number">4/<div className="modal-total-rating">5</div>
                                    </div>
                                </div>
                                <div className="modal-feedback-wrapper">(560 Feedback)</div>
                            </div>
                            <div className="expert-cred-wrapper">
                                <div className="modal-expert-name">Saad Asad</div>
                                <div className="expert-description-wrapper">
                                    <div className="modal-expert-description">
                                        <div className="modal-expert-description">Full Stack Developer, Database, Web
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
                                                <div className="location-text">$ 500 / hour</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-button-wrapper"  style={{width: "30%"}}>
                                        <div className="mark-favorite-wrapper">
                                            <div className="modal-favorite-button">
                                                <div className="favourite-like js-resolution-share ">
                                                    <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                    <img src={Favourite} alt="share" className="hover"/>
                                                </div>
                                                <div className="modal-buttons-text">Favourite</div>
                                            </div>
                                            <div className="modal-message-button"><img
                                                    src={messageblue}
                                                    className="modal-buttons-icon"/>
                                                    <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                            </div>
                                        </div>
                                        <div className="mark-favorite-wrapper">
                                           <SendOfferLetter />
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
                </div>
            </div>
        </MDBModalBody>
      </MDBModal>
      <div>
      
        </div>
    </MDBContainer>
    );
  }
}

export default AppliedModal;