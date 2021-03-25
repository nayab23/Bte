import React, { Component } from 'react';
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import invoice from '../app_assets/img/Final-ICONS_SVG_12-Invoice.svg';
// import close from '../app_assets/img/close.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from '../app_assets/img/logo.png'
import messageSend from '../app_assets/img/message send.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import del from "../app_assets/img/delete-blue.svg"
import user from '../app_assets/img/client-user.svg';
import attachement from "../app_assets/img/attachement.svg";
import portfolios3 from '../app_assets/img/images/portfolios/3.png';
import portfolios2 from '../app_assets/img/images/portfolios/2.png';
import file from '../app_assets/img/file.svg';
import eye from '../app_assets/img/Final-ICONS_SVG_2-Completed Jobs.svg';
import download from '../app_assets/img/download.svg';

class ChatModal extends Component {
state = {
  modal8: false,
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
        <img onClick={this.toggle(8)} className="icon " src={invoice} />
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>
        <h5 className="applied-modal-heading">Messages</h5>
        </MDBModalHeader>
        <MDBModalBody style={{background: "#f7fafd"}} className="body-scroll">
        <div className="modal-body-content" style={{width: "1040px"}}>
        <div data-test="row" className="row">
          <div data-test="col" className="col">
          <div className=" modal-header-wrapper view-ticket-header">
              <div>
              <p class="">Ticket Title:  Full Stack Developer, Databases, Web Architecture &amp; Storage</p>
              <div class="hire-tickets-list__name">Created at: April 07, 2020</div>
              </div>
              <div className="contract-details">
                <ViewOriginalTicket />
              {/* <div className="check"><div className="inside"></div></div> */}
              </div>
          </div>
          </div>
        </div>
        {/* --------------------- chat Box start --------------------- */}
        <div className="col_lg_12">
        <Tabs>
      <div className="display-flex">
          <div className="col_lg_4">
          {/* ----------------- expert Search bar strat -----------------*/}
              <div className="expert-chat-search-bar">
              <form className="search-wrapper ui">
                  <div className="expert-chat-search-field">
                      <input type="text" name="search_query" placeholder="Search" className="expert-chat--search-field"  />
                      <img src={search} className="expert-chat-search-icon" />
                  </div>
              </form>
              </div>
          {/* ----------------- expert Search bar end -----------------*/}

          {/* ----------------- expert list items strat -----------------*/}
              <div className="expert-chat-list scroll-style">
                  <TabList className="expert-chat-lists">
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-offline"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">David Forest</div>
                              <div className="message-left-preview">Ok</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">10 July, 2020</div>
                              <div className="message-status message-status-online">Seen</div>
                          </div>
                      </Tab>
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-online"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">David Peterson</div>
                              <div className="message-Typing">Typing ......</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">April 7, 2020</div>
                              <div className="message-status">Sending</div>
                          </div>
                      </Tab>
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-offline"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">Sandy Forest</div>
                              <div className="message-left-preview">Hello, how are you ?</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">April 2, 2020</div>
                              <div className="message-status message-status-fail">Faild</div>
                          </div>
                      </Tab>
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-offline"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">Tom petro</div>
                              <div className="message-left-preview">Take care of yourself</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">April 1, 2020</div>
                              <div className="message-status message-status-online">Seen</div>
                          </div>
                      </Tab>
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-online"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">Henry </div>
                              <div className="message-Typing">Typing ......</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">April 2, 2020</div>
                              <div className="recive-message-status">2</div>
                          </div>
                      </Tab>
                      <Tab className="chat-list-item space-between js-tickets-list__item tickets-list__item" >
                          <div className="avator-chat-list display-flex">
                              <div className="avatar">
                                  <img src={user} className="avator-pic" />
                                  <div className="chat-avatar-status status-offline"></div>
                              </div>
                              <div className="chat-list-avator-detail">
                                  <div className="message-left-title">Tom Petrocelli</div>
                              <div className="message-left-preview">Hello</div>
                              </div>
                          </div>
                          <div>
                              <div className="message-left-date">April 8, 2020</div>
                              <div className="message-status message-status-online">Seen</div>
                          </div>
                      </Tab>
                  </TabList>
              </div>
          {/* ----------------- expert list items end -----------------*/}
          </div>
          <div className="col_lg_8">
          {/* ----------------- expert Chat Header strat -----------------*/}
                <div className="expert-chat-header space-between">
              {/* --------- chat avater strat ---------*/}
                    <div className="active-chat-avatar display-flex">
                        <div className="avatar"></div>
                        <div className="avatar-detail">
                            <h3 className="avatar-title">David Forest</h3>
                            <h3 className="avatar-status mb-0">Online</h3>
                        </div>
                    </div>
              {/* --------- chat avater end ---------*/}
              
              {/* --------- chat function icon strat ---------*/}
                    <div className="chat-fun-icon display-flex">
                        <form className="main-search-form mt-0  hide" style={{position: "relative"}}>
                            <img src={search} className="search-icon" />
                            <input  className="search--input"  placeholder="Search" name="search"type="text" />
                        </form>
                        <img src={search} className="expert-chat-icon" />
                        <Link to="/client-dashboard/expert-profile/contract-now" ><img src={hirenow} className="expert-chat-icon" /></Link>
                        <img src={del} className="expert-chat-icon" />
                        <svg width="6" height="24" viewBox="0 0 6 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="3" cy="2.76923" rx="3" ry="2.76923" fill="#4492DA"/>
                            <ellipse cx="3" cy="12" rx="3" ry="2.76923" fill="#4492DA"/>
                            <ellipse cx="3" cy="21.2308" rx="3" ry="2.76923" fill="#4492DA"/>
                        </svg>
                    </div>
              {/* --------- chat function icon strat ---------*/}
                </div>
          {/* ----------------- expert Chat Header strat -----------------*/}
          {/* ----------------- expert Messsage body strat -----------------*/}
              <div className="expert---chats">
                  <TabPanel className="expert-message-body">
                      <div className="chat--Scroll">
                          <div className="mt-30">
                              <div className="justify-center">
                                {/* <hr/> */}
                                  <div className="message-date">10 July, 2020</div>
                              </div>
                              <div className="mt-13">
                              <div className="expert-message-box">
                                  {/* <div className="tip-l-1"><div className="tip-l--1"></div></div> */}
                                  <div className="expert-message">
                                      <p className="mb-0 expert-message-text">Hi I am Josephin<span></span> </p>
                                      <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                  </div>
                              </div>
                              </div>
                              <div className="mt-13">
                                  <div className="expert-message-box-right">
                                      {/* <div className="tip-r-1"><div className="tip-r--1"></div></div> */}
                                      <div className="send-expert-message">
                                          <p className="mb-0 expert-message-text">your personal assistant to help you  </p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                                  <div className="expert-message-box-right">
                                      <div className="send-expert-message second-message-border">
                                          <p className="mb-0 expert-message-text">So how can i  help you sir 😀  </p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-13">
                                  <div className="expert-message-box">
                                      {/* <div className="tip-l-1"><div className="tip-l--1"></div></div> */}
                                      <div className="expert-message">
                                          <p className="mb-0 expert-message-text" style={{paddingBottom: "10px"}}>Josephin, can you help me to find best chat app? </p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-13">
                                  <div className="expert-message-box-right">
                                      {/* <div className="tip-r-1"><div className="tip-r--1"></div></div> */}
                                      <div className="send-expert-message">
                                          <p className="mb-0 expert-message-text">Sure, chitchat is best theme for chating project, you can it checkhere.  </p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                                  <div className="expert-message-box-right">
                                      <div className="send-expert-message second-message-border">
                                          <div className="send-document-message ">
                                              <div className="display-flex">
                                                  <div className="document-title">
                                                      <div className="document-title">Document.pdf</div>
                                                      <div className="document-title-ext">25MB</div>
                                                  </div>
                                                  <img src={file} className="document-file-icon mr-1" alt="" />
                                              </div>
                                              <div className="display-flex ml-3">
                                                  <div className="">
                                                      <img src={eye} className="message-view-img" alt="" /> 
                                                  </div>
                                                  <div className=" mr-3">
                                                      <img src={download} className="message-download-img" alt="" /> 
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-13">
                                  <div className="expert-message-box">
                                      {/* <div className="tip-l-1"><div className="tip-l--1"></div></div> */}
                                      <div className="expert-message">
                                          <p className="mb-0 expert-message-text">I think it's best for my project. </p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                                  <div className="expert-message-box">
                                      <div className="expert-message second-message-border">
                                          <img src={portfolios3} className="in-message-img mr-2" alt="" />
                                          <img src={portfolios2} className="in-message-img" alt="" />
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="mt-13">
                                  <div className="expert-message-box-right"> 
                                      {/* <div className="tip-r-1"><div className="tip-r--1"></div></div> */}
                                      <div className="send-expert-message">
                                          <p className="mb-0 expert-message-text">Ok</p>
                                          <div className="h-71"><p className="mb-0 expert-message-time">12:30 PM </p></div>
                                      </div>
                                  </div>
                              </div>
                              
                          </div>  
                      </div>
                  </TabPanel>
                  {/* <TabPanel className="expert-message-body"></TabPanel> */}
                  <div className="expert-message-field display-flex">
                      <img src={attachement} className="expert-chat-icon mr-0" />
                      <input type="text" placeholder="Type Your Message" style={{width:"85%"}} className="message-send-input"/>
                      <img src={messageSend} className="expert-chat-icon mr-0" />
                  </div>
              </div>
          {/* ----------------- expert Messsage body end -----------------*/}

          </div>
      </div>
      </Tabs>
      {/* ----------------- expert Messsage body end -----------------*/}

                        </div>
        {/* --------------------- chat Box end --------------------- */}
      </div>
       
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ChatModal;