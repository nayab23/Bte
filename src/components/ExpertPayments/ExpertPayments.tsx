import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import delwhite from "../app_assets/img/delete-white.svg"
import del from "../app_assets/img/delete-blue.svg"
import paypal from "../app_assets/img/pay-pal.svg";
import visa from "../app_assets/img/cards.svg";
import debitCard from "../app_assets/img/mc-symbol.svg";
import creditCard from "../app_assets/img/logo-visa.svg";
import { Tab } from 'semantic-ui-react';

const panes = [
    {
      menuItem: 'Get Paid',
      render: () => <Tab.Pane attached={false}>
       <section className="ticket-body wallet-section" data-tab="get-paid">
                            <h2 className="wallet__title">
                                Your BTE summary balance <span className="d-none d-md-inline-block wallet__amount"> $300</span>
                            </h2>
                            <p className="wallet__subtitle">
                                All your paid work will be displayed here
                            </p>
			    <p className="d-none wallet__amount_get">300</p>
                            <h2 className="d-block d-md-none"><span className="wallet__amount"> $300</span></h2>

                            <button type="button" className="button max-160 wallet__button js-show-modal" data-modal-id="get-paid-now"> 
                                Pay me now
                            </button>

                            <p className="wallet__info">
                                Add a Payment method so you'll be able to receive your funds from BTE
                            </p>

                            <a href="#" className="wallet__add-cta  js-show-modal" data-modal-id="payment-method-add-modal">
                            + Add Payment method
                            </a>
                        </section>
                </Tab.Pane>,
    },
    {
      menuItem: 'In progress',
      render: () => <Tab.Pane attached={false}>
                    
                    <section className="ticket-body wallet-section wallet-section--progress" data-tab="in-progress">
                                <ul className="wallet-tickets">
                                <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Oct 22, 2019 Test  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $699
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $277
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							3/25 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $6925
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">241020190425 Test new  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $1635
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $89
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							18/15 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $1335
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Test - Database expert 3  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $200
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $199
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							1/25 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $4975
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Test 0002  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $9
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $225
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Test 0007  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $1049
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $5
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							210/10 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $50
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Project 03  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $303
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $0
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">Project 04  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $33746
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $304
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							111/ hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $0
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">December 8 test - Direct assign  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $0
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Abdullah Ahmad</h3>
                                                    <p className="line-2 line-1-mobile">Jan 9 Ticket Test  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
														                                                        $340
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $23
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
														 							15/15 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $345
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Steven Universe</h3>
                                                    <p className="line-2 line-1-mobile">Pluggin developer  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $55
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $825
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Steven Universe</h3>
                                                    <p className="line-2 line-1-mobile">Home Test - Web Development - HTML/CSS/JS/PHP  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $100
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $2000
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Naeem Qamar</h3>
                                                    <p className="line-2 line-1-mobile">I am looking for new ticket testing  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $33
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $330
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Abdullah Ahmad</h3>
                                                    <p className="line-2 line-1-mobile">Confirmation Page Test  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $100
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $1000
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="payment-lineitem wallet-ticket">
                                                <div className="payment-lineitem__img">
                                                    {/* <!-- <img src="" alt=""> --> */}
                                                </div>
                                                <div className="payment-lineitem__info">
                                                    <h3>Abdullah Ahmad</h3>
                                                    <p className="line-2 line-1-mobile">Configure eDMS and upload files are having an error  </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					$0
							                                                    </p>
                                                </div>
                                                <div className="notifications__estimate  d-none d-md-flex">
                                                    <p className="estimate__title">
                                                            Hourly rate
                                                    </p>
                                                    <p className="estimate__value">
                                                            $150
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-none d-lg-flex">
                                                    <p className="estimate__title">
                                                            Hour Deposit
                                                    </p>
                                                    <p className="estimate__value">
																					0 hours
							
                                                    
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate d-flex">
                                                    <p className="estimate__title  order-1 order-md-1">
                                                            Current
                                                    </p>
                                                    <p className="estimate__value  order-0 order-md-1">
                                                            $150
                                                    </p>
                                                </div>
                                                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                                                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                                                        Details
                                                    </button>
                                                </div>
                                            </a>
                                        </li>
 		                        </ul>
                        </section>

                    </Tab.Pane>,
    },
    {
      menuItem: 'Payment history',
      render: () => <Tab.Pane attached={false}>
                    
                    <section className="ticket-body wallet-section wallet-section--progress" data-tab="payment-history">
                                <ul className="wallet-tickets">

             	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Welcome Back </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $200
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $22
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							9/25 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $22
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Tell us what's type of job you need to get done 02 </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $300
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $6
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							50/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $300
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Project 05 </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $15
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $5
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							3/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $5
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Test ticket - standard hiring process _ hourly </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $100
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $10
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							10/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $10
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Abdullah Ahmad</h3>
                    <p className="line-2 line-1-mobile">Live Log Active Tickets </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $300
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $7
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							43/15 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $300
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">A framework for ambitious web developers. </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $300
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $15
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							20/ hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $300
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Abdullah Ahmad</h3>
                    <p className="line-2 line-1-mobile">12 Jan Invite to Ticket test </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $330
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $22
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							15/15 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $22
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Abdullah Ahmad</h3>
                    <p className="line-2 line-1-mobile">12 Jan Test </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $50
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $50
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							1/ hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $50
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Abdullah Ahmad</h3>
                    <p className="line-2 line-1-mobile">14 Jan Ticket process test </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $25
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $25
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							1/1 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $25
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Email sending test 03 </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $400
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $100
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							4/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $40
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>amazing client</h3>
                    <p className="line-2 line-1-mobile">testing again at </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $200
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $50
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							4/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $20
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Test Feb 4 </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $200
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $100
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							2/20 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $10
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	   <li>
            <a href="#" className="payment-lineitem wallet-ticket">
                <div className="payment-lineitem__img">
                    {/* <!-- <img src="" alt=""> --> */}
                </div>
                <div className="payment-lineitem__info">
                    <h3>Naeem Qamar</h3>
                    <p className="line-2 line-1-mobile">Testing of wrong values </p>
                </div>
                <div className="notifications__estimate  d-none d-lg-flex">
                    <p className="estimate__title">
                            Deposit
                    </p>
                    <p className="estimate__value">
                          							                                                        $200
							                    </p>
                </div>
                <div className="notifications__estimate  d-none d-md-flex">
                    <p className="estimate__title">
                            Hourly rate
                    </p>
                    <p className="estimate__value">
                          $100
                    </p>
                </div>
                <div className="notifications__estimate d-none d-lg-flex">
                    <p className="estimate__title">
                            Hour Deposit
                    </p>
                    <p className="estimate__value">
                          							 							2/10 hours
							                    </p>
                </div>
                <div className="notifications__estimate d-flex">
                    <p className="estimate__title  order-1 order-md-1">
                            Current
                    </p>
                    <p className="estimate__value  order-0 order-md-1">
                         $20
                    </p>
                </div>
                <div className="notifications__estimate notifications__estimate--center d-none d-md-block">
                    <button type="button" className="button--no-style notifications__link payment-lineitem__cta">
                        Details
                    </button>
                </div>
            </a>
        </li>

	    	                
         </ul>
 </section>

                    </Tab.Pane>,
    },
    {
      menuItem: 'Payment methods',
      render: () => <Tab.Pane attached={false}>
      
      
 <section className="ticket-body wallet-section wallet-section--progress" data-tab="payment-withdrawal">
    <div className="payment-methods__section">
      <p className="payment-methods__add-text">
       Withdrawal Reports
           </p>
         </div>

<table className="payment-methods__table" style={{textAlign:"center"}} width="100%">
<thead>
<tr><th>#</th><th>Total Amount</th><th>Service Fee</th><th>Withdrawal</th><th>Date</th><th>Report</th></tr>
</thead>
<tbody>
<tr style={{textAlign:"center"}}>
<td>#517984023</td>
<td>39164 USD</td>
<td>10%</td>
<td>35247.6 USD</td>
<td>February 4, 2020</td> 
<td> <button type="button" className="button button--white" id="4" 
// onClick="downloadpdf(id)"
> Download Pdf</button>
</td>
</tr>
</tbody>
</table>

<table className="payment-methods__table" style={{textAlign:"center"}} width="100%">
<thead>
<tr><th>#</th><th>Total Amount</th><th>Service Fee</th><th>Withdrawal</th><th>Date</th><th>Report</th></tr>
</thead>
<tbody>
<tr style={{textAlign:"center"}}>
<td>#840729653</td>
<td>625 USD</td>
<td>10%</td>
<td>562.5 USD</td>
<td>February 10, 2020</td> 
<td> <button type="button" className="button button--white" id="5" 
// onclick="downloadpdf(id)"
> Download Pdf</button>
</td>
</tr>
</tbody>
</table>

<table className="payment-methods__table" style={{textAlign:"center"}} width="100%">
<thead>
<tr><th>#</th><th>Total Amount</th><th>Service Fee</th><th>Withdrawal</th><th>Date</th><th>Report</th></tr>
</thead>
<tbody>
<tr style={{textAlign:"center"}}>
<td>#976034512</td>
<td>200 USD</td>
<td>10%</td>
<td>180 USD</td>
<td>July 8, 2020</td> 
<td> <button type="button" className="button button--white" id="7" 
// onclick="downloadpdf(id)"
> Download Pdf</button>
</td>
</tr>
</tbody>
</table>

</section>
      </Tab.Pane>,
    },
    {
      menuItem: 'Payment withdrawal',
      render: () => <Tab.Pane attached={false}>
      
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
      
      </Tab.Pane>,
    },
  ]

