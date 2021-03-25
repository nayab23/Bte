import React from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import logo from '../../app_assets/img/home/logo-primary.svg';
import camera from '../../app_assets/img/camera.svg'
import dpImg from '../../app_assets/img/DP.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../actions/auth';
import jwt from 'jwt-decode';
import './Navbar.css';
import Test from './test';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";

const NavBar = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const history = useHistory();
    //
    let jwtDecode 
    if (Object.entries(token).length !== 0) {
        jwtDecode = jwt(token)
    }
console.log(jwtDecode);
  	const handleLogout = () => {
         // alert('Logout')
		dispatch(logoutAPI())
			.then((res) => {
				history.push('/')
			})
  	}
  	return (
<header>
{/* <MDBNavbar double expand="md" fixed="top" scrolling > */}
<nav className="navigation">
    <div className="container container-fluid-small">
        <div className="row">
            <div className="col-4 col-lg-3 logo-align">
                <div className="main-logo">
                <Link to={'/client-dashboard'}><img src={logo}  alt="logo" /></Link>
                </div>
            </div>
            <div className="col-5  d-none d-lg-flex flex-end">
            {/* <Navbar expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                       
                        <NavDropdown className="main-nav-item" title="Tickets" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/client-dashboard/tickets-in-progess">Tickets in progress</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/posted-tickets">Posted tickets</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/closed-tickets">Closed tickets</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="main-nav-item" title="Experts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/client-dashboard/find_experts">Search Experts</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/myexperts/my-experts">My Experts</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/myexperts/favorite">Favorite</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="main-nav-item" title="Payments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/client-dashboard/payments/all-payments">All Payments</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/payments/payment-method">Payment Method</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/payments/recent">Recent</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/payments/closed">Closed</NavDropdown.Item>
                            <NavDropdown.Item href="/client-dashboard/payments/closed">Payment Options</NavDropdown.Item>
                   
                        </NavDropdown>
                        <Nav.Link className="main-nav-item" href="/expert-dashboard">Expert</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            <ul className="menu">
            <li className="menu__item menu__item--active">
                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts"> 
                <a href="#">Tickets</a>
                <div className="menu"> 
                                
                <Link to={'/client-dashboard/tickets-in-progess'} className="item dropdown-active-link"> Tickets in progress </Link>

                <Link to={'/client-dashboard/posted-tickets'} className="item dropdown-active-link"> Posted tickets </Link>

                <Link to={'/client-dashboard/closed-tickets'} className="item dropdown-active-link"> Closed tickets </Link>

                </div>
                </div>
            </li>
            <li className="menu__item">
                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                    <a  href="#">Experts</a>
                    <div className="menu">
                    <Link to={'/client-dashboard/find_experts'} className="item dropdown-active-link">Search Experts</Link>
                    <Link to={'/client-dashboard/myexperts/my-experts'} className="item dropdown-active-link">My Experts</Link>
                    <Link to={'/client-dashboard/myexperts/favorite'} className="item dropdown-active-link">Favorite</Link>
                    </div>
                </div>
            </li>
            <li className="menu__item">
                <div className="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                    <a href="#">Payments</a>
                    <div className="menu">
                            <Link to={'/client-dashboard/payments/all-payments'} className="item   dropdown-active-link" >All Payments</Link>
                            <Link to={'/client-dashboard/payments/payment-method'} className="item  dropdown-active-link">Payment Method</Link>
                            {/* <Link to={'/client-dashboard/payments/recent'} className="item  dropdown-active-link">Recent</Link>
                            <Link to={'/client-dashboard/payments/closed'} className="item  dropdown-active-link">Closed</Link>
                            <Link to={'/client-dashboard/payments/closed'} className="item  dropdown-active-link">Payment Options</Link> */}
                    </div>
                </div>
            </li>
            <li className="menu__item hide"><a href="#">Reports</a></li> 
            <li className="menu__item hide">
                <Link to={'/client-dashboard/resolution_market'} >Resolution Market</Link>
            </li>  
            <li className="menu__item">
                <Link to={'/expert-dashboard'}> Expert </Link>
            </li> 
            </ul>
            </div>
            <div className="col-8 col-lg-4">
            <div className="account-menu">
            <div className="account-menu__item--new-message" id="unread___messages">
                    <Link to={'/client-dashboard/dialogs/dialogs'} >
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
                            <div className="item__title">asif</div>
                            <div className="item__subtitle">Applied to the job </div>
                        </a>  
                        <Link to={'/client_dashboard/all-notifications'} className="item">
                            <div class="item__title">View all</div>
                            <div className="item__subtitle"> notification</div>
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
                        {/* <div className="account__img"></div> */}
                            <div className="Profile-img">
                                <img src={dpImg} alt="" />
                                <div className="upload-img">
                                    <img className="upload-icon js-show-modal" data-modal-id="update-profile-picture" src={camera} alt="" />
                                </div>
                            </div>
                            {/*<!-- [Structure] Ticket cancel confirmation modal START --> */}
                            <div className="ui modal ticket-hire-modal" id="update-profile-picture">
                                <div className="hire-now-content">
                                    <div className="ticket-posted-modal__title">
                                        Update Profile Picture
                                    </div>
                                    <div className="content">
                                        <div className="hire-ticket-link">
                                            {/* <img className="Hire-ticket-img" src={hireToNewTicket} alt="Hire to new ticket"/> */}
                                            <label className="hire-text pointer" for="file-upload">Upload Photo</label>
                                            <input type="file" id="file-upload" class="visually-hidden" />
                                        </div>
                                        <div className="hire-ticket-link">
                                            {/* <img className="Hire-ticket-img" src={hireToExistingTicket} alt="Hire to existing ticket"/> */}
                                            <p className="hire-text">Remove Current Photo</p>
                                        </div>
                                    </div>
                                    <div className="hire-cancel">
                                        <div className="js-modal-close"
                                            style={{ display: "inline-block" }} >Cancel</div>
                                    </div>
                                </div>
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
                                    <Link to={'/client-dashboard/client-profile/'} className="item account-menu__link account-menu__link--settings">
                                        Client Profile
                                    </Link>
                                    <Link to={'#'} className="item account-menu__link account-menu__link--settings">
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
            {/* </MDBNavbar> */}
             {/* <Test/> */}
      </header>
    
	)
}

export default NavBar