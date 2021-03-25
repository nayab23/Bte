import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ExpertTickets from './components/ExpertTickets/ExpertTickets';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment,Label, SearchResults, SearchResult } from 'semantic-ui-react';

import ticketinprogess from './components/ClientInProgressTickets/ClientInProgressTickets';
import postedtickets from './components/ClientPostedTickets/ClientPostedTickets';
import Cancelledtickets from './components/ClientInCancelledTickets/ClientInCancelledTickets';
import Closedtickets from './components/ClientInClosedTickets/ClientInClosedTickets';
import ClientSettings from './components/ClientSettings/ClientSettings';
//MyExperts
import MyExperts from './components/MyExperts/MyExperts';
//ClientPayments
import ClientPayments from './components/ClientPayments/ClientPayments';
//ClientDialogs
import ClientDialogs from './components/ClientDialogs/ClientDialogs';
//Resolutions
import ResolutionMarket from './components/ResolutionMarket/ResolutionMarket';
//NotFound
import NotFound  from './containers/pages/NotFound/NotFound';

//pages
import login  from './pages/auth/login/';
import signup  from './pages/auth/signup';
import InformationAbout from './pages/auth/InformationAbout';
import InformationEducation from './pages/auth/InformationEducation';
import SkillsAndRate from './pages/auth/SkillsAndRate';
import securityquestions from './pages/auth/securityquestions';

//Forgot password
import RestorePassword  from './pages/auth/RestorePassword';
import AccountRecovery from './pages/auth/AccountRecovery';
//layouts
import AuthLayout from  './containers/layouts/AuthLayout';
import DashboardLayout from './containers/layouts/DashboardLayout';

//routing layout
import LayoutRoute from './components/Router/LayoutRoute';
//guest & private user
import privateAuth from './utils/privateAuth';
import guestAuth from './utils/guestAuth';
import SecurityQuestion from './pages/auth/securityquestions';


import postticket from './components/PostTicket/PostTicket';
import ClientNotifications from './components/ClientNotifications/ClientNotifications';

import PostTicket from './components/PostTicket/PostTicket.lazy';
import ClientInSearchExperts from './components/ClientInSearchExperts/ClientInSearchExperts.lazy';
import ResolutionDetail from './components/ResolutionMarket/ResolutionDetail';

// New Added client Dashboard
import Hiring from './components/ExpertTickets/Hiring';
import HireAndPayment from './components/ExpertTickets/HireAndPayment';
import Contract from './components/ExpertTickets/Contract';
import SearchedResults from './components/ExpertTickets/SearchedResults';
import EditFeedback from './components/ExpertTickets/EditFeedback';
import Chat from './components/ClientDialogs/chat';
import ContractFeedBack from './components/ExpertTickets/ContractFeedBack';
import PostFeedBack from './components/ExpertTickets/PostFeedBack';

import ExpertPayments from './components/ExpertPayments/ExpertPayments';
import Paymentinprogress from './components/ExpertaPaymentModules/Paymentinprogress';
import Paymentmethods from './components/ExpertaPaymentModules/Paymentmethods';
import Paymenthistory from './components/ExpertaPaymentModules/Paymenthistory';

//Resolutions
import MyResolutionList from './components/Resolutions/MyResolutionList';
import HowToAddFirstResolutions from './components/Resolutions/HowToAddFirstResolutions';
import HowToAddSecondResolutions from './components/Resolutions/HowToAddSecondResolutions';
import AddResolutionInformation from './components/Resolutions/AddResolutionInformation';
import EditResolutionInformation from './components/Resolutions/EditResolutionInformation';
import ResolutionInformation from './components/Resolutions/ResolutionInformation';
//ExpertsDialogs
import ExpertsDialogs from './components/ExpertsDialogs/ExpertsDialogs';
//ExpertSettings
import ExpertSettings from './components/ExpertSettings/ExpertSettings';
import ExpertPublicProfile from './components/Expertpublicprofile/Expertpublicprofile';
import Expertprivateprofile from './components/Expertprivateprofile/Expertprivateprofile';
import ExpertDashboard from './components/ExpertDashboard/ExpertDashboard.lazy';
import ExpertInfeeds from './components/ExpertInfeeds/ExpertInfeeds.lazy';
import ExpertDashboardLayout from './containers/layouts/ExpertDashboardLayout';
import ExpertInRecievedProposition from './components/ExpertInRecievedProposition/ExpertInRecievedProposition.lazy';
import ExpertInSentRequests from './components/ExpertInSentRequests/ExpertInSentRequests';
import ExpertsInClosedTickets from './components/ExpertsInClosedTickets/ExpertsInClosedTickets.lazy';
import ExpertNotifications from './components/ExpertNotifications/ExpertNotifications';
import ExpertInMyFeedOpenTicket from './components/ExpertInMyFeedOpenTicket/ExpertInMyFeedOpenTicket';
import ExpertInApplyOnTicket from './components/ExpertInApplyOnTicket/ExpertInApplyOnTicket';
import ExpertInProgressTickets from './components/ExpertInProgressTickets/ExpertInProgressTickets';
import PaymentSummary from './components/ExpertTickets/PaymentSummary';
import HireToExistingTicket from './components/ExpertTickets/HireToExistingTicket';
import SearchExpertsResult from './components/ClientInSearchExperts/SearchExpertsResult';
import ClientDashboard from './components/ClientDashboard/ClientDashboard';
import AllPayments from './components/ClientPayments/AllPayments';
import PaymentMethod from './components/ClientPayments/PaymentMethod';
import ExpertProfile from './components/ExpertProfile/ExpertProfile';
import EditExpertProfile from './components/ExpertProfile/EditExpertProfile';
import ContractNow from './components/ExpertProfile/Contract';
import ChatBox from './components/ExpertTickets/ChatBox';
import ClientProfile from './components/ClientProfile/ClientProfile';
import ExpertFeed from './components/ExpertInfeeds/ExpertFeeds';
import OfferLetter from './components/ExpertProfile/OfferLetter';
import Home from './components/Home/Home';