const ExpertPayments: React.FC = () => (
  <div>
    <main className="main-content main-content--dashboard">
        <div className="container container-fluid-small">
            <div className="row justify-content-center">

                <div className="col-12 col-lg-4 order-1 d-md-block">
                    <h2 className="mt-0 mb-0 my-experts-title">
                        My Wallet
                    </h2>
                </div>
                <div className="col-12 d-block d-md-none order-1">
                    <label className="input__wrapper mt-4 mb-3" id="select-tickets-tabs">
                        <div className="ui dropdown dropdown-2 selection" tabIndex={0}><select name="Ticket-status">
                            <option value="get-paid" selected >Get paid</option>
                            <option value="in-progress">In progress</option>
                            <option value="payment-history">Payment History</option>
                            <option value="payment-methods">Payment Methods</option>
                        </select><i className="dropdown icon"></i><div className="text">Get paid</div><div className="menu" tabIndex={-1}><div className="item active selected" data-value="get-paid">Get paid</div><div className="item" data-value="in-progress">In progress</div><div className="item" data-value="payment-history">Payment History</div><div className="item" data-value="payment-methods">Payment Methods</div></div></div>
                    </label>
                </div>
                <div className="col-12 col-lg-8 order-0 order-lg-1">
                    <div className="search-box-wrapper" style={{position: "relative"}}>
                        <form action="#" method="post" id="search-box" className="">
				<input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />                            <label className="input__wrapper input__wrapper--search">
                                <input type="text" className="input input-seach" placeholder="Search a Ticket" name="search_ticket"/>
                                <button type="submit" className="button button--no-style">
                                    <i className="search-icon-blue"></i>
                                </button>
                            </label>
                        </form>
                        <a href="#" type="button" className="button post-a-ticket-cta button--square filters-cta">
                            <span className="d-flex">
                                <img src={menu} alt="menu"/>
                            </span>
                        </a>
                    </div>
                </div>








                <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet">


                        {/* <div className="ticket-header">
                            <ul className="ticket-header__list">
                                <li className="d-block d-md-none">
                                    <button className="button button--no-style mobile-section-title__back-button">
                                        <i className="back-blue-icon"></i>
                                    </button>
                                </li>
                                <li className="ticket-header__list-item d-none d-md-block ticket-header__list-item--active" data-tab="get-paid">
                                    <a href="#">
                                        Get Paid
                                    </a>
                                </li>
                                <li className="ticket-header__list-item d-none d-md-block" data-tab="in-progress">
                                    <a href="#">
                                        In progress
                                    </a>
                                </li>
                                <li className="ticket-header__list-item d-none d-md-block" data-tab="payment-history">
                                    <a href="#">
                                        Payment history
                                    </a>
                                </li>
                                <li className="ticket-header__list-item d-none d-md-block" data-tab="payment-methods">
                                    <a href="#">
                                        Payment methods
                                    </a>
                                </li>
                                	<li className="ticket-header__list-item d-none d-md-block" data-tab="payment-withdrawal">
                                    <a href="#">
                                        Payment withdrawal
                                    </a>
                                </li>

                                <li className="active-indicator d-none d-md-block" style={{width: "111px", left: "0px"}}></li>
                                <li className="d-block d-md-none"><div className="mobile-section-title__name">
                                        My Wallet
                                    </div>
                                </li>
                            </ul>
                        </div> */}

                                                <div className="filters-wrapper">
                            <form action="#" className="filters-wrapper-content">

                                <div className="filter-section-1 order-0 order-md-0">
                                    <div className="filters-checks">

                                        <h3 className="filter__section-label">
                                            Tickets
                                        </h3>

                                        <label className="checkbox__wrapper checkbox__wrapper--2">
                                            <input type="checkbox" className="checkbox checkbox--2" />
                                            <div className="checkbox__label">
                                                All
                                            </div>
                                        </label>

                                        <label className="checkbox__wrapper checkbox__wrapper--2 ">
                                            <input type="checkbox" className="checkbox checkbox--2" />
                                            <div className="checkbox__label">
                                                Directly assigned to me
                                            </div>
                                        </label>

                                    </div>
                                    <div className="filters-checks">

                                        <h3 className="filter__section-label">
                                            Clients
                                        </h3>

                                        <label className="checkbox__wrapper checkbox__wrapper--2 ">
                                            <input type="checkbox" className="checkbox checkbox--2" />
                                            <div className="checkbox__label">
                                                All
                                            </div>
                                        </label>

                                        <label className="checkbox__wrapper checkbox__wrapper--2 ">
                                            <input type="checkbox" className="checkbox checkbox--2" />
                                            <div className="checkbox__label">
                                                Previous clients
                                            </div>
                                        </label>

                                    </div>
                                </div>

                                <div className="filter-section-2 order-0 order-md-0">
                                    <div className="filters-checks">

                                        <h3 className="filter__section-label">
                                            Select pool (select max 3)
                                        </h3>
                                        <label className="input__wrapper  mb-4">
                                            <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="category" id="category-select" multiple>
                                                <option value="" selected  disabled >Please select..</option>
                                                <option value="Database">Database</option>
                                                <option value="Security">Security</option>
                                                <option value="CloudServer">Cloud Server</option>
                                                <option value="Server">Server</option>
                                            </select><i className="dropdown icon"></i><div className="default text">Please select..</div><div className="menu" tabIndex={-1}><div className="item" data-value="Database">Database</div><div className="item" data-value="Security">Security</div><div className="item" data-value="CloudServer">Cloud Server</div><div className="item" data-value="Server">Server</div></div></div>
                                        </label>


                                    </div>
                                    <div className="filters-checks">

                                        <h3 className="filter__section-label">
                                            Languages
                                        </h3>
                                        <label className="input__wrapper  mb-4">
                                            <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="lang" id="lang-select" multiple>
                                                <option value="" selected  disabled >Please select..</option>
                                                <option value="russian">Russian</option>
                                                <option value="english">English</option>
                                                <option value="design">Arabic</option>
                                            </select><i className="dropdown icon"></i><div className="default text">Please select..</div><div className="menu" tabIndex={-1}><div className="item" data-value="russian">Russian</div><div className="item" data-value="english">English</div><div className="item" data-value="design">Arabic</div></div></div>
                                            <p className="input__notification">Category is required</p>
                                        </label>


                                    </div>

                                </div>


                                <div className="filter-section-1 filter-section-3 order-1 order-md-1 order-lg-0">
                                    <div className="filters-checks">

                                        <h3 className="filter__section-label">
                                            Skills (type max 10)
                                        </h3>
                                        <label className="input__wrapper  mb-4 mb-md-5">
                                            <div 
                                            // name="Skills"
                                             className="ui selection search dropdown multiple max-10" id="skills-select">
                                                <input type="hidden" name="skills" multiple />
                                                <input className="search" autoComplete="off" tabIndex={0}/><span className="sizer"></span><div className="default text">Select..</div>
                                                <i className="dropdown icon" tabIndex={0}><div className="menu" tabIndex={-1}></div></i>
                                                <div className="menu menu--with-sub-items" tabIndex={-1}>
                                                    <div className="item" data-category="Database" data-value="Delphi">Delphi</div>
                                                    <div className="item" data-category="Database" data-value="MySQL">MySQL</div>

                                                    <div className="item" data-category="Database" data-value="Oracle">Oracle</div>
                                                    <div className="item sub-item" data-category="Database" data-value="Oracle-MySQL">Data Protection</div>

                                                    <div className="item" data-category="Database" data-value="Microsoft">Microsoft</div>
                                                    <div className="item sub-item" data-category="Database" data-value="Microsoft-PostgreSQL">SQL 2016</div>
                                                    <div className="item sub-item" data-category="Database" data-value="Microsoft-DB-Manager">DataBase Manager</div>

                                                    <div className="item" data-category="CloudServer" data-value="AWS">AWS (Amazon Web Services)</div>
                                                    <div className="item sub-item" data-category="CloudServer" data-value="ServerManagement">Server Management</div>
                                                </div>
                                            </div>
                                            <p className="input__notification">Category is required</p>
                                        </label>
                                    </div>
                                </div>


                                <div className="filter-section-2 filter-section-4 order-0 order-md-0">
                                    <div className="filters-checks">

                                            <h3 className="filter__section-label">
                                                Country
                                            </h3>
                                            <label className="input__wrapper  mb-4">
                                                <div className="ui selection dropdown" tabIndex={0}><select name="lang" id="lang-select">
                                                    <option value="" selected  disabled >Please select..</option>
                                                    <option value="USA">USA</option>
                                                    <option value="France">France</option>
                                                    <option value="SaudiArabia">Saudi Arabia</option>
                                                </select><i className="dropdown icon"></i><div className="default text">Please select..</div><div className="menu" tabIndex={-1}><div className="item" data-value="USA">USA</div><div className="item" data-value="France">France</div><div className="item" data-value="SaudiArabia">Saudi Arabia</div></div></div>
                                                <p className="input__notification">Category is required</p>
                                            </label>

                                    </div>
                                    <div className="filters-checks">

                                            <h3 className="filter__section-label">
                                                City
                                            </h3>
                                            <label className="input__wrapper  mb-4">
                                                <div className="ui selection dropdown" tabIndex={0}><select name="lang" id="lang-select">
                                                    <option value="" selected  disabled >Please select..</option>
                                                    <option value="NewYork">New York</option>
                                                    <option value="Boston">Boston</option>
                                                    <option value="Paris">Paris</option>
                                                    <option value="Dubai">Dubai</option>
                                                </select><i className="dropdown icon"></i><div className="default text">Please select..</div><div className="menu" tabIndex={-1}><div className="item" data-value="NewYork">New York</div><div className="item" data-value="Boston">Boston</div><div className="item" data-value="Paris">Paris</div><div className="item" data-value="Dubai">Dubai</div></div></div>
                                                <p className="input__notification">Category is required</p>
                                            </label>


                                    </div>
                                </div>

                                <div className="payment-buttons width-100 order-1">
                                    <button type="button" className="button max-160">
                                        Search
                                    </button>

                                    <button className="button button--no-style link js-search-clear">
                                        Clear All
                                    </button>
                                </div>
                            </form>

                        </div>
		
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="flat-tab-bar"/>

                    </div>
                </div>
            </div>
        </div>


        {/* <!-- [Structure] Chose payment method modal START --> */}
        <div className="ui modal payment-method-add-modal" id="payment-method-add-modal">
            <div className="content">
                <div className="payment-method-add-modal__title">
                    Add Payment Method
                </div>

                <div className="payment-method-add-modal__item">
                    <img src={paypal} alt="paypal"
                        className="payment-method-add-modal__img"/>
                    <span className="payment-method-add-modal__name">Paypal</span>
                    <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                        data-modal-id="payment-method-paypal-modal">
                        Select
                    </button>
                </div>
                <div className="payment-method-add-modal__item">
                    <img src={visa} alt="mastercard / visa"
                        className="payment-method-add-modal__img"/>
                    <span className="payment-method-add-modal__name">Credit or Debit Card</span>
                    <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                        data-modal-id="payment-method-card-1-modal">
                        Select
                    </button>
                </div>
                <button type="button"
                    className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/*
        <!-- [Structure] Chose get paid modal START --> */}

