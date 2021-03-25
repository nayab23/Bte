import React, { Component } from 'react';
import location from "../app_assets/img/location.svg"
import pencil from "../app_assets/img/pencil.svg"
import hourprice from '../app_assets/img/Final-ICONS_SVG_23-Hourly_price.ab660dea.svg';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import hollowstar from '../app_assets/img/Rating_Start_Hollow.40582898.svg'
import hirenow from '../app_assets/img/Final-ICONS_SVG_22-Hire_Now.113017d7.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class FlatData extends Component {
  render() {
    return (
      <div>
<Tabs className="post-ticket-wrapper">
    <TabList className="tickets-list post-ticket-list">
        <Tab className="tickets-list__item js-tickets-list__item tickets-list__item--active"
            data-ticket-id="225">
            <div className="tickets-list__img">
                {/* <!-- <img src="" alt=""> --> */}
                <span className="status-icon online" id="ticket225"></span>
            </div>
            <div className="tickets-list__text">
                <h3 className="tickets-list__name">
                    Laravel Livewire Expert Required Testing Directly A S Signed
            </h3>
                <p className="tickets-list__subtext">
                    I need a strong Laravel developer to take over my current Laravel + Livewire
                    project ... Need an expert in Laravel to work on many different projects Need
                    ... Full-stack
            </p>
            </div>

        </Tab>

        <Tab className="tickets-list__item js-tickets-list__item tickets-list__item"
            data-ticket-id="218">
            <div className="tickets-list__img">
                {/*
            <!-- <img src="" alt=""> --> */}
                <span className="status-icon online" id="ticket218"></span>
            </div>
            <div className="tickets-list__text">
                <h3 className="tickets-list__name">
                    Swift - Apple Developer
            </h3>
                <p className="tickets-list__subtext">
                    Swift is a powerful and intuitive programming language for macOS, iOS, watchOS,
                    tvOS and beyond. Writing Swift code is interactive and fun, the syntax is
                    concise ...Swift is a powerful and intuitive programming language for macOS,
                    iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the
                    syntax is concise ...Swift is a powerful and intuitive programming language for
                    macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun,
                    the syntax is concise ...
            </p>
            </div>
        </Tab>
        <Tab className="tickets-list__item js-tickets-list__item tickets-list__item" data-ticket-id="113">
            <div className="tickets-list__img">
                {/*
            <!-- <img src="" alt=""> --> */}
                <span className="status-icon online" id="ticket113"></span>
            </div>
            <div className="tickets-list__text">
                <h3 className="tickets-list__name">
                    Cloud technology &amp; infrastructure management
            </h3>
                <p className="tickets-list__subtext">
                    Built applications on and integrating with cloud providers. My experience is
                    mainly with enterprise AWS architectures and hobby projects with Google Cloud
                    Platform.
            </p>
            </div>

        </Tab>
        <Tab className="tickets-list__item js-tickets-list__item tickets-list__item"
            data-ticket-id="112">
            <div className="tickets-list__img">
                {/*
            <!-- <img src="" alt=""> --> */}
                <span className="status-icon online" id="ticket112"></span>
            </div>
            <div className="tickets-list__text">
                <h3 className="tickets-list__name">
                    Selenium Testing
            </h3>
                <p className="tickets-list__subtext">
                    With the growing complexity in the IT industry, QA holds significance in
                    assisting business make intelligent decisions. Here at OnGraph, we understand
                    the importance of automated software testing and thus providing complete and
                    effective Cross Browser Testing Services. With the help of our dedicated team
                    and experts, we assist our clients irrespective of their business domain and
                    business location. OnGraph is a technology-driven company and keeps the
                    development center powered by the effective automation framework and other
                    sophisticated tools according to market compliance. Having such a facility and a
                    world-class Selenium Testing Service Provider, we strategies methodology to
                    perform software test automation across the varied web and mobile applications.
                    Our ultimate aim to increase longevity and reduce maintenance within your
                    applications.
            </p>
            </div>

        </Tab>
        <Tab className="tickets-list__item js-tickets-list__item tickets-list__item"
            data-ticket-id="111">
            <div className="tickets-list__img">
                {/*
            <!-- <img src="" alt=""> --> */}
                <span className="status-icon online" id="ticket111"></span>
            </div>
            <div className="tickets-list__text">
                <h3 className="tickets-list__name">
                    Test Automation Strategies
            </h3>
                <p className="tickets-list__subtext">
                    We talked about tool selection. But selecting the right tool is just the
                    beginning. Some managers have the misconception that if they select the right
                    tool, they can easily automate anything. Beware, automation tools do not give
                    you everything. They make the process easier. But you need skilled resources to
                    complete the process.

                    Often automation tools are buggy and they stuck in identifying complex objects
                    on the application. The resources you hire, if they are skilled, come up with a
                    workaround which takes the process forward. Otherwise, if you don’t hire good
                    resources, Tool alone cannot guarantee successful automation.
            </p>
            </div>

        </Tab>
    </TabList>
    <TabPanel className="posted-ticket-body-panel">
    <Tabs className="ticket-tab"  style={{position:"relative"}}>
    <div className="ticket-header">
        <TabList className="ticket-header__list ticket-list">
            <Tab className="ticket-header-list-item" data-tab="ticket">
                <a href="#"> Ticket</a>
            </Tab>
            <Tab className="ticket-header-list-item " data-tab="dialog">
                <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
            </Tab>
            <Tab className="ticket-header-list-item ">
                <a href="#"> Files </a>
            </Tab>
            <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                <a href="#"> Payment</a>
            </Tab>
        </TabList>
    </div> 
    {/* <!-- Ticket info START --> */}  
    <TabPanel className="post-ticket-body"  data-tab="ticket" id="ticketd" >
    <div className="ticket-info">

    <h2 className="ticket__name">Laravel Livewire Expert Required Testing Directly A S Signed</h2>
    <div className="ticket__details-row">
        <p className="ticket__category">
            <span className="category--line"> Category: </span><span className="t-category"
                style={{ color: "#6c757d" }}>Development</span>
        </p>
        <p className="ticket__rate ticket__request">
            <span
                style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>1</span>
            <span className="category--line"> requests </span>
        </p>
    </div>

    <div className="ticket__details-row">
        <p className="ticket__date">
            <span className="time--line">Created On: </span>
            <span className="t-date"> September 8, 2020 11:26 PM </span>
        </p>
        <p className="ticket__rate-2">
            <span
                style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>
                0 </span>
            <span className="description--line">views</span>

        </p>
    </div>

    <div className="ticket__description description--line"> Project description

    <button className="button js-show-modal" style={{ marginTop: "-30px", width: "160px", float: "right", cursor: "pointer" }}
            data-modal-id="ticket-cancel-confirmation">Cancel</button>
    </div>
    <p className="ticket__description-text"> I need a strong Laravel developer to take over my
        current Laravel + Livewire project ... Need an expert in Laravel to work on many
    different projects Need ... Full-stack</p>
    <div className="ticket__description description--line"> Skills required</div>
    <p className="ticket__description-text skills__list">

        <a href="#" className="skills__item">PHP</a><a href="#"
            className="skills__item">.NET</a><a href="#"
                className="skills__item">Wordpress</a><a href="#"
                    className="skills__item">Shopify</a><a href="#" className="skills__item">HTML5</a><a
                        href="#" className="skills__item">CSS</a>

    </p>
    <div className="ticket__description description--line">
        Attachments
    </div>
    <div className="ticket__description-text">
    </div>

    <hr />


    <h3 className="applied-experts__header" data-ticket-id="225">
        Request Sent
    </h3>
    <div className="modal-expert-card ">
        <div className="modal_expert_wrapper">
            <div className="modal-avatar"
                style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
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
            <div className="modal-favorite-button hidden-modal-hire-button"><img
                    src={hirenow}
                    className="modal-buttons-icon hidden-modal-hire-button-icon"/>
                <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
            </div>
        </div>
        <div className="expert-cred-wrapper">
            <div className="modal-expert-name">Saad Asad</div>
            <div className="expert-description-wrapper">
                <div className="modal-expert-description">
                    <div className="modal-expert-description">Full Stack Developer, Web
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
                            <div className="location-text">$ 500 / hour</div>
                        </div>
                    </div>
                </div>
                <div className="modal_button_wrapper">
                    <div className="mark-favorite-wrapper">
                        <div className="modal-favorite-button"><img
                                src={emptyheart}
                                className="modal-buttons-icon"/>
                            <div className="modal-buttons-text">Favourite</div>
                        </div>
                        <div className="modal-message-button"><img
                                src="/static/media/message-blue.38f6c904.svg"
                                className="modal-buttons-icon"/>
                            <div className="modal-buttons-text">Message</div>
                        </div>
                    </div>
                    <div className="modal-favorite-button modal-hire-text"><img
                            src={hirenow}
                            className="modal-buttons-icon"/>
                        <div className="modal-buttons-text modal-hire-text">Hire Now</div>
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
    </TabPanel>
    {/* <!-- Ticket info END --> */} 
    {/* <!-- Ticket dialog START --> */}
    <TabPanel className="post-ticket-body" data-tab="dialog" >
    <div className="ticket-info">
            <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket dialog END --> */}
    {/* <!-- Ticket files START --> */}
    <TabPanel className="post-ticket-body" >
    <div className="ticket-info">
    <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket files END --> */}
    {/* <!-- Ticket payment START --> */}
    <TabPanel className="" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
    <div className="ticket-info">
        <h2 className="ticket__name"> Hire details </h2>
        <div className="applied-experts__list expert-lineitem expert-line-static">
            <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
            <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">

                        <a href="#" className="card-header-right text-right card-link d-block">
                            <p className="expert-lineitem__name"> Muhammad Asif </p>
                        </a>
                        <p className="expert-lineitem__title">
                            <span className="d-none d-md-inline">Software Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
        <div className="contract__row contract__row--title">
            <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                ... Need an expert in Laravel to work on many different projects Need ... Full-stack
            </p>
            <button className="button--no-style button--edit">
                <img src={pencil} alt="edit button" />
                <span>Edit</span>
            </button>
        </div>

        <div className="contract__row contract__row--flex">
            {/* <!--START FIXED-RATE--> */}
            <div className="contract-info-block js-fixed ">
                <h2 className="contract-info-block__header">Fixed Price</h2>
                <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                    <span>$</span>
                    <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                    <label className="input__wrapper mb-0 hide">
                        <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                    </label>
                </div>
                <button type="button" className="button--no-style button--edit js-edit-button">
                    <img src={pencil} alt="edit button" />
                    <span>Edit</span>
                </button>
            </div>
            <div className="contract-info-block">
                <input type="hidden" id="type77" value="fixed" />
                <input type="hidden" id="contract_fixed_value77" value="" />
                <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
            </div>
        </div>
        <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
        {/* <!--END FIXED-RATE--> */}
        <h2 className="mb-0">Add Payment Method</h2>
        <p className="post-ticket__subtitle">
            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
            for done work
        </p>
        <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
        <span className="text " >Add a payment method</span>
        </button>
        <h2 className="mt-5 mb-0">Details for your Expert</h2>
        <p className="post-ticket__subtitle mb-2">
            Give your Expert more info about the project or something additional
        </p>
        <label className="input__wrapper mb-2">
            <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
            <input type="hidden" id="user_id77" value="97" />
            <input type="hidden" id="expert_id77" value="77" />
            <input type="hidden" id="ticket_id77" value="225" />
            <p className="input__notification">Proffesion title is required</p>
        </label>

        <p className="post-ticket__subtitle d-block d-md-none">
        Attach necessary files to show ideas of your project more understandable
        </p>
        <div id="multiple-upload"></div>
        <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
            <div className="file_upload__label"></div>
            <input type="file" name="fileupload" value="" id="upload-file" multiple
                className="visually-hidden" />
            <label htmlFor="fileupload" className="fileupload__button">
            <span>+</span> Upload Files
            </label>
            <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
            ideas of your project more understandable</p>
            </div>
        <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
        </label>
        <div className="payment-buttons">
        <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                Hire this Expert
        </button>
        <button className="button--no-style link js-discart-contract">Discard</button>
        </div>

        {/* <!-- Payment closure section START --> */}
        <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Total Expert Amount </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $400 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> Initial Deposit </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200</div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Balance</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> BTE Collaboration charges</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value">$10</div>
                </div>
            </div>
            <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                <div className="row align-items-center full-width">
                    <div className="col-6">
                        <div className="estimate__title"> Total Amount Due</div>
                    </div>
                    <div className="col-4 offset-2">
                        <div className="estimate__value"> $360.05</div>
                    </div>
                </div>
            </div>
            <div className="payment-buttons d-none js-payment-closure">
                <button type="button" className="button max-160 js-get-report"> Get report</button>
            </div>
            {/* <!-- Payment closure section END --> */}
        </div>
    </div>
    </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
    </TabPanel>
    <TabPanel className="posted-ticket-body-panel">
    <Tabs className="ticket-tab"  style={{position:"relative"}}>
    <div className="ticket-header">
        <TabList className="ticket-header__list ticket-list">
            <Tab className="ticket-header-list-item" data-tab="ticket">
                <a href="#"> Ticket</a>
            </Tab>
            <Tab className="ticket-header-list-item " data-tab="dialog">
                <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
            </Tab>
            <Tab className="ticket-header-list-item ">
                <a href="#"> Files </a>
            </Tab>
            <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                <a href="#"> Payment</a>
            </Tab>
        </TabList>
    </div> 
    {/* <!-- Ticket info START --> */}  
    <TabPanel className="post-ticket-body"  data-tab="ticket" id="ticketd" >
    <div className="ticket-info">
    <h2 className="ticket__name">
            Swift - Apple Developer
        </h2>
        <div className="ticket__details-row">
            <p className="ticket__category">
                <span className="category--line"> Category: </span>
                <span className="t-category" style={{ color: "#6c757d" }}> Development </span>
            </p>
            <p className="ticket__rate ticket__request">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>1</span>
                <span className="category--line"> requests</span>
            </p>


        </div>

        <div className="ticket__details-row">
            <p className="ticket__date">

                <span className="time--line">Created On:</span>
                <span className="t-date"> September 4, 2020 02:08 AM </span>

            </p>
            <p className="ticket__rate-2">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0
            </span>
                <span className="description--line">views</span>
            </p>
        </div>

        <div className="ticket__description description--line">
            Project description

        <button className="button js-show-modal" style={{ marginTop: "-30px", width: "160px", float: "right", cursor: "pointer" }}
                data-modal-id="ticket-cancel-confirmation">Cancel</button>
        </div>

        <p className="ticket__description-text"> Swift is a powerful and intuitive programming
            language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and
            fun, the syntax is concise ...Swift is a powerful and intuitive programming language for
            macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the
            syntax is concise ...Swift is a powerful and intuitive programming language for macOS,
            iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is
        concise ... </p>

        <div className="ticket__description description--line">
            Skills required
    </div>
        <p className="ticket__description-text skills__list">

            <a href="#" className="skills__item">C#</a><a href="#"
                className="skills__item">Python</a><a href="#" className="skills__item">C++</a><a
                    href="#" className="skills__item">Java</a><a href="#"
                        className="skills__item">Ruby</a>

        </p>
        <div className="ticket__description description--line">
            Attachments
    </div>
        <div className="ticket__description-text">
        </div>
        <hr />
        <h3 className="applied-experts__header">
            Request Sent
            </h3>


    <div className="modal-expert-card ">
    <div className="modal_expert_wrapper">
        <div className="modal-avatar"
            style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}>
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
        <div className="modal-favorite-button hidden-modal-hire-button"><img
                src={hirenow}
                className="modal-buttons-icon hidden-modal-hire-button-icon"/>
            <div className="modal-buttons-text hidden-modal-hire-button-text">Hire Now</div>
        </div>
    </div>
    <div className="expert-cred-wrapper">
        <div className="modal-expert-name">Saad Asad</div>
        <div className="expert-description-wrapper">
            <div className="modal-expert-description">
                <div className="modal-expert-description">Full Stack Developer, Web
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
                        <div className="location-text">$ 500 / hour</div>
                    </div>
                </div>
            </div>
            <div className="modal_button_wrapper">
                <div className="mark-favorite-wrapper">
                    <div className="modal-favorite-button"><img
                            src={emptyheart}
                            className="modal-buttons-icon"/>
                        <div className="modal-buttons-text">Favourite</div>
                    </div>
                    <div className="modal-message-button"><img
                            src="/static/media/message-blue.38f6c904.svg"
                            className="modal-buttons-icon"/>
                        <div className="modal-buttons-text">Message</div>
                    </div>
                </div>
                <div className="modal-favorite-button modal-hire-text"><img
                        src={hirenow}
                        className="modal-buttons-icon"/>
                    <div className="modal-buttons-text modal-hire-text">Hire Now</div>
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
    </TabPanel>
    {/* <!-- Ticket info END --> */} 
    {/* <!-- Ticket dialog START --> */}
    <TabPanel className="post-ticket-body" data-tab="dialog" >
    <div className="ticket-info">
            <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket dialog END --> */}
    {/* <!-- Ticket files START --> */}
    <TabPanel className="post-ticket-body" >
    <div className="ticket-info">
    <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket files END --> */}
    {/* <!-- Ticket payment START --> */}
    <TabPanel className="" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
    <div className="ticket-info">
        <h2 className="ticket__name"> Hire details </h2>
        <div className="applied-experts__list expert-lineitem expert-line-static">
            <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
            <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">

                        <a href="#" className="card-header-right text-right card-link d-block">
                            <p className="expert-lineitem__name"> Muhammad Asif </p>
                        </a>
                        <p className="expert-lineitem__title">
                            <span className="d-none d-md-inline">Software Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
        <div className="contract__row contract__row--title">
            <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                ... Need an expert in Laravel to work on many different projects Need ... Full-stack
            </p>
            <button className="button--no-style button--edit">
                <img src={pencil} alt="edit button" />
                <span>Edit</span>
            </button>
        </div>

        <div className="contract__row contract__row--flex">
            {/* <!--START FIXED-RATE--> */}
            <div className="contract-info-block js-fixed ">
                <h2 className="contract-info-block__header">Fixed Price</h2>
                <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                    <span>$</span>
                    <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                    <label className="input__wrapper mb-0 hide">
                        <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                    </label>
                </div>
                <button type="button" className="button--no-style button--edit js-edit-button">
                    <img src={pencil} alt="edit button" />
                    <span>Edit</span>
                </button>
            </div>
            <div className="contract-info-block">
                <input type="hidden" id="type77" value="fixed" />
                <input type="hidden" id="contract_fixed_value77" value="" />
                <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
            </div>
        </div>
        <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
        {/* <!--END FIXED-RATE--> */}
        <h2 className="mb-0">Add Payment Method</h2>
        <p className="post-ticket__subtitle">
            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
            for done work
        </p>
        <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
        <span className="text " >Add a payment method</span>
        </button>
        <h2 className="mt-5 mb-0">Details for your Expert</h2>
        <p className="post-ticket__subtitle mb-2">
            Give your Expert more info about the project or something additional
        </p>
        <label className="input__wrapper mb-2">
            <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
            <input type="hidden" id="user_id77" value="97" />
            <input type="hidden" id="expert_id77" value="77" />
            <input type="hidden" id="ticket_id77" value="225" />
            <p className="input__notification">Proffesion title is required</p>
        </label>

        <p className="post-ticket__subtitle d-block d-md-none">
        Attach necessary files to show ideas of your project more understandable
        </p>
        <div id="multiple-upload"></div>
        <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
            <div className="file_upload__label"></div>
            <input type="file" name="fileupload" value="" id="upload-file" multiple
                className="visually-hidden" />
            <label htmlFor="fileupload" className="fileupload__button">
            <span>+</span> Upload Files
            </label>
            <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
            ideas of your project more understandable</p>
            </div>
        <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
        </label>
        <div className="payment-buttons">
        <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                Hire this Expert
        </button>
        <button className="button--no-style link js-discart-contract">Discard</button>
        </div>

        {/* <!-- Payment closure section START --> */}
        <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Total Expert Amount </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $400 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> Initial Deposit </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200</div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Balance</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> BTE Collaboration charges</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value">$10</div>
                </div>
            </div>
            <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                <div className="row align-items-center full-width">
                    <div className="col-6">
                        <div className="estimate__title"> Total Amount Due</div>
                    </div>
                    <div className="col-4 offset-2">
                        <div className="estimate__value"> $360.05</div>
                    </div>
                </div>
            </div>
            <div className="payment-buttons d-none js-payment-closure">
                <button type="button" className="button max-160 js-get-report"> Get report</button>
            </div>
            {/* <!-- Payment closure section END --> */}
        </div>
    </div>
    </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
    </TabPanel>
       {/* Third post ticket tba */}
       <TabPanel className="posted-ticket-body-panel">
    <Tabs className="ticket-tab"  style={{position:"relative"}}>
    <div className="ticket-header">
        <TabList className="ticket-header__list ticket-list">
            <Tab className="ticket-header-list-item" data-tab="ticket">
                <a href="#"> Ticket</a>
            </Tab>
            <Tab className="ticket-header-list-item " data-tab="dialog">
                <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
            </Tab>
            <Tab className="ticket-header-list-item ">
                <a href="#"> Files </a>
            </Tab>
            <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                <a href="#"> Payment</a>
            </Tab>
        </TabList>
    </div> 
    {/* <!-- Ticket info START --> */}  
    <TabPanel className="post-ticket-body"  data-tab="ticket" id="ticketd" >
    <div className="ticket-info">
    <h2 className="ticket__name">
            Cloud technology &amp; infrastructure management
    </h2>
        <div className="ticket__details-row">
            <p className="ticket__category">
                <span className="category--line"> Category: </span>
                <span className="t-category" style={{ color: "#6c757d" }}> Cloud Server </span>
            </p>
            <p className="ticket__rate ticket__request">
                <span style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0</span>
                <span className="category--line"> requests</span>
            </p>


        </div>

        <div className="ticket__details-row">
            <p className="ticket__date">

                <span className="time--line">Created On:</span>
                <span className="t-date"> December 5, 2019 07:18 PM </span>

            </p>
            <p className="ticket__rate-2">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>1
            </span>
                <span className="description--line">views</span>
            </p>
        </div>

        <div className="ticket__description description--line">
            Project description

        <button className="button js-show-modal" style={{ marginTop: "-30px", width: "160px", float: "right", cursor: "pointer" }}
                data-modal-id="ticket-cancel-confirmation">Cancel</button>
        </div>

        <p className="ticket__description-text"> Built applications on and integrating with cloud
            providers. My experience is mainly with enterprise AWS architectures and hobby projects
        with Google Cloud Platform. </p>

        <div className="ticket__description description--line">
            Skills required
    </div>
        <p className="ticket__description-text skills__list">
            <a href="#" className="skills__item">Server Manager</a>
        </p>
        <div className="ticket__description description--line">
            Attachments
    </div>
        <div className="ticket__description-text">
        </div>
        <hr />
        <h3 className="applied-experts__header">
            Applied experts
    </h3>
    </div>
    </TabPanel>
    {/* <!-- Ticket info END --> */} 
    {/* <!-- Ticket dialog START --> */}
    <TabPanel className="post-ticket-body" data-tab="dialog" >
    <div className="ticket-info">
            <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket dialog END --> */}
    {/* <!-- Ticket files START --> */}
    <TabPanel className="post-ticket-body" >
    <div className="ticket-info">
    <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket files END --> */}
    {/* <!-- Ticket payment START --> */}
    <TabPanel className="" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
    <div className="ticket-info">
        <h2 className="ticket__name"> Hire details </h2>
        <div className="applied-experts__list expert-lineitem expert-line-static">
            <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
            <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">

                        <a href="#" className="card-header-right text-right card-link d-block">
                            <p className="expert-lineitem__name"> Muhammad Asif </p>
                        </a>
                        <p className="expert-lineitem__title">
                            <span className="d-none d-md-inline">Software Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
        <div className="contract__row contract__row--title">
            <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                ... Need an expert in Laravel to work on many different projects Need ... Full-stack
            </p>
            <button className="button--no-style button--edit">
                <img src={pencil} alt="edit button" />
                <span>Edit</span>
            </button>
        </div>

        <div className="contract__row contract__row--flex">
            {/* <!--START FIXED-RATE--> */}
            <div className="contract-info-block js-fixed ">
                <h2 className="contract-info-block__header">Fixed Price</h2>
                <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                    <span>$</span>
                    <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                    <label className="input__wrapper mb-0 hide">
                        <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                    </label>
                </div>
                <button type="button" className="button--no-style button--edit js-edit-button">
                    <img src={pencil} alt="edit button" />
                    <span>Edit</span>
                </button>
            </div>
            <div className="contract-info-block">
                <input type="hidden" id="type77" value="fixed" />
                <input type="hidden" id="contract_fixed_value77" value="" />
                <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
            </div>
        </div>
        <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
        {/* <!--END FIXED-RATE--> */}
        <h2 className="mb-0">Add Payment Method</h2>
        <p className="post-ticket__subtitle">
            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
            for done work
        </p>
        <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
        <span className="text " >Add a payment method</span>
        </button>
        <h2 className="mt-5 mb-0">Details for your Expert</h2>
        <p className="post-ticket__subtitle mb-2">
            Give your Expert more info about the project or something additional
        </p>
        <label className="input__wrapper mb-2">
            <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
            <input type="hidden" id="user_id77" value="97" />
            <input type="hidden" id="expert_id77" value="77" />
            <input type="hidden" id="ticket_id77" value="225" />
            <p className="input__notification">Proffesion title is required</p>
        </label>

        <p className="post-ticket__subtitle d-block d-md-none">
        Attach necessary files to show ideas of your project more understandable
        </p>
        <div id="multiple-upload"></div>
        <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
            <div className="file_upload__label"></div>
            <input type="file" name="fileupload" value="" id="upload-file" multiple
                className="visually-hidden" />
            <label htmlFor="fileupload" className="fileupload__button">
            <span>+</span> Upload Files
            </label>
            <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
            ideas of your project more understandable</p>
            </div>
        <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
        </label>
        <div className="payment-buttons">
        <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                Hire this Expert
        </button>
        <button className="button--no-style link js-discart-contract">Discard</button>
        </div>

        {/* <!-- Payment closure section START --> */}
        <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Total Expert Amount </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $400 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> Initial Deposit </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200</div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Balance</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> BTE Collaboration charges</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value">$10</div>
                </div>
            </div>
            <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                <div className="row align-items-center full-width">
                    <div className="col-6">
                        <div className="estimate__title"> Total Amount Due</div>
                    </div>
                    <div className="col-4 offset-2">
                        <div className="estimate__value"> $360.05</div>
                    </div>
                </div>
            </div>
            <div className="payment-buttons d-none js-payment-closure">
                <button type="button" className="button max-160 js-get-report"> Get report</button>
            </div>
            {/* <!-- Payment closure section END --> */}
        </div>
    </div>
    </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
    </TabPanel>
    <TabPanel className="posted-ticket-body-panel">
    <Tabs className="ticket-tab"  style={{position:"relative"}}>
    <div className="ticket-header">
        <TabList className="ticket-header__list ticket-list">
            <Tab className="ticket-header-list-item" data-tab="ticket">
                <a href="#"> Ticket</a>
            </Tab>
            <Tab className="ticket-header-list-item " data-tab="dialog">
                <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
            </Tab>
            <Tab className="ticket-header-list-item ">
                <a href="#"> Files </a>
            </Tab>
            <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                <a href="#"> Payment</a>
            </Tab>
        </TabList>
    </div> 
    {/* <!-- Ticket info START --> */}  
    <TabPanel className="post-ticket-body"  data-tab="ticket" id="ticketd" >
    <div className="ticket-info">
    <h2 className="ticket__name">Selenium Testing</h2>
        <div className="ticket__details-row">
            <p className="ticket__category">
                <span className="category--line"> Category: </span>
                <span className="t-category" style={{ color: "#6c757d" }}> Cloud Solutions </span>
            </p>
            <p className="ticket__rate ticket__request">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0</span>
                <span className="category--line"> requests</span>
            </p>
        </div>
        <div className="ticket__details-row">
            <p className="ticket__date">

                <span className="time--line">Created On:</span>
                <span className="t-date"> December 5, 2019 07:00 PM </span>

            </p>
            <p className="ticket__rate-2">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }} >0
            </span>
                <span className="description--line">views</span>
            </p>
        </div>

        <div className="ticket__description description--line">
            Project description

        <button className="button js-show-modal" style={{ marginTop: "-30px", width: "160px", float: "right", cursor: "pointer" }}
                data-modal-id="ticket-cancel-confirmation">Cancel</button>
        </div>

        <p className="ticket__description-text"> With the growing complexity in the IT industry, QA
            holds significance in assisting business make intelligent decisions. Here at OnGraph, we
            understand the importance of automated software testing and thus providing complete and
            effective Cross Browser Testing Services. With the help of our dedicated team and
            experts, we assist our clients irrespective of their business domain and business
            location. OnGraph is a technology-driven company and keeps the development center
            powered by the effective automation framework and other sophisticated tools according to
            market compliance. Having such a facility and a world-class Selenium Testing Service
            Provider, we strategies methodology to perform software test automation across the
            varied web and mobile applications. Our ultimate aim to increase longevity and reduce
        maintenance within your applications. </p>

        <div className="ticket__description description--line">
            Skills required
    </div>
        <p className="ticket__description-text skills__list">

            <a href="#" className="skills__item">AWS</a>

        </p>
        <div className="ticket__description description--line">
            Attachments
    </div>
        <div className="ticket__description-text">
        </div>

        <hr />





        <h3 className="applied-experts__header">
            Applied experts
    </h3>
    </div>
    </TabPanel>
    {/* <!-- Ticket info END --> */} 
    {/* <!-- Ticket dialog START --> */}
    <TabPanel className="post-ticket-body" data-tab="dialog" >
    <div className="ticket-info">
            <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket dialog END --> */}
    {/* <!-- Ticket files START --> */}
    <TabPanel className="post-ticket-body" >
    <div className="ticket-info">
    <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket files END --> */}
    {/* <!-- Ticket payment START --> */}
    <TabPanel className="" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
    <div className="ticket-info">
        <h2 className="ticket__name"> Hire details </h2>
        <div className="applied-experts__list expert-lineitem expert-line-static">
            <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
            <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">

                        <a href="#" className="card-header-right text-right card-link d-block">
                            <p className="expert-lineitem__name"> Muhammad Asif </p>
                        </a>
                        <p className="expert-lineitem__title">
                            <span className="d-none d-md-inline">Software Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
        <div className="contract__row contract__row--title">
            <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                ... Need an expert in Laravel to work on many different projects Need ... Full-stack
            </p>
            <button className="button--no-style button--edit">
                <img src={pencil} alt="edit button" />
                <span>Edit</span>
            </button>
        </div>

        <div className="contract__row contract__row--flex">
            {/* <!--START FIXED-RATE--> */}
            <div className="contract-info-block js-fixed ">
                <h2 className="contract-info-block__header">Fixed Price</h2>
                <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                    <span>$</span>
                    <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                    <label className="input__wrapper mb-0 hide">
                        <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                    </label>
                </div>
                <button type="button" className="button--no-style button--edit js-edit-button">
                    <img src={pencil} alt="edit button" />
                    <span>Edit</span>
                </button>
            </div>
            <div className="contract-info-block">
                <input type="hidden" id="type77" value="fixed" />
                <input type="hidden" id="contract_fixed_value77" value="" />
                <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
            </div>
        </div>
        <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
        {/* <!--END FIXED-RATE--> */}
        <h2 className="mb-0">Add Payment Method</h2>
        <p className="post-ticket__subtitle">
            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
            for done work
        </p>
        <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
        <span className="text " >Add a payment method</span>
        </button>
        <h2 className="mt-5 mb-0">Details for your Expert</h2>
        <p className="post-ticket__subtitle mb-2">
            Give your Expert more info about the project or something additional
        </p>
        <label className="input__wrapper mb-2">
            <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
            <input type="hidden" id="user_id77" value="97" />
            <input type="hidden" id="expert_id77" value="77" />
            <input type="hidden" id="ticket_id77" value="225" />
            <p className="input__notification">Proffesion title is required</p>
        </label>

        <p className="post-ticket__subtitle d-block d-md-none">
        Attach necessary files to show ideas of your project more understandable
        </p>
        <div id="multiple-upload"></div>
        <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
            <div className="file_upload__label"></div>
            <input type="file" name="fileupload" value="" id="upload-file" multiple
                className="visually-hidden" />
            <label htmlFor="fileupload" className="fileupload__button">
            <span>+</span> Upload Files
            </label>
            <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
            ideas of your project more understandable</p>
            </div>
        <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
        </label>
        <div className="payment-buttons">
        <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                Hire this Expert
        </button>
        <button className="button--no-style link js-discart-contract">Discard</button>
        </div>

        {/* <!-- Payment closure section START --> */}
        <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Total Expert Amount </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $400 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> Initial Deposit </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200</div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Balance</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> BTE Collaboration charges</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value">$10</div>
                </div>
            </div>
            <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                <div className="row align-items-center full-width">
                    <div className="col-6">
                        <div className="estimate__title"> Total Amount Due</div>
                    </div>
                    <div className="col-4 offset-2">
                        <div className="estimate__value"> $360.05</div>
                    </div>
                </div>
            </div>
            <div className="payment-buttons d-none js-payment-closure">
                <button type="button" className="button max-160 js-get-report"> Get report</button>
            </div>
            {/* <!-- Payment closure section END --> */}
        </div>
    </div>
    </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
    </TabPanel>
    <TabPanel className="posted-ticket-body-panel">
    <Tabs className="ticket-tab"  style={{position:"relative"}}>
    <div className="ticket-header">
        <TabList className="ticket-header__list ticket-list">
            <Tab className="ticket-header-list-item" data-tab="ticket">
                <a href="#"> Ticket</a>
            </Tab>
            <Tab className="ticket-header-list-item " data-tab="dialog">
                <Link to={"/client-dashboard/dialogs/dialogs"}>Dialog</Link>
            </Tab>
            <Tab className="ticket-header-list-item ">
                <a href="#"> Files </a>
            </Tab>
            <Tab className="ticket-header-list-item  disabled" data-tab="payment">
                <a href="#"> Payment</a>
            </Tab>
        </TabList>
    </div> 
    {/* <!-- Ticket info START --> */}  
    <TabPanel className="post-ticket-body"  data-tab="ticket" id="ticketd" >
    <div className="ticket-info">
    <h2 className="ticket__name">
            Test Automation Strategies
    </h2>
        <div className="ticket__details-row">
            <p className="ticket__category">
                <span className="category--line"> Category: </span>
                <span className="t-category" style={{ color: "#6c757d" }}> Cloud Server </span>
            </p>
            <p className="ticket__rate ticket__request">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0</span>
                <span className="category--line"> requests</span>
            </p>


        </div>

        <div className="ticket__details-row">
            <p className="ticket__date">

                <span className="time--line">Created On:</span>
                <span className="t-date"> December 5, 2019 06:23 PM </span>

            </p>
            <p className="ticket__rate-2">
                <span
                    style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0
            </span>
                <span className="description--line">views</span>
            </p>
        </div>

        <div className="ticket__description description--line">
            Project description

        <button className="button js-show-modal" style={{ marginTop: "-30px", width: "160px", float: "right", cursor: "pointer" }}
                data-modal-id="ticket-cancel-confirmation">Cancel</button>
        </div>

        <p className="ticket__description-text"> We talked about tool selection. But selecting the
            right tool is just the beginning. Some managers have the misconception that if they
            select the right tool, they can easily automate anything. Beware, automation tools do
            not give you everything. They make the process easier. But you need skilled resources to
            complete the process.

            Often automation tools are buggy and they stuck in identifying complex objects on the
            application. The resources you hire, if they are skilled, come up with a workaround
            which takes the process forward. Otherwise, if you don’t hire good resources, Tool alone
        cannot guarantee successful automation. </p>

        <div className="ticket__description description--line">
            Skills required
    </div>
        <p className="ticket__description-text skills__list">

            <a href="#" className="skills__item">Server Manager</a>

        </p>
        <div className="ticket__description description--line">
            Attachments
    </div>
        <div className="ticket__description-text">
            <div className="file_uploaded">
                <span className="file_uploaded__icon">
                    <i className="icon-file"></i>
                </span>
                <a href="#"
                    target="_blank" className="ui medium image">
                    <span className="file_uploaded__name">Capturea.PNG</span>
                    <span className="file_uploaded__size">1219 kB</span>
                </a>
            </div>
        </div>

        <hr />
        <h3 className="applied-experts__header">Applied experts</h3>
    </div>
    </TabPanel>
    {/* <!-- Ticket info END --> */} 
    {/* <!-- Ticket dialog START --> */}
    <TabPanel className="post-ticket-body" data-tab="dialog" >
    <div className="ticket-info">
            <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket dialog END --> */}
    {/* <!-- Ticket files START --> */}
    <TabPanel className="post-ticket-body" >
    <div className="ticket-info">
    <div className="dailog-body-content">
            <ul className="messages"></ul>
            <form action="#" className="dailog-form">
                <input type="text" placeholder="Here will be written the message" className="input" id="usermessage" />
                <button type="button" className="button new-message-container__send-button"id="send-button"> Send</button>
                <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                </label>
            </form>
            </div>
    </div>
    </TabPanel>
    {/* <!-- Ticket files END --> */}
    {/* <!-- Ticket payment START --> */}
    <TabPanel className="" data-tab="contract" data-tab-userinfo="77" style={{ display: "block" }}>
    <div className="ticket-info">
        <h2 className="ticket__name"> Hire details </h2>
        <div className="applied-experts__list expert-lineitem expert-line-static">
            <div className="expert-lineitem__img">{/* <!-- <img src="" alt=""> --> */}</div>
            <div className="expert-lineitem__info-wrapper" style={{ width: "100%" }}>
                <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">

                        <a href="#" className="card-header-right text-right card-link d-block">
                            <p className="expert-lineitem__name"> Muhammad Asif </p>
                        </a>
                        <p className="expert-lineitem__title">
                            <span className="d-none d-md-inline">Software Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contract__title"> Laravel Livewire Expert Required Testing Directly A S Signed </div>
        <div className="contract__row contract__row--title">
            <p>I need a strong Laravel developer to take over my current Laravel + Livewire project
                ... Need an expert in Laravel to work on many different projects Need ... Full-stack
            </p>
            <button className="button--no-style button--edit">
                <img src={pencil} alt="edit button" />
                <span>Edit</span>
            </button>
        </div>

        <div className="contract__row contract__row--flex">
            {/* <!--START FIXED-RATE--> */}
            <div className="contract-info-block js-fixed ">
                <h2 className="contract-info-block__header">Fixed Price</h2>
                <div className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                    <span>$</span>
                    <span className="js-edit-target-amount" id="fixed_sapn77"></span>
                    <label className="input__wrapper mb-0 hide">
                        <input type="text" className="input rate_value_get" placeholder="Hourly rate" name="contract-fixed-rate" data-uuid="77" id="fixed_rate77" />
                    </label>
                </div>
                <button type="button" className="button--no-style button--edit js-edit-button">
                    <img src={pencil} alt="edit button" />
                    <span>Edit</span>
                </button>
            </div>
            <div className="contract-info-block">
                <input type="hidden" id="type77" value="fixed" />
                <input type="hidden" id="contract_fixed_value77" value="" />
                <div style={{ fontWeight: 500, fontSize: "20PX", display: "none" }}>$<span id="fixedvalue77">170</span> / week</div>
            </div>
        </div>
        <a href="#" className="contract__switch js-contract__switch" style={{ display: "none" }}>Want to switch to Fixed price?</a>
        {/* <!--END FIXED-RATE--> */}
        <h2 className="mb-0">Add Payment Method</h2>
        <p className="post-ticket__subtitle">
            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay
            for done work
        </p>
        <button className="button button--add-payment-2 js-show-modal js-button-add-payment-method" data-modal-id="payment-method-add-modal"> 
        <span className="text " >Add a payment method</span>
        </button>
        <h2 className="mt-5 mb-0">Details for your Expert</h2>
        <p className="post-ticket__subtitle mb-2">
            Give your Expert more info about the project or something additional
        </p>
        <label className="input__wrapper mb-2">
            <textarea className="input height-150" name="description" placeholder="Dscribe what's need to be done..." maxLength={2000} id="description77"></textarea>
            <input type="hidden" id="user_id77" value="97" />
            <input type="hidden" id="expert_id77" value="77" />
            <input type="hidden" id="ticket_id77" value="225" />
            <p className="input__notification">Proffesion title is required</p>
        </label>

        <p className="post-ticket__subtitle d-block d-md-none">
        Attach necessary files to show ideas of your project more understandable
        </p>
        <div id="multiple-upload"></div>
        <div className="fileupload__wrapper file_upload  mb-4 mb-md-5">
            <div className="file_upload__label"></div>
            <input type="file" name="fileupload" value="" id="upload-file" multiple
                className="visually-hidden" />
            <label htmlFor="fileupload" className="fileupload__button">
            <span>+</span> Upload Files
            </label>
            <p className="post-ticket__subtitle d-none d-md-block">Attach necessary files to show
            ideas of your project more understandable</p>
            </div>
        <label className="checkbox__wrapper checkbox__wrapper--2 mb-3 mt-3">
            <input type="checkbox" className="checkbox checkbox--2" />
            <div className="checkbox__label">I Agree on BTE Terms &amp; Conditions</div>
        </label>
        <div className="payment-buttons">
        <button type="button" className="button max-160 js-show-modal" data-modal-id="ticket-posted-modal">
                Hire this Expert
        </button>
        <button className="button--no-style link js-discart-contract">Discard</button>
        </div>

        {/* <!-- Payment closure section START --> */}
        <h2 className="ticket__name d-none js-payment-closure"> Payment closure </h2>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Total Expert Amount </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $400 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> Initial Deposit </div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200</div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title">Balance</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value"> $200 </div>
                </div>
            </div>
        </div>
        <div className="ticket__details-row payment-row d-none js-payment-closure">
            <div className="row align-items-center full-width">
                <div className="col-6">
                    <div className="estimate__title"> BTE Collaboration charges</div>
                </div>
                <div className="col-4 offset-2">
                    <div className="estimate__value">$10</div>
                </div>
            </div>
            <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                <div className="row align-items-center full-width">
                    <div className="col-6">
                        <div className="estimate__title"> Total Amount Due</div>
                    </div>
                    <div className="col-4 offset-2">
                        <div className="estimate__value"> $360.05</div>
                    </div>
                </div>
            </div>
            <div className="payment-buttons d-none js-payment-closure">
                <button type="button" className="button max-160 js-get-report"> Get report</button>
            </div>
            {/* <!-- Payment closure section END --> */}
        </div>
    </div>
    </TabPanel>
            {/* <!-- Ticket info END --> */}
        </Tabs>
    </TabPanel>
    </Tabs>
      </div>
    );
  }
}

export default FlatData;
