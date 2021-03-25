import React from 'react';
import styles from './ResolutionMarket.module.css';
import theme from "../app_assets/img/1578584281demo-11-768x657.png";
import share from "../app_assets/img/share-white.svg";
import share1 from "../app_assets/img/share-1.svg";
import theme2 from "../app_assets/img/1578578306portfolio_post9.jpg";
import theme3 from "../app_assets/img/1578573407Girl-on-the-sea.jpg";
import theme4 from "../app_assets/img/15783260100.jpg";
import theme5 from "../app_assets/img/1578321003Jelly-sweets.jpg";
import theme6 from "../app_assets/img/1575830559FAST.jpg";
import theme7 from "../app_assets/img/1575814059Top+10+new+medical+technologies+of+2016.jpg";
import theme8 from "../app_assets/img/1575800558art-attractive-beautiful-458381.jpg";
import theme9 from "../app_assets/img/1575582297Web-Development00.jpeg";
import theme10 from "../app_assets/img/1575400336Optimizelyexample.png";
import facebook1 from "../app_assets/img/facebook-logo-1.svg";
import facebook2 from "../app_assets/img/facebook-logo-2.svg";
import twitter1 from "../app_assets/img/twitter-logo-silhouette-1.svg";
import twitter2 from "../app_assets/img/twitter-logo-silhouette-2.svg";
import gmail1 from "../app_assets/img/gmail-logo-1.svg";
import gmail2 from "../app_assets/img/gmail-logo-2.svg";
import whatsapp1 from "../app_assets/img/whatsapp-logo-1.svg";
import whatsapp2 from "../app_assets/img/whatsapp-logo-2.svg";
import { Button, Divider, Image, Transition } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {getresolutions } from '../../actions/resolutions';

function ResolutionMarketabc() {

    function autoLogin() {
        fetch(`https://api.backtoexperts.com/api/client-dashboard/resolution_market`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token)
            console.log(data);
        });
    }
return( <div></div> )}


