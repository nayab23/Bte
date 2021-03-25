import React from 'react';
import menu from '../app_assets/img/menu-2.svg';
import archive from "../app_assets/img/archive-blue.svg"
import archiveWhite from "../app_assets/img/archive-white.svg"
import message from "../app_assets/img/message-blue.svg"
import messageWhite from "../app_assets/img/message-white.svg"
import location from "../app_assets/img/location.svg"

const ExpertInMyFeedOpenTicket: React.FC = () => (
  <div>
<main className="main-content main-content--feed">
    <div className="container container-fluid-small">
        {/*
        <!--Audio Call---> */}
        <div className="col-md-12 col-lg-12 col-xl-12" id="audioside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <audio id="localAudio" controls autoPlay muted playsInline></audio>
                                </div>
                                <div className="user_info">
                                    <small className="text-muted" style={{display:"block"}} id="activemice"><a
                                            href="#"><i className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedmice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">
                                    <audio id="remoteAudio" controls autoPlay playsInline></audio>

                                </div>
                            </div>
                        </li>
                        <li id="audiohangoutli" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="audiocallStatus"></span>
                                    <button className="btn btn-danger right" id="audiocancelCall">Hang Out</button>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>

        {/*
        <!--End Audio Call--> */}












        <div className="col-md-12 col-lg-12 col-xl-12" id="screenside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <iframe id="localscreens" scrolling="no" className="iframe1"
                                        style={{width: "100%", border: "none", display: "none"}}></iframe>
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">

                                    <iframe id="remotescreens" scrolling="no" className="iframe2"
                                        style={{width: "100%", border: "none", display: "none"}}></iframe>

                                </div>
                            </div>
                        </li>
                        <li id="stops" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="screenshareStatus"></span>
                                    <button className="btn btn-danger right" id="stopscreen">Stop sharing</button>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>




        <div className="col-md-12 col-lg-12 col-xl-12" id="videoside" style={{display:"none"}}>
            <div className="card">

                <div className="chat">
                    <div></div>
                    <ul className="contacts mb-0">

                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">

                                    <video id="localVideo" controls autoPlay muted playsInline
                                        style={{width: "350px"}}></video>
                                    {/*
                                    <!--<iframe  id="localscreen" scrolling="no" className="iframe1"  style="width:100%;border:none;display:none"></iframe>-->
                                    */}
                                </div>
                                <div className="user_info">
                                    <small className="text-muted" style={{display:"block"}} id="activecam"><a
                                            href="#"><i className="fa fa-camera fa-2x" aria-hidden="true"
                                                title="Mute Camera" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedcam"><a href="#"><i
                                                className="fa fa-camera fa-2x" aria-hidden="true" title="Mute Camera"
                                                data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"block"}} id="activemice"><a
                                            href="#"><i className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" style={{display:"none"}} id="mutedmice"><a href="#"><i
                                                className="fa fa-microphone fa-2x" aria-hidden="true"
                                                title="Mute Microphone" data-toggle="tooltip"></i></a></small>
                                    <small className="text-muted" id="StartScreenSharing" style={{display:"none"}}><a
                                            href="#"><img src="/screensharing.png" title="Screen share"
                                                data-toggle="tooltip" style={{width:"70%"}} /></a></small>
                                    <small className="text-muted" id="StopScreenSharing" style={{display:"none"}}><a
                                            href="#"><img src="/screensharing.png" title="Stop Screen Sharing"
                                                data-toggle="tooltip" style={{width:"70%"}} /></a></small>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex bd-highlight" id="remote_video">
                                <div className="d-flex ">
                                    <video id="remoteVideo" controls autoPlay playsInline
                                        style={{width: "350px"}}></video>
                                    {/*
                                    <!--<iframe  id="remotescreen" scrolling="no" className="iframe2" style="width:100%;border:none;display:none"></iframe>-->
                                    */}

                                </div>
                            </div>
                        </li>
                        <li id="hangoutli" style={{display:"none"}}>
                            <div className="d-flex bd-highlight">
                                <div className="d-flex ">
                                    <span className="mr-3 text-black left" id="callStatus"></span>
                                    <button className="btn btn-danger right" id="cancelCall">Hang Out</button>
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="d-none d-lg-block col-12 col-lg-4" style={{marginTop: "62px"}}>

                <div className="tile tile--2 tile--tickets-list" style={{maxHeight: "700px"}}>
                    <div className="ticket-header" style={{padding: "20px"}}>
                        <span style={{color: "#4492da", fontSize: "14px"}}>AbdullahAhmad</span>
                    </div>
                    <ul className="tickets-list" style={{ height: "410px", overflow: "inherit"}} id="s_messages">





                    </ul>
                    <div style={{paddingBottom: "10px"}} id="s_is_typing"></div>

                    <div style={{paddingBottom: "25px"}}>
                        <label className="input__wrapper input__wrapper--search"
                            style={{width: "95%", height: "35px", marginLeft: "10px"}}>
                            <input type="text" className="input input-seach" placeholder="type something cool"
                                id="s_msg" />
                            <button type="submit" className="button button--no-style">
                                <i className="send_message" id="s_send_message"></i>
                            </button>
                        </label>
                    </div>
                </div>
            </div>


            <div className="col-12 col-lg-8 feed__wrapper">
                <div className="search-box-wrapper" style={{position:"relative"}}>
                    <form action="#" method="post" id="search-box"
                        className="">
                        <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" /> <label
                            className="input__wrapper input__wrapper--search">
                            <input type="text" className="input input-seach" placeholder="Search Ticket"
                                name="search_ticket" value="" />
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

                <div className="tile tile--2 mb-3">
                    <div className="ticket-header">
                        <ul className="ticket-header__list">
                            <li className="d-block">
                                <button
                                    className="button button--no-style mobile-section-title__back-button js-history-back">
                                    <i className="back-blue-icon"></i>
                                </button>
                            </li>
                            <li className="ticket-header__list-item d-block ticket-header__list-item--active"
                                data-tab="ticket">
                                <a href="#">
                                    Ticket
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block disabled" data-tab="dialog">
                                <a href="#">
                                    Dialog
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block" data-tab="files" id="files">
                                <a href="#">
                                    Files
                                </a>
                            </li>
                            <li className="ticket-header__list-item d-block disabled" data-tab="contract">
                                <a href="#">
                                    Contract
                                </a>
                            </li>
                            <li className="active-indicator d-block" style={{width: "0px", left: "0px"}}></li>
                        </ul>
                    </div>
                    <div className="ticket-body" data-tab="ticket">
                        <h2 className="ticket__name">Skype Voice not consistent</h2>
                        <div className="ticket__details-row ticket__details-row--top-aligned">
                            <div className="opened-ticket__details">
                                <div className="feed-item__name opened-ticket__name">
                                    Abdullah Ahmad
                                </div>

                                <div className="expert-lineitem__location">
                                    <img src={location} alt="location icon" />
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

                                <p className="ticket__date opened-ticket__date">
                                    July 16-2020, 07:27 PM

                                </p>
                            </div>
                            <div className="opened-ticket__cta-container d-none d-md-block">


                                <a href=""
                                    className="button opened-ticket__cta">Apply to Job</a>







                                <button className="button opened-ticket__cta opened-ticket__cta--secondary">
                                    <img src={archive} alt="archive" />
                                    Archive
                                </button>
                            </div>

                        </div>

                        <div className="opened-ticket__details-row">
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Category:</span>
                                <span className="opened-ticket__detail-value">
                                    Development
                                </span>
                            </div>
                            <div className="opened-ticket__details-2">
                                <span className="opened-ticket__detail-title">Vendor:</span>
                                <span className="opened-ticket__detail-value">
                                    UI/UX
                                </span>
                            </div>
                        </div>

                        <div className="ticket__description opened-ticket__description">Project description</div>

                        <p className="ticket__description-text">Internet connection failed Internet connection failed
                            Internet connection failed Internet connection failed Internet connection failedInternet
                            connection failedInternet connection failedInternet connection failedInternet connection
                            failed Internet connection failedInternet connection failed Internet connection failed</p>
                        <div className="ticket__description">
                            Skills required
                        </div>
                        <p className="ticket__description-text skills__list">
                            <a href="#" className="skills__item">
                                Figma
                            </a>
                            <a href="#" className="skills__item">
                                Marvel
                            </a>
                            <a href="#" className="skills__item">
                                Axure
                            </a>
                        </p>
                        <div className="ticket__description">
                            Attachments
                        </div>
                        <div className="ticket__description-text opened-ticket__description-text">

                        </div>
                    </div>

                    <div className="ticket-body ticket-body--dialog" data-tab="dialog" style={{height:"550px;"}}>
                        <ul className="#" style={{display: "block", height:"400px", overflowY: "scroll"}} id="messages">

                        </ul>

                        <div className="new-message-container">
                            {/*
                            <!--files & typing--> */}

                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="showfiles"></small>
                                </div>
                            </div>
                            <div className="msb-reply d-flex">
                                <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                                    <small id="feedback" style={{marginTop:"0px"}}></small>
                                </div>
                            </div>
                            {/*
                            <!--end files and typing--> */}


                            <form action="#" style={{paddingTop: "0px"}}>

                                <input type="hidden" id="csrf_token_input"
                                    value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                                <input type="text" placeholder="Here will be written the message" className="input"
                                    id="text" />
                                <button type="button" className="button new-message-container__send-button"
                                    id="btnsend">
                                    Send
                                </button>
                                <label className="button button--no-style button--attach" id="image-upload"
                                    style={{cursor:"not-allowed"}} title="Under development">
                                    <span className="visually-hidden">Attach</span>
                                    <input type="file" id="avatar" className="visually-hidden" readOnly disabled
                                        title="Under development" />
                                </label>
                            </form>

                        </div>
                    </div>
                    {/*
                    <!-- Ticket dialog END --> */}

                    <div className="ticket-body hide" data-tab="files">
                        <div className="files-container" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                            id="attached_files">







                        </div>




                        {/*
                        <!-- Ticket payment START --> */}
                        <div className="ticket-body ticket-body--payment hide" data-tab="contract">
                            <h2 className="ticket__name">
                                Anti Virus not Functioning
                            </h2>

                            <div className="ticket__details-row payment-row payment-row--last">
                                <div className="payment-info-block payment-info-block-2">
                                    <p className="estimate__title">Deposit</p>
                                    <p className="estimate__value line-1">$200</p>
                                </div>
                                <div className="payment-info-block payment-info-block-2">
                                    <p className="estimate__title">Fixed Price </p>
                                    <p className="estimate__value">$400</p>
                                </div>
                                <div className="payment-info-block payment-info-block-2">
                                    <p className="estimate__title">Estimate</p>
                                    <p className="estimate__value">$400</p>
                                </div>
                            </div>

                            <div className="ticket__details-row payment-row payment-row--info payment-row--last d-none">
                                <div className="estimate__title">
                                    To make a new deposit you need to pay the existing one
                                </div>
                            </div>

                            <div className="payment-buttons">
                                <button type="button" className="button max-160 js-pay-deposit">
                                    Pay deposit
                                </button>

                                <button className="button button--no-style link">
                                    Close Ticket
                                </button>
                            </div>

                            {/*
                            <!-- Payment closure section START --> */}
                            <h2 className="ticket__name d-none js-payment-closure">
                                Payment closure
                            </h2>

                            <div className="ticket__details-row payment-row d-none js-payment-closure">
                                <div className="row align-items-center full-width">
                                    <div className="col-6">
                                        <div className="estimate__title">
                                            Total Expert Amount
                                        </div>
                                    </div>
                                    <div className="col-4 offset-2">
                                        <div className="estimate__value">
                                            $400
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket__details-row payment-row d-none js-payment-closure">
                                <div className="row align-items-center full-width">
                                    <div className="col-6">
                                        <div className="estimate__title">
                                            Initial Deposit
                                        </div>
                                    </div>
                                    <div className="col-4 offset-2">
                                        <div className="estimate__value">
                                            $200
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket__details-row payment-row d-none js-payment-closure">
                                <div className="row align-items-center full-width">
                                    <div className="col-6">
                                        <div className="estimate__title">
                                            Balance
                                        </div>
                                    </div>
                                    <div className="col-4 offset-2">
                                        <div className="estimate__value">
                                            $200
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ticket__details-row payment-row d-none js-payment-closure">
                                <div className="row align-items-center full-width">
                                    <div className="col-6">
                                        <div className="estimate__title">
                                            BTE Collaboration charges
                                        </div>
                                    </div>
                                    <div className="col-4 offset-2">
                                        <div className="estimate__value">
                                            $10
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
                                <div className="row align-items-center full-width">
                                    <div className="col-6">
                                        <div className="estimate__title">
                                            Total Amount Due
                                        </div>
                                    </div>
                                    <div className="col-4 offset-2">
                                        <div className="estimate__value">
                                            $360.05
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="payment-buttons d-none js-payment-closure">
                                <button type="button" className="button max-160 js-get-report">
                                    Get report
                                </button>
                            </div>
                            {/*
                            <!-- Payment closure section END --> */}

                        </div>
                        {/*
                        <!-- Ticket payment END --> */}
                    </div>

                    <div className="tile tile--2 tile--sticky-bottom d-flex d-md-none js-sticky-tile">
                        <a href="#"
                            className="button opened-ticket__cta">Apply to Job</a>

                        <button className="button opened-ticket__cta opened-ticket__cta--secondary">
                            <img src={archive} alt="archive" />
                            Archive
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

</div>
);

export default ExpertInMyFeedOpenTicket;
