import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,} from "react-icons/fa"; 
import user from '../../app_assets/img/client-user.svg'
import banarMan from '../../app_assets/img/images/banner/man.png'

class EditInfo extends Component {
    
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
            <div className="edit-info" onClick={this.toggle(9)} >
                <img src={pencil} className="edit-ifo-img-hide"/>
                <img src={pencilwhite} className="edit-ifo-img-show" />
            </div>
                <MDBContainer>
                    <MDBModal  className="center--modal"  style={{display:"flex"}} isOpen={this.state.modal9} toggle={this.toggle(9)} backdrop={true} fullHeight position="right">
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header">Info</MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <div className="mb--style">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form pb-2" id="Registeruser">
                            <div className="row">
                                <div className="col-12 col-md-6 ">
                                    <p className="input__title input__title--half">First name *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="First Name" name="firstname" required/>
                                        <p className="input__notification">First name is required</p>
                                    </label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <p className="input__title input__title--half">Last name *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Last Name" name="lastname"  required/>
                                        <p className="input__notification">Last name is required</p>
                                </label>
                                </div>                                
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Title Description *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input id="" type="text" className="input input-check" placeholder="Description" name="job-description" required/>
                                        <p className="input__notification">Job Description is required</p>
                                    </label>
                                </div>                              
                            </div>
                            <br />
                            <h3 class="hire-ticket__name ml-3">Find Me On</h3>
                            {/* <br/> */}
                            <div className="row">
                                <div className="col-12 col-md-6 justify-content">
                                    <input type="checkbox" className="input-checkbox" />
                                    <p className="input__title input__title--half  mx-4 mt-1" style={{width: "21%", margin: "0"}}>Facebook</p>
                                    <input type="link" className="input input-check disab" placeholder="Facebook link"  required/>
                                </div> 
                                <div className="col-12 col-md-6 justify-content">
                                    <input type="checkbox" className="input-checkbox"/>
                                    <p className="input__title input__title--half  mx-4 mt-1" style={{width: "21%", margin: "0"}}>Instagram</p>
                                    <input type="link" className="input input-check disab" placeholder="Instagram link"  required/>
                                </div>   
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-md-6 justify-content">
                                    <input type="checkbox" className="input-checkbox"/>
                                    <p className="input__title input__title--half  mx-4 mt-1" style={{width: "21%", margin: "0"}}>Twitter</p>
                                    <input type="link" className="input input-check disab" placeholder="Twitter link"  required/>
                                </div> 
                                <div className="col-12 col-md-6 justify-content">
                                    <input type="checkbox" className="input-checkbox"/>
                                    <p className="input__title input__title--half  mx-4 mt-1" style={{width: "21%", margin: "0"}}>LinkedIn</p>
                                    <input type="link" className="input input-check disab" placeholder="LinkedIn link"  required/>
                                </div>   
                            </div>
                            <br/>
                            <h3 class="hire-ticket__name ml-3 mb-3">Your Profile picture</h3>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <label className="input__wrapper input__wrapper--half ">
                                       <label for="upload-picture" class="hire-ticket__name upload-picture-set" >
                                       <img src={banarMan} alt="" />
                                       <span>Upload picture</span>
                                       </label>
                                        <input id="upload-picture" type="file" accept="image/x-png,image/gif,image/jpeg" className="hide" placeholder="Upload picture" alt="Upload picture" name="Upload picture" required />
                                    </label>
                                </div>                            
                            </div>
                            </form>
                            </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <div className="contract-details">
                                    <button toggle={this.toggle(9)} style={{ width: "318px"}}
                                    type="button" className="button-con d-md-inline  ">
                                    <span>Close</span></button>
                                    <button toggle={this.toggle(9)}
                                    type="button" className="button-white d-md-inline  end-button" style={{marginLeft:"30px"}}>
                                    <span>Save</span></button>
                                </div>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
            </div>
        );
    }
}

export default EditInfo;