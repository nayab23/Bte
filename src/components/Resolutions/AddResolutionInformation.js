import React, { Component } from 'react';
import pencil from "../app_assets/img/pencil.svg";

class AddResolutionInformation extends Component {
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
                                    Add Resolution information
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
                                                <div className="ui selection dropdown multiple max-3" tabIndex={0}><select
                                                        name="category" id="category-select" multiple>
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
                                                <div className="ui selection dropdown multiple max-3" tabIndex={0}><select
                                                        name="lang" id="lang-select" multiple>
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
                                                <div className="ui selection search dropdown multiple max-10"
                                                    id="skills-select">
                                                    <input type="hidden" name="skills" multiple />
                                                    <input className="search" autoComplete="off" tabIndex={0} /><span
                                                        className="sizer"></span>
                                                    <div className="default text">Select..</div>
                                                    <i className="dropdown icon" tabIndex={0}>
                                                        <div className="menu" tabIndex={-1}></div>
                                                    </i>
                                                    <div className="menu menu--with-sub-items" tabIndex={-1}>
                                                        <div className="item" data-category="Database" data-value="Delphi">
                                                            Delphi</div>
                                                        <div className="item" data-category="Database" data-value="MySQL">MySQL
                                                        </div>
        
                                                        <div className="item" data-category="Database" data-value="Oracle">
                                                            Oracle</div>
                                                        <div className="item sub-item" data-category="Database"
                                                            data-value="Oracle-MySQL">Data Protection</div>
        
                                                        <div className="item" data-category="Database" data-value="Microsoft">
                                                            Microsoft</div>
                                                        <div className="item sub-item" data-category="Database"
                                                            data-value="Microsoft-PostgreSQL">SQL 2016</div>
                                                        <div className="item sub-item" data-category="Database"
                                                            data-value="Microsoft-DB-Manager">DataBase Manager</div>
        
                                                        <div className="item" data-category="CloudServer" data-value="AWS">AWS
                                                            (Amazon Web Services)</div>
                                                        <div className="item sub-item" data-category="CloudServer"
                                                            data-value="ServerManagement">Server Management</div>
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
                                                <div className="ui selection dropdown" tabIndex={0}><select name="lang"
                                                        id="lang-select">
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
                                                <div className="ui selection dropdown" tabIndex={0}><select name="lang"
                                                        id="lang-select">
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
                                <form action="#" method="post"
                                    encType="multipart/form-data">
                                    <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="add-resolutions__section">
        
                                                <h2>Anti Virus not Functioning</h2>
                                                <div className="my-resolutions__category">
                                                    Category: <span>Security</span>
                                                </div>
                                                <div className="my-resolutions__category">
                                                    Vendor: <span>Mcafee</span>
                                                </div>
        
                                                <p><b>Project description</b></p>
                                                <p>Here Should be some info about the problem, like a description or something
                                                    here Should be some info about the problem, like a description</p>
        
                                            </div>
                                            <div
                                                className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                                                <div className="col-12 col-md-10 col-lg-7 order-1">
                                                    <h2 className="post-ticket__input-title mt-2">Resolution title</h2>
                                                    <p className="post-ticket__subtitle">
                                                        Please Name your Resolution in few words
                                                    </p>
                                                    <label className="input__wrapper">
                                                        <input type="text" className="input"
                                                            placeholder="Antivirus  not functioning" name="title" required/>
                                                        <p className="input__notification">Resolution title is required</p>
                                                    </label>
        
                                                    <h2 className="post-ticket__input-title mt-5">
                                                        Cover Image
                                                    </h2>
        
                                                    <p className="post-ticket__subtitle">
                                                        Let the client know who you are and how exactly you can help
                                                    </p>
                                                    <label className="input__wrapper mb-2">
        
                                                        <div className="cover-image cover-image--md-6" id="cover_image_0"
                                                            style={{display: "none"}}>
                                                        </div>
        
                                                        <div className="cover-image cover-image--md-6" id="cover_image">
                                                            <img src="/public/app_assets/img/photo-camera-1.svg"
                                                                className="fileUpload_cover-image" alt=""/>
                                                            <input type="file" className="hide cover" name="cover_image"/>
        
                                                        </div>
        
        
        
        
        
                                                    </label>
                                                </div>
                                                <div className="col-md-1 order-1"></div>
                                                <div className="col-12 col-lg-4 order-0 order-lg-1 resolution__sidebar">
                                                    <div>
                                                        <h2 className="post-ticket__input-title mt-4">
                                                            Access
                                                        </h2>
        
                                                        <label className="input__wrapper mt-3">
                                                            <div className="ui dropdown selection" tabIndex={0}><select
                                                                    name="url_type" id="add-resolution-privacy" required>
                                                                    <option value="" selected disabled>Select the privacy level
                                                                    </option>
                                                                    <option value="private">Available by url</option>
                                                                    <option value="public">Free to public</option>
                                                                </select><i className="dropdown icon"></i>
                                                                <div className="default text">Select the privacy level</div>
                                                                <div className="menu" tabIndex={-1}>
                                                                    <div className="item" data-value="private">Available by url
                                                                    </div>
                                                                    <div className="item" data-value="public">Free to public
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="input__notification">Expiry Date is required</p>
                                                        </label>
                                                    </div>
        
