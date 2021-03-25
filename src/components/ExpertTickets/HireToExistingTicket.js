import React, { Component } from 'react';
import star from '../app_assets/img/Rating_Start_Filled.b9b882be.svg'
import message from "../app_assets/img/message-blue.svg"
import emptyheart from '../app_assets/img/Final-ICONS_SVG_20-Heart_Empty.556e5ba1.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Radio } from 'semantic-ui-react'
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from 'mdbreact';
import AddPaymentMethod from '../Modal/AddPaymentMethod';
import ViewOriginalTicket from '../Modal/ViewOriginalTicket';
import search from '../app_assets/img/Final-ICONS_SVG-17-Search.svg';

class HireToExistingTicket extends Component {
    // state = {
    //     chatClass:false
    //   }
    //   changeClass(e){
    //     e.preventDefault();
    //     this.setState({
    //       chatClass: !this.state.chatClass
    //     })
    //   }
    state = {
        filter: "",
        data: [
          {
            ticket_title: "Full Stack Developer, Databases, Web Architecture &amp; Storage",
            create_date: "April 07, 2020",
            key:"ticket1"
          },
          {
            ticket_title: "Sharepoint configuration requirement required for a startu",
            create_date: "March 04, 2020",
            key:"ticket2"
          },
          {
            ticket_title: "Laravel Livewire Expert Required Testing Directly A S Signed",
            create_date: "May 09, 1919",
            key:"ticket3"
          },
          {
            ticket_title: "Swift - Apple Developer",
            create_date: "June 07, 2020",
            key:"ticket4"
          },
          {
            ticket_title: "Cloud technology &amp; infrastructure management",
            create_date: "April 02, 1919",
            key:"ticket5"
          }
        ]
      };
    
      handleChange = event => {
        this.setState({ filter: event.target.value });
      };
    
    render() {
    //   const {chatClass} = this.state 
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

        return (
            <div>
            <div className="container container-fluid-small">
                <main className="main-content main-content--dashboard">
                {/* <button className={`button ${chatClass ? 'active' : ''}`} onClick={(e) => this.changeClass(e)}>click</button> */}
              <div className="row justify-content-center">
                    <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet">
                        <div className="hire-ticket-content">
                        <div className="ticket-admin-detail">
                         <div className="ticket-hire-expert-wrapper">
                            <div className="modal-avatar"
                                style={{backgroundImage: "url(&quot;&quot;)", backgroundPosition: "center center", backgroundSize: "cover"}}></div>
                            <div className="ticket-inner-wrapper">
                                <div className="modal-expert-name">Abdullah Ahmad</div>
                                <div className="modal-rating-wrapper">
                                <img src={star} className="modal-rating-star" />
                                <img src={star} className="modal-rating-star" />
                                <img src={star} className="modal-rating-star" />
                                <img src={star} className="modal-rating-star" />
                                <img src={star} className="modal-rating-star" />
                                <p className="ticket-rating-number"> 5.0</p>
                                </div>
                            </div>
                            </div>
                            <div className="contract-details ticket-cont-detail">
                            <div className="modal-favorite-button">
                                <img src={emptyheart} className="modal-buttons-icon" />
                                <div className="modal-buttons-text">Favourite</div>
                            </div>
                            <div className="modal-message-button" style={{marginLeft: "15px"}}>
                                <img src={message} className="modal-buttons-icon" />
                                <Link to="/client-dashboard/dialogs/dialogs?data-tab=dialog" className="modal-buttons-text">Message</Link>
                            </div>
                          </div>
                        </div>
                        <div className="login-social-buttons mb-3 mt-3">
                            <h3 class="hire-ticket__name">Open Tickets Only</h3>
                            <form className="main-search-form" style={{marginRight: "40px"}}>
                                <img src={search} className="search-icon" />
                                <input value={filter} className onChange={this.handleChange} placeholder="Search" name="search" className="search--input" type="text" />
                            </form>
                        </div>
                       <div className="hire-ticket-list" >
                            {filteredData.map(item => (
                                 <label key={item.key} className="js-tickets-list__item tickets-list__item  small-hire-ticket " for={item.key} style={{marginBottom:0}}>
                                 <div className="ticket-title-wrapper">
                                 <p class="title">Ticket Title:  {item.ticket_title}</p>
                                 <div class="date hire-tickets-list__name">Created at: {item.create_date}</div>
                                 </div>
                                 <div className="contract-details">
                                    <ViewOriginalTicket/>
                                 <input className="hire-radio-button" type="radio" name="hire-tickrt" id={item.key} autoComplete="off" />
                                 {/* <div className="check"><div className="inside"></div></div> */}
                                 </div>
                             </label>
                            ))}
                            <div className="mt-2">
                            <MDBPagination>
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">Previous</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem active>
                                    <MDBPageNav>
                                    1 <span className="sr-only">(current)</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>2</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>3</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">Next</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                            </div>
                       </div>
                        <br />
                        <div className="contract-details">
                        <Link to="/client-dashboard/expert-profile/contract-now"
                        type="button" className="button-con d-md-inline max-200 ">
                        <span>Hire Now</span></Link>
                        <Link to="/client-dashboard/find_experts"
                        type="button" className="button-white d-md-inline max-200 end-button" style={{marginLeft:"30px"}}>
                        <span>Cancel</span></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <AddPaymentMethod />
            </main>
        </div>
    </div>
        );
    }
}

export default HireToExistingTicket;