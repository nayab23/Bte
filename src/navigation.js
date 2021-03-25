import React, { useState } from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import logo from './components/app_assets/img/logo.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavigationBar() {

    return (
        
        <header>
        
        <nav class="navigation">
                <div class="container container-fluid-small">
                    <div class="row">
                        <div class="col-4 col-lg-2">
                            <div class="main-logo">
                            <Link to={'/login'}>  
                             <img src={logo}  alt="logo" /></Link>
                            </div>
                        </div>

                        <div class="col-5  d-none d-lg-flex">
			            <ul class="menu">
                        <li class="menu__item menu__item--active">
                                <div class="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts"> 
                                <a href="#">My Tickets</a>
                                <div class="menu"> 
                                                
                                <div class="item">
                                 <Link to={'/client-dashboard/tickets-in-progess'}> Tickets in progress </Link>
                                </div>
                               
                                <div class="item">
                                <Link to={'/client-dashboard/posted-tickets'}> Posted tickets </Link>
                                </div>

                                <div class="item">
                                <Link to={'/client-dashboard/closed-tickets'}> Closed tickets </Link>
                                </div>  

                                <div class="item">
                                <Link to={'/client-dashboard/cancelled-tickets'}> Cancelled tickets</Link>
                                </div> 
          
      
                            </div>
                            </div>

                            </li>

                            <li class="menu__item">
                                <div class="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a  href="#">My Experts</a>
                                    <div class="menu">
                                       <div class="item  dropdown-active-link">Search Experts</div>
                                        <div class="item  dropdown-active-link">Working Now</div>
                                          <div class="item  dropdown-active-link">Recent</div>
                                          <div class="item dropdown-active-link">Favorite</div>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="ui dropdown dropdown-2 dropdown--my-tickets dropdown--my-experts">
                                    <a href="#">Payments</a>
                                    <div class="menu">
                                      
                                          <div class="item   dropdown-active-link" >All payments</div>
                                          <div class="item  dropdown-active-link">Recent</div>
                                          <div class="item  dropdown-active-link">Closed</div>
                                          <div class="item  dropdown-active-link">Payment Options</div>
                                           
                                    </div>
                                </div>
                            </li>

                            <li class="menu__item">
                                <a href="#">Reports</a>
                            </li> 
 				            <li class="menu__item">
                                <a href="#" >Resolution </a>
                            </li>   
                         </ul>
                         </div>
                            <div class="col-8 col-lg-5">
                            <div class="account-menu">
                            <div class="account-menu__item--new-message" id="unread___messages">
                                    <a href="#" >
                                        <i class="message-icon"></i>
                                    </a>
                                </div>
                                <div class=" account-menu__item--new-notification">
                                <a href="#" class="d-inline-block d-md-none"> 
                                    <i class="bell-notifications"></i>
                                </a>

                                <div class="d-none d-md-inline-block on-click-notifications ">
                                    <div class="ui dropdown dropdown-2 dropdown--notifications">
                                        <i class="bell-notifications"></i>
                                        <div class="menu notify" id="notification">
										
						                    <a href="#" class="item">
                                                <button type="button" class="button button--no-style js-remove-notification"> 
                                                    <i class="icon__remove-btn"></i>
                                                </button>
                                                <div class="item__title">
                                                asif
                                                </div>
                                                <div class="item__subtitle"> 
                                                   Applied to the job
                                                </div>
                                               </a>  
                                               <a href="#" class="item">
                                                <div class="item__title">
                                                   View all
                                                </div>
                                                <div class="item__subtitle">
                                                    notification
                                                </div>
                                            </a>  

                                           
                     </div>
					
                    </div>
                </div>
               
                </div>
                

              
                <div id="burger">
                    <i></i>
                </div>
                <div class="account-menu__item">
                                    <div class="account-wrapper ui dropdown line-on">
                                        <div class="account__img">
                                       
                                        </div>
                                        <div class="account__name">
                                            <span>Muhammad Asif</span>
                                        </div>
    
                                        <div class="account__dropdown-cta">
                                            <a href="#">
                                                <i class="dropdown-cta"></i>
                                            </a>
                                        </div>
                                        <div class="menu">
                                            <a href="#" class="item account-menu__link account-menu__link--settings">
                                                Account settings
                                            </a>
                                            <a href="#" class="item account-menu__link account-menu__link--signout">
                                                Logout
                                            </a>                                   
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
   
                
             </nav>
            
      </header>
    
    
    )
}

export default NavigationBar;