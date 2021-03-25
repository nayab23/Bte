import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import location from "../app_assets/img/location.svg"
import silver from "../app_assets/img/silver.svg"
import pencil from "../app_assets/img/pencil.svg"

const ExpertInApplyOnTicket: React.FC = () => (
  <div>
  <main className="main-content main-content--applying">
    <div className="container container-fluid-small">
        <div className="row justify-content-center">

            <div className="col-12 feed__wrapper">
                <div className="search-box-wrapper" style={{position: "relative"}}>
                    <form action="#" id="search-box" className="">
                        <label className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search a Ticket"
                                name="search-expert"/>
                            <button type="button" className="button button--no-style">
                                <i className="search-icon-blue"></i>
                            </button>
                        </label>
                    </form>
                    <a href="#" type="button" className="button post-a-ticket-cta button--square">
                        <span className="d-flex">
                            <img src={menu} alt="menu" />
                        </span>
                    </a>
                </div>

                 <div className="tile tile--2 mb-3">
                    <div className="ticket-header">
                        <div className="ticket-header__list applying-for-job__title-wrapper">
                            <h1 className="similar-to-h2 applying-for-job__title">
                                Applying for the job
                            </h1>
                        </div>
                    </div>
                    <div className="ticket-body applying-for-job__ticket-body" data-tab="ticket">
                        <h2 className="ticket__name">Profile Hire Process</h2>
                        <div className="ticket__details-row ticket__details-row--top-aligned">
                            <div className="opened-ticket__details applying-for-job__details">
                                <div className="feed-item__name opened-ticket__name">
                                    Abdullah Ahmad
                                </div>

                                <div className="expert-lineitem__location">
                                    <img src={location} alt="location icon"/>
                                    <span className="d-inline">
                                    </span>
                                </div>

                                <div className="expert-lineitem__rating">
                                    <div className="stars-wrapper stars-wrapper--static">
                                        <label htmlFor="r1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                viewBox="0 0 14.798 14.112">
                                                <g id="star_with_fill" data-name="star with fill"
                                                    transform="translate(0)">
                                                    <path id="Path_91" data-name="Path 91"
                                                        d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                        transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                </g>
                                            </svg>
                                        </label>
                                        <input type="radio" className="visually-hidden" value="1" name="rating"
                                            id="r1" />

                                        <label htmlFor="r2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                viewBox="0 0 14.798 14.112">
                                                <g id="star_with_fill" data-name="star with fill"
                                                    transform="translate(0)">
                                                    <path id="Path_91" data-name="Path 91"
                                                        d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                        transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                </g>
                                            </svg>
                                        </label>
                                        <input type="radio" className="visually-hidden" value="2" name="rating"
                                            id="r2" />

                                        <label htmlFor="r3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                viewBox="0 0 14.798 14.112">
                                                <g id="star_with_fill" data-name="star with fill"
                                                    transform="translate(0)">
                                                    <path id="Path_91" data-name="Path 91"
                                                        d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                        transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                </g>
                                            </svg>
                                        </label>
                                        <input type="radio" className="visually-hidden" value="3" name="rating"
                                            id="r3" />

                                        <label htmlFor="r4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                viewBox="0 0 14.798 14.112">
                                                <g id="star_with_fill" data-name="star with fill"
                                                    transform="translate(0)">
                                                    <path id="Path_91" data-name="Path 91"
                                                        d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                        transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                </g>
                                            </svg>
                                        </label>
                                        <input type="radio" className="visually-hidden" value="4" name="rating"
                                            id="r4" />

                                        <label htmlFor="r5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                                                viewBox="0 0 14.798 14.112">
                                                <g id="star_with_fill" data-name="star with fill"
                                                    transform="translate(0)">
                                                    <path id="Path_91" data-name="Path 91"
                                                        d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                        transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                </g>
                                            </svg>
                                        </label>
                                        <input type="radio" className="visually-hidden" value="5" name="rating" id="r5"
                                            checked />
                                    </div>
                                </div>

                                <p className="ticket__date applying-for-job__date">
                                    September 07-2020, 02:03 AM
                                </p>
                            </div>

                        </div>

                        <div className="opened-ticket__details-row">
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Category:</span>
                                <span className="opened-ticket__detail-value">
                                    Database
                                </span>
                            </div>
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Vendor:</span>
                                <span className="opened-ticket__detail-value">
                                    Delphi

                                </span>
                            </div>
                        </div>

                        <div className="ticket__description opened-ticket__description">Project description</div>

                        <p className="ticket__description-text">
                            Profile Hire Process Profile Hire Process Profile Hire Process Profile Hire Process
                        </p>
                        <div className="ticket__description">
                            Skills required
                        </div>
                        <p className="ticket__description-text skills__list">
                            <a href="#" className="skills__item">
                                AWS
                            </a>
                        </p>
                        <div className="ticket__description">
                            Attachments
                        </div>
                        <div className="ticket__description-text opened-ticket__description-text">

                        </div>
                    </div>



















                    <div className="ticket-body">
                        <form method="post" id="send_application" action="#" className="form-check-close"
                            encType="multipart/form-data">
                            <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />
                            <input type="hidden" name="client" value="105" />
                            <div className="applying-for-job__details">
                                <div>
                                    <h2 className="mb-0">
                                        What's your rate for this job?
                                    </h2>
                                    <p className="post-ticket__subtitle">
                                        Edit or leave the default hourly rate for this job
                                    </p>

                                    <div className="contract-info-block js-hourly">
                                        <h2 className="contract-info-block__header">
                                            Hourly rate
                                        </h2>
                                        <div
                                            className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                                            <span>$</span><span className="js-edit-target-amount">100</span><span>/
                                                hour</span>
                                            <label className="input__wrapper mb-0 hide">
                                                <input type="text" className="input" placeholder="Hourly rate"
                                                    name="hourly_rate" id="hourly_rate" />
                                            </label>
                                        </div>
                                        <input type="hidden" className="input" name="hourly_rate" id="price"
                                            value="100" />
                                        <button type="button" className="button--no-style button--edit js-edit-button">
                                            <img src={pencil} alt="edit button" />
                                            <span>Edit</span>
                                        </button>
                                    </div>

                                    <div className="contract-info-block js-fixed hide">
                                        <h2 className="contract-info-block__header">
                                            Fixed Price
                                        </h2>
                                        <div
                                            className="contract-info-block__value js-edit-target js-contract-info-block__value--rate">
                                            <span>$</span><span className="js-edit-target-amount fixed">300</span>
                                            <label className="input__wrapper mb-0 hide">

                                                <input type="text" className="input" placeholder="Hourly rate"
                                                    id="fixed_rate" />
                                            </label>
                                        </div>
                                        <input type="hidden" className="input" name="fixed_rate" id="fixed" />

                                        <button type="button" className="button--no-style button--edit js-edit-button">
                                            <img src={pencil} alt="edit button" />
                                            <span>Edit</span>
                                        </button>
                                    </div>

                                </div>
                                <div>
                                    <h2 className="d-none d-lg-block">
                                        If you know the exact estimate switch to Fixed price
                                    </h2>
                                    <p className="post-ticket__subtitle mt-2">
                                        <a href="#"
                                            className="contract__switch applying-for-job__switch js-contract__switch">
                                            <span className="js-fixed">Want to switch to Fixed price?</span>
                                            <span className="js-hourly hide">Want to switch to Hourly payment?</span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <h2 className="mb-0">
                                How would you like to get paid?
                            </h2>
                            <p className="post-ticket__subtitle">
                                Add a Payment method so you'll be able to receive your funds from BTE
                            </p>

                            <a href="#"
                                className="contract__switch applying-for-job__switch js-button-add-payment-method">
                                Add Payment method
                            </a>

                            <h2 className="post-ticket__input-title mt-5">
                                Cover Letter <span style={{color:"#ff0000"}}>*</span>
                            </h2>

                            <p className="post-ticket__subtitle">
                                Let the client know who you are and how exactly you can help
                            </p>
                            <label className="input__wrapper mb-2">
                                <textarea className="input height-150" name="description" id="msg"
                                     maxLength={2000} required ></textarea>


                            </label>
                            <div id="multiple-upload"></div>

                            <div className="fileupload__wrapper applying-for-job__file_upload file_upload">
                                <div className="file_upload__label"></div>
                                <input type="file" name="attachment[]"  id="upload-file" multiple 
                                // value="fileupload"
                                    className="visually-hidden"/>
                                <label htmlFor="fileupload" className="fileupload__button" 
                                // multiple
                                > <span>+</span>
                                    Upload Files </label>
                            </div>

                            <label className="checkbox__wrapper checkbox__wrapper--2 mb-4 mt-3">
                                <input type="checkbox" className="checkbox checkbox--2" required />
                                <div className="checkbox__label">
                                    I Agree on BTE Terms &amp; Conditions
                                </div>
                            </label>
                            <input type="hidden" name="ticket_id" value="221" />

                            <div className="post-ticket__buttons">
                                <input type="submit" className="button button--post button--14 js-button-post max-160"
                                    value="Post My Application" />

                                <button type="button"
                                    className="button button--no-style button--14  post-ticket__discard">Discard</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</main>
</div>
);

export default ExpertInApplyOnTicket;
