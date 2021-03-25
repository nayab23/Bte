import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import updraw2 from "../app_assets/img/undraw-process-e-90-d.svg";

class HowToAddSecondResolutions extends Component {
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
                               How to add Resolutions
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
                                            <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="category" id="category-select" multiple>
                                                <option value="" selected disabled>Please select..</option>
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
                                                <option value="" selected disabled>Please select..</option>
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
                                            <div className="ui selection search dropdown multiple max-10" id="skills-select">
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
                                                    <option value="" selected disabled>Please select..</option>
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
                                                    <option value="" selected disabled>Please select..</option>
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

                        <section className="how-add-resolutions" data-tab="get-paid">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-6 pr-3 how-add-resolutions__left-col">
                                    <ul className="progres-steps mt-5 mb-5">
                                        <li className="progres-step progres-step--active">
                                            <a href="How-to-Add-Resolution.html" className="button button--no-style">1</a>
                                        </li>
                                        <li className="progres-step progres-step--active">
                                            <a href="How-to-Add-Resolution-2.html" className="button button--no-style">2</a>
                                        </li>
                                    </ul>
                                    <h2 className="how-add-resolutions__title">
                                        How to add Resolution?
                                    </h2>
                                    <p className="how-add-resolutions__subtitle">
                                            Once you complete a Ticket it becomes
                                            <a href="../Tickets-closed.html" className="how-add-resolutions__link">"Closed Ticket"</a>
                                            at the section <b>Payments</b>
                                            of a closed ticket there is an option to <b>"Add Ticket to Resolutions"</b>.
                                            Hit that button and complete the formula
                                    </p>

                                    <h2 className="how-add-resolutions__title">
                                        Formula "Add Resolution":
                                    </h2>
                                    <p className="how-add-resolutions__subtitle">
                                        Name your Resolution by adding a relevant <b>Title</b>

                                        <br />
                                        <br />

                                        Add a meaningful picture to represent the <b>Cover</b> of your Resolution.

                                        It's the first thing a client will see.

                                        <br />
                                        <br />

                                        Description of the resolution. Tell people what is the resolution about and what value they will receive by purchasing your product
                                    </p>

                                    <h2 className="how-add-resolutions__title">
                                        Screenshots and descriptions
                                    </h2>
                                    <p className="how-add-resolutions__subtitle">
                                        This is where you bring value to the client! Make sure to add as many screenshots as needed to describe your step by step process as you were solving the task.

                                        <br />
                                        <br />

                                        Below each screenshot put a small description of the step you took, this way you will make sure people understand the screenshot.
                                    </p>
                                </div>
                                <div className="col-12 col-lg-6 d-none d-lg-flex how-add-resolutions__right-col">
                                    <img src={updraw2} alt="img" />
                                </div>

                                <div className="col-12 col-lg-6 pr-3 how-add-resolutions__left-col">
                                    <h2 className="how-add-resolutions__title mt-0">
                                        Attachments
                                    </h2>
                                    <p className="how-add-resolutions__subtitle">
                                        Be sure to help out clients with some ready to use materials and attach them in the formula. This will make clients leave better feedback on the Resolution
                                    </p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h2 className="how-add-resolutions__title mt-0">
                                        Money rate
                                    </h2>
                                    <p className="how-add-resolutions__subtitle">
                                        Put a smart price on your product and the income might become higher
                                    </p>
                                </div>
                                <div className="col-12 col-lg-12">
                                    <Link to={'/expert-dashboard/resolutions/create'} className="button resolutions__cta">  
                                        Next
                                    </Link>
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

export default HowToAddSecondResolutions;