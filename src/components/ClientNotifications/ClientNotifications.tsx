import React from 'react';
import styles from './ClientNotifications.module.css';

const ClientNotifications: React.FC = () => (
    <div className="container container-fluid-small">
  <main className="main-content main-content--dashboard">
    <div className="container container-fluid-small">
        <div className="row justify-content-center">
            <div className="d-none d-md-block col-12 col-lg-12 order-1 mt-5 mb-2">
                <h2>Notifications</h2>
            </div>
            <div className="col-12 col-lg-8 order-0 order-lg-1 search-box-wrapper"> </div>
            <div className="col-12 order-1">
                <div className="tile tile--2">
                    <section className="notifications" style={{paddingBottom: "0px"}}>
                        <div className="d-block d-md-none mobile-section-title">
                            <button className="button button--no-style mobile-section-title__back-button">
                                <i className="back-blue-icon"></i>
                            </button>
                            <div className="mobile-section-title__name">
                                Notifications
                            </div>
                        </div>
                        <ul className="notifications__list">
                            <li className="notifications__list-item">
                                <div className="notifications__content">
                                    <div className="notifications__main">
                                        <p className="notifications__main-title notifications__main-title--italic" style={{cursor: "pointer"}} > Ticket Invitation </p>
                                        <p className="notifications__main-text" style={{cursor: "pointer"}} >Muhammad Asif want to message you on Ticket ID. 225</p>
                                    </div>
                                    <div className="notifications__estimate">
                                        <p className="estimate__title"></p>
                                        <p className="estimate__value"></p>                                            
                                    </div>                                        
                                    <div className="notifications__estimate">
                                        <p className="estimate__title"> </p>
                                        <p className="estimate__value"> </p>                                            
                                    </div>
                                        <div className="notifications__date-time">3 weeks ago</div>
                                    <a href="Javascript:void(0);" data-id="1787" className="notifications__link js-notifications__link">
                                        <span className="d-none d-md-inline">Delete</span>
                                        <span className="d-inline d-md-none">
                                            <i className="icon__remove-btn icon__remove-btn--bigger"></i>
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </section>
                <div className="experts-footer">
                </div>
            </div>
        </div>
    </div>
</div>


<form id="loginForm" name="loginForm">
    <input type="hidden" id="uuusername" value="seasif2024" />
    <input type="hidden" id="uufirstname" value="Mrsec" />
    <input type="hidden" id="uulastname" value="Asif" />
    <input type="hidden" id="uuemail" value="seasif2024@gmail.com" />
    <input type="hidden" id="uuid" value="97" />
    </form>

{/* <!-- [Structure] Chose payment method modal START --> */}
<div className="ui modal decline-expert-modal" id="confirm-declined-ticket">
    <div className="content">
        <div className="decline-expert-modal__title">
           Please Confirm
        </div>
        <p className="decline-expert-modal__subtitle">Do you want to  publish this ticket for other experts?</p>
        <label className="checkbox__wrapper checkbox__wrapper--2">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">
                Don't show this again
            </div>
        </label>
        <input type="hidden" id="expuser"/><input type="hidden" id="declined_id" />
        <input type="hidden" id="ticketid" />

        <div className="decline-expert-modal__buttons">
            {/* <!-- popup emulation button --> */}
            <button type="button" className="button button--post js-modal-close" >Yes</button>
            {/* <!-- popup emulation button --> */}

            <button type="button" className="button button--no-style post-ticket__discard js-modal-close" >Cancel</button>
        </div>
        <button type="button" className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
    </div>
</div>
{/* <!-- [Structure] Chose payment method modal START --> */}
            {/* <!---EndModel---> */}


{/* <!-- [Structure] Ticket created modal START --> */}
<div className="ui modal ticket-posted-modal" id="ticket-cancel">
    <div className="content">
        <div className="ticket-posted-modal__title">
         This Ticket has been cancelled  by you successfully.
        </div>

        <div className="ticket-posted-modal__subtitle">
   Now this ticket has been moved into Closed Tickets.
       </div>
        <button type="button" className="button js-modal-close">
                Got it
        </button>
    </div>
</div>

{/* <!-- [Structure] Ticket created modal START --> */}
<div className="ui modal ticket-posted-modal" id="error-ticket-cancel">
    <div className="content">
        <div className="ticket-posted-modal__title">
           Your ticket is not cancelled.
        </div>

        <div className="ticket-posted-modal__subtitle">
   Please try again later or contact with Contact Our Support Team.
       </div>
        <button type="button" className="button js-modal-close" >
           Got it
        </button>
    </div>
</div>


</main>
</div>
);

export default ClientNotifications;