function App() {
  
  return (
    
    <div className="App">
        <React.Fragment>
          
        <Router>
      <Switch>
            {/* Guest Route */}
           
            {/* <LayoutRoute exact path="/" layout={AuthLayout} component={guestAuth(Home)} /> */}

            <Route exact path="/" component={Home}/>
            <LayoutRoute  path="/login" layout={AuthLayout} component={guestAuth(login)} />
            <LayoutRoute  path="/signup" layout={AuthLayout} component={guestAuth(signup)} />

            <LayoutRoute path="/information-about" layout={AuthLayout} component={guestAuth(InformationAbout)} />
            <LayoutRoute path="/information-education" layout={AuthLayout} component={guestAuth(InformationEducation)} />
            <LayoutRoute path="/skills-and-rate" layout={AuthLayout} component={guestAuth(SkillsAndRate)} />
            <LayoutRoute path="/security-question" layout={AuthLayout}  component={guestAuth(SecurityQuestion)} />

            <LayoutRoute  path="/restore-password" layout={AuthLayout} component={guestAuth(RestorePassword)} />
            <LayoutRoute  path="/account-recovery" layout={AuthLayout} component={guestAuth(AccountRecovery)} />
           
             {/* Guest Route End */}
              <Route exact path="/client_dashboard" component={ClientDashboard}/>
            <LayoutRoute exact path='/client-dashboard'  layout={DashboardLayout}  component={privateAuth(ClientDashboard)} />
            <LayoutRoute exact path='/client-dashboard'  layout={DashboardLayout}  component={privateAuth(ClientDashboard)} />
            <LayoutRoute exact path='/client-dashboard/tickets-in-progess'  layout={DashboardLayout}  component={privateAuth(ticketinprogess)} />
            <LayoutRoute   path='/client-dashboard/posted-tickets'  layout={DashboardLayout}  component={privateAuth(postedtickets)} />
            <LayoutRoute   path='/client-dashboard/cancelled-tickets'  layout={DashboardLayout}  component={privateAuth(Cancelledtickets)} />
            <LayoutRoute    path='/client-dashboard/closed-tickets'  layout={DashboardLayout}  component={privateAuth(Closedtickets)} />
            <LayoutRoute exact path='/client-dashboard/expert-profile'  layout={DashboardLayout}  component={privateAuth(ExpertProfile)} />
            <LayoutRoute exact path='/client-dashboard/expert-profile/contract-now'  layout={DashboardLayout}  component={privateAuth(ContractNow)} />
            <LayoutRoute exact path='/client-dashboard/client-profile/'  layout={DashboardLayout}  component={privateAuth(ClientProfile)} />
           
            
            {/* Client-Dashboard  End*/}
            {/* chat box strat */}
            
            <LayoutRoute exact path='/client-dashboard/chat-box'  layout={DashboardLayout}  component={privateAuth(ChatBox)} />
            {/* chat box end */}

            <LayoutRoute exact path='/client-dashboard/hiring'  layout={DashboardLayout}  component={privateAuth(Hiring)} />
            <LayoutRoute exact path='/client-dashboard/hiring/hire-and-payment'  layout={DashboardLayout}  component={privateAuth(HireAndPayment)} />
            <LayoutRoute exact path='/client-dashboard/contract'  layout={DashboardLayout}  component={privateAuth(Contract)} />
            <LayoutRoute  exact path='/client-dashboard/hiring/hire-and-payment/contract/contract-feedback'  layout={DashboardLayout}  component={privateAuth(ContractFeedBack)} />
            <LayoutRoute  exact path='/client-dashboard/hiring/hire-and-payment/contract/post-feedback'  layout={DashboardLayout}  component={privateAuth(PostFeedBack)} />
            <LayoutRoute  exact path='/client-dashboard/hiring/hire-and-payment/payment-summary'  layout={DashboardLayout}  component={privateAuth(PaymentSummary)} />
            <LayoutRoute exact path='/client-dashboard/chat'  layout={DashboardLayout}  component={privateAuth(Chat)} />
            <LayoutRoute exact path='/client-dashboard/hire-to-existing-ticket'  layout={DashboardLayout}  component={privateAuth(HireToExistingTicket)} />
            <LayoutRoute exact path='/client-dashboard/edit-feedback'  layout={DashboardLayout}  component={privateAuth(EditFeedback)} />
            {/* Post-ticket */}
            <LayoutRoute  exact path='/client-dashboard/post-ticket'  layout={DashboardLayout}  component={privateAuth(PostTicket)} />
            
            {/*End Post Ticket*/}

            {/*Client dialogs */}
            <LayoutRoute  exact path='/client-dashboard/dialogs/dialogs'  layout={DashboardLayout}  component={privateAuth(ClientDialogs)} />
            {/*End dialogs */}
            
            {/* Client payment */}
            <LayoutRoute exact path='/client-dashboard/payments/all-payments'  layout={DashboardLayout}  component={privateAuth(AllPayments)} />
            <LayoutRoute exact path='/client-dashboard/payments/payment-method'  layout={DashboardLayout}  component={privateAuth(PaymentMethod)} />
            {/* <LayoutRoute exact path='/client-dashboard/payments/all'  layout={DashboardLayout}  component={privateAuth(ClientPayments)} /> */}
              <LayoutRoute  path='/client-dashboard/payments/recent'  layout={DashboardLayout}  component={privateAuth(ClientPayments)} />
              <LayoutRoute   path='/client-dashboard/payments/closed'  layout={DashboardLayout}  component={privateAuth(ClientPayments)} />
            {/*End client payments*/}

              {/* Client Settings */}
              <LayoutRoute  path='/client-dashboard/account/settings' layout={DashboardLayout}  component={privateAuth(ClientSettings)} />
              {/* End Client Settings*/}
              
              {/* Client Notifications */}
              <LayoutRoute  exact path='/client_dashboard/all-notifications'  layout={DashboardLayout}  component={privateAuth(ClientNotifications)} />
              {/*End Client Notifications */}
              {/* client experts*/}
             
              <LayoutRoute exact path='/client-dashboard/find_experts'  layout={DashboardLayout}  component={privateAuth(ClientInSearchExperts)} />
              <LayoutRoute exact path='/client-dashboard/find_experts/search-result'  layout={DashboardLayout}  component={privateAuth(SearchExpertsResult)} />
              <LayoutRoute  path='/client-dashboard/myexperts/my-experts'  layout={DashboardLayout}  component={privateAuth(MyExperts)} />
              <LayoutRoute  path='/client-dashboard/myexperts/recent'  layout={DashboardLayout}  component={privateAuth(MyExperts)} />
              <LayoutRoute  path='/client-dashboard/myexperts/favorite'  layout={DashboardLayout}  component={privateAuth(MyExperts)} />
              {/*end client experts/*}

            {/*ResolutionMarket */}
            <LayoutRoute  exact path='/client-dashboard/resolution_market'  layout={DashboardLayout}  component={privateAuth(ResolutionMarket)} />
            <LayoutRoute   path='/client-dashboard/resolution_market/details'  layout={DashboardLayout}  component={privateAuth(ResolutionDetail)} />
           {/* End  ResolutionMarket */}

              {/* Expert-Dashboard  Start*/}
              <Route exact path="/expert_dashboard" component={ExpertDashboard}/>
              <LayoutRoute exact path='/expert-dashboard' layout={ExpertDashboardLayout} component={privateAuth(ExpertDashboard)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/my-feed' layout={ExpertDashboardLayout} component={privateAuth(ExpertInfeeds)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/tickets-in-progress' layout={ExpertDashboardLayout} component={privateAuth(ExpertInProgressTickets)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/recieved-propositions' layout={ExpertDashboardLayout} component={privateAuth(ExpertInRecievedProposition)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/sent-requests' layout={ExpertDashboardLayout} component={privateAuth(ExpertInSentRequests)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/closed-tickets' layout={ExpertDashboardLayout} component={privateAuth(ExpertsInClosedTickets)}/>
              <LayoutRoute exact path='/expert-dashboard/expert-feed' layout={ExpertDashboardLayout} component={privateAuth(ExpertFeed)}/>
              {/* Expert-Dashboard  End*/}
              {/* Expert Notifications*/}
              
              <LayoutRoute exact path='/expert-dashboard/notifications' layout={ExpertDashboardLayout} component={privateAuth(ExpertNotifications)}/>
               {/* End Expert Notifications*/}

               {/* Apply to job */}
              <LayoutRoute exact path='/expert-dashboard/mytickets/my-feed-open-ticket' layout={ExpertDashboardLayout} component={privateAuth(ExpertInMyFeedOpenTicket)}/>
              <LayoutRoute exact path='/expert-dashboard/mytickets/app-to-the-job' layout={ExpertDashboardLayout} component={privateAuth(ExpertInApplyOnTicket)}/>
               {/* End Apply to job */}

               {/*Resolutions*/}
               <LayoutRoute exact path='/expert-dashboard/resolutions/list' layout={ExpertDashboardLayout} component={privateAuth(MyResolutionList)}/>
               <LayoutRoute exact path='/expert-dashboard/resolutions/details/{id}' layout={ExpertDashboardLayout} component={privateAuth(ResolutionInformation)}/>
               
                <LayoutRoute exact path='/expert-dashboard/resolutions/how-to-add-resolution' layout={ExpertDashboardLayout} component={privateAuth(HowToAddFirstResolutions)}/>
                <LayoutRoute exact path='/expert-dashboard/resolutions/How-to-Add-Resolution-2' layout={ExpertDashboardLayout} component={privateAuth(HowToAddSecondResolutions)}/>
                <LayoutRoute exact path='/expert-dashboard/resolutions/create' layout={ExpertDashboardLayout} component={privateAuth(AddResolutionInformation)}/>
                <LayoutRoute exact path='/expert-dashboard/resolutions/update' layout={ExpertDashboardLayout} component={privateAuth(EditResolutionInformation)}/>
                <LayoutRoute exact path='/expert-dashboard/offer-letter' layout={ExpertDashboardLayout} component={privateAuth(OfferLetter)}/>
           
            {/*End Resolutions*/}
              
           {/* ExpertPayments */}
        
            <LayoutRoute exact path={'/expert-dashboard/my-wallet/get-paid'} layout={ExpertDashboardLayout} component={privateAuth(ExpertPayments)}/>
            <LayoutRoute exact path={'/expert-dashboard/my-wallet/payment-in-progress'} layout={ExpertDashboardLayout} component={privateAuth(Paymentinprogress)}/>
            <LayoutRoute exact path={'/expert-dashboard/my-wallet/payment-methods'} layout={ExpertDashboardLayout} component={privateAuth(Paymentmethods)}/>
            <LayoutRoute exact path={'/expert-dashboard/my-wallet/payment-history'} layout={ExpertDashboardLayout} component={privateAuth(Paymenthistory)}/>


            <LayoutRoute exact path={'/expert-dashboard/notifications'} layout={ExpertDashboardLayout} component={privateAuth(ExpertNotifications)}/>

            <LayoutRoute exact path={'/expert-dashboard/dialogs'} layout={ExpertDashboardLayout} component={privateAuth(ExpertsDialogs)}/>
            <LayoutRoute exact path={'/expert-dashboard/settings'} layout={ExpertDashboardLayout} component={privateAuth(ExpertSettings)}/>
            <LayoutRoute exact path={'/expert-dashboard/public-profile'} layout={ExpertDashboardLayout} component={privateAuth(ExpertPublicProfile)}/>
            <LayoutRoute exact path={'/expert-dashboard/private-profile'} layout={ExpertDashboardLayout} component={privateAuth(Expertprivateprofile)}/>
            <LayoutRoute exact path={'/expert-dashboard/expert-profile'} layout={ExpertDashboardLayout} component={privateAuth(ExpertProfile)}/>
            <LayoutRoute exact path={'/expert-dashboard/edit-profile'} layout={ExpertDashboardLayout} component={privateAuth(EditExpertProfile)}/>
            

            

            
           {/* End ExpertPayments */}
           
            {/*Not Found*/}
					     <Route component={NotFound} />	
            
          </Switch>
    
      </Router>
      
      </React.Fragment>
  
      
  </div >

  );
}


export default App;
