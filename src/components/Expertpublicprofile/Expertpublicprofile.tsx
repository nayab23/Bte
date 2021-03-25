import React from 'react';
import styles from './Expertpublicprofile.module.css';
import archive from '../app_assets/img/archive-blue.svg'
import archivewhite from '../app_assets/img/archive-white.svg'
import message from '../app_assets/img/message-blue.svg'
import messageWhite from '../app_assets/img/message-white.svg'
import profile from '../app_assets/img/1570715717df491bf444acfa945630c22389140d4a-user-shadow-icon-by-vexels.png'

const Expertpublicprofile: React.FC = () => (
  <div className="container-fluid-small">

  <main className="main-content main-content--dashboard">
  <audio id="notif_chat">
    <source src="open-ended.ogg" type="audio/ogg"/>
    <source src="open-ended.mp3" type="audio/mpeg"/>
  </audio>
 
   <div className="bg-light border-top" 
  //  style={{position : "absolute",width:"100vw",left:"0"}}
   >
    <div className="container py-4">
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-md-center justify-content-between flex-column flex-md-row">
            <div className="d-flex align-center">

              <img
                src={profile}
                className="user-thumb mr-4" alt="User thumb"/>
              <div>
                <label className="h4" style={{textTransform: "capitalize"}}>Muhammad Asif</label>
                <p className="text-muted m-0" style={{textTransform: "capitalize"}}>Expert from
                  Riyad,
                  Saudi Arabia
                </p>
                <p className="text-muted m-0">Last seen 1h ago</p>
              </div>
            </div>

            <button  className="button btn-md primary mt-md-0 mt-3" style={{marginRight: "25px"}}>Invite
              to a Ticket</button>
          </div>
          <div className="expert-lineitem__line">

            <a href="https://dev.backtoexperts.com/client_dashboard/Archivefromsearch/3"
              className="expert-lineitem__action " >
              <img src={archive} alt="archive icon" className="hide-hover-mobile-only"/>
              <img src={archivewhite} alt="archive icon" className="hover-mobile-only"/>
              <span className="d-none d-md-inline">Archive</span>
            </a>
            <a href="https://dev.backtoexperts.com/client_dashboard/invitation/eyJpdiI6Ik9hU29QV0RcL0x4MkxjalBiTW42RnBBPT0iLCJ2YWx1ZSI6ImJJaFhsaE5VM1dwZ3lxeTVGM3g3aVE9PSIsIm1hYyI6IjNhOTU1MDM1NDg4ODc2YTY1YmU3ZjlhOTJmNTkzMWQwNGQ4MmRkYThjYzc1M2QzNTA0ZWQyNThlOWFiM2Y3MTQifQ%3D%3D"
              className="expert-lineitem__action">
              <img src={message} alt="archive icon" className="hide-hover-mobile-only"/>
              <img src={messageWhite} alt="archive icon" className="hover-mobile-only"/>
              <span className="d-none d-md-inline">Message</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div className="bg-primary-light py-5">
    <div className="container">
      {/* <!-- <div className="row"> --> */}
      {/* <!-- <div className="col-sm-12">--> */}
      <div className="row">
        <div className="col-sm-8 col-md-9 order-2 order-sm-1">
          <div className="card  ">
            <div className="card-body">
              <div className="form-group">


                <h5>Professional Title</h5>
                <p className="text-muted">Software Engineer</p>

                <h5>Professional Description</h5>
                <p className="text-muted"> Hello everyone I am Muhammad Asif from pakistan and i am expert in php,c#,python,
                  javascript, rubyonrails.I love to work in new technologies.</p>

              </div>
              {/* <!-- <hr className="my-4" />
                <div className="form-group">
                  <h5>Feedback</h5>
  
                  <div className="my-4">
                    <div className="row">
                      <div className="col-lg-10">
                        <h6 className="text-primary">Web design and coding</h6>
                        <div className="d-flex my-2">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-half.svg" alt="">
                          <img src="/public/design/img/star-rating-0.svg" alt="">
                          <span className="small ml-2 text-muted">(3.5)</span>
                        </div>
                        <p className="text-muted m-0">Dec 2017 - Jun 2018</p>
                        <p>
                          Great work as usual, work of great quality, always a good
                          communication and work always deliver before deadline!
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <label htmlFor="">5,050.00</label>
                        <span className="text-muted">Fixed-price</span>
                      </div>
                    </div>
                  </div>
  
                  <div className="my-4">
                    <div className="row">
                      <div className="col-lg-10">
                        <h6 className="text-primary">Web design and coding</h6>
                        <div className="d-flex my-2">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-1.svg" alt="">
                          <img src="/public/design/img/star-rating-half.svg" alt="">
                          <img src="/public/design/img/star-rating-0.svg" alt="">
                          <span className="small ml-2 text-muted">(3.5)</span>
                        </div>
                        <p className="text-muted m-0">Dec 2017 - Jun 2018</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        </p>
                      </div>
                      <div className="col-lg-2">
                        <label htmlFor="">5,050.00</label>
                        <span className="text-muted">Fixed-price</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button href="" className="btn btn-md btn-primary-light">Show more</button>
                  </div>
  
                </div>--> */}

              <hr className="my-4"/>
              <div className="form-group">
                <h5>My Projects</h5>
                <div className="my-4">
                  <p className="text-muted">Not Added</p>
                </div>


                <hr className="my-4"/>
                <div className="form-group">
                  <h5>My Education</h5>

                  <div className="my-4">
                    <h6 className="">Nust</h6>
                    <p>
                      BS(Software Engineering)
                    </p>
                  </div>
                  <div className="my-4">
                    <h6 className="">University of london</h6>
                    <p>
                      MSCS
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-group">
                  <h5>My Certifications</h5>
                  <div className="my-6">
                    <h6 className="d-inline">EVS Training Institute Lahore<p className="text-muted d-inline">(2010-2011)</p>
                    </h6>
                    <p>Database Security</p>
                    <p>

                    </p>
                  </div>


                </div>
                <hr className="my-4"/>
                <div className="form-group">
                  <h5>My Exprience</h5>
                  <div className="my-4">
                    <p className="text-muted">Not Added</p>
                  </div>
                </div>

              </div>

              <hr className="my-4" />
              <div className="form-group">
                <h5>Clients Feedback</h5>
                <div className="my-4">
                  <h6 className="d-inline">software dev</h6>
                  <div className="stars-wrapper stars-wrapper--static" style={{float:"right"}}>
                    <label htmlFor="r1" style={{display:"inline-block"}}>
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

                    <label htmlFor="r2" style={{display:"inline-block"}}>
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

                    <label htmlFor="r3" style={{display:"inline-block"}}>
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

                    <label htmlFor="r4" style={{display:"inline-block"}}>
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

                    <label htmlFor="r5" style={{display:"inline-block"}}>
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
                  <p>
                    My experience with this experts was very nice and cooperative.😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="col-sm-4 col-md-3 order-1 order-sm-2 ">

          <div className="row mb-5">

            <div className="col-4 col-sm-12 form-group">
              <label>Rate</label>
              <p className="text-muted small">$15 / hour</p>
            </div>

            <div className="col-4 col-sm-12 form-group">
              <div className="d-flex align-items-center">


              </div>
              <p className="text-muted small">Rating score</p>
            </div>

            <div className="col-4 col-sm-12 form-group">

              <label>0</label>
              <p className="text-muted small">Tickets Resolved</p>
            </div>

            <div className="col-4 col-sm-12 form-group">

              <label className="score">0
                <p className="text-muted small">Total Points</p>
              </label>
            </div>

            <div className="col-4 col-sm-12 form-group">
              <label>6h / day</label>
              <p className="text-muted small">Avg. online time</p>
            </div>

            <div className="col-4 col-sm-12 form-group">

              <label className="score">0 / 0</label>
              <p className="text-muted small">Client Satisfaction Points</p>
            </div>

            <div className="col-4 col-sm-12 form-group">
              <label>Member since</label>
              <p className="text-muted small">25th Mar 2019</p>
            </div>
            <div className="col-4 col-sm-12 form-group">
              <label>Categories/Skills</label>
            </div>
            <div className="col-4 col-sm-12 form-group">
              <label>Languages</label>
            </div>
            <div className="col-8 col-sm-12 form-group mb-md-5">
              <label>Profile link</label>
              <input type="url" className="form-control urltext" placeholder="link"
                value="https://dev.backtoexperts.com/profile/m.asif"/>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  <form id="loginForm" name="loginForm">
    <input type="hidden" id="uuusername" value="seasif2024"/>
    <input type="hidden" id="uufirstname" value="Mrsec"/>
    <input type="hidden" id="uulastname" value="Asif"/>
    <input type="hidden" id="uuemail" value="seasif2024@gmail.com"/>
    <input type="hidden" id="uuid" value="97"/>
  </form>
</main>  
            </div>
);

export default Expertpublicprofile;
