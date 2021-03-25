import React from 'react';
import styles from './ExpertsDialogs.module.css';
import checkmark from "../app_assets/img/checkmar-blue.svg"
import location from "../app_assets/img/location.svg"
import silver from "../app_assets/img/silver.svg"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const ExpertsDialogs: React.FC = () => (
 <div>
  <main className="main-content main-content--dashboard">
    <div className="container container-fluid-small">
      {/*
      <!--Audio Call---> */}
      <div className="col-md-12 col-lg-12 col-xl-12" id="audioside" style={{display: "none"}}>
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
                    <small className="text-muted" style={{display: "block"}} id="activemice"><a href="#"><i
                          className="fa fa-microphone fa-2x" aria-hidden="true" title="Mute Microphone"
                          data-toggle="tooltip"></i></a></small>
                    <small className="text-muted" style={{display: "none"}} id="mutedmice"><a href="#"><i
                          className="fa fa-microphone fa-2x" aria-hidden="true" title="Mute Microphone"
                          data-toggle="tooltip"></i></a></small>
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
              <li id="audiohangoutli" style={{display: "none"}}>
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

      {/* <!--End Audio Call--> */}












      <div className="col-md-12 col-lg-12 col-xl-12" id="screenside" style={{display: "none"}}>
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
              <li id="stops" style={{display: "none"}}>
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




      <div className="col-md-12 col-lg-12 col-xl-12" id="videoside" style={{display: "none"}}>
        <div className="card">

          <div className="chat">
            <div></div>
            <ul className="contacts mb-0">

              <li>
                <div className="d-flex bd-highlight">
                  <div className="d-flex ">

                    <video id="localVideo" controls autoPlay muted playsInline style={{width: "350px"}}></video>
                    {/*
                    <!--<iframe  id="localscreen" scrolling="no" className="iframe1"  style={{width: "100%", border: "none", display: "none"}}></iframe>-->
                    */}
                  </div>
                  <div className="user_info">
                    <small className="text-muted" style={{display: "block"}} id="activecam"><a href="#"><i
                          className="fa fa-camera fa-2x" aria-hidden="true" title="Mute Camera"
                          data-toggle="tooltip"></i></a></small>
                    <small className="text-muted" style={{display: "none"}} id="mutedcam"><a href=" #"><i
                          className="fa fa-camera fa-2x" aria-hidden="true" title="Mute Camera"
                          data-toggle="tooltip"></i></a></small>
                    <small className="text-muted" style={{display: "block"}} id="activemice"><a href="#"><i
                          className="fa fa-microphone fa-2x" aria-hidden="true" title="Mute Microphone"
                          data-toggle="tooltip"></i></a></small>
                    <small className="text-muted" style={{display: "none"}} id="mutedmice"><a href="#"><i
                          className="fa fa-microphone fa-2x" aria-hidden="true" title="Mute Microphone"
                          data-toggle="tooltip"></i></a></small>
                    <small className="text-muted" id="StartScreenSharing" style={{display: "none"}}><a href="#"><img
                          src="/screensharing.png" title="Screen share" data-toggle="tooltip"
                          style={{width: "70%"}} /></a></small>
                    <small className="text-muted" id="StopScreenSharing" style={{display: "none"}}><a href="#"><img
                          src="/screensharing.png" title="Stop Screen Sharing" data-toggle="tooltip"
                          style={{width: "70%"}} /></a></small>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex bd-highlight" id="remote_video">
                  <div className="d-flex ">
                    <video id="remoteVideo" controls autoPlay playsInline style={{width: "350px"}}></video>
                    {/*
                    <!--<iframe  id="remotescreen" scrolling="no" className="iframe2" style={{width: "100%", border: "none", display: "none"}}></iframe>-->
                    */}

                  </div>
                </div>
              </li>
              <li id="hangoutli" style={{display: "none"}}>
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
      <div className="row justify-content-center por moving-container">
        <div className="col-12 col-lg-8 order-0 order-lg-1 search-box-wrapper" style={{position: "absolute"}}>
          <form action="#" method="post" id="search-box" className="">
            <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" /> <label
              className="input__wrapper input__wrapper--search">
              <input type="text" className="input input-seach" placeholder="Search Expert" name="expert_name" />
              <button type="submit" className="button button--no-style">
                <i className="search-icon-blue"></i>
              </button>
            </label>
          </form>
          <a href="#" type="button" className="button rounded-small post-a-ticket-cta max-160">
            <span className="d-none d-md-inline">Post a ticket</span>
            <span className="d-inline d-md-none">+</span>
          </a>
        </div>

        <div className="col-6 col-lg-4 order-1 order-lg-1" id="tickets-list">
          <div className="tile tile--2">

          </div>
          <div className="tile tile--2 tile--tickets-list" style={{marginTop: "62px"}}>


            <ul className="tickets-list">
              <li className="tickets-list__item js-tickets-list__item tickets-list__item--active" data-dialog="461"
                data-reference=" 205 " data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>

                  <p className="tickets-list__subtext">
                    Skype Voice not consistent

                  </p>
                  <p id="datacli461" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="153" data-reference=" 72 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0007

                  </p>
                  <p id="datacli153" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="9" data-reference=" 61 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test - Database expert 3

                  </p>
                  <p id="datacli9" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="154" data-reference=" 63 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0002

                  </p>
                  <p id="datacli154" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="459" data-reference=" 223 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Direct a ssign testing

                  </p>
                  <p id="datacli459" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="458" data-reference=" 220 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Direct Hire

                  </p>
                  <p id="datacli458" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="457" data-reference=" 221 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Profile Hire Process

                  </p>
                  <p id="datacli457" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="432" data-reference=" 203 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Welcome Ticket for Portal Awareness

                  </p>
                  <p id="datacli432" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="436" data-reference=" 208 "
                data-clientid="54">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli54"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    abu hurairah
                  </h3>
                  <p className="tickets-list__subtext">
                    Gui testing

                  </p>
                  <p id="datacli436" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="231" data-reference=" 133 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    A framework for ambitious web developers.

                  </p>
                  <p id="datacli231" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="244" data-reference=" 142 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    I am looking for new ticket testing

                  </p>
                  <p id="datacli244" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="152" data-reference=" 90 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Project 03

                  </p>
                  <p id="datacli152" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="435" data-reference=" 201 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Ticket Review Page and Ticket Post Message

                  </p>
                  <p id="datacli435" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="227" data-reference=" 136 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Jan 9 Ticket Test

                  </p>
                  <p id="datacli227" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="433" data-reference=" 204 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Configure eDMS and upload files are having an error

                  </p>
                  <p id="datacli433" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="422" data-reference=" 197 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Zoom Meeting

                  </p>
                  <p id="datacli422" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="430" data-reference=" 189 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Ihor is testing the system

                  </p>
                  <p id="datacli430" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="425" data-reference=" 198 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Confirmation Page Test

                  </p>
                  <p id="datacli425" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="427" data-reference=" 178 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    5 Feb 2020

                  </p>
                  <p id="datacli427" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="421" data-reference=" 193 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    My Team not displaying my Status

                  </p>
                  <p id="datacli421" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="293" data-reference=" 165 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Email sending test 03

                  </p>
                  <p id="datacli293" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="338" data-reference=" 177 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Testing of wrong values

                  </p>
                  <p id="datacli338" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="389" data-reference=" 186 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Location check 02

                  </p>
                  <p id="datacli389" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="416" data-reference=" 159 "
                data-clientid="80">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli80"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    amazing client
                  </h3>
                  <p className="tickets-list__subtext">
                    TESTIN FAILING

                  </p>
                  <p id="datacli416" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="233" data-reference=" 129 "
                data-clientid="141">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli141"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Steven Universe
                  </h3>
                  <p className="tickets-list__subtext">
                    Pluggin developer

                  </p>
                  <p id="datacli233" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="236" data-reference=" 138 "
                data-clientid="141">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli141"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Steven Universe
                  </h3>
                  <p className="tickets-list__subtext">
                    Home Test - Web Development - HTML/CSS/JS/PHP

                  </p>
                  <p id="datacli236" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="156" data-reference=" 49 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Oct 22, 2019 Test

                  </p>
                  <p id="datacli156" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="155" data-reference=" 51 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    241020190425 Test new

                  </p>
                  <p id="datacli155" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="151" data-reference=" 91 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Project 04

                  </p>
                  <p id="datacli151" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="407" data-reference=" 0 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">


                  </p>
                  <p id="datacli407" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="230" data-reference=" 137 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Live Log Active Tickets

                  </p>
                  <p id="datacli230" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="365" data-reference=" 183 "
                data-clientid="138">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli138"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Jack Conner
                  </h3>
                  <p className="tickets-list__subtext">
                    Work faster by ‘peeking’ at desktops

                  </p>
                  <p id="datacli365" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="253" data-reference=" 143 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    System test 01

                  </p>
                  <p id="datacli253" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="382" data-reference=" 146 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    System test 04

                  </p>
                  <p id="datacli382" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="383" data-reference=" 173 "
                data-clientid="143">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli143"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    software dev
                  </h3>
                  <p className="tickets-list__subtext">
                    Direct a s sign 2701

                  </p>
                  <p id="datacli383" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="380" data-reference=" 185 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Location check

                  </p>
                  <p id="datacli380" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="315" data-reference=" 173 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Direct a s sign 2701

                  </p>
                  <p id="datacli315" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="366" data-reference=" 174 "
                data-clientid="143">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli143"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    software dev
                  </h3>
                  <p className="tickets-list__subtext">
                    Odoo CMS Web Developer

                  </p>
                  <p id="datacli366" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="364" data-reference=" 179 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    6 Feb 2020

                  </p>
                  <p id="datacli364" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="337" data-reference=" 176 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test Feb 4

                  </p>
                  <p id="datacli337" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="232" data-reference=" 115 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    December 8 test - Hire Request

                  </p>
                  <p id="datacli232" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="350" data-reference=" 92 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Project 05

                  </p>
                  <p id="datacli350" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="348" data-reference=" 99 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Project 10

                  </p>
                  <p id="datacli348" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="304" data-reference=" 171 "
                data-clientid="80">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli80"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    amazing client
                  </h3>
                  <p className="tickets-list__subtext">
                    Portal Mapping

                  </p>
                  <p id="datacli304" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="251" data-reference=" 140 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    12 Jan Test

                  </p>
                  <p id="datacli251" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="270" data-reference=" 150 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    14 Jan Ticket process test

                  </p>
                  <p id="datacli270" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="300" data-reference=" 170 "
                data-clientid="80">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli80"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    amazing client
                  </h3>
                  <p className="tickets-list__subtext">
                    Firewall configuration

                  </p>
                  <p id="datacli300" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="299" data-reference=" 160 "
                data-clientid="80">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli80"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    amazing client
                  </h3>
                  <p className="tickets-list__subtext">
                    testing again at

                  </p>
                  <p id="datacli299" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="271" data-reference=" 147 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    System test 05

                  </p>
                  <p id="datacli271" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="249" data-reference=" 141 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    12 Jan Invite to Ticket test

                  </p>
                  <p id="datacli249" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="228" data-reference=" 61 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test - Database expert 3

                  </p>
                  <p id="datacli228" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="250" data-reference=" 147 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    System test 05

                  </p>
                  <p id="datacli250" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="178" data-reference=" 0 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">


                  </p>
                  <p id="datacli178" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="238" data-reference=" 116 "
                data-clientid="54">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli54"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    abu hurairah
                  </h3>
                  <p className="tickets-list__subtext">
                    Cloud Server Expert

                  </p>
                  <p id="datacli238" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="237" data-reference=" 114 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    December 8 test - Direct assign

                  </p>
                  <p id="datacli237" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="235" data-reference=" 114 "
                data-clientid="141">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli141"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Steven Universe
                  </h3>
                  <p className="tickets-list__subtext">
                    December 8 test - Direct assign

                  </p>
                  <p id="datacli235" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="234" data-reference=" 70 "
                data-clientid="141">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli141"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Steven Universe
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0005

                  </p>
                  <p id="datacli234" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="165" data-reference=" 70 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0005

                  </p>
                  <p id="datacli165" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="168" data-reference=" 70 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0005

                  </p>
                  <p id="datacli168" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="175" data-reference=" 0 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">


                  </p>
                  <p id="datacli175" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="174" data-reference=" 122 "
                data-clientid="105">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli105"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Abdullah Ahmad
                  </h3>
                  <p className="tickets-list__subtext">
                    Test on 18 Dec 2019

                  </p>
                  <p id="datacli174" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="167" data-reference=" 68 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0005

                  </p>
                  <p id="datacli167" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="166" data-reference=" 69 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Test 0005

                  </p>
                  <p id="datacli166" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="160" data-reference=" 88 "
                data-clientid="74">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli74"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    Naeem Qamar
                  </h3>
                  <p className="tickets-list__subtext">
                    Project 01

                  </p>
                  <p id="datacli160" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>
              <li className="tickets-list__item js-tickets-list__item" data-dialog="129" data-reference=" 64 "
                data-clientid="137">
                <div className="tickets-list__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                  <span className="status-icon off" id="cli137"></span>
                </div>
                <div className="tickets-list__text">
                  <h3 className="tickets-list__name">
                    iam client
                  </h3>
                  <p className="tickets-list__subtext">
                    Database replication Expert Needed

                  </p>
                  <p id="datacli129" style={{ color: "#4492da"}}></p>
                </div>
                <div className="tickets-list__text">

                </div>
              </li>




            </ul>
          </div>
        </div>

        <div className="col-6 col-lg-8 order-1 order-lg-1 d-block" id="ticket-section-wrapper">
          <div className="tile tile--2 tile--ticket tile--ticket-active  tile--ticket-hourly" data-ticket-id="1">

            <div className="ticket-header">
              <ul className="ticket-header__list">
                <li className="d-block d-lg-none">
                  <button className="button button--no-style mobile-section-title__back-button">
                    <i className="back-blue-icon"></i>
                  </button>
                </li>
                <li className="ticket-header__list-item r-ticket ticket-header__list-item--active" data-tab="ticket"> <a
                    href="#">Ticket</a> </li>
                <li className="ticket-header__list-item d-block" data-tab="dialog">
                  <a href="#">
                    MESSAGES
                  </a>
                </li>


                <li className="active-indicator d-block" style={{width: "96px", left: "0px"}}></li>
              </ul>
            </div>

            {/*
            <!-- Ticket info START --> */}
            <div className="ticket-body r-ticket-b" data-tab="ticket" id="ticketd">

              <h2 className="ticket__name t-subject">
                Direct a ssign testing
              </h2>
              <div className="ticket__details-row">
                <p className="ticket__category t-category"
                  style={{fontFamily: "Roboto, sans-serif", fontWeight: "normal", fontStyle: "normal", color: "#388ccb"}}>
                  Category: Database
                </p>

              </div>
              <div className="ticket__details-row">
                <p className="ticket__date t-date">
                  Created On September 2020 - Present
                </p>

              </div>
              <div className="ticket__description">
                Project description
              </div>

              <p className="ticket__description-text t-description">
                Direct a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign
                testingDirect a ssign testingDirect a ssign testingDirect a ssign testingDirect a ssign testingDirect a
                ssign testingDirect a ssign testing
              </p>
              <hr />
              <div className="expert-lineitem expert-line-static">
                <div className="expert-lineitem__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                </div>
                <div className="expert-lineitem__info-wrapper">
                  <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">
                      <p className="expert-lineitem__name">
                        Expert Naeem
                      </p>
                      <p className="expert-lineitem__title">
                        <span className="d-none d-md-inline"> Expert Naeem </span>
                      </p>
                    </div>
                    <a href="#" className="expert-lineitem__action expert-lineitem__action--hired">
                      <img src={checkmark} alt="archive icon" />
                      <span className="d-inline">Hired</span>
                    </a>
                  </div>
                  <div className="expert-lineitem__line">
                    <div className="expert-lineitem__hourly-rate">
                      <span> 100</span>/hour
                    </div>

                    <div className="expert-lineitem__location">
                      <img src={location} alt="location icon" />
                      SAUDI ARABIA
                    </div>

                    <div className="expert-lineitem__rating">

                      <div className="stars-wrapper stars-wrapper--static">
                        <label htmlFor="r1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="5" name="rating" id="r5" checked />
                      </div>
                    </div>

                    {/*
                    <!-- <div className="expert-lineitem__status">
                                            <img src="/public/app_assets/img/golden.svg" alt="golden status icon">
                                        Golden status
                                    </div> --> */}
                    <div className="expert-lineitem__status">
                      <img src={silver} alt="silver status icon" />
                      Silver status
                    </div>
                    {/*
                    <!-- <div className="expert-lineitem__status">
                                            <img src="/public/app_assets/img/bronze.svg" alt="bronze status icon">
                                        Bronze status
                                    </div>--> */}
                  </div>
                  <div className="expert-lineitem__line mb-2">
                    <p className="expert-lineitem__title-text">
                      Cover letter
                    </p>
                  </div>
                  <div className="expert-lineitem__line">
                    <p className="expert-lineitem__text">
                      Hello,
                      I am expert of project testing.It’s essentially an Upwork credit that you never need to pay back.
                      If
                      your project is selected to receive a Work Together Talent Grant, our team will match you directly
                      with remote professional(s) who have the specialized skills you need, and the grant funds pay for
                      some or all of their time to help propel the effort.It’s essentially an Upwork credit that you
                      never
                      need to pay back. If your project is selected to receive a Work Together Talent Grant, our t
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <!-- Ticket info END --> */}

            {/*
            <!-- Ticket dialog START --> */}
            <div className="ticket-body ticket-body--dialog hide" data-tab="dialog" style={{height: "550px"}}>
              <ul className="#" style={{display: "block", height: "400px", overflowY: "scroll"}} id="messages">

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
                    <small id="feedback" style={{marginTop: "0px"}}></small>
                  </div>
                </div>
                {/*
                <!--end files and typing--> */}
                <form action="#" style={{paddingTop: "0px"}}>
                  <div id="kkk_value">
                    <input type="hidden" id="dialouge_id" value="461" />
                    <input type="hidden" id="client" value="105" />
                    <input type="hidden" id="reference_id" value=" 205 " />
                  </div>

                  <input type="hidden" id="csrf_token_input" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                  <input type="text" placeholder="Here will be written the message" className="input" id="text" />
                  <button type="button" className="button new-message-container__send-button" id="btnsend">
                    Send
                  </button>
                  <label className="button button--no-style button--attach" id="image-upload"
                    style={{cursor: "not-allowed"}}>
                    <span className="visually-hidden">Attach</span>
                    <input type="file" id="avatar" className="visually-hidden" disabled />
                  </label>
                </form>

                <div id="pools">
                  <input type="hidden" id="pool" value="461" />
                  <input type="hidden" id="from_client" value="105" />
                </div>


              </div>
            </div>
            {/*
            <!-- Ticket dialog END --> */}

            {/*
            <!-- Ticket files START --> */}
            <div className="ticket-body ticket-body--files hide" data-tab="files" style={{display: "none"}}>
              <div className="files-container" style={{overflowY: "scroll", maxHeight: "calc(100% - 50px)"}}
                id="attached_files">
              </div>


              <div className="new-message-container" style={{display: "none"}}>
                {/*
                <!--files & typing--> */}

                <div className="msb-reply d-flex">
                  <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                    <small id="showfiles0"></small>
                  </div>
                </div>
                <div className="msb-reply d-flex">
                  <div className="input-group" style={{marginLeft: "33px", marginBottom: "-10px"}}>
                    <small id="feedback0" style={{paddingTop: "0px"}}></small>
                  </div>
                </div>
                {/*
                <!--end files and typing--> */}
                <form action="#" style={{paddingTop: "0px"}}>
                  <div id="kkk_value1">
                    <input type="hidden" id="dialouge_id0" value="461" />
                    <input type="hidden" id="client0" value="105" />
                  </div>
                  <input type="hidden" id="csrf_token_input" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                  <input type="text" placeholder="Here will be written the message" className="input" id="text0"
                    disabled />
                  <button type="button" className="button new-message-container__send-button" id="btnsend0">
                    Send
                  </button>
                  <label className="button button--no-style button--attach" id="image-upload0">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" id="avatar0" className="visually-hidden" />
                  </label>
                </form>
              </div>
            </div>
            {/*
            <!-- Ticket files END --> */}

            {/*
            <!-- Ticket payment START --> */}
            <div className="ticket-body ticket-body--payment hide" data-tab="payment" style={{display: "none"}}>
              <h2 className="ticket__name">
                Anti Virus not Functioning
              </h2>

              <div className="ticket__details-row payment-row">
                <div className="payment-info-block payment-info-block-1">
                  <p className="estimate__title">Hourly rate</p>
                  <p className="estimate__value">$17/hour</p>
                </div>
                <div className="payment-info-block payment-info-block-1">
                  <p className="estimate__title">Hours deposit </p>
                  <p className="estimate__value">8/40</p>
                </div>
              </div>

              <div className="ticket__details-row payment-row payment-row--last">
                <div className="payment-info-block payment-info-block-2">
                  <p className="estimate__title">Deposit</p>
                  <p className="estimate__value line-1">$0</p>
                  <p className="estimate__value estimate__value---input d-none">
                    <input type="text" className="input deposit-input" id="deposit-input" maxLength={5}
                      pattern="[0-9]" />
                  </p>
                </div>
                <div className="payment-info-block payment-info-block-2">
                  <p className="estimate__title">Current hour payment </p>
                  <p className="estimate__value">$0</p>
                </div>
                <div className="payment-info-block payment-info-block-2">
                  <p className="estimate__title">Estimate</p>
                  <p className="estimate__value">$0</p>
                </div>
              </div>

              <div className="ticket__details-row payment-row payment-row--info payment-row--last d-none">
                <div className="estimate__title">
                  To make a new deposit you need to pay the existing one
                </div>
              </div>

              <div className="payment-buttons">
                <button type="button" className="button max-160 js-add-deposit">
                  Add Deposit
                </button>

                <button type="button" className="button max-160 js-pay-deposit d-none">
                  Pay ticket
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

              <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
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
          <div className="tile tile--2 tile--ticket tile--ticket-in-progress tile--ticket-fixed" data-ticket-id="2">
            <div className="ticket-header">
              <ul className="ticket-header__list">
                <li className="d-block d-lg-none">
                  <button className="button button--no-style mobile-section-title__back-button">
                    <i className="back-blue-icon"></i>
                  </button>
                </li>
                <li className="ticket-header__list-item d-block" data-tab="ticket">
                  <a href="#">
                    Ticket
                  </a>
                </li>
                <li className="ticket-header__list-item d-block" data-tab="dialog">
                  <a href="#">
                    Dialog
                  </a>
                </li>
                <li className="ticket-header__list-item d-block" data-tab="files">
                  <a href="#">
                    Files
                  </a>
                </li>
                <li className="ticket-header__list-item d-block" data-tab="payment">
                  <a href="#">
                    Payment
                  </a>
                </li>
                <li className="active-indicator d-block" style={{width: "0px", left: "0px"}}></li>
              </ul>
            </div>
            <div className="ticket-body" data-tab="ticket">
              <h2 className="ticket__name">Anti Virus not Functioning</h2>
              <div className="ticket__details-row">
                <p className="ticket__category">Category: Security</p>
                <p className="ticket__rate"></p>
                <p className="ticket__price">$400</p>
              </div>
              <div className="ticket__details-row">
                <p className="ticket__date">February 2019 - Present</p>
                <p className="ticket__rate-2">Fixed price</p>
              </div>
              <div className="ticket__description">Project description</div>

              <p className="ticket__description-text">
                Here Should be some info about the problem, like a description or something here Should be some info
                about
                the problem, like a description or something here Should be some info about the problem, like a
                description or something
              </p>
              <hr />
              <div className="expert-lineitem expert-line-static">
                <div className="expert-lineitem__img">
                  {/*
                  <!-- <img src="" alt=""> --> */}
                </div>
                <div className="expert-lineitem__info-wrapper">
                  <div className="expert-lineitem__line">
                    <div className="expert-lineitem__name-section">
                      <p className="expert-lineitem__name">
                        Expert name
                      </p>
                      <p className="expert-lineitem__title">
                        Antivirus specialist <span className="d-none d-md-inline">antivirus specialist </span>
                      </p>
                    </div>
                    <a href="#" className="expert-lineitem__action expert-lineitem__action--hired">
                      <img src={checkmark} alt="archive icon" />
                      <span className="d-inline">Hired</span>
                    </a>
                  </div>
                  <div className="expert-lineitem__line">
                    <div className="expert-lineitem__hourly-rate">
                      <span>$17</span>/hour
                    </div>

                    <div className="expert-lineitem__location">
                      <img src={location} alt="location icon" />
                      Australia
                    </div>

                    {/*
                    <!-- rating START --> */}
                    <div className="expert-lineitem__rating">
                      <div className="stars-wrapper stars-wrapper--static">
                        <label htmlFor="r1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
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
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="5" name="rating" id="r5" checked />
                      </div>
                    </div>
                    {/*
                    <!-- rating END --> */}

                    <div className="expert-lineitem__status">
                      <img src="/public/app_assets/img/golden.svg" alt="golden status icon" />
                      Golden status
                    </div>
                    {/*
                    <!-- <div className="expert-lineitem__status">
                                            <img src={silver} alt="silver status icon">
                                        Silver status
                                    </div> --> */}
                    {/*
                    <!-- <div className="expert-lineitem__status">
                                            <img src="/public/app_assets/img/bronze.svg" alt="bronze status icon">
                                        Bronze status
                                    </div>--> */}
                  </div>
                  <div className="expert-lineitem__line mb-2">
                    <p className="expert-lineitem__title-text">
                      Cover letter
                    </p>
                  </div>
                  <div className="expert-lineitem__line">
                    <p className="expert-lineitem__text">
                      Hello imma Mcafee Expert how can i help you sir? s simply dummy text of the printing and
                      typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/*
            <!-- Ticket dialog START --> */}
            <div className="ticket-body ticket-body--dialog hide" data-tab="dialog">
              <ul className="messages" id="messages--">

              </ul>

              <div className="new-message-container">
                <form action="#">
                  <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                  <input type="text" placeholder="Here will be written the message" className="input text" id="text" />
                  <button type="button" className="button new-message-container__send-button">
                    Send
                  </button>
                  <label className="button button--no-style button--attach">
                    <span className="visually-hidden">Attach</span>
                    <input type="file" className="visually-hidden" />
                  </label>
                </form>
              </div>
            </div>
            {/*
            <!-- Ticket dialog END --> */}

            <div className="ticket-body hide" data-tab="files">
              <h2 className="ticket__name">
                Files
              </h2>
            </div>

            {/*
            <!-- Ticket payment START --> */}
            <div className="ticket-body ticket-body--payment hide" data-tab="payment">
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

              <div className="ticket__details-row payment-row payment-row--last d-none js-payment-closure">
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
        </div>
      </div>
    </div>
  </main>
</div>
);

export default ExpertsDialogs;
