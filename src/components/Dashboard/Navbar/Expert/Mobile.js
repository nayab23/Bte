import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAPI } from '../../../../actions/auth';
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
    
    if(jwtDecode.role=="expert"){
     return(

        <div className="mobile-menu" id="mobile-menu">
        <div className="ui accordion">
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>My Tickets</Link>
            </div>
            <div className="content">
                   <ul className="transition hidden">
                
                    <li> <Link to={'/expert-dashboard/expert-feed'} > My Feed </Link></li>
                    <li><Link to={'/expert-dashboard/mytickets/tickets-in-progress'} >Tickets in progress </Link></li>
                    <li> <Link to={'/expert-dashboard/mytickets/recieved-propositions'} >Received propositions</Link></li>
                    <li>  <Link to={'/expert-dashboard/mytickets/sent-requests'} >Sent Applications</Link></li>
                    <li>  <Link to={'/expert-dashboard/mytickets/closed'}>Closed</Link></li>
    
                     </ul>
    
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>My Resolutions</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
                    <li>  <Link to={'#'} >Resolution Market</Link></li>
                    <li> <Link to={'/expert-dashboard/resolutions/list'} >My Resolutions List</Link></li>
                    <li> <Link to={'/expert-dashboard/resolutions/how-to-add-resolution'}>How to add resolution</Link></li>

                </ul>
    
            </div>
            <div className="title">
                <i className="dropdown icon"></i>
                <Link to={''}>My Wallet</Link>
            </div>
            <div className="content">
                <ul className="transition hidden">
                <li> <Link to={'/expert-dashboard/my-wallet/get-paid'} >Get paid</Link></li>
                <li> <Link to={'/expert-dashboard/my-wallet/payment-in-progress'} >In progress</Link></li>
                <li> <Link to={'/expert-dashboard/my-wallet/payment-history'}>Payment history</Link></li>
                <li>  <Link to={'/expert-dashboard/my-wallet/payment-methods'}>Payment methods</Link></li>
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
                    <li><Link to={'/expert-dashboard/expert-profile'} className="item account-menu__link account-menu__link--settings">View profile</Link></li>
                    <li><Link to={'/expert-dashboard/edit-profile'} className="item account-menu__link account-menu__link--settings">Edit profile</Link></li>
                    <li><Link to={'/expert-dashboard/settings'} className="item account-menu__link account-menu__link--settings">Account settings</Link></li>
                    <li><Link to={''} className="item account-menu__link account-menu__link--signout" onClick={handleLogout}>Logout</Link></li>
                </ul>
            </div>              
        </div>        
    </div>
    
        )
     }
 }
export default Mobile;
