import React from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import logo from '../../../app_assets/img/home/logo-primary.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../../actions/auth';
import jwt from 'jwt-decode';
import './Navbar.css';

function NavbarExpert() {

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

    if(jwtDecode.role=="expert"){
          
    
    return (<header>
        <nav className="navigation">
            <div className="container container-fluid-small">
                <div className="row">
                    <div className="col-4 col-lg-3 logo-align">
                        <div className="main-logo">
                            <Link to={'/expert-dashboard'}>
                                <img src={logo} alt="logo" /></Link>
                        </div>
                    </div>

                    <div className="col-5  d-none d-lg-flex flex-end">
                        <ul className="menu">
                            <li className="menu__item menu__item--active">
                                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a href="#">Tickets</a>
                                    <div className="menu">

                                        <Link to={'/expert-dashboard/mytickets/tickets-in-progress'} className="item dropdown-active-link"> In progress Tickets List</Link>
                                        <Link to={'/expert-dashboard/expert-feed'} className="item dropdown-active-link"> Applied Ticket List </Link>
                                        <Link to={'/expert-dashboard/mytickets/sent-requests'} className="item dropdown-active-link">Completed Ticket List</Link>
                                        {/* <Link to={'/expert-dashboard/mytickets/recieved-propositions'} className="item dropdown-active-link">Received propositions</Link>
                                        <Link to={'/expert-dashboard/mytickets/closed-tickets'} className="item dropdown-active-link">Closed</Link> */}
                                    </div>
                                </div>

                            </li>

                            <li className="menu__item">
                                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a href="#">Feedbacks</a>
                                    <div className="menu">
                                        <Link to="#" className="item dropdown-active-link">Customers Feedback</Link>
                                        <Link to="#" className="item dropdown-active-link">My Rating</Link>

                                    </div>
                                </div>
                            </li>

                            {/* <li className="menu__item">
                                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a href="#">My Resolutions</a>
                                    <div className="menu">
                                        <Link to={'/expert-dashboard/resolutions/create'} className="item dropdown-active-link">Add Resolution information</Link>
                                        <Link to={'/expert-dashboard/resolutions/list'} className="item dropdown-active-link">My Resolutions List</Link>
                                        <Link to={'/expert-dashboard/resolutions/how-to-add-resolution'} className="item dropdown-active-link">How to add resolution</Link>

                                    </div>
                                </div>
                            </li> */}


                            {/* <li className="menu__item">
                                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a href="#">My Wallet</a>
                                    <div className="menu">

                                        <Link to={'/expert-dashboard/my-wallet/get-paid'} className="item   dropdown-active-link">Get paid</Link>
                                        <Link to={'/expert-dashboard/my-wallet/payment-in-progress'} className="item  dropdown-active-link">In progress</Link>
                                        <Link to={'/expert-dashboard/my-wallet/payment-history'} className="item  dropdown-active-link">Payment history</Link>
                                        <Link to={'/expert-dashboard/my-wallet/payment-methods'} className="item  dropdown-active-link">Payment methods</Link>
                                    </div>
                                </div>
                            </li> */}
                            <li className="menu__item">
                             <Link to="#"> Contracts </Link>
                            </li> 

                            <li className="menu__item">
                             <Link to={'/client-dashboard'}> Client </Link>
                            </li> 
     
                           
                        </ul>
                    </div>
                    <div className="col-8 col-lg-4">
                        <div className="account-menu">
                            <div className="account-menu__item--new-message" id="unread___messages">
                                <Link to={'/expert-dashboard/dialogs'}>
                                    <i class="message-icon"></i>
                                </Link>
                            </div>
                            <div className=" account-menu__item--new-notification">
                                <Link to={'/expert_dashboard/notifications'} className="d-inline-block d-md-none">
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
                                            <Link to={'/expert-dashboard/notifications'} className="item">
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
                                        <Link to={'/expert-dashboard/expert-profile'} className="item account-menu__link account-menu__link">View profile</Link>
                                        <Link to={'/expert-dashboard/edit-profile'} className="item account-menu__link account-menu__link">Edit profile</Link>
                                        <Link to={'/expert-dashboard/settings'} className="item account-menu__link account-menu__link--settings"> Account settings</Link>
                                        <Link to={'#'} className="item account-menu__link account-menu__link--signout" onClick={handleLogout}>Logout</Link>
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

export default NavbarExpert