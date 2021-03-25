import React, { Component } from 'react';
import FavouriteWhite from "../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.79eed29f.svg"
import level from "../app_assets/img/Level.svg"
import sallary from "../app_assets/img/sallary.svg"
import experience from '../app_assets/img/experience.svg';
import employ from '../app_assets/img/employ.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBModalHeader, MDBBtn, MDBModal, MDBModalBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDataTable, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaThList, FaTh,} from "react-icons/fa";
import Select from 'react-select';
import FeedDetailModal from './FeedDetailModal';

import messageblue from "../app_assets/img/message-blue.svg"
import messagewhite from "../app_assets/img/message-white.svg"
import offerPimary from "../app_assets/img/send-offer-primary.svg"
import offerWhite from "../app_assets/img/send-offer-white.svg"
import OfferLetter from '../ExpertProfile/OfferLetter';

const skills = [
    {
        value: '1',
        label: 'User Interface Design'
    }, {
        value: '2',
        label: 'User Experience Design'
    }, {
        value: '3',
        label: 'UX Research'
    },
    {
        value: '4',
        label: 'Front-end Design'
    }, {
        value: '5',
        label: 'UX Copyrighting'
    },{
        value: '6',
        label: 'Cloud Development'
    },{
        value: '7',
        label: 'graphic designing'
    },{
        value: '8',
        label: 'Database Programmer'
    },{
        value: '9',
        label: 'web designing'
    },{
        value: '10',
        label: 'web development'
    },{
        value: '11',
        label: 'Networking Services'
    },
  ];
