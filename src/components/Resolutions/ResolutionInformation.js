import React, { Component } from 'react';

class ResolutionInformation extends Component {
    render() {
        return (
            <div>
            <main className="main-content main-content--dashboard">
              <div className="container container-fluid-small">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet">
                      <div className="ticket-header">
                        <h2 className="resolutions__title">
                          Resolution information
                        </h2>
                      </div>
          
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
                                <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="category"
                                    id="category-select" multiple>
                                    <option value="" selected disabled>Please select..</option>
                                    <option value="Database">Database</option>
                                    <option value="Security">Security</option>
                                    <option value="CloudServer">Cloud Server</option>
                                    <option value="Server">Server</option>
                                  </select><i className="dropdown icon"></i>
                                  <div className="default text">Please select..</div>
                                  <div className="menu" tabIndex={-1}>
                                    <div className="item" data-value="Database">Database</div>
                                    <div className="item" data-value="Security">Security</div>
                                    <div className="item" data-value="CloudServer">Cloud Server</div>
                                    <div className="item" data-value="Server">Server</div>
                                  </div>
                                </div>
                              </label>
          
          
                            </div>
                            <div className="filters-checks">
          
                              <h3 className="filter__section-label">
                                Languages
                              </h3>
                              <label className="input__wrapper  mb-4">
                                <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="lang"
                                    id="lang-select" multiple>
                                    <option value="" selected disabled>Please select..</option>
                                    <option value="russian">Russian</option>
                                    <option value="english">English</option>
                                    <option value="design">Arabic</option>
                                  </select><i className="dropdown icon"></i>
                                  <div className="default text">Please select..</div>
                                  <div className="menu" tabIndex={-1}>
                                    <div className="item" data-value="russian">Russian</div>
                                    <div className="item" data-value="english">English</div>
                                    <div className="item" data-value="design">Arabic</div>
                                  </div>
                                </div>
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
                                <div className="ui selection search dropdown multiple max-10" id="skills-select">
                                  <input type="hidden" name="skills" multiple />
                                  <input className="search" autoComplete="off" tabIndex={0} /><span className="sizer"></span>
                                  <div className="default text">Select..</div>
                                  <i className="dropdown icon" tabIndex={0}>
                                    <div className="menu" tabIndex={-1}></div>
                                  </i>
                                  <div className="menu menu--with-sub-items" tabIndex={-1}>
                                    <div className="item" data-category="Database" data-value="Delphi">Delphi</div>
                                    <div className="item" data-category="Database" data-value="MySQL">MySQL</div>
          
                                    <div className="item" data-category="Database" data-value="Oracle">Oracle</div>
                                    <div className="item sub-item" data-category="Database" data-value="Oracle-MySQL">Data
                                      Protection</div>
          
                                    <div className="item" data-category="Database" data-value="Microsoft">Microsoft</div>
                                    <div className="item sub-item" data-category="Database" data-value="Microsoft-PostgreSQL">SQL
                                      2016</div>
                                    <div className="item sub-item" data-category="Database" data-value="Microsoft-DB-Manager">
                                      DataBase Manager</div>
          
                                    <div className="item" data-category="CloudServer" data-value="AWS">AWS (Amazon Web Services)
                                    </div>
                                    <div className="item sub-item" data-category="CloudServer" data-value="ServerManagement">
                                      Server Management</div>
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
                                    <option value="" selected disabled>Please select..</option>
                                    <option value="USA">USA</option>
                                    <option value="France">France</option>
                                    <option value="SaudiArabia">Saudi Arabia</option>
                                  </select><i className="dropdown icon"></i>
                                  <div className="default text">Please select..</div>
                                  <div className="menu" tabIndex={-1}>
                                    <div className="item" data-value="USA">USA</div>
                                    <div className="item" data-value="France">France</div>
                                    <div className="item" data-value="SaudiArabia">Saudi Arabia</div>
                                  </div>
                                </div>
                                <p className="input__notification">Category is required</p>
                              </label>
          
                            </div>
                            <div className="filters-checks">
          
                              <h3 className="filter__section-label">
                                City
                              </h3>
                              <label className="input__wrapper  mb-4">
                                <div className="ui selection dropdown" tabIndex={0}><select name="lang" id="lang-select">
                                    <option value="" selected disabled>Please select..</option>
                                    <option value="NewYork">New York</option>
                                    <option value="Boston">Boston</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Dubai">Dubai</option>
                                  </select><i className="dropdown icon"></i>
                                  <div className="default text">Please select..</div>
                                  <div className="menu" tabIndex={-1}>
                                    <div className="item" data-value="NewYork">New York</div>
                                    <div className="item" data-value="Boston">Boston</div>
                                    <div className="item" data-value="Paris">Paris</div>
                                    <div className="item" data-value="Dubai">Dubai</div>
                                  </div>
                                </div>
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
          
                      <section className="add-resolutions" data-tab="get-paid">
                        <div className="row justify-content-center">
          
          
                          <div className="col-12">
          
                            <div className="add-resolutions__section">
          
          
                              <h2>Testing of wrong values</h2>
                              <div className="my-resolutions__category">
                                Category: <span>Database</span>
                              </div>
                              <div className="my-resolutions__category">
                                Vendor: <span>Delphi </span>
                              </div>
          
                              <p><b>Project description</b></p>
                              <p> Testing wrong values display on client side for hourly rate</p>
          
                            </div>
          
                            <div
                              className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0 pt-0">
                              <div className="col-12 col-md-6 col-lg-7 order-0 order-md-1">
                                <h2 className="post-ticket__input-title mt-5">Testing of wrong values</h2>
          
                                <label className="input__wrapper mt-4 mb-2">
                                  <div className="cover-image cover-image--primary cover-image--md-6">
          
                                    <img src="/app_assets/img/photo-camera-1.svg" alt="" />
          
                                  </div>
                                </label>
          
                                <p className="resolution__primary-description">
                                  Testing wrong values display on client side for hourly rate
                                </p>
                              </div>
                              <div className="col-lg-1 d-none d-lg-block order-1"></div>
                              <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1 resolution__sidebar--bordered">
                                <div>
                                  <h3 className="post-ticket__input-title post-ticket__input-title--withlink mt-5 mb-4">
                                    Expert Naeem
          
          
                                    <a href="../Client/My-Resolution-client-1.html">
                                      Client view
                                    </a>
                                  </h3>
                                  <div className="my-resolutions__rating">
                                    <div>
                                      <div className="expert-lineitem__rating">
                                        <div className="stars-wrapper stars-wrapper--static">
                                          <label htmlFor="r1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                              viewBox="0 0 14.798 14.112">
                                              <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                                                <path id="Path_91" data-name="Path 91"
                                                  d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                  transform="translate(0 -0.452)" fill="#372E75"></path>
                                              </g>
                                            </svg>
                                          </label>
                                          <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />
          
                                          <label htmlFor="r2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                              viewBox="0 0 14.798 14.112">
                                              <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                                                <path id="Path_91" data-name="Path 91"
                                                  d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                  transform="translate(0 -0.452)" fill="#372E75"></path>
                                              </g>
                                            </svg>
                                          </label>
                                          <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />
          
                                          <label htmlFor="r3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                              viewBox="0 0 14.798 14.112">
                                              <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                                                <path id="Path_91" data-name="Path 91"
                                                  d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                  transform="translate(0 -0.452)" fill="#372E75"></path>
                                              </g>
                                            </svg>
                                          </label>
                                          <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />
          
                                          <label htmlFor="r4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                              viewBox="0 0 14.798 14.112">
                                              <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                                                <path id="Path_91" data-name="Path 91"
                                                  d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                  transform="translate(0 -0.452)" fill="#372E75"></path>
                                              </g>
                                            </svg>
                                          </label>
                                          <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />
          
                                          <label htmlFor="r5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                              viewBox="0 0 14.798 14.112">
                                              <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                                                <path id="Path_91" data-name="Path 91"
                                                  d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                  transform="translate(0 -0.452)" fill="#372E75"></path>
                                              </g>
                                            </svg>
                                          </label>
                                          <input type="radio" className="visually-hidden" value="5" name="rating" id="r5"
                                            checked />
                                        </div>
                                      </div>
                                      <p className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                        Resolution rate
                                      </p>
                                    </div>
                                    <div className="my-resolutions__price">
                                      $0
                                    </div>
                                  </div>
                                </div>
          
                                <hr className="resolution__sidebar-hr d-none d-lg-block" />
          
                                <ul className="my-resolutions__stats d-block">
                                  <li className="my-resolutions__stats-item">
                                    <b>0</b> Times Sold
                                  </li>
          
                                  <li className="my-resolutions__stats-item">
                                    <b className="t_c">0</b> <a href="#comments" className="comments__link">Comments</a>
                                  </li>
                                </ul>
          
                                <div className="resolution__sidebar-buttons">
                                  <button type="button" className="button">
                                    Share
          
                                    <img src="/app_assets/img/share-1.svg" alt="share" className="hover" />
                                    <img src="/app_assets/img/share-white.svg" alt="share" className="hide-hover" />
          
                                  </button>
          
                                  <a href="#" className="button button--white">
                                    Edit
                                  </a>
                                </div>
          
                                <button className="button button--no-border mt-4 js-show-modal" data-modal-id="delete-resolution">
                                  <img src="/app_assets/img/delete-blue.svg" alt="delete" />
                                  Delete
                                </button>
                              </div>
                              <div className="col-12 col-md-10 col-lg-7 order-1 js-show-more">
          
          
                                <label className="input__wrapper mt-5 mb-2">
                                  <div className="cover-image cover-image--md-6">
                                    <img src="/app_assets/img/photo-camera-1.svg" alt="" />
          
                                  </div>
                                </label>
                                <p>Testing wrong values display on client side for hourly rate </p>
          
          
                              </div>
          
                            </div>
          
                            <div className="add-resolutions__section row align-flex-start ml-0 mr-0">
                              <div className="col-12">
                                <h2 className="post-ticket__input-title mt-3">
                                  Attachments (0)
                                </h2>
                                <div className="ticket__description-text opened-ticket__description-text pl-0 mt-4">
          
                                </div>
                              </div>
                            </div>
          
                            <div id="comments"
                              className="add-resolutions__section comments add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                              <div className="col-12 col-md-10 col-lg-8">
                                <h2 className="post-ticket__input-title mt-3 t_c_2">
                                  Comments (0)
                                </h2>
                                {/*
                                <!-- Comments START --> */}
                                <div className="ticket-body ticket-body--dialog">
                                  <ul className="messages messages--dialog" id="comments__r">
          
                                  </ul>
          
                                  <div className="new-message-container">
                                    <form action="#">
                                      <input type="hidden" id="csrf_token_input"
                                        value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                                      <input type="text" id="comment" placeholder="Here will be written the message"
                                        className="input" />
                                      <button type="button" className="button new-message-container__send-button">
                                        Send
                                      </button>
          
                                    </form>
                                  </div>
                                </div>
                                {/*
                                <!-- Comments END --> */}
                              </div>
                            </div>
          
          
                          </div>
                        </div>
                      </section>
          
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        );
    }
}

export default ResolutionInformation;