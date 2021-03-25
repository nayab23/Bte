import React, { Component } from 'react';
import banarMan from '../app_assets/img/images/banner/man.png'
import shapeL3 from '../app_assets/img/images/shapes/light/3.png'
import shapeL6 from '../app_assets/img/images/shapes/light/6.png'
import shapeF from '../app_assets/img/images/shapes/light/1.png'
import shapeFb from '../app_assets/img/images/shapes/light/5.png'
import shaperound from '../app_assets/img/images/shapes/round-shape-red.png'
import roundshape from '../app_assets/img/images/shapes/shape-dotted1.png'
import { FaStar, FaTicketAlt} from "react-icons/fa";  
import { IoMdPerson, } from "react-icons/io";
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import autosize from 'autosize';
import TicketModal from './ExpertEditModal/TicketModal';
import attachement from "../app_assets/img/attachement.svg";
import SendingOfferLetter from './ExpertEditModal/SendingOfferLetter';
import { AiOutlineDollar,} from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import file from '../app_assets/img/file.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

class ContractNow extends Component {
  componentDidMount(){
    this.textarea.focus();
    autosize(this.textarea);
 }
    render() {
        return (
              <div className="container-fluid-small topclassName">
    <main className="main-content main-content--dashboard">
      <div className="container container-fluid-small"   style={{overflow:"hidden"}}>
  {/* <!--banner-area start--> */}
  <div id="home" className="banner-area banner-white fix bg-pf">
    <div className="container ps-relative">
      <div className="row profile-view">
          {/* <!--banner-left--> */}
          <div className="banner-left">
            <div className="banner-text banner-text-light">
              <h4 className="p-color">Hiring</h4>
              <h2 className="cd-headline clip is-full-width">
                  <b className="is-visible">Expert Name</b>
              </h2>
              <br/>
              <p>Senior Product Designer Based On Pakistan Islamabad</p>
              <p>Teamwork is my main strategy for working on any project. I am delivering results with no delay and UX/UI expertise. I am a Top Rated UI/UX and Cross Platform designer with more than 3+ years of extensive experience and I am here to help you to achieve your goals and solve your issues.</p>
            </div>
            <div className="social-icons text-light mt-4 expert-verify">
                  {/* <input type="checkbox" className="check-input-lab input " />
                  <p className="input__title input__title--half  mx-4 mt-1">Verify the selected expert for your job</p> */}
                  <img className="shape-l-show" src={shapeFb} />
                  <img className="shape-l-hide" src={shapeF} />
            </div>
          </div>
          {/* <!--banner-right--> */}
          <div className="banner-w">
          <div className="banner-right d-none d-lg-block">
            <div className="banner-image d-none d-lg-block">
              <div className="b-shape-3"></div>
              <div className="banner-image-inner">
                <img src={banarMan} alt="" />
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  <br/>
  {/* <!--fact-area start--> */}
  <div className="fact-area bg-dark-light bg-pf">
    <div className="container expert-checks-d" style={{marginTop: "29px",position: "relative"}}>
     <div className="row" style={{position: "relative",marginRight: "3px", marginLeft: "3px"}}>
     <input id="check-scope" type="checkbox" className="check-input-lab check-scope" />
      <p className="input__title input__title--half mt-1 check-scope-p">Verify the selected expert for your job</p>
        <div className="col-xl-2-5 mr-23 ">
          <div className="fact-single mb-sm-60">
            <FaStar className="fact--icon icon-trophy" />
            <SendingOfferLetter/>
          </div>
        </div>
        <div className="col-xl-2-5 mr-23 ">
          <div className="fact-single mb-sm-60">
            <AiOutlineDollar className="fact--icon icon-coffee-cup" />
            <h3>40<span className="counter-add">$</span></h3>
            <p>Hourly rate</p>
          </div>
        </div>
        <div className="col-xl-2-5 mr-23 ">
          <div className="fact-single mb-sm-60">
            <IoMdPerson className="fact--icon icon-user" />
            <h3> <span className="counter">Interview</span></h3>
            {/* <p>Happy Clients</p> */}
          </div>
        </div>
        <div className="col-xl-2-5 mr-23 ">
          <div className="fact-single">
            <FaTicketAlt className="fact--icon icon-rocket"/>
            <TicketModal/>
            {/* <p>Earnings</p> */}
          </div>
        </div><div className="col-xl-2-5">
          <div className="fact-single">
            <FaTicketAlt className="fact--icon icon-rocket"/>
            <h3> <span className="counter">New</span></h3>
            {/* <p>Earnings</p> */}
          </div>
        </div>
        <div className="check-expert-detail"></div>
      </div>
    </div>
  </div>
  <br/>
  {/* <!--Scope of Work--> */}
  <div className="fix">
    <div id="about" className="about-area ps-relative bg-pf">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="section-title text-light mb-2 space-between">
            <h4 className="contact-title mb2">Scope of Work <span></span></h4>
            <MDBDropdown className="new-ticket-dropdown">
              <MDBDropdownToggle color="none">
                <h2 className="p-color">New Ticket</h2>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown--new-ticke" >
                <Link to="/client-dashboard/post-ticket">
                    <MDBDropdownItem  > Select new ticket </MDBDropdownItem>
                </Link>
                <Link to="/client-dashboard/hire-to-existing-ticket">
                    <MDBDropdownItem  className="item dropdown-active-link"> Select existing ticket </MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
            </div>

            <form>
              <input id="check-scope" type="checkbox" className="check-input-lab check-scope" />
              <p className="input__title input__title--half  mx-3 mt-1 check-scope-p">Please check to commit the scope</p>
              <div className="row">
                <div className="col-12 col-md-12 ">
                    <p className="input__title input__title--half">Ticket title</p>
                    <label for="check-scope" className="input__wrapper input__wrapper--half ">
                        <input id="" value="Figma Designer Needed for web development project, additionally  responsive designer for mobile development"
                         type="text" className="input input-check" placeholder="Description" name="job-description" required/>
                        <p className="input__notification">Job Description is required</p>
                    </label>
                </div>                              
            </div><br/>
            <div className="row">
                <div className="col-12 col-md-12 ">
                    <p className="input__title input__title--half">Work Detail</p>    
                    <label for="check-scope" className="input__wrapper input__wrapper--half ">
                        <textarea style={{ maxHeight:'auto', minHeight:'90px', resize:'none',}}
                         ref={c=>this.textarea=c} rows={1}  type="text" className="input input-check" placeholder="Description" name="job-description" required>
                        Teamwork is my main strategy for working on any project. I am delivering results with no delay and UX/UI expertise. I am a Top Rated UI/UX and Cross Platform designer with more than 3+ years of extensive experience and I am here to help you to achieve your goals and solve your issues.
                        </textarea>
                        <p className="input__notification">Job Description is required</p>
                    </label>
                </div>                              
            </div>
            <div className="row ml-0 my-2 mb-3">
              <div className="display-flex mr-3">
                <img src={file} className="document-file-icon mr-1" alt="" />
                <div className="document-title">
                    <div className="document-title">Document.pdf</div>
                    <div className="document-title-ext">25MB</div>
                </div>
              </div>
              <div className="display-flex">
                <img src={file} className="document-file-icon mr-1" alt="" />
                <div className="document-title">
                    <div className="document-title">Document.pdf</div>
                    <div className="document-title-ext">25MB</div>
                </div>
              </div>
            </div>
            <div className="justify-content mt-2">
            <label className="mb-0">
                <label for="upload-picture mb-0" style={{display: "flex"}}>
                  <img src={attachement}  style={{marginTop: "-13px"}} alt="share" className="mr-2 modal-buttons-icon"/>                         
                  <h2 className="p-color">Attachement</h2>
                </label>
                <input id="upload-picture" type="file" className="hide" placeholder="Upload picture" alt="Upload picture" name="Upload picture" required />
            </label>
            </div>
            <p style={{color: "gray", textAlign: "end", marginBottom: "0"}}>Last date: 1, jan, 2020</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  <br/>
    {/* <!--skills-experiences start--> */}
    <div className="skills-experiences-area bg-dark-light ps-relative bg-pf">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-sm-40">
            <h4 className="contact-title mb-2">Payment Terms</h4>
            </div>
          </div>
        </div>
        <br />
       <Tabs>
        <TabList className="row">
       <Tab></Tab>
       <Tab className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <label for="hourly" className="fact---single p-4 mb-sm-60">
            <h3>Hourly</h3>
            <p>Pay by agreed hour to expert</p>
            <input id="hourly" type="radio" name="payment" className="input" />
          </label>
        </Tab>
        <Tab className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <label for="fixed" className="fact---single p-4 mb-sm-60">  
            <h3>Fixed</h3>
            <p>Pay by fixed price set for the Ticket</p>
             <input id="fixed" type="radio" name="payment" className="input" />
          </label>
        </Tab>
        </TabList>
        <TabPanel>
        </TabPanel>
        <TabPanel>
        <form>
          <h2 class="payment-term-title">Set Agreed Hourly Rate to pay</h2>
          <div  className="payment-term-vals">
            <div className="payment-term-val">
            <h1 className="pay-doller">$</h1><h1 className="pay-doller">$</h1>
              <input type="text" style={{width:"150px"}} className="input payment-term-input" className="input" />
              <p>Per hour</p>
            </div>
            <p>Actual Hourly rate offered by “Expert” is 40$/Hour</p>
          </div>
          <h2 class="payment-term-title">Hiring for </h2>
          <div  className="payment-term-vals">
            <div className="payment-term-val">
              <input type="text" style={{width:"150px"}} className="input payment-term-input" className="input" />
              <p>Hour</p>
            </div>
            <p>Enter  number of hours to be hired</p>
          </div>
        </form>
        </TabPanel>
        <TabPanel>
        <form>
          <h2 class="payment-term-title">Pay fix price for the ticket</h2>
          <div  className="payment-term-vals">
            <div className="payment-term-val">
            <h1 className="pay-doller">$</h1>
              <input type="number"  style={{width:"150px"}} className="input payment-term-input" className="input" />
            </div>
            <p>Agree amount with experts</p>
          </div>
        </form>
        </TabPanel>
      </Tabs>
        <div className="social-icons text-light mt-4 expert-verify">
        <input type="checkbox" className="check-input-lab input " />
        <p className="input__title input__title--half  mx-3 mt-1">Check on agreed contract pay term with your selected expert</p>
        <img className="shape-l-show e---shape ds-xs-none " src={shapeL3} />
        <img className="shape-l-hide e---shape ds-xs-none " src={shapeL6} />
      </div>
      </div>
    </div>
  </div>
  <br/>
   {/* <!--Payment Summary--> */}
   <div id="services" className="services-area bg-darks ps-relative bg-pf">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h4 className="contact-title mb-2">Payment Summary</h4>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
      <h2 className="pay-sum--title">Contract type: <span>Hourly</span></h2>
      <br/>
        <form  className="pay-sum--hires-list">
          <div className=" pay-sum--hires">
            <div className=" pay-sum--hire">
              <h2 className="pay-sum--title">Hired for: </h2>
              <h2 className="pay-sum--title">10 Hours</h2>
              {/* <input type="text" className="input" style={{width:"247px"}} value="10 Hours"/> */}
            </div>
            <div className=" pay-sum--cals">
              <h2 className="">X </h2>
              <div className="pay-sum--cal">
              <h1 className="pay-dollers">$</h1>
                <input type="text" className="input " value="40"/>
                <p>at this rate agreed and set by client</p>
              </div>
            </div>
            <div className=" pay-sum--hire">
              <h2 className="cal-title">Total Payment to be paid: </h2>
              <input type="text" className="input" style={{width:"247px"}} value="400 $"/>
            </div>
          </div>
          <div className=" pay-sum--cals">
            <h2>Minimum payment to be paid to start the contract is </h2>
            <div className="pay-sum--cal">
              <h1 className="pay-dollers">$</h1>
              <input type="text" className="input " style={{width:"247px"}} value="40"/>
              <p>50% of the toal billed amount</p>
            </div>
          </div>
        </form>
      </div>
      <div className="social-icons text-light mt-4 expert-verify">
        <input type="checkbox" className="check-input-lab input " />
        <p className="input__title input__title--half  mx-3 mt-1">Verify the payment summary</p>
        <img className="shape-l-show round-shape---dashed " src={roundshape} />
        <img className="shape-l-hide round-shape---dashed " src={shaperound} />
      </div>
  </div>
  <br />
  {/* <!--Payment Method--> */}
  <div id="contact" className="contact-area bg-dark-light bg-pf" style={{position: "relative"}}>
    <div className="container">
      <div className="section-title mb-4">
          <h4 className="contact-title">Payment Method</h4>
      </div>
      <div className="contractNow-details" style={{width: "388px"}}>
          <Link to="#"  type="button" className="button-con d-md-inline max-200 js-show-modal" data-modal-id="payment-method-add-modal">
          Pay
          </Link>
      </div>
      <br />
      <p>You will be transferred to bank site for due payment </p>
    </div>
  </div>
  </div>
  <AddPaymentMethod/>
  </main>
            </div>
        );
    }
}

export default ContractNow;