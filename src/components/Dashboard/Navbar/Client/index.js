import React from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import logo from '../../../app_assets/img/home/logo-primary.svg';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../../actions/auth';
import jwt from 'jwt-decode';
import './Navbar.css';

function NavbarClient() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const history = useHistory();

    //
    let jwtDecode;
    if (Object.entries(token).length !== 0) {
        jwtDecode = jwt(token);
    }

   
    console.log(jwtDecode);
    const handleLogout = () => {
        // alert('Logout')
        dispatch(logoutAPI())
            .then((res) => {
                history.push('/');
            });
    };

    if(jwtDecode.role=="user"){
    return (

        <header>
            <nav className="navigation">
                <div className="container container-fluid-small">
                    <div className="row">
                        <div className="col-4 col-lg-2 logo-align">
                            <div className="main-logo">
                                <Link to={'/client-dashboard'}>
                                    <img src={logo} alt="logo" /></Link>
                            </div>
                        </div>

                        <div className="col-5  d-none d-lg-flex flex-end">
                            <ul className="menu">
                                <li className="menu__item menu__item--active">
                                    <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                        <a href="#">My Tickets</a>
                                        <div className="menu">

                                            <Link to={'/client-dashboard/tickets-in-progess'} className="item dropdown-active-link"> Tickets in progress </Link>
                                            <Link to={'/client-dashboard/posted-tickets'} className="item dropdown-active-link"> Posted tickets </Link>
                                            <Link to={'/client-dashboard/closed-tickets'} className="item dropdown-active-link"> Closed tickets </Link>
                                            {/* <Link to={'/client-dashboard/cancelled-tickets'} className="item dropdown-active-link"> Cancelled tickets</Link> */}

                                        </div>
                                    </div>

                                </li>

                                <li className="menu__item">
                                    <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                        <a href="#">My Experts</a>
                                        <div className="menu">

                                            <Link to={'/client-dashboard/find_experts'} className="item dropdown-active-link">Search Experts</Link>
                                            <Link to={'/client-dashboard/myexperts/workingnow'} className="item dropdown-active-link">Working Now</Link>
                                            <Link to={'/client-dashboard/myexperts/recent'} className="item dropdown-active-link">Recent</Link>
                                            <Link to={'/client-dashboard/myexperts/archived'} className="item dropdown-active-link">Favorite</Link>
                                        </div>
                                    </div>
                                </li>


                                <li className="menu__item">
                                    <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                        <a href="#">Payments</a>
                                        <div className="menu">
                                        
                                            <Link to={'/client-dashboard/payments/all'} className="item   dropdown-active-link">All payments</Link>
                                            <Link to={'/client-dashboard/payments/recent'} className="item  dropdown-active-link">Recent</Link>
                                            <Link to={'/client-dashboard/payments/closed'} className="item  dropdown-active-link">Closed</Link>
                                            <Link to={'/client-dashboard/payments/closed'} className="item  dropdown-active-link">Payment Options</Link>

                                        </div>
                                    </div>
                                </li>

                                <li className="menu__item">
                                    <a href="#">Reports</a>
                                </li>
                                <li className="menu__item">
                                    <Link to={'/client-dashboard/resolution_market'}>Resolution Market</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-8 col-lg-5">
                            <div className="account-menu">
                                <div className="account-menu__item--new-message" id="unread___messages">
                                    <Link to={'/client-dashboard/dialogs/dialogs'}>
                                        <i class="message-icon"></i>
                                    </Link>
                                </div>
                                <div className=" account-menu__item--new-notification">
                                    <Link to={'/client_dashboard/all-notifications'} className="d-inline-block d-md-none">
                                        <i className="bell-notifications"></i>
                                    </Link>

                                    <div className="d-none d-md-inline-block on-click-notifications ">
                                        <div className="ui dropdown dropdown-2 dropdown--notifications">
                                            <i className="bell-notifications"></i>
                                            <div className="menu notify" id="notification">

                                                <a href="#" className="item">
                                                    <button type="button" class="button button--no-style js-remove-notification">
                                                        <i className="icon__remove-btn"></i>
                                                    </button>
                                                    <div className="item__title">
                                                        asif
                                                    </div>
                                                    <div className="item__subtitle">
                                                        Applied to the job
                                                    </div>
                                                </a>
                                                <Link to={'/client_dashboard/all-notifications'} className="item">
                                                    <div class="item__title">
                                                                      View all
                                                    </div>
                                                    <div className="item__subtitle">
                                                        notification
                                                    </div>
                                                </Link>


                                            </div>

                                        </div>
                                    </div>

                                </div>



                                <div id="burger">
                                    <i></i>
                                </div>
                                <div className="account-menu__item">
                                    <div className="account-wrapper ui dropdown line-on">
                                        <div className="account__img">

                                        </div>
                                        <div className="account__name">
                                            <span>{isAuthenticated ? jwtDecode.name : 'Please Login'}</span>
                                        </div>

                                        <div className="account__dropdown-cta">
                                            <a href="#">
                                                <i className="dropdown-cta"></i>
                                            </a>
                                        </div>
                                        <div className="menu">
                                            <Link to={'/client-dashboard/account/settings'} className="item account-menu__link account-menu__link--settings">
                                                                Account settings
                                            </Link>
                                            <Link to={'#'} className="item account-menu__link account-menu__link--signout" onClick={handleLogout}>
                                                                                             Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </nav>

        </header>

    );


}
} 


export default NavbarClient