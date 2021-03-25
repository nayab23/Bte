import React, { Component } from 'react'
import theme from "../app_assets/img/1578584281demo-11-768x657.png"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class ResolutionDetail extends Component {
    render() {
        return (
  <div className="container container-fluid-small">
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
                   <section className="add-resolutions" data-tab="get-paid">
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
                                   <p>Here Should be some info about the problem, like a description or something here
                                       Should be some info about the problem, like a description</p>

                               </div>
                               <div
                                   className="add-resolutions__section add-resolutions__section--custom row align-flex-start ml-0 mr-0 pt-0">
                                   <div className="col-12 col-md-6 col-lg-7 order-0 order-md-1">
                                       <h2 className="post-ticket__input-title mt-5"> Responsive Real Estate WordPress
                                           Theme</h2>

                                       <label className="input__wrapper mt-4 mb-2">
                                           <div className="cover-image cover-image--primary cover-image--md-6">
                                               <img src={theme}
                                                   alt=""/>
                                           </div>
                                       </label>

                                       <p className="resolution__primary-description">
                                           If you’re looking for a World Class Real Estate WordPress Theme, with
                                           support that’s second to none from an Experienced WordPress Expert the
                                           Designer/Developer Himself, based out of sunny San Diego, CA — than look no
                                           further you’ve found it!
                                       </p>
                                   </div>
                                   <div className="col-lg-1 d-none d-lg-block order-1"></div>
                                   <div
                                       className="col-12 col-md-6 col-lg-4 order-0 order-md-1 resolution__sidebar--bordered">
                                       <div>
                                           <h3
                                               className="post-ticket__input-title post-ticket__input-title--withlink mt-5 mb-4">
                                               Mrasif Mrasif1
                                           </h3>
                                           <div className="my-resolutions__rating">
                                               <div>
                                                   <div className="expert-lineitem__rating">
                                                       <div className="stars-wrapper stars-wrapper--static">
                                                           <label htmlFor="r1">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                                   height="14.112" viewBox="0 0 14.798 14.112">
                                                                   <g id="star_with_fill" data-name="star with fill"
                                                                       transform="translate(0)">
                                                                       <path id="Path_91" data-name="Path 91"
                                                                           d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                           transform="translate(0 -0.452)"
                                                                           fill="#388ccb"></path>
                                                                   </g>
                                                               </svg>
                                                           </label>
                                                           <input type="radio" className="visually-hidden" value="1"
                                                               name="rating" id="r1"/>

                                                           <label htmlFor="r2">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                                   height="14.112" viewBox="0 0 14.798 14.112">
                                                                   <g id="star_with_fill" data-name="star with fill"
                                                                       transform="translate(0)">
                                                                       <path id="Path_91" data-name="Path 91"
                                                                           d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                           transform="translate(0 -0.452)"
                                                                           fill="#388ccb"></path>
                                                                   </g>
                                                               </svg>
                                                           </label>
                                                           <input type="radio" className="visually-hidden" value="2"
                                                               name="rating" id="r2"/>

                                                           <label htmlFor="r3">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                                   height="14.112" viewBox="0 0 14.798 14.112">
                                                                   <g id="star_with_fill" data-name="star with fill"
                                                                       transform="translate(0)">
                                                                       <path id="Path_91" data-name="Path 91"
                                                                           d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                           transform="translate(0 -0.452)"
                                                                           fill="#388ccb"></path>
                                                                   </g>
                                                               </svg>
                                                           </label>
                                                           <input type="radio" className="visually-hidden" value="3"
                                                               name="rating" id="r3"/>

                                                           <label htmlFor="r4">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                                   height="14.112" viewBox="0 0 14.798 14.112">
                                                                   <g id="star_with_fill" data-name="star with fill"
                                                                       transform="translate(0)">
                                                                       <path id="Path_91" data-name="Path 91"
                                                                           d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                           transform="translate(0 -0.452)"
                                                                           fill="#388ccb"></path>
                                                                   </g>
                                                               </svg>
                                                           </label>
                                                           <input type="radio" className="visually-hidden" value="4"
                                                               name="rating" id="r4"/>

                                                           <label htmlFor="r5">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="14.798"
                                                                   height="14.112" viewBox="0 0 14.798 14.112">
                                                                   <g id="star_with_fill" data-name="star with fill"
                                                                       transform="translate(0)">
                                                                       <path id="Path_91" data-name="Path 91"
                                                                           d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                                                           transform="translate(0 -0.452)"
                                                                           fill="#388ccb"></path>
                                                                   </g>
                                                               </svg>
                                                           </label>
                                                           <input type="radio" className="visually-hidden" value="5"
                                                               name="rating" id="r5" checked/>
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
                                       </div>

                                       <hr className="resolution__sidebar-hr d-none d-lg-block"/>

                                       <ul className="my-resolutions__stats d-block">
                                           <li className="my-resolutions__stats-item">
                                               <b>1</b> Times Sold
                                           </li>

                                           <li className="my-resolutions__stats-item">
                                               <b className="t_c">0</b> <a href="#comments"
                                                   className="comments__link">Comments</a>
                                           </li>
                                       </ul>

                                       <button type="button" className="button  button--add-payment-2"
                                           >
                                           Buy now
                                       </button>


                                       <a href=""
                                           className="link mt-4 d-block text-align-center">
                                           Other Resolutions from Expert name
                                       </a>

                                   </div>
                                   <div className="col-12 order-1 js-show-more">
                                       <h2 className="post-ticket__input-title mt-3 mb-4">
                                           Screenshots <span className="d-none d-md-inline">with description</span> (0)
                                       </h2>

                                       <div className="screenshot-block">

                                       </div>

                                   </div>

                               </div>

                               <div className="add-resolutions__section row align-flex-start ml-0 mr-0">
                                   <div className="col-12">
                                       <h2 className="post-ticket__input-title mt-3">
                                           Attachments (0)
                                       </h2>
                                       <div className="ticket__description-text opened-ticket__description-text pl-0 mt-4">







                                       </div>
                                   </div>
                               </div>

                               <div id="comments"
                                   className="add-resolutions__section comments add-resolutions__section--custom row align-flex-start ml-0 mr-0">
                                   <div className="col-12 col-md-10 col-lg-8">
                                       <h2 className="post-ticket__input-title mt-3 t_c_2">
                                           Comments (0)
                                       </h2>
                                       {/* <!-- Comments START --> */}
                                       <div className="ticket-body ticket-body--dialog">
                                           <ul className="messages messages--dialog" id="comments__r">


                                           </ul>

                                           <div className="new-message-container">
                                               <form action="#">
                                                   <input type="hidden" id="csrf_token_input"
                                                       value="e3EomWYknbjZtMKGsmrwJYkWQSTfEtVoikUlMWef"/>
                                                   <input type="text" id="comment"
                                                       placeholder="Here will be written the message" className="input"/>
                                                   <button type="button"
                                                       className="button new-message-container__send-button">
                                                       Send
                                                   </button>

                                               </form>
                                           </div>
                                       </div>
                                       {/* <!-- Comments END --> */}
                                   </div>
                               </div>


                           </div>
                       </div>
                   </section>

               </div>
           </div>
       </div>
   </div>





   {/* <!-- [Structure] Chose payment method modal START --> */}
   <div className="ui modal payment-method-add-modal" id="payment-method-add-modal">
       <div className="content">
           <div className="payment-method-add-modal__title">
               Add Payment Method
           </div>

           <div className="payment-method-add-modal__item">
               <img src="../../public/app_assets/img/pay-pal.svg" alt="paypal" className="payment-method-add-modal__img"/>
               <span className="payment-method-add-modal__name">Paypal</span>
               <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                   data-modal-id="payment-method-paypal-modal">
                   Select
               </button>
           </div>
           <div className="payment-method-add-modal__item">
               <img src="../../public/app_assets/img/cards.svg" alt="mastercard / visa"
                   className="payment-method-add-modal__img"/>
               <span className="payment-method-add-modal__name">Credit or Debit Card</span>
               <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                   data-modal-id="payment-method-card-1-modal">
                   Select
               </button>
           </div>
           <button type="button"
               className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
       </div>
   </div>
   {/* <!-- [Structure] Chose payment method modal START --> */}

   {/* <!-- [Structure] Paypal modal START --> */}
   <div className="ui modal payment-method-paypal-modal" id="payment-method-paypal-modal">
       <div className="content">
           <div className="payment-method-add-modal__title">
               Pay with Pay-Pal
           </div>

           <div className="payment-method-add-modal__item">
               <img src="../../public/app_assets/img/pay-pal.svg" alt="paypal" className="payment-method-add-modal__img"/>
               <span className="payment-method-add-modal__name">Paypal</span>
               <button className="payment-method-add-modal__select-cta button button--white max-90"
                   >Pay</button>


           </div>
           <button type="button"
               className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
       </div>
   </div>
   {/* <!-- [Structure] Paypal modal END --> */}

   {/* <!-- [Structure] Card modal START --> */}
   <div className="ui modal payment-method-paypal-modal" id="payment-method-card-1-modal">
       <div className="content">
           <div className="payment-method-add-modal__title">
               Card Information
           </div>

           <div className="payment-method-add-modal__item payment-method-add-modal__item--only">
               <img src="../../public/app_assets/img/cards.svg" alt="paypal" className="payment-method-add-modal__img"/>
               <span className="payment-method-add-modal__name">Credit or Debit Card</span>
           </div>


           <h2 className="post-ticket__input-title">Card Number</h2>
           <label className="input__wrapper  mb-4">
               <input type="text" className="input" placeholder="0000 0000 0000 0000" name="card-number" required/>
               <p className="input__notification">Proffesion title is required</p>
               <span className="input__wrapper--cc d-none d-md-block"></span>
           </label>

           <div className="row">
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">First Name</h2>
                   <label className="input__wrapper  mb-4">
                       <input type="text" className="input" placeholder="First Name" name="first-name" required/>
                       <p className="input__notification">First Name is required</p>
                   </label>
               </div>

               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">Last Name</h2>
                   <label className="input__wrapper  mb-4">
                       <input type="text" className="input" placeholder="Last Name" name="last-name" required/>
                       <p className="input__notification">Last Name is required</p>
                   </label>
               </div>

           </div>

           <div className="row">
               <div className="col-6 col-md-3">
                   <h2 className="post-ticket__input-title">
                       Expiry Date
                   </h2>
                   <label className="input__wrapper  mb-4 mb-md-5">
                       <div className="ui dropdown selection" tabIndex={0}>
                       <select name="exp-date-1" id="exp-date-1-select"
                               required>
                               <option value="" selected disabled>MM</option>
                               <option value="01">01</option>
                               <option value="02">02</option>
                               <option value="03">03</option>
                               <option value="04">04</option>
                               <option value="05">05</option>
                               <option value="06">06</option>
                               <option value="07">07</option>
                               <option value="08">08</option>
                               <option value="09">09</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                           </select><i className="dropdown icon"></i>
                           <div className="default text">MM</div>
                           <div className="menu" tabIndex={-1}>
                               <div className="item" data-value="01">01</div>
                               <div className="item" data-value="02">02</div>
                               <div className="item" data-value="03">03</div>
                               <div className="item" data-value="04">04</div>
                               <div className="item" data-value="05">05</div>
                               <div className="item" data-value="06">06</div>
                               <div className="item" data-value="07">07</div>
                               <div className="item" data-value="08">08</div>
                               <div className="item" data-value="09">09</div>
                               <div className="item" data-value="10">10</div>
                               <div className="item" data-value="11">11</div>
                               <div className="item" data-value="12">12</div>
                           </div>
                       </div>
                       <p className="input__notification">Expiry Date is required</p>
                   </label>
               </div>
               <div className="col-6 col-md-3">
                   <h2 className="post-ticket__input-title">
                       Expiry Date
                   </h2>
                   <label className="input__wrapper  mb-4 mb-md-5">
                       <div className="ui dropdown selection" tabIndex={0}><select name="exp-date-2" id="exp-date-2-select"
                               required>
                               <option value="" selected disabled>YYYY</option>
                               <option value="2019">2019</option>
                               <option value="2020">2020</option>
                               <option value="2021">2021</option>
                               <option value="2022">2022</option>
                               <option value="2023">2023</option>
                               <option value="2024">2024</option>
                               <option value="2025">2025</option>
                               <option value="2026">2026</option>
                               <option value="2027">2027</option>
                               <option value="2028">2028</option>
                               <option value="2029">2029</option>
                               <option value="2030">2030</option>
                           </select><i className="dropdown icon"></i>
                           <div className="default text">YYYY</div>
                           <div className="menu" tabIndex={-1}>
                               <div className="item" data-value="2019">2019</div>
                               <div className="item" data-value="2020">2020</div>
                               <div className="item" data-value="2021">2021</div>
                               <div className="item" data-value="2022">2022</div>
                               <div className="item" data-value="2023">2023</div>
                               <div className="item" data-value="2024">2024</div>
                               <div className="item" data-value="2025">2025</div>
                               <div className="item" data-value="2026">2026</div>
                               <div className="item" data-value="2027">2027</div>
                               <div className="item" data-value="2028">2028</div>
                               <div className="item" data-value="2029">2029</div>
                               <div className="item" data-value="2030">2030</div>
                           </div>
                       </div>
                       <p className="input__notification">Expiry Date is required</p>
                   </label>
               </div>
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">CVV Code</h2>
                   <label className="input__wrapper  mb-4">
                       <input type="text" className="input" placeholder="123" name="cvv-number" required/>
                       <p className="input__notification">CVV Code is required</p>
                   </label>
               </div>
           </div>

           <div className="payment-buttons">
               <button type="button" className="button max-160 js-show-modal" data-modal-id="payment-method-card-2-modal">
                   Next
               </button>

               <button className="button button--no-style link js-show-modal" data-modal-id="payment-method-add-modal">
                   Return
               </button>
           </div>

           <button type="button"
               className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
       </div>
   </div>
   {/* <!-- [Structure] Card modal END --> */}

   {/* <!-- [Structure] Card modal 2 START --> */}
   <div className="ui modal payment-method-paypal-modal" id="payment-method-card-2-modal">
       <div className="content">
           <div className="payment-method-add-modal__title mb-5">
               Payment Address
           </div>


           <div className="row">
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">
                       Country
                   </h2>
                   <label className="input__wrapper  mb-4">
                       <div className="ui dropdown selection" tabIndex={0}>
                       <select name="exp-date-2" id="exp-date-2-select"
                               required>
                               <option value="" selected disabled>Select country..</option>
                               <option value="USA">USA</option>
                               <option value="Ukraine">Ukraine</option>
                               <option value="SaudiArabia">Suadi Arabia</option>
                           </select><i className="dropdown icon"></i>
                           <div className="default text">Select country..</div>
                           <div className="menu" tabIndex={-1}>
                               <div className="item" data-value="USA">USA</div>
                               <div className="item" data-value="Ukraine">Ukraine</div>
                               <div className="item" data-value="SaudiArabia">Suadi Arabia</div>
                           </div>
                       </div>
                       <p className="input__notification">Expiry Date is required</p>
                   </label>
               </div>
           </div>


           <h2 className="post-ticket__input-title">Address</h2>
           <label className="input__wrapper  mb-2">
               <input type="text" className="input" placeholder="" name="address-1" required/>
               <p className="input__notification">Address is required</p>
           </label>

           <label className="input__wrapper  mb-4">
               <input type="text" className="input" placeholder="" name="address-2"/>
           </label>

           <div className="row">
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">City</h2>
                   <label className="input__wrapper  mb-4">
                       <input type="text" className="input" placeholder="" name="city" required/>
                       <p className="input__notification">City is required</p>
                   </label>
               </div>
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">State</h2>
                   <label className="input__wrapper  mb-4">
                       <input type="text" className="input" placeholder="" name="state" required/>
                       <p className="input__notification">State is required</p>
                   </label>
               </div>
               <div className="col-12 col-md-6">
                   <h2 className="post-ticket__input-title">ZIP Code</h2>
                   <label className="input__wrapper  mb-5">
                       <input type="text" className="input" placeholder="" name="zip-number" required/>
                       <p className="input__notification">ZIP Code is required</p>
                   </label>
               </div>
           </div>

           <div className="payment-buttons">
               <button type="button" className="button max-160 js-show-modal" data-modal-id="payment-method-added"
                   >
                   Next
               </button>

               <button className="button button--no-style link js-show-modal" data-modal-id="payment-method-card-1-modal">
                   Return
               </button>
           </div>

           <button type="button"
               className="button button--no-style js-modal-close payment-method-add-modal__close-button"></button>
       </div>
   </div>
   {/* <!-- [Structure] Card modal 2 END --> */}


   <form id="loginForm" name="loginForm">
       <input type="hidden" id="uuusername" value="seasif2024"/>
       <input type="hidden" id="uufirstname" value="Mrsec"/>
       <input type="hidden" id="uulastname" value="Asif"/>
       <input type="hidden" id="uuemail" value="seasif2024@gmail.com"/>
       <input type="hidden" id="uuid" value="97"/>
   </form>

   {/* <!-- [Structure] Ticket created modal START --> */}
   <div className="ui modal ticket-posted-modal" id="model-promo">
       <div className="content">
           <div className="ticket-posted-modal__title">
               Congratulations.
           </div>

           <div className="ticket-posted-modal__subtitle">
               You are getting <b id="promo" style={{color: "#4492da"}}></b> discount. <br/>
               <p id="code" style={{textAlignLast: "center"}}></p>

           </div>

           <button type="button" className="button js-modal-close payment-method-add-modal__close-button "
               id="add-payment-method">
               get it
           </button>
       </div>
   </div>

   <input type="hidden" id="___id"/>

</main>
 </div>
        )
    }
}
export default ResolutionDetail;
