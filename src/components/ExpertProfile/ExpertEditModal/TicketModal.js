import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class TicketModal extends Component {
    
    state = {
        modal8: false,
        modal9: false
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }

    render() {
        return (
            <div>
                <h3> <span className="counter" style={{cursor: "pointer"}} onClick={this.toggle(9)}>Ticket</span></h3>
                <MDBContainer className="view-original-ticket-modal" >
                    <MDBModal style={{display:"flex"}} isOpen={this.state.modal9} toggle={this.toggle(9)} backdrop={true} position="left">
                        <MDBModalHeader toggle={this.toggle(9)} className="modal-ticket-header"></MDBModalHeader>
                            <MDBModalBody>
                            <h2 class="hire-ticket__name">Ticket title</h2>
                            <h2 className="ticket__name" style={{fontSize: "16px"}}>Figma Designer Needed for web development project, additionally  responsive designer for mobile development</h2>
                                <div className="ticket__details-row">
                                    <p className="ticket__category">
                                        <span className="category--line"> Category: </span>
                                        <span className="t-category" style={{ color: "#6c757d" }}>Development</span>
                                    </p>
                                    <p className="ticket__rate ticket__request">
                                        <span style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>1</span>
                                        <span className="category--line"> requests </span>
                                    </p>
                                </div>
                                <div className="ticket__details-row">
                                    <p className="ticket__date">
                                        <span className="time--line">Created On: </span>
                                        <span className="t-date"> September 8, 2020 11:26 PM </span>
                                    </p>
                                    <p className="ticket__rate-2">
                                        <span style={{ fontFamily: "Roboto,sans-serif", fontStyle: "normal", fontSize: "16px", fontWeight: "normal", fontStretch: "normal", lineHeight: "1.31", letterSpacing: "normal", textAlign: "left", color: "#6c757d" }}>0 </span>
                                        <span className="description--line">views</span>
                                    </p>
                                </div>
                                <div className="ticket__description description--line"> Project description
                                
                                </div>
                                <p className="ticket__description-text"> I need a strong Laravel developer to take over my
                                    current Laravel + Livewire project ... Need an expert in Laravel to work on many
                                    different projects Need ... Full-stack</p>
                                <div className="ticket__description description--line"> Skills required</div>
                                <p className="ticket__description-text skills__list">
                                    <a href="#" className="skills__item">PHP</a>
                                    <a href="#" className="skills__item">.NET</a>
                                    <a href="#" className="skills__item">Wordpress</a>
                                    <a href="#" className="skills__item">Shopify</a>
                                    <a href="#" className="skills__item">HTML5</a>
                                    <a href="#" className="skills__item">CSS</a>
                                </p>
                                
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
            </div>
        );
    }
}

export default TicketModal;