<div className="ui modal ticket-posted-modal" id="get-paid-now">
<div className="content">
            <div className="ticket-posted-modal__title ticket-posted-modal__title--wider">
                In order to get paid you need to add a payment method
            </div>

            <div className="ticket-posted-modal__subtitle">
                Your earned funds will be on BTE website
                until you add a Payment method
                </div>
            <button type="button" className="button js-show-modal" data-modal-id="payment-method-add-modal">
                Add payment method
            </button>
        </div>
        </div>
        {/*
        <!-- [Structure] Paypal modal START --> */}
        <div className="ui modal payment-method-paypal-modal" id="payment-method-paypal-modal">
            <div className="content">
                <div className="payment-method-add-modal__title">
                    Pay with Pay-Pal
                </div>

                <div className="payment-method-add-modal__item">
                    <img src={paypal} alt="paypal"
                        className="payment-method-add-modal__img"/>
                    <span className="payment-method-add-modal__name">Paypal</span>
                    <button className="payment-method-add-modal__select-cta button button--white max-90">Pay</button>
                </div>
                <button type="button"
                    className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/*
        <!-- [Structure] Paypal modal END --> */}

        {/*
        <!-- [Structure] Card modal START --> */}
        <div className="ui modal payment-method-paypal-modal" id="payment-method-card-1-modal">
            <div className="content">
                <div className="payment-method-add-modal__title">
                    Card Information
                </div>

                <div className="payment-method-add-modal__item payment-method-add-modal__item--only">
                    <img src={visa} alt="paypal" className="payment-method-add-modal__img"/>
                    <span className="payment-method-add-modal__name">Credit or Debit Card</span>
                </div>


                <h2 className="post-ticket__input-title">Card Number</h2>
                <label className="input__wrapper  mb-4">
                    <input type="text" className="input" placeholder="0000 0000 0000 0000" name="card-number"
                        required/>
                    <p className="input__notification">Proffesion title is required</p>
                    <span className="input__wrapper--cc d-none d-md-block"></span>
                </label>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">First Name</h2>
                        <label className="input__wrapper  mb-4">
                            <input type="text" className="input" placeholder="First Name" name="first-name" required/>
                            <p className="input__notification">First Name is required</p>
                        </label>
                    </div>

                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">Last Name</h2>
                        <label className="input__wrapper  mb-4">
                            <input type="text" className="input" placeholder="Last Name" name="last-name" required/>
                            <p className="input__notification">Last Name is required</p>
                        </label>
                    </div>

                </div>

                <div className="row">
                    <div className="col-6 col-md-3">
                        <h2 className="post-ticket__input-title">
                            Expiry Date
                        </h2>
                        <label className="input__wrapper  mb-4 mb-md-5">
                            <div className="ui dropdown selection"><select name="exp-date-1" id="exp-date-1-select"
                                    required>
                                    <option value="" selected={true} disabled={true}>MM</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select><i className="dropdown icon"></i>
                                <div className="default text">MM</div>
                                <div className="menu">
                                    <div className="item" data-value="01">01</div>
                                    <div className="item" data-value="02">02</div>
                                    <div className="item" data-value="03">03</div>
                                    <div className="item" data-value="04">04</div>
                                    <div className="item" data-value="05">05</div>
                                    <div className="item" data-value="06">06</div>
                                    <div className="item" data-value="07">07</div>
                                    <div className="item" data-value="08">08</div>
                                    <div className="item" data-value="09">09</div>
                                    <div className="item" data-value="10">10</div>
                                    <div className="item" data-value="11">11</div>
                                    <div className="item" data-value="12">12</div>
                                </div>
                            </div>
                            <p className="input__notification">Expiry Date is required</p>
                        </label>
                    </div>
                    <div className="col-6 col-md-3">
                        <h2 className="post-ticket__input-title">
                            Expiry Date
                        </h2>
                        <label className="input__wrapper  mb-4 mb-md-5">
                            <div className="ui dropdown selection"><select name="exp-date-2" id="exp-date-2-select"
                                    required>
                                    <option value="" selected={true} disabled={true}>YYYY</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select><i className="dropdown icon"></i>
                                <div className="default text">YYYY</div>
                                <div className="menu">
                                    <div className="item" data-value="2019">2019</div>
                                    <div className="item" data-value="2020">2020</div>
                                    <div className="item" data-value="2021">2021</div>
                                    <div className="item" data-value="2022">2022</div>
                                    <div className="item" data-value="2023">2023</div>
                                    <div className="item" data-value="2024">2024</div>
                                    <div className="item" data-value="2025">2025</div>
                                    <div className="item" data-value="2026">2026</div>
                                    <div className="item" data-value="2027">2027</div>
                                    <div className="item" data-value="2028">2028</div>
                                    <div className="item" data-value="2029">2029</div>
                                    <div className="item" data-value="2030">2030</div>
                                </div>
                            </div>
                            <p className="input__notification">Expiry Date is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">CVV Code</h2>
                        <label className="input__wrapper  mb-4">
                            <input type="text" className="input" placeholder="123" name="cvv-number" required/>
                            <p className="input__notification">CVV Code is required</p>
                        </label>
                    </div>
                </div>

                <div className="payment-buttons">
                    <button type="button" className="button max-160 js-show-modal"
                        data-modal-id="payment-method-card-2-modal">
                        Next
                    </button>

                    <button className="button button--no-style link js-show-modal"
                        data-modal-id="payment-method-add-modal">
                        Return
                    </button>
                </div>

                <button type="button"
                    className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/*
        <!-- [Structure] Card modal END --> */}
        {/*
        <!-- [Structure] Card modal 2 START --> */}
        <div className="ui modal payment-method-paypal-modal" id="payment-method-card-2-modal">
            <div className="content">
                <div className="payment-method-add-modal__title mb-5">
                    Payment Address
                </div>


                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">
                            Country
                        </h2>
                        <label className="input__wrapper  mb-4">
                            <div className="ui dropdown selection"><select name="exp-date-2" id="exp-date-2-select"
                                    required>
                                    <option value="" selected={true} disabled={true}>Select country..</option>
                                    <option value="USA">USA</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="SaudiArabia">Suadi Arabia</option>
                                </select><i className="dropdown icon"></i>
                                <div className="default text">Select country..</div>
                                <div className="menu">
                                    <div className="item" data-value="USA">USA</div>
                                    <div className="item" data-value="Ukraine">Ukraine</div>
                                    <div className="item" data-value="SaudiArabia">Suadi Arabia</div>
                                </div>
                            </div>
                            <p className="input__notification">Expiry Date is required</p>
                        </label>
                    </div>
                </div>


                <h2 className="post-ticket__input-title">Address</h2>
                <label className="input__wrapper  mb-2">
                    <input type="text" className="input" placeholder="" name="address-1" required/>
                    <p className="input__notification">Address is required</p>
                </label>

                <label className="input__wrapper  mb-4">
                    <input type="text" className="input" placeholder="" name="address-2"/>
                </label>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">City</h2>
                        <label className="input__wrapper  mb-4">
                            <input type="text" className="input" placeholder="" name="city" required/>
                            <p className="input__notification">City is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">State</h2>
                        <label className="input__wrapper  mb-4">
                            <input type="text" className="input" placeholder="" name="state" required/>
                            <p className="input__notification">State is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="post-ticket__input-title">ZIP Code</h2>
                        <label className="input__wrapper  mb-5">
                            <input type="text" className="input" placeholder="" name="zip-number" required/>
                            <p className="input__notification">ZIP Code is required</p>
                        </label>
                    </div>
                </div>

                <div className="payment-buttons">
                    <button type="button" className="button max-160 js-show-modal" 
                    data-modal-id="payment-method-added">
                        Next
                    </button>

                    <button className="button button--no-style link js-show-modal"
                        data-modal-id="payment-method-card-1-modal">
                        Return
                    </button>
                </div>

                <button type="button"
                    className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/* <!-- [Structure] Card modal 2 END --> */}
{/* <!-- [Structure] Payment method was added modal START --> */}
            <div className="ui modal ticket-posted-modal" id="payment-method-added">
                <div className="content">
                    <div className="ticket-posted-modal__title">
                        Greate, you've added a Payment Method!
                    </div>

                    <div className="ticket-posted-modal__subtitle">
                        Now you're able to Post Tickets, Start Contracts and pay for the work done by Experts
                    </div>
                    <button type="button" className="button js-modal-close">
                        Got it
                    </button>
                </div>
            </div>
            {/* <!-- [Structure] Payment method was added modal START END--> */}
        {/* <!-- [Structure] Chose payment method modal START --> */}
        <div className="ui modal decline-expert-modal" id="decline-expert-modal">
            <div className="content">
                <div className="decline-expert-modal__title">
                    Decline expert
                </div>
                <p className="decline-expert-modal__subtitle">Are you sure you want to decline this Expert?</p>
                <label className="checkbox__wrapper checkbox__wrapper--2">
                    <input type="checkbox" className="checkbox checkbox--2"/>
                    <div className="checkbox__label">
                        Don't show this again
                    </div>
                </label>
                <input type="hidden" id="expuser"/>
                <input type="hidden" id="tkid"/>
                <div className="decline-expert-modal__buttons">
                    {/*
                    <!-- popup emulation button --> */}
                    <button type="button" className="button button--post js-modal-close"
                        >Archive</button>
                    {/*
                    <!-- popup emulation button --> */}

                    <button type="button" className="button button--no-style post-ticket__discard js-modal-close"
                       >Decline</button>
                </div>
                <button type="button"
                    className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/* {/*<!-- [Structure] Chose payment method modal START --> */}
        {/* <!---EndModel---> */} 


    </main>
</div>
);

export default ExpertPayments;
