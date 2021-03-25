import React, { Component } from 'react';
import depositPayment from '../app_assets/img/payments-method.svg';
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import paypal from "../app_assets/img/pay-pal.svg";
import visa from "../app_assets/img/cards.svg";
import Select from 'react-select';

class PaymentMethod extends Component {
    render() {
        return (
            <div className="container container-fluid-small">
            <main className="main-content main-content--dashboard">
              <div className="row justify-content-center">
                <div className="col-12 feed__wrapper order-1">
                  <div className="tile tile--2 tile--wallet hire-ticket-content">
                  <div className="contract-wrapper">
                  <img className="contract-img" src={depositPayment} alt="" />
                  <h2 className="contract-title"style={{marginLeft: "10px"}}>Payment Methods</h2>
                  </div>
                  <div className="">
                  <br />
                  {/* <div className="w-25 ">
                      <button type="button" className=" filters-cta button-white d-md-inline max-200">Filter</button>
                  </div> */}
                  <br />
                    <div className="payment-method-add-modal__item">
                        <img src={visa} alt="mastercard / visa" className="payment-method-add-modal__img"/>
                        <span className="payment-method-add-modal__name ml-5">Credit or Debit Card</span>
                        {/* <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                            data-modal-id="payment-method-card-1-modal">
                            Select
                        </button> */}
                    </div>
                    {/* <br/> */}
                    <hr />
                    <p className="modal-expert-description">Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. 
                    </p>
                    <br/>
                    <h2 className=" contract-row__name mt-3">Change payment method</h2> 
                    <br/>
                    <div className="col-12 col-md-12 ">
                        <a href="#" class="wallet__add-cta  js-show-modal bold" data-modal-id="payment-method-add-modal">+ Add payment method</a>
                    </div>
                    <hr />
                    {/* <br/> */}
                    <p className="modal-expert-description">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. 
                    </p>
                    <h2 className=" contract-row__name mt-3">Shipping Address</h2> 
                    <div className="col-12 col-md-12 ">
                        <a href="#" class="wallet__add-cta  js-show-modal bold" data-modal-id="payment-method-card-2-modal">+ Add Shipping Address</a>
                    </div>
                    <hr />
                    <p className="modal-expert-description">Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. 
                    </p>
                    <br/>
                    <div className="w-25 ">
                        <button type="button" className="button-white d-md-inline max-200">Edit</button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
               <AddPaymentMethod />
            </main>
          </div>
        );
    }
}

export default PaymentMethod;