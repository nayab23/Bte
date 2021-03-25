import React, { Component } from 'react';
import depositPayment from '../app_assets/img/alll-payments.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { MDBDatePickerV5 } from 'mdbreact';
import Select from 'react-select';
const ExpertList = [{
        value: '1',
        label: 'Expert 1'
    }, {
        value: '2',
        label: 'Expert 2'
    }, {
        value: '3',
        label: 'Expert 3'
    },
    {
        value: '4',
        label: 'Expert 4'
    }, {
        value: '5',
        label: 'Expert 5'
    },
];
  const contractType = [
    {
        value: '1',
        label: 'Hourly contract'
    }, {
        value: '2',
        label: 'Fixed contract'
    }, {
        value: '3',
        label: 'Long term contract'
    }
  ];
class AllPayments extends Component {
    state = {
        selectedOption: null,
        selectedOption1: null,
      };
    handleChangeContractType = selectedContractType => {
        this.setState({ selectedContractType });
        console.log(`Option selected:`, selectedContractType);
      };
      handleChangeExpertList = selecteExpertList => {
        this.setState({ selecteExpertList });
        console.log(`Option selected:`, selecteExpertList);
      };
    render() {
        const { selectedOption,selectedOption1,selectedCategoryOption,selectedCategorySkills,selectedContractType,selecteExpertList  } = this.state;
        return (
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="contract-wrapper">
                    <img className="contract-img" src={depositPayment} alt="" />
                    <h2 className="contract-title"style={{marginLeft: "10px"}}>All Payment</h2>
                    </div>
                    <div className="">
                    <br />
                    <div className="w-25 ">
                        <button type="button" className=" filters-cta button-white d-md-inline max-200">Filter</button>
                    </div>
                    <br />
                    <div className="payment-filter filters-wrapper">
                        {/* <button type="button" className="button-white d-md-inline max-200 mr-4">Contract Type</button>
                        <button type="button" className="button-white d-md-inline max-200 mr-4">Experts</button>
                        <button type="button" className="button-white d-md-inline max-200 mr-4">Date From</button>
                        <button type="button" className="button-white d-md-inline max-200">Date to</button> */}
                       
                    {/* <input type="date"/> */}
                      <div className="row">
                      <div className="col-12 col-md-3 search-mb-4 ">
                        <p className="input__title input__title--half">Contract Type </p>
                        <label className="input__wrapper input__wrapper--half ">
                          <Select
                                value={selectedContractType}
                                onChange={this.handleChangeContractType}
                                options={contractType}
                                required
                            />
                          <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                      <div className="col-12 col-md-3 search-mb-4 ">
                        <p className="input__title input__title--half">Experts </p>
                        <label className="input__wrapper input__wrapper--half ">
                          <Select
                                value={selecteExpertList}
                                onChange={this.handleChangeExpertList}
                                options={ExpertList}
                                required
                            />
                          <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                      
                      <div className="col-12 col-md-3 search-mb-4">
                        <p className="input__title input__title--half">Date from </p>
                        <label className="input__wrapper input__wrapper--half ">
                        {/* <MDBDatePickerV5 className="date-he" label="Subject" getValue={(e)=> console.log(e)}  /> */}
                        <input id="" type="Date" className="input " placeholder="Add date" name="date" required/>
                        
                        <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                      <div className="col-12 col-md-3 search-mb-4">
                        <p className="input__title input__title--half">Date to </p>
                        <label className="input__wrapper input__wrapper--half ">
                        {/* <MDBDatePickerV5 className="date-he"  label="Subject" getValue={(e)=> console.log(e)}  /> */}
                        <input id="" type="Date" className="input " placeholder="Add date" name="date" required/>
                        <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                      </div>
                      </div>
                    
                    <hr />
                    <table className="payment-summary-table">
                    <thead className="payment-summary-table-head">
                        <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Contract Type</th>
                        <th>Payment Detail Description</th>
                        <th>Expert</th>
                        <th>Amount</th>
                        <th>Invoice ID</th>
                    </tr></thead>
                    <tbody className="payment-summary-table-body">
                        <tr>
                        <td data-label="No">1</td>
                        <td data-label="Date">Oct 27, 2020</td>
                        <td data-label="ContractType">Fixed Contract</td>
                        <td data-label="FirstPayment">First Payment</td>
                        <td data-label="Experts">Name</td>
                        <td data-label="Amount">35 $</td>
                        <td data-label="InvoiceID">B12D</td>
                        </tr>
                        <tr>
                        <td data-label="No">2</td>
                        <td data-label="Date"></td>
                        <td data-label="ContractType"></td>
                        <td data-label="FirstPayment"></td>
                        <td data-label="Experts"></td>
                        <td data-label="Amount"></td>
                        <td data-label="InvoiceID"></td>
                        </tr>
                        <tr>
                        <td data-label="No">3</td>
                        <td data-label="Date"></td>
                        <td data-label="ContractType"></td>
                        <td data-label="FirstPayment"></td>
                        <td data-label="Experts"></td>
                        <td data-label="Amount"></td>
                        <td data-label="InvoiceID"></td>
                        </tr>
                    </tbody>
                    </table>
                    <hr />
                    </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
        );
    }
}

export default AllPayments;