const ResolutionMarket: React.FC = () => (


  <div className="container container-fluid-small">
  <main className="main-content main-content--dashboard">
 
     <div className="container container-fluid-small">
    <div className="row justify-content-center">
   
         <div className="col-4 d-none d-lg-block">
                <h2 className="mt-0 mb-0 my-experts-title">
                My Resolutions list
                </h2>
            </div>

            <div className="col-12 col-lg-8 order-0 search-box-wrapper" style={{position:"relative"}}>
                <form action="#" method="post"
                    id="search-box" className="">
                     <label
                        className="input__wrapper input__wrapper--search">
                        <input type="text" className="input input-seach" placeholder="Search Expert" name="expert_name"/>
                        <button type="submit" className="button button--no-style">
                            <i className="search-icon-blue"></i>
                        </button>
                    </label>
                </form>
                {/* <a href="#" type="button" className="button rounded-small post-a-ticket-cta max-160"
                    >
                    <span className="d-none d-md-inline">Post a ticket</span>
                    <span className="d-inline d-md-none">+</span>
                </a> */}
            </div>

        <div className="col-12 feed__wrapper feed__wrapper--resolutions order-1">

            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">Responsive Real Estate WordPress Theme</h2>
                        <p className="my-resolutions__subtitle">by Mrasif Mrasif1</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (0)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (1)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                            checked/>
                                    </div>
                                </div>
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $10

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>1</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item"
                               >
                                <b>0</b> Comments
                            </li>

                        </ul>
                        <div className="my-resolutions__buttons">
                            <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover"/>
                                    <img src={facebook2} alt="share facebook"
                                        className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>

                                
                                <button type="button"
                                    className="button button--white button--square button--square-small ">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover"/>
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover"/>
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover"/>
                                <img src={share} alt="share" className="hover"/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#"
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme2} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">The database development can be built into DevOps!”</h2>
                        <p className="my-resolutions__subtitle">by Mrasif Mrasif1</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (0)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (3)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $2500

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                            <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover"/>
                                    <img src={facebook2} alt="share facebook"
                                        className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover"/>
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover"/>
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover"/>
                                <img src={share} alt="share" className="hover"/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme3} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">my new ticket 17 sep</h2>
                        <p className="my-resolutions__subtitle">by Muhammad Asif</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (0)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (0)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $45

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover"/>
                                    <img src={facebook2} alt="share facebook"
                                        className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover"/>
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover"/>
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover"/>
                                <img src={share} alt="share" className="hover"/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme4} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">The geolocation object</h2>
                        <p className="my-resolutions__subtitle">by Muhammad Asif</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (3)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (3)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                        <input type="radio" className="visually-hidden" value="5" name="rating" id="r5" checked />
                                    </div>
                                </div>
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $1

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                            <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover" />
                                    <img src={facebook2} alt="share facebook"
                                        className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover" />
                                    <img src={twitter2}
                                        alt="share twitter" className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover" />
                                    <img src={gmail2} alt="share gmail"
                                        className="hover" />
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover" />
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover" />
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover" />
                                <img src={share} alt="share" className="hover" />
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme5} alt="logo" />



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">Resolution test 01_edit</h2>
                        <p className="my-resolutions__subtitle">by Muhammad Asif</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (3)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (0)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $45

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                            <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover"/>
                                    <img src={facebook2} alt="share facebook"
                                        className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover"/>
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover"/>
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover"/>
                                <img src={share} alt="share" className="hover"/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme6} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">December 8 2019</h2>
                        <p className="my-resolutions__subtitle">by Expert Naeem</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (2)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (0)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $60

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>1</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>4</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover"/>
                                    <img src={facebook2} alt="share facebook"
                                        className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover"/>
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover"/>
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover"/>
                                <img src={share} alt="share" className="hover"/>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme7} alt="logo"/>



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">Top 10 new medical technologies of 2019</h2>
                        <p className="my-resolutions__subtitle">by Mrasif Mrasif1</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (3)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (3)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1"/>

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2"/>

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3"/>

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4"/>

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $10

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item">
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover" />
                                    <img src={facebook2} alt="share facebook"
                                        className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover"/>
                                    <img src={twitter2}
                                        alt="share twitter" className="hover"/>
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover"/>
                                    <img src={gmail2} alt="share gmail"
                                        className="hover"/>
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover" />
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover" />
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover" />
                                <img src={share} alt="share" className="hover" />
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme8} alt="logo" />



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">iam resolution</h2>
                        <p className="my-resolutions__subtitle">by Mrasif Mrasif1</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (0)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (0)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $8

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item" >
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover" />
                                    <img src={facebook2} alt="share facebook"
                                        className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover" />
                                    <img src={twitter2}
                                        alt="share twitter" className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover" />
                                    <img src={gmail2} alt="share gmail"
                                        className="hover" />
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover" />
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover" />
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover" />
                                <img src={share} alt="share" className="hover" />
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://dev.backtoexperts.com/public/client_dashboard/resolution_market/eyJpdiI6IlA4WjhiZlZFUEZsK281ZUY2VEF2bWc9PSIsInZhbHVlIjoiMnljNVF2Z3lwQzVcL2txdmg5dkFxRFE9PSIsIm1hYyI6IjUwYjEzNmE3ZTU4MTcwYTY0MzE0ZDVlNmI2MDM0Mzk5NzliOWIyYTdkMTM3MDdiNGQwMDE0MDMzY2MxZTEyNGQifQ%3D%3D&quot;"
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme9} alt="logo" />



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">Web development in 5 minutes</h2>
                        <p className="my-resolutions__subtitle">by Expert Naeem</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (3)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (2)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $99

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item">
                                <b>0</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover" />
                                    <img src={facebook2} alt="share facebook"
                                        className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover" />
                                    <img src={twitter2}
                                        alt="share twitter" className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover" />
                                    <img src={gmail2} alt="share gmail"
                                        className="hover" />
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover" />
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover" />
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover" />
                                <img src={share} alt="share" className="hover" />
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href=""
                className="tile tile--2 tile--resolutions">
                <div className="my-resolutions__img-wrapper">
                    <img src={theme10} alt="logo" />



                </div>
                <div className="my-resolutions__info">
                    <div className="my-resolutions__info-left">
                        <h2 className="my-resolutions__title">Test android</h2>
                        <p className="my-resolutions__subtitle">by Muhammad Asif</p>

                        <div className="my-resolutions__category d-none d-md-block">
                            Category: <span>Security</span>
                        </div>
                        <div className="my-resolutions__category d-none d-md-block">
                            Vendor: <span>Mcafee</span>
                        </div>

                        <ul className="my-resolutions__attachments d-none d-md-block">
                            <li className="my-resolutions__attachment">

                                Screenshots with description (2)
                            </li>
                            <li className="my-resolutions__attachment">
                                Attachments (3)
                            </li>
                        </ul>
                    </div>
                    <div className="my-resolutions__info-right">
                        <div className="my-resolutions__rating">
                            <div>
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
                                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />

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
                                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />

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
                                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />

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
                                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />

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
                                <p
                                    className="my-resolutions__subtitle d-none d-md-block my-resolutions__subtitle--rating">
                                    Resolution rate
                                </p>
                            </div>
                            <div className="my-resolutions__price">
                                $5

                            </div>
                        </div>

                        <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                            <li className="my-resolutions__stats-item">
                                <b>0</b> Times Sold
                            </li>

                            <li className="my-resolutions__stats-item">
                                <b>1</b> Comments
                            </li>

                        </ul>

                        <div className="my-resolutions__buttons">
                        <Link to={'/client-dashboard/resolution_market/details'}
                             className="button button--white" style={{border:"1px solid #4492da"}}>
                                Details
                            </Link>

                            <div className="social-share hide">
                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={facebook1} alt="share facebook"
                                        className="hide-hover" />
                                    <img src={facebook2} alt="share facebook"
                                        className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={twitter1}
                                        alt="share twitter" className="hide-hover" />
                                    <img src={twitter2}
                                        alt="share twitter" className="hover" />
                                </button>

                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={gmail1} alt="share gmail"
                                        className="hide-hover" />
                                    <img src={gmail2} alt="share gmail"
                                        className="hover" />
                                </button>


                                <button type="button"
                                    className="button button--white button--square button--square-small">
                                    <img src={whatsapp1} alt="share whatsapp"
                                        className="hide-hover" />
                                    <img src={whatsapp2} alt="share whatsapp"
                                        className="hover" />
                                </button>
                            </div>

                            <button type="button"
                                className="button button--white button--square resolution-share js-resolution-share " style={{border:"1px solid #4492da"}}>
                                <img src={share1} alt="share" className="hide-hover" />
                                <img src={share} alt="share" className="hover" />
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <div className="experts-footer">
                <ul className="pagination" style={{background: "none"}}>

                    <li>
                        <a href="" className="disabled">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.813" height="12.123"
                                viewBox="0 0 7.813 12.123">
                                <path id="Path_159" data-name="Path 159"
                                    d="M-12061.334-5905.442l-5.812,5.249,5.812,4.874"
                                    transform="translate(12068.146 5906.442)" fill="none" stroke="#4492da"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                            Previous
                        </a>

                    </li>

                    <li><a href="#" className="active">1</a></li>
                    <li><a
                            href="#">2</a>
                    </li>
                    <li><a
                            href="#">3</a>
                    </li>



                    <li>
                        <a href="#">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="7.813" height="12.123"
                                viewBox="0 0 7.813 12.123" style={{transform:"rotate(180deg)"}}>
                                <path id="Path_159" data-name="Path 159"
                                    d="M-12061.334-5905.442l-5.812,5.249,5.812,4.874"
                                    transform="translate(12068.146 5906.442)" fill="none" stroke="#4492da"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            </svg>
                        </a>

                    </li>
                </ul>
                <a href="#"
                    className="link load-more-link">Load more </a>
            </div>
        </div>
    </div>
</div>



</main>
 </div>
);
export default ResolutionMarket;
