import React, { Component } from 'react';
import share from "../app_assets/img/share-white.svg";
import share1 from "../app_assets/img/share-1.svg";

class MyResolutionList extends Component {
    render() {
        return (
            <div>
                 <main className="main-content main-content--dashboard">
    <div className="container container-fluid-small">
        <div className="row justify-content-center">

            <div className="col-12 col-md-4 order-1 d-block">
                <h2 className="mt-0 mb-0 my-experts-title">
                    My Resolutions list
                </h2>
            </div>

            <div className="col-12 col-md-8 order-0 order-md-1 order-lg-1">
                <div className="search-box-wrapper" style={{position: "relative"}}>
                    <form method="post" action="#" id="search-box"
                        className="">
                        <input type="hidden" name="_token" value="mCdabfINeuhKzzWBJ0IdEFT8ZhOTJUk3PP5IzHCU"/> 
                        <label
                            className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search a Resolution"
                                name="keyword" value=""/>
                            <a href="#" type="button" className="button button--no-style" 
                            // onclick="Search()"
                            >
                                <i className="search-icon-blue"></i>
                            </a>
                            {/* <!-- <button type="button" className="button button--no-style">
                                <i className="search-icon-blue"></i>
                            </button> --> */}
                        </label>
                    </form>


                </div>
            </div>

            <div className="col-12 feed__wrapper feed__wrapper--resolutions order-1">

                <a href="#" className="tile tile--2 tile--resolutions">
                    <div className="my-resolutions__img-wrapper">
                        <img src="/app_assets/img/Mcafee-logo1.jpg" alt="" />


                    </div>
                    <div className="my-resolutions__info">
                        <div className="my-resolutions__info-left">
                            <h2 className="my-resolutions__title">Test Feb 4</h2>
                            <p className="my-resolutions__subtitle">by Expert Naeem</p>

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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                    $0

                                </div>
                            </div>

                            <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                                <li className="my-resolutions__stats-item">
                                    <b>0</b> Times Sold
                                </li>

                                <li className="my-resolutions__stats-item"
                                    >
                                    <b>0</b> Comments
                                </li>
                            </ul>

                            <div className="my-resolutions__buttons">
                                <button type="button" className="button button--white"
                                   > Details
                                </button>

                                <div className="social-share hide">
                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/facebook-logo-1.svg" alt="share facebook"
                                            className="hide-hover"/>
                                        <img src="/public/app_assets/img/facebook-logo-2.svg" alt="share facebook"
                                            className="hover"/>
                                    </button>

                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/twitter-logo-silhouette-1.svg"
                                            alt="share twitter" className="hide-hover"/>
                                        <img src="/public/app_assets/img/twitter-logo-silhouette-2.svg"
                                            alt="share twitter" className="hover"/>
                                    </button>

                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/gmail-logo-1.svg" alt="share gmail"
                                            className="hide-hover" />
                                        <img src="/public/app_assets/img/gmail-logo-2.svg" alt="share gmail"
                                            className="hover" />
                                    </button>


                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/whatsapp-logo-1.svg" alt="share whatsapp"
                                            className="hide-hover" />
                                        <img src="/public/app_assets/img/whatsapp-logo-2.svg" alt="share whatsapp"
                                            className="hover" />
                                    </button>
                                </div>

                                <button type="button"
                                    className="button button--white button--square resolution-share js-resolution-share">
                                    <img src={share1} alt="share" className="hide-hover" />
                                    <img src={share} alt="share" className="hover" />
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#" className="tile tile--2 tile--resolutions">
                    <div className="my-resolutions__img-wrapper">
                        <img src="/app_assets/img/Mcafee-logo1.jpg" alt="" />


                    </div>
                    <div className="my-resolutions__info">
                        <div className="my-resolutions__info-left">
                            <h2 className="my-resolutions__title">testing again at</h2>
                            <p className="my-resolutions__subtitle">by Expert Naeem</p>

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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                                            transform="translate(0 -0.452)" fill="#372E75"></path>
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
                                    $0

                                </div>
                            </div>

                            <ul className="my-resolutions__stats d-none d-md-flex d-lg-block">
                                <li className="my-resolutions__stats-item">
                                    <b>0</b> Times Sold
                                </li>

                                <li className="my-resolutions__stats-item"
                                    >
                                    <b>0</b> Comments
                                </li>
                            </ul>

                            <div className="my-resolutions__buttons">
                                <button type="button" className="button button--white"
                                    >
                                    Details
                                </button>

                                <div className="social-share hide">
                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/facebook-logo-1.svg" alt="share facebook"
                                            className="hide-hover" />
                                        <img src="/public/app_assets/img/facebook-logo-2.svg" alt="share facebook"
                                            className="hover" />
                                    </button>

                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/twitter-logo-silhouette-1.svg"
                                            alt="share twitter" className="hide-hover" />
                                        <img src="/public/app_assets/img/twitter-logo-silhouette-2.svg"
                                            alt="share twitter" className="hover" />
                                    </button>

                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/gmail-logo-1.svg" alt="share gmail"
                                            className="hide-hover" />
                                        <img src="/public/app_assets/img/gmail-logo-2.svg" alt="share gmail"
                                            className="hover" />
                                    </button>


                                    <button type="button"
                                        className="button button--white button--square button--square-small">
                                        <img src="/public/app_assets/img/whatsapp-logo-1.svg" alt="share whatsapp"
                                            className="hide-hover" />
                                        <img src="/public/app_assets/img/whatsapp-logo-2.svg" alt="share whatsapp"
                                            className="hover" />
                                    </button>
                                </div>

                                <button type="button"
                                    className="button button--white button--square resolution-share js-resolution-share">
                                    <img src={share1} alt="share" className="hide-hover" />
                                    <img src={share} alt="share" className="hover" />
                                </button>
                            </div>
                        </div>
                    </div>
                </a>

                <div className="experts-footer">
                    <ul className="pagination">

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
                        <li><a href="#">1</a></li>
                        <li><a href="#/list?page=2">2</a></li>
                        <li><a href="#/list?page=3">3</a></li>
                        <li><a href="#">...</a></li>
                        <li>
                            <a href="#/list?page=2">
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
                    <a href="#/list?page=2"
                        className="link load-more-link">Load more </a>
                </div>
            </div>
        </div>
    </div>

</main>
            </div>
        );
    }
}

export default MyResolutionList;