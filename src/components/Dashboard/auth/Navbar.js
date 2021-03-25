import React from 'react';

// import logo from '../../app_assets/img/logo.png';
import logo from '../../app_assets/img/home/logo-primary.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Navbar = () => {


  	return (
		<header>
        
        <nav className="navigation">
                <div className="container container-fluid-small">
                    <div className="row">
                        <div className="col-4 col-lg-4 logo-align">
                            <div className="main-logo">
                            <Link to={'/'}>  
                             <img src={logo}  alt="logo" />
                             </Link>
                            </div>
                        </div>

                        <div className="col-8 col-lg-8  d-none d-lg-flex flex-end">
			            <ul className="menu">
                            <li className="menu__item">
                            <Link to={'/login'}> Login </Link>
                            </li> 
 				            <li className="menu__item">
                             <Link to={'/signup'}> Signup </Link>
                            </li>
                          </ul>
                         </div>
                           
                        <div id="burger">
                            <i></i>
                        </div>
                    </div>
                </div>
   
                
             </nav>
            
      </header>
    
	)
}

export default Navbar