                                                    <div className="contract-info-block mt-5">
                                                        <h2 className="post-ticket__input-title mb-3">
                                                            Cost of the resolution
                                                        </h2>
                                                        <div
                                                            className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                                                            <span>$</span><span
                                                                className="js-edit-target-amount">0</span><span>/ hour</span>
                                                            <label className="input__wrapper mb-0 hide">
                                                                <input type="text" className="input" placeholder="Hourly rate"
                                                                    id="contract_rate" />
                                                                <input type="hidden" name="rate" id="rate" />
                                                            </label>
                                                        </div>
                                                        <button type="button"
                                                            className="button--no-style button--edit js-edit-button">
                                                            <img src={pencil} alt="edit button" />
                                                            <span>Edit</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div
                                                className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                                                <div className="col-12 col-md-10 col-lg-7">
                                                    <h2 className="post-ticket__input-title mt-3">
                                                        Resolution description
                                                    </h2>
        
                                                    <p className="post-ticket__subtitle"></p>
                                                    Describe how you solved this ticket problem. Make sure the description is
                                                    detailed showing step after step.
                                                    <p></p>
                                                    <label className="input__wrapper mb-2">
                                                        <textarea className="input height-150" name="description"
                                                            maxLength={2000}></textarea>
                                                        <p className="input__notification">Text is required</p>
                                                    </label>
                                                </div>
                                            </div>
        
                                            <div
                                                className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                                                <div className="col-12">
                                                    <h2 className="post-ticket__input-title mt-3">
                                                        Screenshot description
                                                    </h2>
                                                    <p className="post-ticket__subtitle">
                                                        Add some screenshots and describe them for better understanding
                                                    </p>
                                                    <div className="screenshot-add__section">
                                                        <button type="button"
                                                            className="button--no-style button--screenshot button--screenshot-remove js-screenshot-remove">
                                                            <span className="sr-only">Remove a screenshot</span>
                                                        </button>
                                                        <button type="button"
                                                            className="button--no-style button--screenshot button--screenshot-add js-screenshot-add">
                                                            <span className="sr-only">Add a screenshot</span>
                                                        </button>
                                                    </div>
                                                </div>
        
        
        
        
                                                <div
                                                    className="col-12 col-md-9 col-lg-6 mt-4 new_screens screen_shot_template screens">
                                                    <div className="screenshot-block screenshot-block--horizontal">
                                                        <label className="input__wrapper mb-2">
                                                            <div className="cover-image" id="image-holder-screenshot_0"
                                                                style={{display:"none"}}>
                                                            </div>
        
                                                            <div className="cover-image" id="image-holder2_shot_0">
                                                                <img src="/public/app_assets/img/photo-camera-1.svg" alt="" />
                                                                <input type="file" className="hide fileUpload2" id="0"
                                                                    name="screenshot0" /> </div>
                                                        </label>
                                                        <label className="input__wrapper mb-2">
                                                            <textarea className="input height-115 ta-no-resize"
                                                                name="screendescription0"
                                                                maxLength={2000}>Here Should be description of the screen shot Here Should be ...</textarea>
                                                            <p className="input__notification">Text is required</p>
                                                        </label>
                                                    </div>
                                                </div>
        
                                            </div>
        
                                            <div
                                                className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                                                <div className="col-12">
                                                    <h2 className="post-ticket__input-title mt-3">
                                                        Attachments
                                                    </h2>
                                                    <p className="post-ticket__subtitle">
                                                        If you have any files you would like to help clients with
                                                    </p>
        
                                                    <div
                                                        className="ticket__description-text opened-ticket__description-text pl-0 mt-4">
                                                        <div id="fileList"></div>
                                                        <label className="fileupload__button mt-3"> <span>+</span>
                                                            Upload Files
        
                                                            <input type="file" name="attachments[]" multiple
                                                                className="visually-hidden" id="file"
                                                                />
                                                        </label>
        
                                                    </div>
        
                                                    <label className="checkbox__wrapper checkbox__wrapper--2 mb-4 mt-4">
                                                        <input type="checkbox" className="checkbox checkbox--2" required/>
                                                        <div className="checkbox__label">
                                                            I Agree on BTE Terms &amp; Conditions
                                                        </div>
                                                    </label>
        
                                                    <div className="post-ticket__buttons mb-5 mt-4">
                                                        {/*
                                                        <!-- real button --> */}
                                                        <input type="submit"
                                                            className="button button--post button--14 js-button-post max-160"
                                                            value="Add Resolution" />
                                                        {/*
                                                        <!-- real button --> */}
        
                                                        <button type="button"
                                                            className="button button--no-style button--14  post-ticket__discard">Discard</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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

export default AddResolutionInformation;