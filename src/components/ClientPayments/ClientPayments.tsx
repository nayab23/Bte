import React from 'react';
import styles from './ClientPayments.module.css';
// import { Tab } from 'semantic-ui-react';
import delwhite from "../app_assets/img/delete-white.svg"
import del from "../app_assets/img/delete-blue.svg"
import paypal from "../app_assets/img/pay-pal.svg";
import debitCard from "../app_assets/img/mc-symbol.svg";
import creditCard from "../app_assets/img/logo-visa.svg";
import visa from "./../app_assets/img/cards.svg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const ClientPayments: React.FC = () => (
  
  <div className="container container-fluid-small">
   <main className="main-content main-content--dashboard">

    <div className="container container-fluid-small">
        <div className="row justify-content-center">
            <div className="col-4 d-none d-lg-block">
                <h2 className="mt-0 mb-0 my-experts-title">
                    My Payments
                </h2>
            </div>

            <div className="col-12 col-lg-8 order-0 search-box-wrapper" style={{position:"relative"}}>
                <form action="https://dev.backtoexperts.com/public/client_dashboard/find_experts" method="post"
                    id="search-box" className="">
                    <input type="hidden" name="_token" value="e3EomWYknbjZtMKGsmrwJYkWQSTfEtVoikUlMWef"/> <label
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
            <Tabs className="payment-tabs">
            <div className="col-12 d-block d-md-none mt-3">
                <label className="input__wrapper input__wrapper input__wrapper--select" id="select-payments-tabs">
                <TabList>
                <MDBDropdown>
                    <MDBDropdownToggle caret color="white" className="ticket-dropdown" style={{display:"flex",padding: "5px 17px",color: "#4492da", fontSize: "16px",borderRadius: "6px"}}>
                        select
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic style={{width:"100%"}}>
                        <Tab>
                            <MDBDropdownItem>All Payments</MDBDropdownItem>
                        </Tab>
                        <Tab>
                            <MDBDropdownItem>Recent</MDBDropdownItem>
                        </Tab>
                        <Tab>
                            <MDBDropdownItem>Closed</MDBDropdownItem>
                        </Tab>
                        <Tab>
                            <MDBDropdownItem>Payment Options</MDBDropdownItem>
                        </Tab>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </TabList>
                </label>
            </div>
            <div className="col-12">
                <div className="tile tile--2 tile--2-custom">
               
                    <TabList className="experts-list">
                        <Tab className="slider-experts" data-tab="online-tab">
                            All Payments
                        </Tab>
                        <Tab className="slider-experts" data-tab="favourite-experts">
                            Recent
                        </Tab>
                        <Tab className="slider-experts" data-tab="favourite-experts">
                            Closed
                        </Tab>
                        <Tab className="slider-experts" data-tab="favourite-experts">
                            Payment Options
                        </Tab>
                    </TabList>
                
                    <TabPanel>
                        <div className="notifications__content justify-content-center">
                            <h2 className="text-align-center mt-5">Not found any payment!</h2>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="notifications__content justify-content-center">
                            <h2 className="text-align-center mt-5">Not found any payment!</h2>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="notifications__content justify-content-center">
                        <h2 className="text-align-center mt-5">Not found any payment!</h2>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <section className="ticket-body wallet-section wallet-section--payment-methods " data-tab="payment-methods">
                              <div className="payment-methods__section">
                                  <p className="payment-methods__add-text">
                                      Add a Payment method so you'll be able to receive your funds from BTE
                                  </p>
                              </div>
  
                              <div className="payment-methods__section payment-methods__section--bordered payment-methods__section--populated" id="pay-pal-method">
                                  <div className="payment-method__item">
                                      <div className="payment-method__img">
                                          <img src={paypal} alt="pay-pal"/>
                                      </div>
                                      <div className="payment-method__card-info">
                                          <div className="payment-method__name d-none d-lg-block">
  
                                          </div>
                                          <div className="payment-method__number">
                                              (Emailaddress@mail.com)
                                          </div>
                                      </div>
                                      <div className="payment-method__buttons">
                                          <a href="#" className="expert-lineitem__action payment-method__remove js-show-modal-store-id" data-modal-id="remove-payment-method">
                                              <img src={del} alt="delete icon" className="hide-hover-mobile-only"/>
                                              <img src={delwhite} alt="delete icon" className="hover-mobile-only"/>
                                              <span className="d-none d-md-inline">Delete</span>
                                          </a>
                                          <button type="button" className="button button--white js-show-modal" data-modal-id="payment-method-card-1-modal">
                                              Details
                                          </button>
                                      </div>
                                  </div>
                              </div>
                              <div className="payment-methods__section payment-methods__section--bordered payment-methods__section--populated" id="master-card-method">
                                  <div className="payment-method__item">
                                      <div className="payment-method__img">
                                          <img src={debitCard} alt="pay-pal" />
                                      </div>
                                      <div className="payment-method__card-info">
                                          <div className="payment-method__name">
                                              Debit card
                                          </div>
                                          <div className="payment-method__number">
                                              (0001)
                                          </div>
                                      </div>
                                      <div className="payment-method__buttons">
                                          <a href="#" className="expert-lineitem__action payment-method__remove js-show-modal-store-id" data-modal-id="remove-payment-method">
                                              <img src={del} alt="delete icon" className="hide-hover-mobile-only" />
                                              <img src={delwhite} alt="delete icon" className="hover-mobile-only" />
                                              <span className="d-none d-md-inline">Delete</span>
                                          </a>
                                          <button type="button" className="button button--white js-show-modal" data-modal-id="payment-method-card-1-modal">
                                              Details
                                          </button>
                                      </div>
                                  </div>
                              </div>
  
                              <div className="payment-methods__section payment-methods__section--populated" id="credit-card-method">
                                  <div className="payment-method__item">
                                      <div className="payment-method__img">
                                          <img src={creditCard} alt="pay-pal" />
                                      </div>
                                      <div className="payment-method__card-info">
                                          <div className="payment-method__name">
                                              Credit card
                                          </div>
                                          <div className="payment-method__number">
                                              (0201)
                                          </div>
                                      </div>
                                      <div className="payment-method__buttons">
                                          <a href="#" className="expert-lineitem__action payment-method__remove js-show-modal-store-id" data-modal-id="remove-payment-method">
                                              <img src={del} alt="delete icon" className="hide-hover-mobile-only" />
                                              <img src={delwhite} alt="delete icon" className="hover-mobile-only" />
                                              <span className="d-none d-md-inline">Delete</span>
                                          </a>
                                          <button type="button" className="button button--white js-show-modal" data-modal-id="payment-method-card-1-modal">
                                              Details
                                          </button>
                                      </div>
                                  </div>
                              </div>
  
                              <div className="payment-methods__section">
                                  <button type="button" className="payment-methods__add js-show-modal" data-modal-id="payment-method-add-modal">
                                      Add Payment method
                                  </button>
                              </div>
                          </section>
                    </TabPanel>
                                                   
{/* <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="flat-tab-bar"/> */}

                </div>
            </div>
            </Tabs>
        </div>
    </div>
    <form id="loginForm" name="loginForm">
        <input type="hidden" id="uuusername" value=""/>
        <input type="hidden" id="uufirstname" value="Mrsec"/>
        <input type="hidden" id="uulastname" value="Asif"/>
        <input type="hidden" id="uuemail" value="seasif2024@gmail.com"/>
        <input type="hidden" id="uuid" value="97"/>
    </form>

        <AddPaymentMethod />

</main>
  </div>

);

export default ClientPayments;
