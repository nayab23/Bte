import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div className="container container-fluid-small">
          <main className="main-content main-content--dashboard">
      <div className="container container-fluid-small">
      <div className="row justify-content-center">
        <div className="col-4 d-none d-lg-block" style={{float:"left"}}>
          <h2 className="mt-0 mb-0 my-experts-title">
            Transaction #425789360 Completed
          </h2>
        </div>
        <div style={{float:"right", marginTop: "50px"}}>
          <div className="row&quot;">
            <div style={{display:"inline-block"}}>
              TransactionID:
            </div>
            <div style={{display:"inline-block"}}>
              #425789360
            </div>
          </div>
          <div className="row&quot;">
            <div style={{display:"inline-block"}}>
              Transaction Date:
            </div>
            <div style={{display:"inline-block"}}>
              2020-10-01 13:10:33
            </div>
          </div>
          <div className="row&quot;">
            <div style={{display:"inline-block"}}>
              Name:
            </div>
            <div style={{display:"inline-block"}}>
              Mrsec Asif
            </div>
          </div>
          <div className="row&quot;">
            <div style={{display:"inline-block"}}>
              Mobile#:
            </div>
            <div style={{display:"inline-block"}}>
            </div>
          </div>
        </div>
        <table className="ui striped table">
          <tbody>
            <tr>
              <td>Product name</td>
              <td>Responsive Real Estate WordPress Theme</td>
            </tr>
            <tr>
              <td>Product price</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Product quantity</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Product discount</td>
              <td>-$3.00</td>
            </tr>
            <tr>
              <td>Total (USD)</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
        <button className="button" style={{marginLeft: "82%"}}>Download</button>
      </div>
    </div>
  </main>
</div>
        );
    }
}

export default Transaction;