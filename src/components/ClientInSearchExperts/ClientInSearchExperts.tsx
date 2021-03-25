import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import searchExperts from '../app_assets/img/search-experts.svg';
import hireToNewTicket from "../app_assets/img/Hire to new ticket.svg";
import hireToExistingTicket from "../app_assets/img/Hire to existing ticket.svg";
import SearchExperts from './SearchExperts';

const ClientInSearchExperts: React.FC = () => (
  <div className="container-fluid-small topclassName">
    <main className="main-content main-content--dashboard">
    {/* main_content_dashboard123 class add */}
      <div className="container container-fluid-small">
          <div className="container-fluid-small">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="tile tile--2 tile--filters hire-ticket-content">
                {/* <div className="filters-wrapper"> */}
                <div className="contract-wrapper">
                        <img className="contract-img" src={searchExperts} alt="" />
                        <h2 className="contract-title"style={{marginLeft: "18px"}}>Search Experts</h2>
                    </div>
                    <form method="post" action="" className="search-expert-wrapper">
                      <input type="hidden" name="_token" value="O8sXcIs335BaBKHiPPW1KOKyYn3eeV80zLEKK4Oh" />
                    <div className="search-expert-content">
                    <SearchExperts/>
                    {/* <div className="filters-checks">
                      <h3 className="filter__section-label">Skills (type max 10)</h3>
                      <label className="input__wrapper">
                        <label htmlFor="js-textarea-id-1" data-for="js-textarea-id-1" className="visually-hidden max-5"></label>
                        <div className="textarea input js-textarea max-5">
                          <input className="max-5" max={5} type="text" id="js-textarea-id-1" name="js-textarea-id-1" />
                        </div>
                        <textarea className="input  visually-hidden max-5"  placeholder="Text example describing what a web developer does">                                    </textarea>
                        <p className="input__notification">Description is required</p>
                      </label>
                    </div> */}
                    
                    <h3 className="filter__section-label search-mb-4 filters-cta advance-search p-color">Advance Search</h3>
                    </div>
                    <br />
                    
                    <div className="payment-buttons width-100 order-1">
                    <Link to="/client-dashboard/find_experts/search-result"><button type="submit" className="button max-160"> Search</button></Link>
                        <button className="hide button button--no-style link js-search-clear">Clear All</button>
                    </div>
                    </form>
                  {/* </div> */}
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

export default ClientInSearchExperts;
