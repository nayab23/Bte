import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import letter from "../app_assets/img/LETTER.svg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import file from '../app_assets/img/file.svg';
import attachement from "../app_assets/img/attachement.svg";
import autosize from 'autosize';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class OfferLetter extends Component {
    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
     }
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
        <div className="white">
            {/* <div className="contract-wrapper">
                <img className="contract-img" src={letter} alt="" />
                <h2 className="contract-title"style={{marginLeft: "18px"}}>Offer Letter</h2>
            </div> */}
            <div className="">
                <h2 className="contract-title">Offer</h2>
                {/* <h2 className="payment-term-title">Figma Designer Needed for web development project, additionally  responsive designer for mobile development</h2> */}
                {/* <p className="contract-row__subtext">Created on April 07, 2020 </p> */}
                <hr />
            </div>
            <form>
                <div className="row">
                    <div className="col-12 col-md-12 ">  
                    <h3 >Cover Letter</h3>
                        <label for="check-scope" className="input__wrapper input__wrapper--half ">
                            <textarea style={{ maxHeight:'auto', minHeight:'90px', resize:'none',}}
                            ref={c=>this.textarea=c} rows={1}  type="text" className="input input-check" placeholder="Description" name="description" required>
                            Dear Mr. Gilhooley,
                            I am writing to apply for the programmer position advertised in the Times Union. As requested, I enclose a completed job application, my certification, my resume, and three references.
                            I provide exceptional contributions to customer service for all customers.
                            With a BS degree in Computer Programming, I have a comprehensive understanding of the full lifecycle for software development projects. I also have experience in learning and applying new technologies as appropriate. Please see my resume for additional information on my experience.
                            Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.
                            Sincerely,

                            </textarea>
                            <p className="input__notification">Description is required</p>
                        </label>
                    </div>                              
                </div>
                <div className="justify-content mt-3">
                    <label className="mb-0">
                        <label for="upload-picture mb-0" style={{display: "flex"}}>
                        <img src={attachement}  style={{marginTop: "-13px"}} alt="share" className="mr-2 modal-buttons-icon"/>                         
                        <h2 className="p-color">Attachement</h2>
                        </label>
                        <input id="upload-picture" type="file" className="hide" placeholder="Upload picture" alt="Upload picture" name="Upload picture" required />
                    </label>
                </div>
                <div className="row ml-0 my-2 ">
                    <div className="display-flex mb-3 mr-3">
                        <img src={file} className="document-file-icon mr-1" alt="" />
                        <div className="document-title">
                            <div className="document-title">Document.pdf</div>
                            <div className="document-title-ext">25MB</div>
                        </div>
                    </div>
                    <div className="display-flex mb-3">
                        <img src={file} className="document-file-icon mr-1" alt="" />
                        <div className="document-title">
                            <div className="document-title">Document.pdf</div>
                            <div className="document-title-ext">25MB</div>
                        </div>
                    </div>
                </div>
            </form>
            <h2 className="payment-term-title">Your Offer Options to Client</h2>
            <Tabs className="ticket-tab">
                <TabList className="experts-list">
                    <Tab ></Tab>
                    {/* pay per hour select */}
                    <Tab className="slider-experts pl-0">
                        <div className="all-checkbox">
                            <input type="checkbox" id="hourly" name="" value=""/>
                            <label for="hourly" className="tab-label-ceck">
                                <span>Hourly</span>
                            </label>
                        </div>
                    </Tab>
                    {/* select fix pay*/}
                      <Tab className="slider-experts pl-0">
                      <div className="all-checkbox">
                            <input type="checkbox" id="fixed" name="" value=""/>
                            <label for="fixed"  className="tab-label-ceck">
                                <span>Fixed</span>
                            </label>
                        </div>
                      </Tab>
                    {/* select open pay*/}
                      <Tab className="slider-experts pl-0">
                      <div className="all-checkbox">
                            <input type="checkbox" id="open" name="" value=""/>
                            <label for="open"  className="tab-label-ceck">
                                <span>Open</span>
                            </label>
                        </div>
                      </Tab>
                </TabList>
                <TabPanel></TabPanel>

                <TabPanel>
                {/* pay per hour form */}
                <form className="col-12 col-md-12">
                <h2 class="payment-term-title">Set Rate</h2>
                <div  className="payment-term-vals">
                    <div className="payment-term-val">
                    <h1 className="pay-doller">$</h1><h1 className="pay-doller">$</h1>
                    <input type="text" style={{width:"150px"}} className="input payment-term-input" className="input" />
                    <p>Per hour</p>
                    </div>
                </div>
                <div className="display-flex">
                    <div className="all-checkbox" style={{width: "45px"}}>
                        <input type="checkbox" id="sethour" name="" value=""/>
                        <label for="sethour"  className="tab-label-ceck">
                            <span></span>
                        </label>
                    </div>
                    <p className="mt-2">Customer can change</p>
                </div>
                <h2 class="payment-term-title">Number of Hours </h2>
                <div  className="payment-term-vals">
                    <div className="payment-term-val">
                    <input type="text" style={{width:"150px"}} className="input payment-term-input" className="input" />
                    <p>Hour</p>
                    </div>
                    {/* <p>Enter  number of hours to be hired</p> */}
                </div>
                <div className="display-flex">
                    <div className="all-checkbox" style={{width: "45px"}}>
                        <input type="checkbox" id="sethour" name="" value=""/>
                        <label for="sethour"  className="tab-label-ceck">
                            <span></span>
                        </label>
                    </div>
                    <p className="mt-2">Customer can change</p>
                </div>
                <br/>
                </form>
                <hr/>
                </TabPanel>
                <TabPanel>
                {/* fix payment form */}
                <form className="col-12 col-md-12">
                <h2 class="payment-term-title">Set fix price for the ticket</h2>
                <div  className="payment-term-vals">
                    <div className="payment-term-val">
                    <h1 className="pay-doller">$</h1>
                    <input type="text"  style={{width:"150px"}} className="input payment-term-input" className="input" />
                    </div>
                    {/* <p>Customer can change *add check box before the statement</p> */}
                </div>
                <div className="display-flex">
                    <div className="all-checkbox" style={{width: "45px"}}>
                        <input type="checkbox" id="sethour" name="" value=""/>
                        <label for="sethour"  className="tab-label-ceck">
                            <span></span>
                        </label>
                    </div>
                    <p className="mt-2">Customer can change</p>
                </div>
                <br/>
                </form>
                 <hr/>
                </TabPanel>

                <TabPanel>
                <div className="display-flex">
                    <div className="all-checkbox" style={{width: "45px"}}>
                        <input type="checkbox" id="sethour" name="" value=""/>
                        <label for="sethour"  className="tab-label-ceck">
                            <span></span>
                        </label>
                    </div>
                <h2 class="payment-term-title mt-2">Open price for the ticket</h2>
                </div>
                <hr/>
                
                </TabPanel>
            </Tabs>
            {/* <row className="row" style={{position: "relative"}}>
                <input id="hourly" type="checkbox" name="payment" className="input check-pay-per-hour" />
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <label for="hourly" className="fact---single p-4 mb-sm-60">
                        <h3>Hourly</h3>
                        <p>Pay by agreed hour to expert</p>
                    </label>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <label for="fixed" className="fact---single p-4 mb-sm-60">  
                    <h3>Fixed</h3>
                    <p>Pay by fixed price set for the Ticket</p>
                    </label>
                </div>
                <input id="fixed" type="checkbox" name="payment" className="input check-fix-pay" />
                <form className="col-12 col-md-12 pay-per-hour-form">
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
                <br/>
                </form>
                <form className="col-12 col-md-12 fix-payment-form">
                <h2 class="payment-term-title">Pay fix price for the ticket</h2>
                <div  className="payment-term-vals">
                    <div className="payment-term-val">
                    <h1 className="pay-doller">$</h1>
                    <input type="text"  style={{width:"150px"}} className="input payment-term-input" className="input" />
                    </div>
                    <p>Agree amount with experts</p>
                </div>
                <br/>
                </form>
            </row> */}
            <div className="offer-latter-submit flex-end">
                {/* <p>Save offer letter for future  </p> */}
                <button type="button" className=" d-md-inline button-con mt-4" >
                <span className="mb-0">Send Offer</span></button>
            </div>
        </div>
        );
    }
}

export default OfferLetter;