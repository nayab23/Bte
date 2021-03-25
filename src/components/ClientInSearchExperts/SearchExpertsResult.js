import React, { Component } from 'react';
import Favourite from "../app_assets/img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import silver from "../app_assets/img/silver.svg"
import gold from "../app_assets/img/golden.svg"
import messageblue from "../app_assets/img/message-blue.svg"
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import location from "../app_assets/img/location.svg";
import hireToNewTicket from "../app_assets/img/Hire to new ticket.svg";
import hireToExistingTicket from "../app_assets/img/Hire to existing ticket.svg";
import letter from "../app_assets/img/LETTER.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBModalHeader, MDBBtn, MDBModal, MDBModalBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import SearchExperts from './SearchExperts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import printer from '../app_assets/img/printer.svg';
import attachement from "../app_assets/img/attachement.svg";
import { FaThList, FaTh, FaFacebookF, FaDribbble,FaTwitter, FaLinkedinIn, FaEnvira, FaCaretRight, FaPalette, FaLaptopCode,
    FaCode, FaQuoteLeft, FaPlus, FaStar, FaTicketAlt} from "react-icons/fa";
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';
class SearchExpertsResult extends Component {
    state={
        active:false,
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
        const data = {
            columns: [
              {
                label: 'Name',
                field: 'name',
                width: 150
              },
              {
                label: 'Ticket_title',
                field: 'ticket_title',
                width: 270
              },
              {
                label: 'Country',
                field: 'country',
                width: 200
              },
              {
                label: 'Hourly Rate',
                field: 'hourly_rate',
                width: 100
              },
              {
                label: 'Contact',
                field: 'contact',
                width: 100
              }
            ],
            rows: [
              {
                name: 'Abdullah Ahmad',
                ticket_title: 'Full Stack Developer, Database, Web Architecture & Storage',
                country: 'Pakistan',
                hourly_rate: '$600',
                skills:  <div className="modal-skills-wrapper mt-0">
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Python</div>
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Sr. Data Analyst
                    </div>
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Data Visualization
                    </div>
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">PHP</div>
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Laravel</div>
                    <div className="skill-wrapper modal-hidden-skillsmodal-skill-wrapper">Django</div>
               </div>,
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Garrett Winters',
                ticket_title: 'Accountant',
                country: 'Tokyo',
                hourly_rate: '$63',
                skills: '2011/07/25',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Ashton Cox',
                ticket_title: 'Junior Technical Author',
                country: 'San Francisco',
                hourly_rate: '$66',
                skills: '2009/01/12',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Cedric Kelly',
                ticket_title: 'Senior Javascript Developer',
                country: 'Edinburgh',
                hourly_rate: '$22',
                skills: '2012/03/29',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Airi Satou',
                ticket_title: 'Accountant',
                country: 'Tokyo',
                hourly_rate: '$33',
                skills: '2008/11/28',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Brielle Williamson',
                ticket_title: 'Integration Specialist',
                country: 'New York',
                hourly_rate: '$61',
                skills: '2012/12/02',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Herrod Chandler',
                ticket_title: 'Sales Assistant',
                country: 'San Francisco',
                hourly_rate: '$59',
                skills: '2012/08/06',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Rhona Davidson',
                ticket_title: 'Integration Specialist',
                country: 'Tokyo',
                hourly_rate: '$55',
                skills: '2010/10/14',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Colleen Hurst',
                ticket_title: 'Javascript Developer',
                country: 'San Francisco',
                hourly_rate: '$39',
                skills: '2009/09/15',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Sonya Frost',
                ticket_title: 'Software Engineer',
                country: 'Edinburgh',
                hourly_rate: '$23',
                skills: '2008/12/13',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Jena Gaines',
                ticket_title: 'Office Manager',
                country: 'London',
                hourly_rate: '$30',
                skills: '2008/12/19',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Quinn Flynn',
                ticket_title: 'Support Lead',
                country: 'Edinburgh',
                hourly_rate: '$22',
                skills: '2013/03/03',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Charde Marshall',
                ticket_title: 'Regional Director',
                country: 'San Francisco',
                hourly_rate: '$36',
                skills: '2008/10/16',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Haley Kennedy',
                ticket_title: 'Senior Marketing Designer',
                country: 'London',
                hourly_rate: '$43',
                skills: '2012/12/18',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Tatyana Fitzpatrick',
                ticket_title: 'Regional Director',
                country: 'London',
                hourly_rate: '$19',
                skills: '2010/03/17',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Michael Silva',
                ticket_title: 'Marketing Designer',
                country: 'London',
                hourly_rate: '$66',
                skills: '2012/11/27',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Paul Byrd',
                ticket_title: 'Chief Financial Officer (CFO)',
                country: 'New York',
                hourly_rate: '$64',
                skills: '2010/06/09',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Gloria Little',
                ticket_title: 'Systems Administrator',
                country: 'New York',
                hourly_rate: '$59',
                skills: '2009/04/10',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Bradley Greer',
                ticket_title: 'Software Engineer',
                country: 'London',
                hourly_rate: '$41',
                skills: '2012/10/13',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Dai Rios',
                ticket_title: 'Personnel Lead',
                country: 'Edinburgh',
                hourly_rate: '$35',
                skills: '2012/09/26',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Jenette Caldwell',
                ticket_title: 'Development Lead',
                country: 'New York',
                hourly_rate: '$30',
                skills: '2011/09/03',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Yuri Berry',
                ticket_title: 'Chief Marketing Officer (CMO)',
                country: 'New York',
                hourly_rate: '$40',
                skills: '2009/06/25',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Caesar Vance',
                ticket_title: 'Pre-Sales Support',
                country: 'New York',
                hourly_rate: '$21',
                skills: '2011/12/12',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Doris Wilder',
                ticket_title: 'Sales Assistant',
                country: 'Sidney',
                hourly_rate: '$23',
                skills: '2010/09/20',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
                        </div>              },
              {
                name: 'Angelica Ramos',
                ticket_title: 'Chief Executive Officer (CEO)',
                country: 'London',
                hourly_rate: '$47',
                skills: '2009/10/09',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Gavin Joyce',
                ticket_title: 'Developer',
                country: 'Edinburgh',
                hourly_rate: '$42',
                skills: '2010/12/22',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
                        </div>              },
              {
                name: 'Jennifer Chang',
                ticket_title: 'Regional Director',
                country: 'Singapore',
                hourly_rate: '$28',
                skills: '2010/11/14',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Brenden Wagner',
                ticket_title: 'Software Engineer',
                country: 'San Francisco',
                hourly_rate: '$28',
                skills: '2011/06/07',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Fiona Green',
                ticket_title: 'Chief Operating Officer (COO)',
                country: 'San Francisco',
                hourly_rate: '$48',
                skills: '2010/03/11',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Shou Itou',
                ticket_title: 'Regional Marketing',
                country: 'Tokyo',
                hourly_rate: '$20',
                skills: '2011/08/14',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Michelle House',
                ticket_title: 'Integration Specialist',
                country: 'Sidney',
                hourly_rate: '$37',
                skills: '2011/06/02',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Suki Burks',
                ticket_title: 'Developer',
                country: 'London',
                hourly_rate: '$53',
                skills: '2009/10/22',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Prescott Bartlett',
                ticket_title: 'Technical Author',
                country: 'London',
                hourly_rate: '$27',
                skills: '2011/05/07',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Gavin Cortez',
                ticket_title: 'Team Leader',
                country: 'San Francisco',
                hourly_rate: '$22',
                skills: '2008/10/26',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Martena Mccray',
                ticket_title: 'Post-Sales support',
                country: 'Edinburgh',
                hourly_rate: '$46',
                skills: '2011/03/09',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Unity Butler',
                ticket_title: 'Marketing Designer',
                country: 'San Francisco',
                hourly_rate: '$47',
                skills: '2009/12/09',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
                        </div>              },
              {
                name: 'Howard Hatfield',
                ticket_title: 'Office Manager',
                country: 'San Francisco',
                hourly_rate: '$51',
                skills: '2008/12/16',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Hope Fuentes',
                ticket_title: 'Secretary',
                country: 'San Francisco',
                hourly_rate: '$41',
                skills: '2010/02/12',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Vivian Harrell',
                ticket_title: 'Financial Controller',
                country: 'San Francisco',
                hourly_rate: '$62',
                skills: '2009/02/14',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Timothy Mooney',
                ticket_title: 'Office Manager',
                country: 'London',
                hourly_rate: '$37',
                skills: '2008/12/11',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Jackson Bradshaw',
                ticket_title: 'Director',
                country: 'New York',
                hourly_rate: '$65',
                skills: '2008/09/26',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Olivia Liang',
                ticket_title: 'Support Engineer',
                country: 'Singapore',
                hourly_rate: '$64',
                skills: '2011/02/03',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Bruno Nash',
                ticket_title: 'Software Engineer',
                country: 'London',
                hourly_rate: '$38',
                skills: '2011/05/03',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Sakura Yamamoto',
                ticket_title: 'Support Engineer',
                country: 'Tokyo',
                hourly_rate: '$37',
                skills: '2009/08/19',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Thor Walton',
                ticket_title: 'Developer',
                country: 'New York',
                hourly_rate: '$61',
                skills: '2013/08/11',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
                        </div>              },
              {
                name: 'Finn Camacho',
                ticket_title: 'Support Engineer',
                country: 'San Francisco',
                hourly_rate: '$47',
                skills: '2009/07/07',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Serge Baldwin',
                ticket_title: 'Data Coordinator',
                country: 'Singapore',
                hourly_rate: '$64',
                skills: '2012/04/09',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Zenaida Frank',
                ticket_title: 'Software Engineer',
                country: 'New York',
                hourly_rate: '$63',
                skills: '2010/01/04',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Zorita Serrano',
                ticket_title: 'Software Engineer',
                country: 'San Francisco',
                hourly_rate: '$56',
                skills: '2012/06/01',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Jennifer Acosta',
                ticket_title: 'Junior Javascript Developer',
                country: 'Edinburgh',
                hourly_rate: '$43',
                skills: '2013/02/01',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Cara Stevens',
                ticket_title: 'Sales Assistant',
                country: 'New York',
                hourly_rate: '$46',
                skills: '2011/12/06',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Hermione Butler',
                ticket_title: 'Regional Director',
                country: 'London',
                hourly_rate: '$47',
                skills: '2011/03/21',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Lael Greer',
                ticket_title: 'Systems Administrator',
                country: 'London',
                hourly_rate: '$21',
                skills: '2009/02/27',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Jonas Alexander',
                ticket_title: 'Developer',
                country: 'San Francisco',
                hourly_rate: '$30',
                skills: '2010/07/14',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Shad Decker',
                ticket_title: 'Regional Director',
                country: 'Edinburgh',
                hourly_rate: '$51',
                skills: '2008/11/13',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Michael Bruce',
                ticket_title: 'Javascript Developer',
                country: 'Singapore',
                hourly_rate: '$29',
                skills: '2011/06/27',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              },
              {
                name: 'Donna Snider',
                ticket_title: 'Customer Support',
                country: 'New York',
                hourly_rate: '$27',
                skills: '2011/01/25',
                contact: <div className="mark-favorite-wrapper">
                            <div className="favourite-like js-resolution-share ">
                                <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                <img src={Favourite} alt="share" className="hover"/>
                            </div>
                            <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog">
                                <img src={messageblue} className="modal-buttons-icon"/>
                            </Link>
                            <img src={letter} alt="share" onClick={this.toggle(9)} className="modal-buttons-icon"/>
                            <MDBDropdown className="dropdown--hire-now">
                                <MDBDropdownToggle className="modal-buttons-text h-22 modal-hire-text" style={{padding:0}} color="none">
                                    <img src={hirenow} className="modal-buttons-icon"/>
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
              }
            ]
          };        
        return (
            <div className="container-fluid-small topclassName">
            <main className="main-content main-content--dashboard">
            {/* main_content_dashboard123 class add */}
            {/* Qu ky mughy khy b skon nhi mil rha syd waha ja kr kush aram mily*/}
              <div className="container container-fluid-small">
                  <div className="container-fluid-small">
                    <div className="row justify-content-center">
        
                      <div className="col-12 col-lg-8 order-0 search-box-wrapper search_box_wrapper1213">
                        <form action="" method="post"
                          id="search-box" className="">
                          <input type="hidden" name="_token" value="O8sXcIs335BaBKHiPPW1KOKyYn3eeV80zLEKK4Oh" /> 
                          <label
                            className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search Expert"
                              name="expert_name" value="" />
                            <button type="submit" className="button button--no-style">
                              <i className="search-icon-blue"></i>
                            </button>
                          </label>
                        </form>
                        <button type="button" className="button--white rounded-small post-a-ticket-cta filters-cta max-160">
                          <span className="d-none d-md-inline">Filters</span>
                        </button>
                      </div>
                      
                      <div className="col-12">
                        <div className="tile tile--2 tile--filters">
                       <Tabs>
                        <div className="ticket-header login-social-buttons">
                        <div className="ticket-header__list">
                            <h3 className="filters-header" id="totalsres">34 results</h3>
                        </div>
                        <TabList className="win-tab-list">
                            <Tab className="items"><FaThList/></Tab>
                            <Tab className="items"><FaTh /></Tab>
                        </TabList>
                        </div>
                        <TabPanel>
                          <div className="filters-wrapper ">
                            <form method="post" action="" className="search-expert-wrapper hire-ticket-content">
                                <input type="hidden" name="_token" value="O8sXcIs335BaBKHiPPW1KOKyYn3eeV80zLEKK4Oh" />
                                <div className="search-expert-content ">
                                    <SearchExperts />
                                </div>
                                <div className="payment-buttons width-100 order-1">
                                    <button type="submit" className="button max-160"><Link to="/client-dashboard/find_experts/search-result" style={{ color: "#ffffff" }}> Search</Link></button>
                                    <button className="button hide button--no-style link js-search-clear">Clear All</button>
                                </div>
                            </form>
                            </div>
                          <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
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
                                                <div className="modal-expert-description">Full Stack Developer, Database, Web
                                                    Architecture &amp; Storage</div>
                                                <div className="expert-location-wrapper">
                                                    <div className="expert-location"><img
                                                            src={location}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">Pakistan</div>
                                                    </div>
                                                    <div className="expert-location">
                                                    <img src={hourprice} className="expert-location-icon"/>
                                                        <div className="location-text">$ 600 / hour</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-button-wrapper">
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
        
                             <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
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
                         
                         
                            <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
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
                                        <div className="modal-feedback-wrapper">(460 Feedback)</div>
                                    </div>
                                    <div className="expert-cred-wrapper">
                                        <div className="modal-expert-name">Muhammad Usman</div>
                                        <div className="expert-description-wrapper">
                                            <div className="modal-expert-description">
                                                <div className="modal-expert-description">Swift - Apple Developer</div>
                                                <div className="expert-location-wrapper">
                                                    <div className="expert-location"><img
                                                            src={location}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">Pakistan</div>
                                                    </div>
                                                    <div className="expert-location"><img
                                                            src={hourprice}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">$ 450 / hour</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-button-wrapper">
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
                         
                         
                            <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
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
                                                <div className="modal-expert-description">Sharepoint configuration requirement required for a startu</div>
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
                                            <div className="modal-button-wrapper">
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
                            <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
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
                                        <div className="modal-feedback-wrapper">(500 Feedback)</div>
                                    </div>
                                    <div className="expert-cred-wrapper">
                                        <div className="modal-expert-name">David Forest</div>
                                        <div className="expert-description-wrapper">
                                            <div className="modal-expert-description">
                                                <div className="modal-expert-description">Test Automation Strategies</div>
                                                <div className="expert-location-wrapper">
                                                    <div className="expert-location"><img
                                                            src={location}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">Australia</div>
                                                    </div>
                                                    <div className="expert-location"><img
                                                            src={hourprice}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">$ 530 / hour</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-button-wrapper">
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
                          
                         
                            <div className="modal-column expert-lineitem">
                                <div className="modal-expert-card ">
                                    <div className="modal-expert-wrapper">
                                        <div className="modal-avatar"
                                            style={{backgroundImpayment: "url(&quot;&quot;)", backgroundticket_title: "center center", backgroundSize: "cover"}}>
                                        </div>
                                        <div className="modal-inner-wrapper">
                                            <div className="modal-rating-wrapper"><img
                                                    src={star}
                                                    className="modal-rating-star"/><img
                                                    src={star}
                                                    className="modal-rating-star"/><img
                                                    src={star}
                                                    className="modal-rating-star"/><img
                                                    src={hollowstar}
                                                    className="modal-rating-star"/><img
                                                    src={hollowstar}
                                                    className="modal-rating-star"/></div>
                                            <div className="modal-rating-number">3/<div className="modal-total-rating">5</div>
                                            </div>
                                        </div>
                                        <div className="modal-feedback-wrapper">(360 Feedback)</div>
                                    </div>
                                    <div className="expert-cred-wrapper">
                                        <div className="modal-expert-name">Anees Khan</div>
                                        <div className="expert-description-wrapper">
                                            <div className="modal-expert-description">
                                                <div className="modal-expert-description">Cloud technology &amp; infrastructure management</div>
                                                <div className="expert-location-wrapper">
                                                    <div className="expert-location"><img
                                                            src={location}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">Pakistan</div>
                                                    </div>
                                                    <div className="expert-location"><img
                                                            src={hourprice}
                                                            className="expert-location-icon"/>
                                                        <div className="location-text">$ 300 / hour</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-button-wrapper">
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
                         
                          <div className="">
                                <MDBPagination>
                                    <MDBPageItem disabled>
                                        <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">Previous</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem active>
                                        <MDBPageNav>
                                        1 <span className="sr-only">(current)</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>2</MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav>3</MDBPageNav>
                                    </MDBPageItem>
                                    <MDBPageItem>
                                        <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">Next</span>
                                        </MDBPageNav>
                                    </MDBPageItem>
                                </MDBPagination>
                            {/* <a href="" className="link load-more-link">Load more </a> */}
                          </div>
                        </TabPanel>
                        <TabPanel>
                            <div  className="pl-5 pr-5 pt-5 pb-2">
                                <MDBDataTable
                                    striped
                                    bordered
                                    small
                                    data={data}
                                    />
                            </div>
                        </TabPanel>
                          </Tabs>
                        </div>
                      </div>
                    </div>
                  </div>
                <form id="loginForm" name="loginForm">
                  <input type="hidden" id="uuusername" value="" />
                  <input type="hidden" id="uufirstname" value="Mrsec" />
                  <input type="hidden" id="uulastname" value="Asif" />
                  <input type="hidden" id="uuemail" value="seasif2024@gmail.com" />
                  <input type="hidden" id="uuid" value="97" />
                </form>
              </div>
        
              {/*<!-- [Structure] Ticket cancel confirmation modal START --> */}
              <div className="ui modal ticket-hire-modal" id="hire-now-ticket">
                    <div className="hire-now-content">
                        <div className="ticket-posted-modal__title">
                           Hire Now
                        </div>
                        <div className="hire-content">
                            <Link to="/client-dashboard/post-ticket" className="hire-ticket-link js-modal-close">
                              <img className="Hire-ticket-img" src={hireToNewTicket} alt="Hire to new ticket"/>
                              <p className="hire-text">Hire to new ticket</p>
                            </Link>
                            <Link to="/client-dashboard/hire-to-existing-ticket" className="hire-ticket-link js-modal-close">
                              <img className="Hire-ticket-img" src={hireToExistingTicket} alt="Hire to existing ticket"/>
                              <p className="hire-text">Hire to existing ticket</p>
                            </Link>
                        </div>
                        <div className="hire-cancel">
                            <div className="js-modal-close"
                                style={{display: "inline-block"}} >Cancel</div>
                        </div>
        
                    </div>
                </div>
                <div>
                <MDBContainer className="sending-offer-letter-modal" >
                    <MDBModal className="sending-offer-letter-modal mb-0" style={{display:"flex"}} isOpen={this.state.modal9} fullHeight position="right" toggle={this.toggle(9)} backdrop={true} >
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
            </main>
         </div>
        );
    }
}

export default SearchExpertsResult;