class ExpertFeed extends Component {
    state={
        active:false,
        modal8: false,
        modal9: false,
        selectedCategorySkills: null,
    }   
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      handleChangeSkils = selectedCategorySkills => {
        this.setState({ selectedCategorySkills });
        console.log(`Option selected:`, selectedCategorySkills);
      };
    render() {        
        const { selectedCategorySkills,  } = this.state;
        return (
            <div className="container-fluid-small topclassName">
            <main className="main-content main-content--dashboard">
              <div className="container container-fluid-small">
                  <div className="container-fluid-small">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-8 order-0 search-box-wrapper search_box_wrapper1213">
                        <form action="" method="post"
                          id="search-box" className="">
                          <input type="hidden" name="_token" value="O8sXcIs335BaBKHiPPW1KOKyYn3eeV80zLEKK4Oh" /> 
                          <label
                            className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search Ticket"
                              name="expert_name" value="" />
                            <button type="submit" className="button button--no-style">
                              <i className="search-icon-blue"></i>
                            </button>
                          </label>
                        </form>
                      </div>
                      <div className="col-12">
                        <div className="tile--filters">
                       <Tabs>
                            {/* <!-- feed ticket tab --> */}
                        <div className="ticket-header space-between tile ">
                        <div className="feed-header__skill display-flex">      
                            <div class="feed-skill-bt">
                                <input  id="feed-skill-1" className="feed-skill-x hide" type="checkbox" />
                                <label for="feed-skill-1" className="feed-skill-x">X</label>
                                <div class="feed-skill-title">Database Programmer</div>
                            </div>
                            <div class="feed-skill-bt">
                                <input  id="feed-skill-2" className="feed-skill-x hide" type="checkbox" />
                                <label for="feed-skill-2" className="feed-skill-x">X</label>
                                <div class="feed-skill-title">Networking Services</div>
                            </div>
                            <div class="feed-skill-bt">
                                <input  id="feed-skill-3" className="feed-skill-x hide" type="checkbox" />
                                <label for="feed-skill-3" className="feed-skill-x">X</label>
                                <div class="feed-skill-title">Cloud Development</div>
                            </div>
                            <div class="add-feed-skills js-show-modal-skills" onClick={this.toggle(9)}>+</div>
                        </div>
                        <TabList className="win-tab-list mb-0">
                            <h3 className="mt-2 mr-3" id="">34 results</h3>
                            <Tab className="items"><FaThList/></Tab>
                            <Tab className="items"><FaTh /></Tab>
                        </TabList>
                        </div>
                        <TabPanel>
                            {/* <!-- single feed ticket --> */}
                            <div className="feed-ticket-wrapper tile" onClick={this.toggle(8)}>
                                <div className="space-between">
                                    <h3 className="feed-ticket-title">Senior Database Programmer</h3>
                                    <img src={FavouriteWhite} className="feed-heart-img" alt="" />
                                </div>
                                <div className="feed-job-details space-between">
                                    <div className="display-flex">
                                        <img src={level} className="feed-job-img" alt="" />
                                        <div>
                                            <div className="">Work level</div>
                                            <div className="feed-job-single-content">Senior</div>
                                        </div>
                                    </div>
                                    <div className="display-flex">
                                        <img src={experience} className="feed-job-img" alt="" />
                                        <div>
                                            <div className="">Skills Required</div>
                                            <div className="feed-job-single-skills">Python,PHP,Mysql...</div>
                                        </div>
                                    </div>
                                    <div className="display-flex">
                                        <img src={employ} className="feed-job-img" alt="" />
                                        <div>
                                            <div className="">Contract Type</div>
                                            <div className="feed-job-single-content">Long Terms</div>
                                        </div>
                                    </div>
                                    <div className="display-flex">
                                        <img src={sallary} className="feed-job-img" alt="" />
                                        <div>
                                            <div className="">Payment</div>
                                            <div className="feed-job-single-content">Hourly/month</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="feed-text-flow">
                                Need someone to setup out Microsoft Teams voice package and any other relevant enhancements that can be made for a small business utilising Teams.aaa  Need someone to setup out Microsoft Teams voice package and any other relevant enhancements that can be made for a small business utilising Teams. 
                                <br /><br />
                                We are looking to hire an Azure DevOps Specialist to join our team and assist with some of our key projects.
                                <br /><br />
                                The role holder should have:
                                </p>
                                <div className="space-between feed-post-date">
                                    <FeedDetailModal />
                                    <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                                </div>
                            </div>
                            {/* <!-- single feed ticket --> */}
                            <div className="feed-ticket-wrapper tile" onClick={this.toggle(8)}>
                            <div className="space-between">
                                <h3 className="feed-ticket-title">Case Manager is needed to assist customers with claims - we will train!</h3>
                                <img src={FavouriteWhite} className="feed-heart-img" alt="" />
                            </div>
                            <div className="feed-job-details space-between">
                                <div className="display-flex">
                                    <img src={level} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Work level</div>
                                        <div className="feed-job-single-content">Senior</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={experience} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Skills Required</div>
                                        <div className="feed-job-single-skills">Python,PHP,Mysql...</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={employ} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Contract Type</div>
                                        <div className="feed-job-single-content">Long Terms</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={sallary} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Payment</div>
                                        <div className="feed-job-single-content">Hourly/month</div>
                                    </div>
                                </div>
                            </div>
                            <p className="feed-text-flow">
                            CSI Claims is a 3rd party claims company helping to mediate and reach a satisfactory settlement between movers and customers in a just, courteous, and timely manner.
                            We are looking for a meticulous and dedicated case manager to join our growing team as a full-time position. The individual in this role will be responsible for customer service and customer support over the phone and email. Our market is US based and candidates should be comfortable communicating in English with movers, customers, and team members verbally and in writing.
                            </p>
                            <div className="space-between feed-post-date">
                                <FeedDetailModal />
                                <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                            </div>
                        </div>
                        {/* <!-- single feed ticket --> */}
                        <div className="feed-ticket-wrapper tile" onClick={this.toggle(8)}>
                            <div className="space-between">
                                <h3 className="feed-ticket-title">Full Stack Developer, Database, Web Architecture &amps; Storage</h3>
                                <img src={FavouriteWhite} className="feed-heart-img" alt="" />
                            </div>
                            <div className="feed-job-details space-between">
                                <div className="display-flex">
                                    <img src={level} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Work level</div>
                                        <div className="feed-job-single-content">Senior</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={experience} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Skills Required</div>
                                        <div className="feed-job-single-skills">Python,PHP,Mysql...</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={employ} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Contract Type</div>
                                        <div className="feed-job-single-content">Long Terms</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={sallary} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Payment</div>
                                        <div className="feed-job-single-content">Hourly/month</div>
                                    </div>
                                </div>
                            </div>
                            <p className="feed-text-flow">
                            Need someone to setup out Microsoft Teams voice package and any other relevant enhancements that can be made for a small business utilising Teams.aaa  Need someone to setup out Microsoft Teams voice package and any other relevant enhancements that can be made for a small business utilising Teams. 
                            We are looking to hire an Azure DevOps Specialist to join our team and assist with some of our key projects.
                            The role holder should have</p>
                            <div className="space-between feed-post-date">
                                <FeedDetailModal />
                                <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                            </div>
                        </div>
                        
                        {/* <!-- single feed ticket --> */}
                        <div className="feed-ticket-wrapper tile" onClick={this.toggle(8)}>
                            <div className="space-between">
                                <h3 className="feed-ticket-title">Sharepoint configuration requirement required for a startu</h3>
                                <img src={FavouriteWhite} className="feed-heart-img" alt="" />
                            </div>
                            <div className="feed-job-details space-between">
                                <div className="display-flex">
                                    <img src={level} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Work level</div>
                                        <div className="feed-job-single-content">Senior</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={experience} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Skills Required</div>
                                        <div className="feed-job-single-skills">Python,PHP,Mysql...</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={employ} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Contract Type</div>
                                        <div className="feed-job-single-content">Long Terms</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={sallary} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Payment</div>
                                        <div className="feed-job-single-content">Hourly/month</div>
                                    </div>
                                </div>
                            </div>
                            <p className="feed-text-flow">
                            Can you please fix my Server, Can you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my Server </p>
                            <div className="space-between feed-post-date">
                                <FeedDetailModal />
                                <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                            </div>
                        </div>
                        
                        {/* <!-- single feed ticket --> */}
                        <div className="feed-ticket-wrapper tile" onClick={this.toggle(8)}>
                            <div className="space-between">
                                <h3 className="feed-ticket-title">Cloud technology &amps; infrastructure management</h3>
                                <img src={FavouriteWhite} className="feed-heart-img" alt="" />
                            </div>
                            <div className="feed-job-details space-between">
                                <div className="display-flex">
                                    <img src={level} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Work level</div>
                                        <div className="feed-job-single-content">Senior</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={experience} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Skills Required</div>
                                        <div className="feed-job-single-skills">Python,PHP,Mysql...</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={employ} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Contract Type</div>
                                        <div className="feed-job-single-content">Long Terms</div>
                                    </div>
                                </div>
                                <div className="display-flex">
                                    <img src={sallary} className="feed-job-img" alt="" />
                                    <div>
                                        <div className="">Payment</div>
                                        <div className="feed-job-single-content">Hourly/month</div>
                                    </div>
                                </div>
                            </div>
                            <p className="feed-text-flow">
                            Check the Final Message on Screen Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post Message 
                            SAPeDMS configuration has a vulnerability , looking for someone to fix and secure the SOD and Access review for Corporate users. SAPeDMS configuration has a vulnerability , looking for someone to fix and secure the SOD
                            </p>
                            <div className="space-between feed-post-date">
                                <FeedDetailModal />
                                <h3>Posted 1 Hour ago by <span>David Forest</span></h3>
                            </div>
                        </div>
                        </TabPanel>
                        <TabPanel>
                          
                        </TabPanel> 
                        <br />
                        
                        {/* <!-- feed ticket pagination --> */}
                        <div className="tile">
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
                          </Tabs>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            {/*<!-- [Structure] feed created modal START --> */}
            <MDBModal className="feed-modal" style={{display:"flex"}}  isOpen={this.state.modal9} toggle={this.toggle(9)} backdrop={true} position="left">
                <MDBModalHeader toggle={this.toggle(9)} className="modal-ticket-header"></MDBModalHeader>
                    <MDBModalBody style={{width: "100%", padding:"44px"}}>
                    <form className="mb-style" id="category">
                        <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
                        <h2 className="feed-modal__title mt-0 mb-0">
                            Category
                        </h2>
                        <p className="feed-modal__subtitle">
                            Select appropriate category that fits your interests (Max 3)
                        </p>
                            <Select
                                value={selectedCategorySkills}
                                onChange={this.handleChangeSkils}
                                options={skills}
                                isMulti
                                defaultValue={[skills[8], skills[11], skills[6]]}
                                className="multi-select-input-style"
                            />
                        <p className="input__notification">Category is required</p>

                        <p className="feed-modal__description mt-5">
                            Didn't found the right category for you?
                        </p>
                        <a href="#" className="feed-modal__link js-show-modal" data-modal-id="feed-category-new">
                            Let us know
                        </a>
                        <div className="feed-modal__buttons">
                            <button type="submit" className="button js-modal-close" id="submit_button">
                                Save
                            </button>

                            <button type="button" className="button button--no-style button--cancel js-modal-close">
                                Cancel
                            </button>
                        </div>
                    </form>
                    </MDBModalBody>
                </MDBModal>
            {/*<!-- Feed skills pool END --> */}








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
            </main>
         </div>
        );
    }
}

export default ExpertFeed;