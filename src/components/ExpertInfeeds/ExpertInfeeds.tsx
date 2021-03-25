import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import archive from "../app_assets/img/archive-blue.svg"
import archiveWhite from "../app_assets/img/archive-white.svg"
import message from "../app_assets/img/message-blue.svg"
import messageWhite from "../app_assets/img/message-white.svg"
import location from "../app_assets/img/location.svg"
import pencil from "../app_assets/img/pencil.svg"
import pencilwhite from "../app_assets/img/pencil-white.svg"

const ExpertInfeeds: React.FC = () => (
  <div>
    <main className="main-content main-content--feed" style={{marginBottom: "120px",marginTop: "45px"}}>
        <div className="container container-fluid-small">
            <div className="row justify-content-center">
                <div className="d-none d-lg-block col-12 col-lg-4">
                    <h2 className="feed__title-desktop">My Feed</h2>
                    {/*
                    <!-- Feed recently viewed secttion START --> */}
                    <section className="feed__recent-setion">
                        <h4 className="feed__recently-searched-title">
                            Recently searched
                        </h4>
                        <ul className="feed__recently-searched-list">
                            <li className="feed__recently-searched-item">
                                <a href="#" className="feed__recently-searched-link">
                                    abdullah
                                </a>
                            </li>
                            <li className="feed__recently-searched-item">
                                <a href="#" className="feed__recently-searched-link">
                                    abdullah
                                </a>
                            </li>
                            <li className="feed__recently-searched-item">
                                <a href="#" className="feed__recently-searched-link">
                                    naee
                                </a>
                            </li>
                            <li className="feed__recently-searched-item">
                                <a href="#" className="feed__recently-searched-link">
                                    naeem
                                </a>
                            </li>
                            <li className="feed__recently-searched-item">
                                <a href="#" className="feed__recently-searched-link">
                                    asif
                                </a>
                            </li>
                        </ul>
                    </section>
                    {/*
                    <!-- Feed recently viewed secttion END --> */}

                    {/*
                    <!-- Feed category pool START --> */}
                    <section className="feed__category-pool">
                        <div className="feed__category-pool-header">
                            <h4 className="feed__categor-pool-title">
                                My Category pool
                            </h4>

                            <a href="#"
                                className="button--no-style button--edit feed__category-edit js-show-modal-skills"
                                data-modal-id="feed-category-modal"
                                data-skills-list="Cloud, Network, Security test, Marketing, Design, Business analitycs">
                                <img src={pencilwhite} alt="edit button"
                                    className="hover" />
                                <img src={pencil} alt="edit button" className="hide-hover" />
                                <span className="visually-hidden">Edit</span>
                            </a>
                        </div>
                        <div className="feed__pool">


                            <a href="#" className="feed__link feed__link--with-p">
                                UI/UX
                            </a>
                            <a href="#" className="feed__link feed__link--with-p">
                                Backend
                            </a>
                            <a href="#" className="feed__link feed__link--with-p">
                                Website
                            </a>

                        </div>
                    </section>
                    {/*
                    <!-- Feed category pool END --> */}

                    {/*
                    <!-- Feed skills pool START --> */}
                    <section className="feed__skills-pool">
                        <div className="feed__skills-pool-header">
                            <h4 className="feed__skills-pool-title">
                                My skills
                            </h4>

                            <a href="#"
                                className="button--no-style button--edit feed__category-edit js-show-modal-skills"
                                data-modal-id="feed-skill-modal"
                                data-skills-list="Cloud, Network, Security test, Marketing, Design, Business analitycs">
                                <img src={pencilwhite} alt="edit button"
                                    className="hover" />
                                <img src={pencil} alt="edit button" className="hide-hover" />
                                <span className="visually-hidden">Edit</span>
                            </a>
                        </div>
                        <div className="feed__pool">



                            <a href="#" className="feed__link feed__link--with-p">
                                Figma
                            </a>

                            <a href="#" className="feed__link feed__link--with-p">
                                AdobeXD
                            </a>

                            <a href="#" className="feed__link feed__link--with-p">
                                Shopify
                            </a>

                            <a href="#" className="feed__link feed__link--with-p">
                                HTML5
                            </a>

                            <a href="#" className="feed__link feed__link--with-p">
                                Django
                            </a>
                        </div>
                    </section>

                    {/*
                    <!-- Feed skills pool END --> */}


                </div>


                <div className="col-12 col-lg-8">
                    <div className="search-box-wrapper" style={{position:"relative"}}>
                        <form action="#" method="post"
                            id="search-box" className="">
                            <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU" />
                            <label className="input__wrapper input__wrapper--search">
                                <input type="text" className="input input-seach" placeholder="Search a Ticket"
                                    name="search_ticket" />
                                <button type="submit" className="button button--no-style">
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

                    <div className="tile tile--2 tile--pool-panel d-md-block d-lg-none">
                        <ul className="feed__pool-list">
                            <li className="feed__pool-li">
                                <h4 className="feed__pool-li-title">
                                    My Category pool
                                </h4>
                                <a href="#"
                                    className="button--no-style button--edit feed__category-edit js-show-modal-skills"
                                    data-modal-id="feed-category-modal"
                                    data-skills-list="Cloud, Network, Security test, Marketing, Design, Business analitycs">
                                    <img src={pencilwhite} alt="edit button"
                                        className="hover" />
                                    <img src={pencil} alt="edit button"
                                        className="hide-hover" />
                                    <span className="visually-hidden">Edit</span>
                                </a>
                            </li>
                            <li className="feed__pool-li">
                                <h4 className="feed__pool-li-title">
                                    My skills
                                </h4>
                                <a href="#"
                                    className="button--no-style button--edit feed__category-edit js-show-modal-skills"
                                    data-modal-id="feed-skill-modal"
                                    data-skills-list="Cloud, Network, Security test, Marketing, Design, Business analitycs">
                                    <img src={pencilwhite} alt="edit button"
                                        className="hover" />
                                    <img src={pencil} alt="edit button"
                                        className="hide-hover" />
                                    <span className="visually-hidden">Edit</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="tile tile--2">
                        <section className="feed">
                            <h2 className="feed__header">
                                <span className="d-none js-feed-search-label">Antivirus</span>
                                <span className="d-inline">My feed</span>
                            </h2>
                            <ul className="feed__list">
                                {/*
                                <!-- list item in the feed START --> */}
                                <li id="newticket"></li>
                                <li className="feed__list-element feed-item">
                                    <div className="feed-item__header">

                                        <h3 className="feed-item__title">
                                            <a href="#"> Skype Voice not consistent</a>
                                        </h3>
                                        <a href="#" className="expert-lineitem__action feed__cta">
                                            <img src={archive} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={archiveWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Archive</span>
                                        </a>


                                        {/*
                                        <!-- <a href="#" className="expert-lineitem__action feed__cta">
                          <img src="/public/app_assets/img/delete-blue.svg" alt="archive icon" className="hide-hover-mobile-only" />
                            <img src="/public/app_assets/img/delete-white.svg" alt="archive icon" className="hover-mobile-only" />
                              <span className="d-none d-md-inline">Delete</span>
                                        </a> --> */}

                                        <a href="#" className="expert-lineitem__action feed__cta feed__cta--bordered">
                                            <img src={message} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={messageWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Message</span>
                                        </a>
                                    </div>
                                    <div className="feed-item__date">
                                        16 July 2020
                                    </div>
                                    <div className="feed-item__details">
                                        <div className="feed-item__posted-by d-none d-md-flex">
                                            Posted by
                                        </div>
                                        <div className="feed-item__name">
                                            Abdullah Ahmad
                                        </div>
                                        <div className="expert-lineitem__rating">
                                            <div className="stars-wrapper stars-wrapper--static">
                                                <label htmlFor="r1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
                                                        <g id="star_with_fill" data-name="star with fill"
                                                            transform="translate(0)">
                                                            <path id="Path_91" data-name="Path 91"
                                                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                        </g>
                                                    </svg>
                                                </label>
                                                <input type="radio" className="visually-hidden" value="5" name="rating"
                                                    id="r5" checked />
                                            </div>
                                        </div>
                                        <div className="expert-lineitem__location">
                                            <img src={location} alt="location icon" />
                                            <span className="d-none d-md-inline">

                                            </span>
                                            <span className="d-inline">Aus</span>
                                        </div>
                                    </div>
                                    <div className="feed-item__description line-2">Internet connection failed Internet
                                        connection failed Internet connection failed Internet connection failed Internet
                                        connection failedInternet connection failedInternet connection failedInternet
                                        connection failedInternet connection failed Internet connection failedInternet
                                        connection failed Internet connection failed </div>
                                    <a href="#">More</a>

                                    <div className="feed__skills">
                                        <a href="#" className="feed-item__skill">
                                            Figma
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            Marvel
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            Axure
                                        </a>
                                    </div>
                                </li>
                            <li className="feed__list-element feed-item">
                                    <div className="feed-item__header">

                                        <h3 className="feed-item__title">
                                            <a href="#"> Skype Voice not consistent</a>
                                        </h3>
                                        <a href="#" className="expertlineiteaction">
                                            <span>Applied to the job</span>
                                        </a>


                                        {/*
                                        <!-- <a href="#" className="expert-lineitem__action feed__cta">
                          <img src="/public/app_assets/img/delete-blue.svg" alt="archive icon" className="hide-hover-mobile-only" />
                            <img src="/public/app_assets/img/delete-white.svg" alt="archive icon" className="hover-mobile-only" />
                              <span className="d-none d-md-inline">Delete</span>
                                        </a> --> */}

                                        <a href="#" className="expert-lineitem__action feed__cta feed__cta--bordered">
                                            <img src={message} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={messageWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Message</span>
                                        </a>
                                    </div>
                                    <div className="feed-item__date">
                                        16 July 2020
                                    </div>
                                    <div className="feed-item__details">
                                        <div className="feed-item__posted-by d-none d-md-flex">
                                            Posted by
                                        </div>
                                        <div className="feed-item__name">
                                            Abdullah Ahmad
                                        </div>
                                        <div className="expert-lineitem__rating">
                                            <div className="stars-wrapper stars-wrapper--static">
                                                <label htmlFor="r1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
                                                        <g id="star_with_fill" data-name="star with fill"
                                                            transform="translate(0)">
                                                            <path id="Path_91" data-name="Path 91"
                                                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                        </g>
                                                    </svg>
                                                </label>
                                                <input type="radio" className="visually-hidden" value="5" name="rating"
                                                    id="r5" checked />
                                            </div>
                                        </div>
                                        <div className="expert-lineitem__location">
                                            <img src={location} alt="location icon" />
                                            <span className="d-none d-md-inline">

                                            </span>
                                            <span className="d-inline">Aus</span>
                                        </div>
                                    </div>
                                    <div className="feed-item__description line-2">SAPeDMS configuration has a
                                        vulnerability , looking for someone to fix and secure the SOD and Access review
                                        for Corporate users. SAPeDMS configuration has a vulnerability , looking for
                                        someone to fix and secure the SOD and Access review for Corporate users. SAPeDMS
                                        configuration has a vulnerability , looking for someone to fix and secure the
                                        SOD and Access review for Corporate users.


                                        SAPeDMS configuration has a vulnerability , looking for someone to fix and
                                        secure the SOD and Access review for Corporate users. </div>
                                    <a href="#">More</a>

                                     <div className="feed__skills">
                                        <a href="#" className="feed-item__skill">
                                            InVision Studio
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            AdobeXD
                                        </a>
                                    </div>
                                </li>



                                <li className="feed__list-element feed-item">
                                    <div className="feed-item__header">

                                        <h3 className="feed-item__title">


                                            <a href="#"> Welcome Ticket for Portal Awareness</a>



                                        </h3>


                                        <a href="#" className="expert-lineitem__action feed__cta">
                                            <img src={archive} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={archiveWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Archive</span>
                                        </a>


                                        {/*
                                        <!-- <a href="#" className="expert-lineitem__action feed__cta">
                                                          <img src="/public/app_assets/img/delete-blue.svg" alt="archive icon" className="hide-hover-mobile-only" />
                                                            <img src="/public/app_assets/img/delete-white.svg" alt="archive icon" className="hover-mobile-only" />
                                                              <span className="d-none d-md-inline">Delete</span>
                                        </a> --> */}

                                        <a href="#" className="expert-lineitem__action feed__cta feed__cta--bordered">
                                            <img src={message} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={messageWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Message</span>
                                        </a>
                                    </div>
                                    <div className="feed-item__date">
                                        08 July 2020





                                    </div>
                                    <div className="feed-item__details">
                                        <div className="feed-item__posted-by d-none d-md-flex">
                                            Posted by
                                        </div>
                                        <div className="feed-item__name">
                                            Abdullah Ahmad
                                        </div>
                                        <div className="expert-lineitem__rating">
                                            <div className="stars-wrapper stars-wrapper--static">
                                                <label htmlFor="r1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
                                                        <g id="star_with_fill" data-name="star with fill"
                                                            transform="translate(0)">
                                                            <path id="Path_91" data-name="Path 91"
                                                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                        </g>
                                                    </svg>
                                                </label>
                                                <input type="radio" className="visually-hidden" value="5" name="rating"
                                                    id="r5" checked />
                                            </div>
                                        </div>
                                        <div className="expert-lineitem__location">
                                            <img src={location} alt="location icon" />
                                            <span className="d-none d-md-inline">

                                            </span>
                                            <span className="d-inline ">Aus</span>
                                        </div>
                                    </div>
                                    <div className="feed-item__description line-2">Can you please fix my Server, Can you
                                        please fix my ServerCan you please fix my ServerCan you please fix my ServerCan
                                        you please fix my ServerCan you please fix my ServerCan you please fix my
                                        ServerCan you please fix my ServerCan you please fix my ServerCan you please fix
                                        my ServerCan you please fix my ServerCan you please fix my Server </div>
                                    <a href="#">More</a>

                                    <div className="feed__skills">
                                        <a href="#" className="feed-item__skill">
                                            Figma
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            MySQL
                                        </a>
                                    </div>
                                </li>








                                <li className="feed__list-element feed-item">
                                    <div className="feed-item__header">

                                        <h3 className="feed-item__title">


                                            <a href="#"> Ticket Review Page and Ticket Post Message</a>



                                        </h3>


                                        <a href="#" className="expert-lineitem__action feed__cta">
                                            <img src={archive} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={archiveWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Archive</span>
                                        </a>


                                        {/*
                                        <!-- <a href="#" className="expert-lineitem__action feed__cta">
                                                                                  <img src="/public/app_assets/img/delete-blue.svg" alt="archive icon" className="hide-hover-mobile-only" />
                                                                                    <img src="/public/app_assets/img/delete-white.svg" alt="archive icon" className="hover-mobile-only" />
                                                                                      <span className="d-none d-md-inline">Delete</span>
                                                                                </a> --> */}

                                        <a href="#" className="expert-lineitem__action feed__cta feed__cta--bordered">
                                            <img src={message} alt="archive icon"
                                                className="hide-hover-mobile-only" />
                                            <img src={messageWhite} alt="archive icon"
                                                className="hover-mobile-only" />
                                            <span className="d-none d-md-inline">Message</span>
                                        </a>
                                    </div>
                                    <div className="feed-item__date">
                                        07 July 2020





                                    </div>
                                    <div className="feed-item__details">
                                        <div className="feed-item__posted-by d-none d-md-flex">
                                            Posted by
                                        </div>
                                        <div className="feed-item__name">
                                            Abdullah Ahmad
                                        </div>
                                        <div className="expert-lineitem__rating">
                                            <div className="stars-wrapper stars-wrapper--static">
                                                <label htmlFor="r1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
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
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                        height="14.112" viewBox="0 0 14.798 14.112">
                                                        <g id="star_with_fill" data-name="star with fill"
                                                            transform="translate(0)">
                                                            <path id="Path_91" data-name="Path 91"
                                                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                                                        </g>
                                                    </svg>
                                                </label>
                                                <input type="radio" className="visually-hidden" value="5" name="rating"
                                                    id="r5" checked />
                                            </div>
                                        </div>
                                        <div className="expert-lineitem__location">
                                            <img src={location} alt="location icon" />
                                            <span className="d-none d-md-inline">

                                            </span>
                                            <span className="d-inline ">Aus</span>
                                        </div>
                                    </div>
                                    <div className="feed-item__description line-2">Check the Final Message on Screen
                                        Ticket Review Page and Ticket Post Message
                                        Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post
                                        Message Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket
                                        Post Message
                                        Ticket Review Page and Ticket Post Message Ticket Review Page and Ticket Post
                                        Message </div>
                                    <a href="#">More</a>

                                    <div className="feed__skills">
                                        <a href="#" className="feed-item__skill">
                                            Figma
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            AdobeXD
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            Redis
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            Bootstrap 3
                                        </a>
                                        <a href="#" className="feed-item__skill">
                                            SemanticUI
                                        </a>
                                    </div>
                                </li>




                                {/*
                                <!-- list item in the feed END --> */}
                            </ul>
                            <div className="feed__load-more">
                                <p className="totop" style={{display:"none"}}>
                                    <a href="#" id="top"
                                        style={{fontSize: "16px", fontWeight: "normal", color: "rgb(68, 146, 218)", display: "none"}}>Back
                                        to top</a>
                                </p>
                                <a href="#" className="feed__load-more-cta">
                                    Load more
                                </a>
                            </div>
                        </section>
                    </div>
                    <div className="tile tile--2">

                    </div>
                </div>
            </div>
        </div>

{/* modal--------- */}
{/*<!-- [Structure] feed created modal START --> */}
<div className="ui modal feed-modal" id="feed-category-modal">
    <div className="content">
        <form id="category">
            <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
            <h2 className="feed-modal__title mt-0 mb-0" 
            // autofocus
            >
                Category
            </h2>
            <p className="feed-modal__subtitle">
                Select appropriate category that fits your interests (Max 3)
            </p>

            <div className="ui search selection dropdown multiple max-3">
            <select id="mycat" name="mycat[]" multiple>
                    <option value="21" selected >UI/UX</option>
                    <option value="22">Frontend</option>
                    <option value="23" selected >Backend</option>
                    <option value="24">Full Stack</option>
                    <option value="25" selected >Website</option>
                    <option value="26">Web App</option>
                    <option value="27">Mobile App</option>
                </select><i className="dropdown icon"></i><a className="ui label" data-value="21">UI/UX<i
                        className="delete icon"></i></a><a className="ui label" data-value="23">Backend<i
                        className="delete icon"></i></a><a className="ui label" data-value="25">Website<i
                        className="delete icon"></i></a>
                        <input className="search" autoComplete="off" tabIndex={0}/><span
                    className="sizer"></span>
                <div className="text"></div>
                <div className="menu" tabIndex={-1}>
                    <div className="item active filtered" data-value="21">UI/UX</div>
                    <div className="item selected filtered" data-value="22">Frontend</div>
                    <div className="item active filtered" data-value="23">Backend</div>
                    <div className="item filtered" data-value="24">Full Stack</div>
                    <div className="item active filtered" data-value="25">Website</div>
                    <div className="item filtered" data-value="26">Web App</div>
                    <div className="item filtered" data-value="27">Mobile App</div>
                    <div className="message">Max 3 selections</div>
                </div>
            </div>
            <p className="input__notification">Category is required</p>

            <p className="feed-modal__description mt-5">
                Didn't found the right category for you?
            </p>
            <a href="#" className="feed-modal__link js-show-modal" data-modal-id="feed-category-new">
                Let us know
            </a>
            <div className="feed-modal__buttons">
                <button type="submit" className="button js-modal-close" id="submit_button">
                    Save
                </button>

                <button type="button" className="button button--no-style button--cancel js-modal-close">
                    Cancel
                </button>
            </div>


        </form>
    </div>
</div>

  {/*<!-- [Structure] feed skill modal START --> */}
  <div className="ui modal feed-modal" id="feed-skill-modal">
  <div className="content">
    <form>
        <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/>
        <h2 className="feed-modal__title mt-0 mb-0">
            Skill
        </h2>
        <p className="feed-modal__subtitle">
            Select appropriate skills that fits your abilities
        </p>
        <div className="ui selection search dropdown multiple max-10"><select id="skills" name="skills[]" multiple >
                <option value="33" selected >Figma</option>
                <option value="34">InVision Studio</option>
                <option value="35" selected >AdobeXD</option>
                <option value="36">Marvel</option>
                <option value="37">Axure</option>
                <option value="49">PHP</option>
                <option value="50">.NET</option>
                <option value="51">Wordpress</option>
                <option value="52" selected >Shopify</option>
                <option value="53" selected >HTML5</option>
                <option value="54">CSS</option>
                <option value="55">Redis</option>
                <option value="56" selected >Django</option>
                <option value="57">Grathene</option>
                <option value="58">REST</option>
                <option value="59">MySQL</option>
                <option value="60">DynamoDB</option>


            </select><i className="dropdown icon"></i><a className="ui label" data-value="33">Figma<i
                    className="delete icon"></i></a><a className="ui label" data-value="35">AdobeXD<i
                    className="delete icon"></i></a><a className="ui label" data-value="52">Shopify<i
                    className="delete icon"></i></a><a className="ui label" data-value="53">HTML5<i
                    className="delete icon"></i></a><a className="ui label" data-value="56">Django<i
                    className="delete icon"></i></a>
                    <input className="search" autoComplete="off" tabIndex={0}/><span
                className="sizer"></span>
            <div className="text"></div>
            <div className="menu" tabIndex={-1}>
                <div className="item active filtered" data-value="33">Figma</div>
                <div className="item selected" data-value="34">InVision Studio</div>
                <div className="item active filtered" data-value="35">AdobeXD</div>
                <div className="item" data-value="36">Marvel</div>
                <div className="item" data-value="37">Axure</div>
                <div className="item" data-value="49">PHP</div>
                <div className="item" data-value="50">.NET</div>
                <div className="item" data-value="51">Wordpress</div>
                <div className="item active filtered" data-value="52">Shopify</div>
                <div className="item active filtered" data-value="53">HTML5</div>
                <div className="item" data-value="54">CSS</div>
                <div className="item" data-value="55">Redis</div>
                <div className="item active filtered" data-value="56">Django</div>
                <div className="item" data-value="57">Grathene</div>
                <div className="item" data-value="58">REST</div>
                <div className="item" data-value="59">MySQL</div>
                <div className="item" data-value="60">DynamoDB</div>
            </div>
        </div>
        <p className="input__notification">Category is required</p>


        <p className="feed-modal__description mt-5">
            Didn't found the right skill for you?
        </p>
        <a href="#" className="feed-modal__link js-show-modal" data-modal-id="feed-skill-new">
            Let us know
        </a>

        <div className="feed-modal__buttons">
            <button type="button" className="button js-modal-close" id="submit_button_skills">
                Save
            </button>

            <button type="button" className="button button--no-style button--cancel js-modal-close">
                Cancel
            </button>
        </div>
    </form>
</div>
        </div>


    </main>

</div>
);

export default ExpertInfeeds;
