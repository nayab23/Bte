import React from 'react';
import styles from './PostTicket.module.css';
import paypal from "../app_assets/img/pay-pal.svg";
import visa from "../app_assets/img/cards.svg";
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import PostATicket from './PostATicket';

const PostTicket: React.FC = () => (
  <div className="container container-fluid-small">
    <main className="main-content main-content--dashboard">
    <audio id="notif_chat">
        <source src="public/open-ended.ogg" type="audio/ogg"/>
        <source src="public/open-ended.mp3" type="audio/mpeg"/>
    </audio>
    <div className="container container-fluid-small">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8 d-lg-none order-0 order-lg-1 search-box-wrapper">
                <form action="https://dev.backtoexperts.com/public/client_dashboard/find_experts" method="post"
                    id="search-box" className="">
                    <input type="hidden" name="_token" value="e3EomWYknbjZtMKGsmrwJYkWQSTfEtVoikUlMWef"/> 
                    <label
                        className="input__wrapper input__wrapper--search">
                        <input type="text" className="input input-seach" placeholder="Search Expert" name="search-expert"/>
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
        </div>
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
                <h1 className="post-ticket__title">
                    Tell us what's type of job you need to get done
                </h1>
            </div>
            <div className="col-12 col-lg-8">
                <div className="tile tile--2">
                    <form className="post-ticket__form" id="ticket-form" method="post" encType="multipart/form-data">
                        <input type="hidden" name="_token" value="e3EomWYknbjZtMKGsmrwJYkWQSTfEtVoikUlMWef"/>
                        <div className="feed__list-element feed-item" style={{marginBottom: "50px", display: "none"}}
                            id="data-review">
                            <div className="feed-item__header">
                                <h2>Ticket Title:</h2>
                            </div>
                            <h3 className="feed-item__title" style={{marginTop: "-30px"}}> </h3>
                            <div className="feed-item__date data-review" style={{display: "block", marginTop: "10px"}}> Date: 30
                                September 2020</div>

                            <div className="feed-item__details data-review" style={{display: "block"}}>
                                <div className="feed-item__posted-by d-none d-md-flex"> Posted by </div>
                                <div className="feed-item__name data-review" style={{display: "block"}}> Mrsec Asif </div>
                            </div>
                            <h2>Ticket Details:</h2><br/>
                            <div className="feed-item__description" style={{marginTop: "-30px"}}></div>
                            <h2>Service Type:</h2><br/>
                            <div className="line-2 servicetype" style={{marginTop: "-30px"}}></div>
                            <h2>Category:</h2><br/>
                            <div className="line-2 catgory" style={{marginTop: "-30px"}}></div>

                            <div className="feed__skills"><a href="#" className="feed-item__skill"> </a></div>


                            <div className="row" style={{marginTop:"30px"}}>
                                <div className="col-6 col-md-5 data-review" style={{display: "block"}}>
                                    <button type="button" className="button button--post goback">Go Back</button>
                                </div>
                                <div className="col-6 col-md-5 data-review" style={{display: "block"}}>
                                    <input type="submit" className="button button--post js-button-post"
                                        value="Post my ticket"/>
                                </div>


                            </div>
                        </div>




                        <h2 className="post-ticket__input-title frm______a">Ticket Title</h2>
                        <p className="post-ticket__subtitle frm______a">
                            Please Name your project in few words
                        </p>
                        <label className="input__wrapper  mb-4 mb-md-4 frm______a">

                            <input type="text" className="input" placeholder="Exmpl. I need Website frontend" name="subject" id="subject" required/>
                            <p className="input__notification">Proffesion title is required</p>
                        </label>

                        <h2 className="post-ticket__input-title frm______a">
                            Ticket Details
                        </h2>
                        <p className="post-ticket__subtitle frm______a">
                            Tell us more about your business and the whole project overall. (2000 Caracters max)
                        </p>
                        <label className="input__wrapper mb-2 frm______a">
                            <textarea className="input height-150" name="messagge" id="msg"
                                placeholder="Dscribe what's need to be done ..." maxLength={2000}></textarea>
                            <p className="input__notification">Proffesion title is required</p>
                            <p id="messagge" className="input__notification" style={{display:"block"}}></p>
                        </label>

                        <div id="multiple-upload"></div>

                        <div className="fileupload__wrapper file_upload  mb-4 mb-md-4 frm______a">
                            <div className="file_upload__label limitfiles frm______a"></div>

                            <input type="file" name="attachment[]" multiple className="visually-hidden" id="myfiles"
                                />

                            <label htmlFor="fileupload" className="fileupload__button"> <span>+</span> Upload Files </label>
                            <p className="post-ticket__subtitle frm______a">Attach necessary files to show ideas of your
                                project more understandable</p>

                        </div>
                        <p className="input__notification frm______a"
                            style={{display: "block", marginTop: "-40px", marginBottom:"45px"}} id="maxfileserror"></p>



                         <h2 className="post-ticket__input-title js-button-add-payment-method frm______a add-payment max-90 js-show-modal"
                        style={{cursor:"pointer"}}
                        data-modal-id="payment-method-add-modal">
                        <span>+</span> Add Payment Method
                        </h2>
                        <p className="post-ticket__subtitle frm______a" style={{marginBottom: "50px"}}>
                            Adding Payment Method is necessary to be able to Post Tickets, Start contracts and pay for
                            done work
                        </p>
                        <PostATicket/>

                        <div className="post-ticket__buttons">
                            {/* <!-- real button --> */}
                            <input type="button" className="button js-show-modal button--post js-button-post frm______a" id="review"
                                value="Post"
                                data-modal-id="ticket-posted-modal"/>
                            {/* <!-- real button --> */}


                            {/* <!-- popup emulation button --> */}

                            <button type="reset" className="button--no-style post-ticket__discard frm______a"
                                id="reset">Discard</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
<AddPaymentMethod />

 
    <form id="loginForm" name="loginForm">
        <input type="hidden" id="uuusername" value=""/>
        <input type="hidden" id="uufirstname" value="Mrsec"/>
        <input type="hidden" id="uulastname" value="Asif"/>
        <input type="hidden" id="uuemail" value="seasif2024@gmail.com"/>
        <input type="hidden" id="uuid" value="97"/>
    </form>

</main>
  </div>
);

export default PostTicket;
