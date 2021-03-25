import React from 'react';
import styles from './MyExperts.module.css';
import del from "../app_assets/img/delete-blue.svg"
import delWhite from "../app_assets/img/delete-white.svg"
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import message from "../app_assets/img/message-blue.svg"
import messageWhite from "../app_assets/img/message-white.svg"
import messageblue from "../app_assets/img/message-blue.svg"
import location from "../app_assets/img/location.svg"
import heart from "../app_assets//img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { Tab } from 'semantic-ui-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AllExperts from './AllExperts';

const MyExperts: React.FC = () => (
  <main className="main-content main-content--dashboard">
    <div className="container container-fluid-small">
        <div className="row justify-content-center">
            <div className="col-4 d-none d-lg-block">
                <h2 className="mt-0 mb-0 my-experts-title" style={{color:"#4b4b4b"}}>
                Experts
                </h2>
            </div>
            <div className="col-12 d-block d-md-none">
                <label className="input__wrapper" id="select-tickets-tabs">
                    <div className="ui dropdown dropdown-2 selection" tabIndex={0}><select name="Ticket-status">
                            <option value="all" selected={true}>All Experts</option>
                            <option value="workingnow">Working Now</option>
                            <option value="recent">Recent</option>
                            <option value="archived">Archived</option>
                        </select><i className="dropdown icon"></i>
                        <div className="text">All Experts</div>
                        <div className="menu" tabIndex={-1}>
                            <div className="item active selected" data-value="all">All Experts</div>
                            <div className="item" data-value="workingnow">Working Now</div>
                            <div className="item" data-value="recent">Recent</div>
                            <div className="item" data-value="archived">Archived</div>
                        </div>
                    </div>
                </label>
            </div>
            <div className="col-12 col-lg-8 order-0 search-box-wrapper search_box_wrapperasd" style={{position:"relative"}}>
                <form action="" method="post"
                    id="search-box" className="">
                    <input type="hidden" name="_token" value="vZR5rBnldNOYL1RzKTiAYtUOToW0P6zktFFCKYgQ"/> <label
                        className="input__wrapper input__wrapper--search">
                        <input type="text" className="input input-seach" placeholder="Search Expert" name="expert_name"/>
                            <button type="submit" className="button button--no-style">
                            <i className="search-icon-blue"></i>
                        </button>
                    </label>
                </form>
                <Link to={"/client-dashboard/post-ticket"} type="button" className="button rounded-small post-a-ticket-cta max-160">
                    <span className="d-none d-md-inline">Post a ticket</span>
                    <span className="d-inline d-md-none">+</span>
                </Link>
            </div>
            <div className="col-12">
                <div className="tile tile--2">
                {/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="flat-tab-bar"/> */}
                <Tabs className="ticket-tab">
                <TabList className="experts-list">
                      <Tab className="slider-experts" data-tab="online-tab">
                        All Experts
                      </Tab>
                      <Tab className="slider-experts" data-tab="favourite-experts">
                        Hired
                      </Tab>
                      <Tab className="slider-experts" data-tab="favourite-experts">
                      Favorite
                      </Tab>
                </TabList>
                <TabPanel>
                <div className="modal-column expert-lineitem">
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
                            <div className="modal-feedback-wrapper">(360 Feedback)</div>
                            {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                    src={hirenow}
                                    className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                            </div> */}
                        </div>
                        <div className="expert-cred-wrapper">
                            <div className="modal-expert-name">Mustafa Mahmood</div>
                            <div className="expert-description-wrapper">
                                <div className="modal-expert-description">
                                    <div className="modal-expert-description">Selenium Testing</div>
                                    <div className="expert-location-wrapper">
                                        <div className="expert-location"><img
                                                src={location}
                                                className="expert-location-icon"/>
                                            <div className="location-text">Pakistan</div>
                                        </div>
                                        <div className="expert-location"><img
                                                src={hourprice}
                                                className="expert-location-icon"/>
                                            <div className="location-text">$ 400 / hour</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-button-wrapper">
                                    <div className="mark-favorite-wrapper">
                                    
                                        {/* <div className="modal-favorite-button"><img
                                                src={heart}
                                                className="modal-buttons-icon"/>
                                            <div className="modal-buttons-text">Favourite</div>
                                        </div> */}
                                        <div className="modal-favorite-button">
                                <img src={del} alt="archive icon" style={{marginTop: "-4px"}} className="modal-buttons-icon"/>
                                <span className="modal-buttons-text">Delete</span>
                                        </div>
                                            
                                        <div className="modal-message-button"><img
                                                src={messageblue}
                                                className="modal-buttons-icon"/>
                                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                        </div>
                                    </div>
                                    {/* <div className="modal-favorite-button modal-hire-text"><img
                                            src={hirenow}
                                            className="modal-buttons-icon"/>
                                        <Link to="/client-dashboard/hiring" className="modal-buttons-text modal-hire-text"> Hire Now </Link>
                                    </div> */}
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
                <AllExperts/>
                </TabPanel>
                <TabPanel>
                <div className="modal-column expert-lineitem">
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
                            <div className="modal-feedback-wrapper">(360 Feedback)</div>
                            {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                    src={hirenow}
                                    className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                            </div> */}
                        </div>
                        <div className="expert-cred-wrapper">
                            <div className="modal-expert-name">Mustafa Mahmood</div>
                            <div className="expert-description-wrapper">
                                <div className="modal-expert-description">
                                    <div className="modal-expert-description">Selenium Testing</div>
                                    <div className="expert-location-wrapper">
                                        <div className="expert-location"><img
                                                src={location}
                                                className="expert-location-icon"/>
                                            <div className="location-text">Pakistan</div>
                                        </div>
                                        <div className="expert-location"><img
                                                src={hourprice}
                                                className="expert-location-icon"/>
                                            <div className="location-text">$ 400 / hour</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-button-wrapper">
                                    <div className="mark-favorite-wrapper">
                                    
                                        {/* <div className="modal-favorite-button"><img
                                                src={heart}
                                                className="modal-buttons-icon"/>
                                            <div className="modal-buttons-text">Favourite</div>
                                        </div> */}
                                        <div className="modal-favorite-button">
                                <img src={del} alt="archive icon" style={{marginTop: "-4px"}} className="modal-buttons-icon"/>
                                <span className="modal-buttons-text">Delete</span>
                                        </div>
                                            
                                        <div className="modal-message-button"><img
                                                src={messageblue}
                                                className="modal-buttons-icon"/>
                                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                        </div>
                                    </div>
                                    {/* <div className="modal-favorite-button modal-hire-text"><img
                                            src={hirenow}
                                            className="modal-buttons-icon"/>
                                        <Link to="/client-dashboard/hiring" className="modal-buttons-text modal-hire-text"> Hire Now </Link>
                                    </div> */}
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
                </TabPanel>
                <TabPanel>
                    <AllExperts/>
                </TabPanel>
                </Tabs>
                <div className="experts-footer"></div>
                </div>
            </div>
        </div>
    </div>

    <form id="loginForm" name="loginForm">
        <input type="hidden" id="uuusername" value=""/>
        <input type="hidden" id="uufirstname" value="Mrsec"/>
        <input type="hidden" id="uulastname" value="Asif"/>
        <input type="hidden" id="uuemail" value="seasif2024@gmail.com"/>
        <input type="hidden" id="uuid" value="97"/>
    </form>

</main>
);

export default MyExperts;
