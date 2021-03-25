import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,FaCaretRight,} from "react-icons/fa"; 

class AddEaducation extends Component {
    
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
             <div className="profile-add-social-links"  onClick={this.toggle(9)} style={{cursor:"pointer"}}>
                <h3 className="mt-1 ml-3">Add more education</h3>
                <div className="profile-add-social-link"> <FaPlus /></div>
            </div>
                <MDBContainer className="center--modal" >
                    <MDBModal className="center--modal mb-0 " style={{display:"flex"}} isOpen={this.state.modal9} position="right" toggle={this.toggle(9)} backdrop={true}>
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header quali-head">
                            <span className="mb-0" style={{color: "#ffffff"}}>Skills</span></MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form " id="Registeruser">
                            {/*===================================== education ==================================== */}
                            
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Degree *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Degree" name="Degree" required/>
                                        <p className="input__notification">Degree is required</p>
                                    </label>
                                </div>                                
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">School/College/University *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                    <input type="text" className="input input-check" placeholder="School/College/University" name="Degree" required/>
                                        <p className="input__notification"> School/College/University is required</p>
                                    </label>
                                </div>                              
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 col-md-6 ">
                                    <p className="input__title input__title--half">Start date </p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="date" className="input input-check" name="job-description" required/>
                                        <p className="input__notification">Date is required</p>
                                    </label>
                                </div>
                                <br/>
                                <div className="col-12 col-md-6 ">
                                    <p className="input__title input__title--half">End date (or expected) </p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="date" className="input input-check" name="job-description" required/>
                                        <p className="input__notification">Date is required</p>
                                    </label>
                                </div>  
                            </div>
                            <br/>
                            </form>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <div className="contract-details">
                                    <button toggle={this.toggle(9)} style={{ width: "318px"}}
                                    type="button" className="button-con d-md-inline  ">
                                    <span className="mb-0" style={{color: "#ffffff"}}>Close</span></button>
                                    <button toggle={this.toggle(9)}
                                    type="button" className="button-white d-md-inline end-button edu-save-btn" style={{marginLeft:"30px"}}>
                                    <span className="mb-0">Save</span></button>
                                </div>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
            </div>
        );
    }
}

export default AddEaducation;