import React from 'react';
import { transform } from 'babel__core';
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';
import Spending from '../app_assets/img/Final-ICONS_SVG_3-Total Spending.svg';
import filter from '../app_assets/img/Final-ICONS_SVG_5-Filter-512.svg';
import Budget from '../app_assets/img/Final-ICONS_SVG_9-Total-Budget.svg';
import Ticket from './Ticket';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import Test from '../Dashboard/Navbar/test';

const ClientDashboard: React.FC = () => (
<div className="container container-fluid-small">
{/* <Test /> */}
<main className="main-content main-content--dashboard">
    <div className="main-wrapper" >
      <div className="my-ticket-wrapper">
        {/* <!-- start wrapper --> */}
        <div className="stat-wrapper">
          <div className="search-wrapper">
            <SearchBar />
          </div>
          {/* <!-- card --> */}
          <div className="post-card card ">
            <h5 className="post-card-title meta">Need help with some work?</h5>
            <div className="post-card-body">
              <p className="post-card-text" style={{textAlign: "center"}}>Select the field of your interests
               Post a ticket and find the right expert for your job</p>
                    <button className=" ui primary button" >
                    <Link to={"/client-dashboard/post-ticket"} style={{width: "100%"}} className="button rounded-small">
                    Post a ticket
                </Link></button>
            </div>
            {/* <!--/ card --> */}
          </div>
          {/* <!-- Small Cards --> */}
          <div className="stat-card-wrapper ui">
            <div className="stat-card card card-shadow">
              <div className="stat-card-header"><img
                src={Spending}
                className="card-icon" />
                <h5 className="card-heading">Total Jobs Posted</h5>
              </div><span className="card-value">0</span>
            </div>
            <div className="stat-card card card-shadow">
              <div className="stat-card-header"><img
                src={filter} className="card-icon" />
                <h5 className="card-heading">Completed Jobs</h5>
              </div><span className="card-value">0</span>
            </div>
            <div className="stat-card card card-shadow">
              <div className="stat-card-header"><img
                src={Spending} className="card-icon" />
                <h5 className="card-heading">Total Spending</h5>
              </div><span className="card-value">$ 0.00</span>
            </div>
            <div className="stat-card card card-shadow">
              <div className="stat-card-header"><img
                src={Budget}
                className="card-icon" />
                <h5 className="card-heading">Pending Payment</h5>
              </div><span className="card-value">$ 0.00</span>
            </div>
            {/* <!-- Small Cards --> */}
          </div>

          {/* <!-- /start wrapper --> */}
        </div>

        {/* <TicketContractRow /> */}
        <Ticket />
      </div>
    </div>
    </main>
  </div>
);

export default ClientDashboard;









  
