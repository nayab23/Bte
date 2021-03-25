import React, { Component } from 'react';
import hirePayment from '../app_assets/img/hire and payment.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MDBDatePickerV5 } from 'mdbreact';
import Select from 'react-select';
import AddPaymentMethod from '../Modal/AddPaymentMethod';

const options = [
    {
        value: '1',
        label: 'MasterCard  (0001)'
    }, {
        value: '2',
        label: 'Debit card (0001)'
    }, {
        value: '3',
        label: 'Credit card (0201)'
    },
    {
        value: '4',
        label: 'PayPal'
    }
  ];
class HireAndPayment extends Component {
    state = {
        selectPaymentMethod: null,
      };
      handleChange = selectPaymentMethod => {
        this.setState({ selectPaymentMethod });
        console.log(`Option selected:`, selectPaymentMethod);
      };
    render() {
        const { selectPaymentMethod } = this.state;
        return (
            <div>
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
              {/* <MDBDatePickerV5 inline getValue={(e)=> console.log(e)} /> */}
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="contract-wrapper">
                    <img className="contract-img" src={hirePayment} alt="" />
                    <h2 className="contract-title" style={{marginLeft: "18px"}}>Pay &amp; Hire</h2>
                    </div>
                    <div className="">
                    <h2 className="contract-title">Payament Value</h2>
                    <br />
                    <form method="post" action="#" className="form " id="">
                    <div className="row">
                    <div className="col-12 col-md-6 ">
                        <h3 className=" filter__section-label">Total Number of Hours</h3><label className="input__wrapper input__wrapper--half "><input
                            type="number" className="input input-check" placeholder="Number of Hours" name="NumberofHours" required=""/>
                        <p className="input__notification">Number of Hours is required</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <h3 className="filter__section-label">How much you want to deposit?</h3>
                        <label className="input__wrapper input__wrapper--half"  style={{display: "flex"}}>
                        <input type="number" className="input input-check" placeholder="Deposit Payment" name="DepositPayment" required="" />
                        <h1 className="contract-payment-val">$</h1>
                        <p className="input__notification">Deposit Payment is required</p>
                        </label>
                    </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col-12 col-md-12 ">
                    <div class="filters-checks">
                    <h3 class="filter__section-label">Choose Payment Method</h3>
                    <label class="input__wrapper  mb-4 ">
                    <div class="dropdown">
                    <Select
                        value={selectPaymentMethod}
                        onChange={this.handleChange}
                        options={options}
                        className="multi-select-input-style"
                    />
                    </div>
                    <p class="input__notification">Payment is required</p>
                    </label>
                  </div>
                    </div>
                    <div className="col-12 col-md-12 ">
                    <a href="#" class="wallet__add-cta  js-show-modal" data-modal-id="payment-method-add-modal">+ Add Payment method</a>
                    </div>
                    <div className="col-12 col-md-12 ">
                    <label class="checkbox__wrapper checkbox__wrapper--2 mb-4 mt-4">
                      <input type="checkbox" class="checkbox checkbox--2" required=""/>
                      <div class="checkbox__label">I Agree to that BTE is not liable to anything (compliance line) </div>
                    </label>
                    <label class="checkbox__wrapper checkbox__wrapper--2 mb-4 mt-4">
                      <input type="checkbox" class="checkbox checkbox--2" required=""/>
                      <div class="checkbox__label">I Agree on BTE Terms &amp; Conditions </div>
                    </label>
                    </div>
                    </div>
                    </form>
                    {/* <h3 className="contract-row__name">Contract Value</h3> */}
                    
                    <div class="contract-next-row">
                    <h3 className="contract-next-title"><Link to="/client-dashboard/hiring">Go Back</Link></h3>
                    <button class="primary contract-button"><Link to="/client-dashboard/hiring/hire-and-payment/payment-summary" class="button rounded-small" href="#">Pay</Link></button>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
               <AddPaymentMethod />
              </main>
            </div>
          </div>
        );
    }
}

export default HireAndPayment;