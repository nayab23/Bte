import React, { Component } from 'react';
import Favourite from "../app_assets/img/Final-ICONS_SVG_21-Heart_Filled.3f41e3f7.97bae4de.svg"
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import silver from "../app_assets/img/silver.svg"
import gold from "../app_assets/img/golden.svg"
import bronze from "../app_assets/img/bronze.svg"
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import location from "../app_assets/img/location.svg";
import hireToNewTicket from "../app_assets/img/Hire to new ticket.svg";
import hireToExistingTicket from "../app_assets/img/Hire to existing ticket.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable } from "mdbreact";
import SearchExperts from './SearchExperts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaThList, FaTh } from "react-icons/fa";

class Page extends Component {
    state={
        active:false,
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
                label: 'Payment',
                field: 'payment',
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
                payment: '600',
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
                    <img src="/static/media/message-blue.38f6c904.svg" className="modal-buttons-icon"/>
                    <img src={hirenow} className="modal-buttons-icon"/>
                </div>
              },
              {
                name: 'Garrett Winters',
                ticket_title: 'Accountant',
                country: 'Tokyo',
                payment: '63',
                skills: '2011/07/25',
                contact: '$170'
              },
              {
                name: 'Ashton Cox',
                ticket_title: 'Junior Technical Author',
                country: 'San Francisco',
                payment: '66',
                skills: '2009/01/12',
                contact: '$86'
              },
              {
                name: 'Cedric Kelly',
                ticket_title: 'Senior Javascript Developer',
                country: 'Edinburgh',
                payment: '22',
                skills: '2012/03/29',
                contact: '$433'
              },
              {
                name: 'Airi Satou',
                ticket_title: 'Accountant',
                country: 'Tokyo',
                payment: '33',
                skills: '2008/11/28',
                contact: '$162'
              },
              {
                name: 'Brielle Williamson',
                ticket_title: 'Integration Specialist',
                country: 'New York',
                payment: '61',
                skills: '2012/12/02',
                contact: '$372'
              },
              {
                name: 'Herrod Chandler',
                ticket_title: 'Sales Assistant',
                country: 'San Francisco',
                payment: '59',
                skills: '2012/08/06',
                contact: '$137'
              },
              {
                name: 'Rhona Davidson',
                ticket_title: 'Integration Specialist',
                country: 'Tokyo',
                payment: '55',
                skills: '2010/10/14',
                contact: '$327'
              },
              {
                name: 'Colleen Hurst',
                ticket_title: 'Javascript Developer',
                country: 'San Francisco',
                payment: '39',
                skills: '2009/09/15',
                contact: '$205'
              },
              {
                name: 'Sonya Frost',
                ticket_title: 'Software Engineer',
                country: 'Edinburgh',
                payment: '23',
                skills: '2008/12/13',
                contact: '$103'
              },
              {
                name: 'Jena Gaines',
                ticket_title: 'Office Manager',
                country: 'London',
                payment: '30',
                skills: '2008/12/19',
                contact: '$90'
              },
              {
                name: 'Quinn Flynn',
                ticket_title: 'Support Lead',
                country: 'Edinburgh',
                payment: '22',
                skills: '2013/03/03',
                contact: '$342'
              },
              {
                name: 'Charde Marshall',
                ticket_title: 'Regional Director',
                country: 'San Francisco',
                payment: '36',
                skills: '2008/10/16',
                contact: '$470'
              },
              {
                name: 'Haley Kennedy',
                ticket_title: 'Senior Marketing Designer',
                country: 'London',
                payment: '43',
                skills: '2012/12/18',
                contact: '$313'
              },
              {
                name: 'Tatyana Fitzpatrick',
                ticket_title: 'Regional Director',
                country: 'London',
                payment: '19',
                skills: '2010/03/17',
                contact: '$385'
              },
              {
                name: 'Michael Silva',
                ticket_title: 'Marketing Designer',
                country: 'London',
                payment: '66',
                skills: '2012/11/27',
                contact: '$198'
              },
              {
                name: 'Paul Byrd',
                ticket_title: 'Chief Financial Officer (CFO)',
                country: 'New York',
                payment: '64',
                skills: '2010/06/09',
                contact: '$725'
              },
              {
                name: 'Gloria Little',
                ticket_title: 'Systems Administrator',
                country: 'New York',
                payment: '59',
                skills: '2009/04/10',
                contact: '$237'
              },
              {
                name: 'Bradley Greer',
                ticket_title: 'Software Engineer',
                country: 'London',
                payment: '41',
                skills: '2012/10/13',
                contact: '$132'
              },
              {
                name: 'Dai Rios',
                ticket_title: 'Personnel Lead',
                country: 'Edinburgh',
                payment: '35',
                skills: '2012/09/26',
                contact: '$217'
              },
              {
                name: 'Jenette Caldwell',
                ticket_title: 'Development Lead',
                country: 'New York',
                payment: '30',
                skills: '2011/09/03',
                contact: '$345'
              },
              {
                name: 'Yuri Berry',
                ticket_title: 'Chief Marketing Officer (CMO)',
                country: 'New York',
                payment: '40',
                skills: '2009/06/25',
                contact: '$675'
              },
              {
                name: 'Caesar Vance',
                ticket_title: 'Pre-Sales Support',
                country: 'New York',
                payment: '21',
                skills: '2011/12/12',
                contact: '$106'
              },
              {
                name: 'Doris Wilder',
                ticket_title: 'Sales Assistant',
                country: 'Sidney',
                payment: '23',
                skills: '2010/09/20',
                contact: '$85'
              },
              {
                name: 'Angelica Ramos',
                ticket_title: 'Chief Executive Officer (CEO)',
                country: 'London',
                payment: '47',
                skills: '2009/10/09',
                contact: '$1'
              },
              {
                name: 'Gavin Joyce',
                ticket_title: 'Developer',
                country: 'Edinburgh',
                payment: '42',
                skills: '2010/12/22',
                contact: '$92'
              },
              {
                name: 'Jennifer Chang',
                ticket_title: 'Regional Director',
                country: 'Singapore',
                payment: '28',
                skills: '2010/11/14',
                contact: '$357'
              },
              {
                name: 'Brenden Wagner',
                ticket_title: 'Software Engineer',
                country: 'San Francisco',
                payment: '28',
                skills: '2011/06/07',
                contact: '$206'
              },
              {
                name: 'Fiona Green',
                ticket_title: 'Chief Operating Officer (COO)',
                country: 'San Francisco',
                payment: '48',
                skills: '2010/03/11',
                contact: '$850'
              },
              {
                name: 'Shou Itou',
                ticket_title: 'Regional Marketing',
                country: 'Tokyo',
                payment: '20',
                skills: '2011/08/14',
                contact: '$163'
              },
              {
                name: 'Michelle House',
                ticket_title: 'Integration Specialist',
                country: 'Sidney',
                payment: '37',
                skills: '2011/06/02',
                contact: '$95'
              },
              {
                name: 'Suki Burks',
                ticket_title: 'Developer',
                country: 'London',
                payment: '53',
                skills: '2009/10/22',
                contact: '$114'
              },
              {
                name: 'Prescott Bartlett',
                ticket_title: 'Technical Author',
                country: 'London',
                payment: '27',
                skills: '2011/05/07',
                contact: '$145'
              },
              {
                name: 'Gavin Cortez',
                ticket_title: 'Team Leader',
                country: 'San Francisco',
                payment: '22',
                skills: '2008/10/26',
                contact: '$235'
              },
              {
                name: 'Martena Mccray',
                ticket_title: 'Post-Sales support',
                country: 'Edinburgh',
                payment: '46',
                skills: '2011/03/09',
                contact: '$324'
              },
              {
                name: 'Unity Butler',
                ticket_title: 'Marketing Designer',
                country: 'San Francisco',
                payment: '47',
                skills: '2009/12/09',
                contact: '$85'
              },
              {
                name: 'Howard Hatfield',
                ticket_title: 'Office Manager',
                country: 'San Francisco',
                payment: '51',
                skills: '2008/12/16',
                contact: '$164'
              },
              {
                name: 'Hope Fuentes',
                ticket_title: 'Secretary',
                country: 'San Francisco',
                payment: '41',
                skills: '2010/02/12',
                contact: '$109'
              },
              {
                name: 'Vivian Harrell',
                ticket_title: 'Financial Controller',
                country: 'San Francisco',
                payment: '62',
                skills: '2009/02/14',
                contact: '$452'
              },
              {
                name: 'Timothy Mooney',
                ticket_title: 'Office Manager',
                country: 'London',
                payment: '37',
                skills: '2008/12/11',
                contact: '$136'
              },
              {
                name: 'Jackson Bradshaw',
                ticket_title: 'Director',
                country: 'New York',
                payment: '65',
                skills: '2008/09/26',
                contact: '$645'
              },
              {
                name: 'Olivia Liang',
                ticket_title: 'Support Engineer',
                country: 'Singapore',
                payment: '64',
                skills: '2011/02/03',
                contact: '$234'
              },
              {
                name: 'Bruno Nash',
                ticket_title: 'Software Engineer',
                country: 'London',
                payment: '38',
                skills: '2011/05/03',
                contact: '$163'
              },
              {
                name: 'Sakura Yamamoto',
                ticket_title: 'Support Engineer',
                country: 'Tokyo',
                payment: '37',
                skills: '2009/08/19',
                contact: '$139'
              },
              {
                name: 'Thor Walton',
                ticket_title: 'Developer',
                country: 'New York',
                payment: '61',
                skills: '2013/08/11',
                contact: '$98'
              },
              {
                name: 'Finn Camacho',
                ticket_title: 'Support Engineer',
                country: 'San Francisco',
                payment: '47',
                skills: '2009/07/07',
                contact: '$87'
              },
              {
                name: 'Serge Baldwin',
                ticket_title: 'Data Coordinator',
                country: 'Singapore',
                payment: '64',
                skills: '2012/04/09',
                contact: '$138'
              },
              {
                name: 'Zenaida Frank',
                ticket_title: 'Software Engineer',
                country: 'New York',
                payment: '63',
                skills: '2010/01/04',
                contact: '$125'
              },
              {
                name: 'Zorita Serrano',
                ticket_title: 'Software Engineer',
                country: 'San Francisco',
                payment: '56',
                skills: '2012/06/01',
                contact: '$115'
              },
              {
                name: 'Jennifer Acosta',
                ticket_title: 'Junior Javascript Developer',
                country: 'Edinburgh',
                payment: '43',
                skills: '2013/02/01',
                contact: '$75'
              },
              {
                name: 'Cara Stevens',
                ticket_title: 'Sales Assistant',
                country: 'New York',
                payment: '46',
                skills: '2011/12/06',
                contact: '$145'
              },
              {
                name: 'Hermione Butler',
                ticket_title: 'Regional Director',
                country: 'London',
                payment: '47',
                skills: '2011/03/21',
                contact: '$356'
              },
              {
                name: 'Lael Greer',
                ticket_title: 'Systems Administrator',
                country: 'London',
                payment: '21',
                skills: '2009/02/27',
                contact: '$103'
              },
              {
                name: 'Jonas Alexander',
                ticket_title: 'Developer',
                country: 'San Francisco',
                payment: '30',
                skills: '2010/07/14',
                contact: '$86'
              },
              {
                name: 'Shad Decker',
                ticket_title: 'Regional Director',
                country: 'Edinburgh',
                payment: '51',
                skills: '2008/11/13',
                contact: '$183'
              },
              {
                name: 'Michael Bruce',
                ticket_title: 'Javascript Developer',
                country: 'Singapore',
                payment: '29',
                skills: '2011/06/27',
                contact: '$183'
              },
              {
                name: 'Donna Snider',
                ticket_title: 'Customer Support',
                country: 'New York',
                payment: '27',
                skills: '2011/01/25',
                contact: '$112'
              }
            ]
          };        
        return (
            <div className="container-fluid-small topclassName">
            <main className="main-content main-content--dashboard">
            {/* main_content_dashboard123 class add */}
            {/* Qu ky mughy khy b skon nhi mil rha syd waha ja kr kush aram mily*/}
              <div className="container container-fluid-small">
                <div className="row" id="search">
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
                                        {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                                src={hirenow}
                                                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                                        </div> */}
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
                                                    <div className="expert-location"><img
                                                            src={hourprice}
                                                            className="expert-location-icon"/>
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
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                         <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                                    <div className="modal-favorite-button">
                                                        <div className="favourite-like js-resolution-share ">
                                                            <img src={FavouriteWhite} alt="share" className="hide-hover"/>
                                                            <img src={Favourite} alt="share" className="hover"/>
                                                        </div>
                                                        <div className="modal-buttons-text">Favourite</div>
                                                    </div>
                                                    <div className="modal-message-button"><img
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                         <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                        {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                                src={hirenow}
                                                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                                        </div> */}
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
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                         <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                        {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                                src={hirenow}
                                                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                                        </div> */}
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
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                         <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                        {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                                src={hirenow}
                                                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                                        </div> */}
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
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                        <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                        {/* <div className="modal-favorite-button hidden-modal-hire-button"><img
                                                src={hirenow}
                                                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                                            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
                                        </div> */}
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
                                                            src="/static/media/message-blue.38f6c904.svg"
                                                            className="modal-buttons-icon"/>
                                                         <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                                                    </div>
                                                </div>
                                                <div className="modal-favorite-button modal-hire-text">
                                                <img src={hirenow} className="modal-buttons-icon"/>
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
                                                    {/* <div className={`ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts visible ${this.state.active && 'active'}`} onClick={ () => this.setState({active: !this.state.active}) }  tabIndex={0}>
                                                    <a className="modal-buttons-text modal-hire-text"> Hire Now </a>
                                                    <div className={`menu transition ${this.state.active && 'visible'}`} tabIndex={-1} style={{display: "block !important"}}>
                                                    <Link className="item dropdown-active-link" to="/client-dashboard/post-ticket"> Hire to new ticket </Link>
                                                    <Link className="item dropdown-active-link" to="/client-dashboard/hire-to-existing-ticket"> Hire to existing ticket </Link>
                                                    </div>
                                                    </div> */}
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
                         
                          <div className="experts-footer">
                            <ul className="pagination">
                              <li className="disabled">
                                <a href="" className="disabled">
                                  <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight:'5px' }} width="7.813" height="12.123" viewBox="0 0 7.813 12.123">
                                    <path id="Path_159" data-name="Path 159"
                                      d="M-12061.334-5905.442l-5.812,5.249,5.812,4.874"
                                      transform="translate(12068.146 5906.442)" fill="none"
                                      stroke="#372E75" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                                  </svg>Previous
                                </a>
                              </li>
                              <li><a href="#">1</a></li>
                              <li><a href="">2</a></li>
                              <li><a href="">3</a></li>
                              <li><a href="" className=""> Next 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.813" height="12.123"
                                    viewBox="0 0 7.813 12.123" style={{ transform: "rotate(180deg)",marginLeft:'5px' }}>
                                    <path id="Path_159" data-name="Path 159"
                                      d="M-12061.334-5905.442l-5.812,5.249,5.812,4.874"
                                      transform="translate(12068.146 5906.442)" fill="none"
                                      stroke="#372E75" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                                    </svg>
                                  </a>
                              </li>
                            </ul>
                            <a href="" className="link load-more-link">Load more </a>
                          </div>
                        </TabPanel>
                        <TabPanel>
                        <MDBDataTable
                            striped
                            bordered
                            small
                            data={data}
                            />
                        </TabPanel>
                          </Tabs>
                        </div>
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
        
              
            </main>
         </div>
        );
    }
}

export default Page;