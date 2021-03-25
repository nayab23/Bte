import React, { Component } from 'react';
import billingaddress from  "../app_assets/img/billing address.png"

class CheckOutForm extends Component {
    render() {
        return (
            <div className="container container-fluid-small">
                 <main className="main-content main-content--dashboard">
  <div className="container">
<div className="py-5 text-center">
  <img className="d-block mx-auto mb-4" src={billingaddress} alt="" width="72" height="72" />
  <h2 style={{marginTop:"-150px",paddingLeft: "65px"}}>Submit the Checkout form with completing it </h2>
</div>
<div className="row" style={{padding: "63px 65px 65px", background:"#fff", fontFamily: "roboto, sans-serif"}}>
  <div className="col-md-4 order-md-2 mb-4">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge badge-pill" style={{background: "#4492da"}}>1</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Product name</h6>
          <small className="text-muted">Responsive Real Estate WordPress Theme</small>
        </div>
        <span className="text-muted">$10</span>
      </li>
       <li className="list-group-item d-flex justify-content-between bg-light">
        <div>
          <h6 className="my-0">30% Discount on Promocode using</h6>
          <small className="text-primary">ORD75</small>
        </div>
        <span className="text-primary">-$3</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total(USD)</span>
 <strong>$7</strong>      
      </li>
    </ul>


    <form method="post" action="" className="card p-2">
<input type="hidden" name="_token" value="igUQwuyVyofiUOFmRlSy6gHG92S79tssgLTWHQVF"/>       
 <div className="input-group">
   <input type="text" className="form-control" name="promo_code" value="" title="You have already redeemed" readOnly />
   <input type="hidden" className="form-control" name="discount_id" value="1"/>
   <input type="hidden" className="form-control" name="resolution_id" value="27"/>

        <div className="input-group-append">
          <button style={{height: "38px"}} type="submit" className="button primary" title="You have already redeemed" disabled>Redeem</button>
        </div>
      </div>
    </form>
<hr className="mb-4"/>
      <button className="button primary btn-lg btn-block" >Continue to checkout</button>

  </div>
  <div className="col-md-8 order-md-1">
    <h4 className="mb-3">Billing address</h4>
    <form className="needs-validation" 
    // novalidate=""
     >
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">First name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" placeholder="" value="Mrsec" required />
          <div className="invalid-feedback">
            Valid first name is required.
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastName">Last name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" placeholder="" value="Asif" required />
          <div className="invalid-feedback">
            Valid last name is required.
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input type="text" className="form-control" id="username" name="username" placeholder="Username" value="seasif2024" required />
          <div className="invalid-feedback" style={{width: "100%"}}>
            Your username is required.
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
        <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" value="seasif2024@gmail.com" />
        <div className="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
      </div>
      <div className="row">
        <div className="col-md-5 mb-3">
          <label htmlFor="country">Country</label>
          <select className="custom-select d-block w-100" id="country">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid country.
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="state">State</label>
          <select className="custom-select d-block w-100" id="state">
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div className="invalid-feedback">
            Please provide a valid state.
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="zip">Zip</label>
          <input type="text" className="form-control" id="zip" placeholder="" />
          <div className="invalid-feedback">
            Zip code required.
          </div>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="same-address" />
        <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="save-info" />
        <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
      </div>
      <hr className="mb-4" />

      <h4 className="mb-3">Payment</h4>

      <div className="d-block my-3">
        <div className="custom-control custom-radio">
          <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked/>
          <label className="custom-control-label" htmlFor="credit">Credit card</label>
        </div>
        <div className="custom-control custom-radio">
          <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"/>
          <label className="custom-control-label" htmlFor="debit">Debit card</label>
        </div>
        <div className="custom-control custom-radio">
          <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input"/>
          <label className="custom-control-label" htmlFor="paypal">PayPal</label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-name">Name on card</label>
          <input type="text" className="form-control" id="cc-name" placeholder="" />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">
            Name on card is required
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cc-number">Credit card number</label>
          <input type="text" className="form-control" id="cc-number" placeholder="" />
          <div className="invalid-feedback">
            Credit card number is required
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-expiration">Expiration</label>
          <input type="text" className="form-control" id="cc-expiration" placeholder="" />
          <div className="invalid-feedback">
            Expiration date required
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="cc-cvv">CVV</label>
          <input type="text" className="form-control" id="cc-cvv" placeholder="" />
          <div className="invalid-feedback">
            Security code required
          </div>
        </div>
      </div>
      
    </form>
  </div>
</div>
</div>
  </main>
            </div>
        );
    }
}

export default CheckOutForm;