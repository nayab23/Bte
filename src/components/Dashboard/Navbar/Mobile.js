import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../actions/auth';
import jwt from 'jwt-decode';
const Mobile = () => {

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

     return(

        <div className="mobile-menu" id="mobile-menu">
        <div className="ui accordion">
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>My Tickets</Link>
            </div>
            <div className="content">
                   <ul className="transition hidden">
                    <li><Link to={'/client-dashboard/tickets-in-progess'}>Tickets in progress</Link></li>
                    <li><Link to={'/client-dashboard/posted-tickets'} >Tickets posted</Link></li>                    
                    <li><Link to={'/client-dashboard/closed-tickets'} >Tickets closed</Link></li>
                    <li><Link to={'/client-dashboard/cancelled-tickets'} >Tickets cancelled</Link></li>
    
                     </ul>
    
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>My Experts</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
           
             <li><Link to={''}>Search Experts</Link></li>
                    <li><Link  >Working Now</Link></li>
                    <li><Link >Recent</Link></li>
                    <li><Link >Archived</Link></li>
                </ul>
    
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>Payments</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
                    <li><Link to={'#'}>All Payments</Link></li>
                    <li><Link to={'#'}>Recent</Link></li>
                    <li><Link to={'#'}>Closed</Link></li>
                </ul>
            </div>
    
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>Reports</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
                    <li>
                    <Link to={''}>
                            All Reports
                        </Link>
                    </li>
                    <li>
                    <Link to={''}>
                            Recent
                        </Link>
                    </li>                    
                    <li>
                    <Link to={''}>
                            Closed
                        </Link>
                    </li>    
                    <li>
                    <Link to={''}>
                            Archived
                        </Link>
                    </li>
                </ul>
            </div>   
    
    
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>Resolution Market</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
                    <li>  <Link to ={''}>Resolution Market</Link> </li>
              </ul>
            </div> 
    
             <div className="title">
                <i className="dropdown icon"></i>
                 <div className="account-wrapper">
                    <div className="account__img">
                       {/*<img src="../img" alt="profile-photo">  */}
                    </div>
                    <div className="account__name">
                         <span><span>{isAuthenticated ? jwtDecode.name : 'Please Login'}</span> </span>
                    </div>
                </div>
            </div>
            <div class="content">
                <ul class="transition hidden">
                    <li><Link to={''} className="item account-menu__link account-menu__link--settings">Account settings</Link></li>
                    <li><Link to={''} className="item account-menu__link account-menu__link--signout" onClick={handleLogout}>Logout</Link></li>
                </ul>
            </div>              
        </div>        
    </div>
    


)
}
export default Mobile;
