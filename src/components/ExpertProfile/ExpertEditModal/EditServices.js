import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,FaCaretRight,} from "react-icons/fa"; 
import AddServices from './AddServices';

class EditServices extends Component {
    
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
            <div className="edit-info mt-4" style={{marginRight: "42px",zIndex: 2}} onClick={this.toggle(9)} >
                <img src={pencil} className="edit-ifo-img-hide"/>
                <img src={pencilwhite} className="edit-ifo-img-show" />
            </div>
                <MDBContainer className="center--modal" >
                    <MDBModal className="center--modal mb-0 " style={{display:"flex"}} isOpen={this.state.modal9} position="right" toggle={this.toggle(9)} backdrop={true}>
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header quali-head">
                            <span className="mb-0" style={{color: "#ffffff"}}>Skills</span></MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form " id="Registeruser">
                             <h3 class="hire-ticket__name ">Edit Offers</h3>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Add Category *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Add Category" name="Category" required/>
                                        <p className="input__notification">Category is required</p>
                                    </label>
                                </div>                                
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Description *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <textarea type="text" className="input input-check" required>
                                        Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismoddiam.
                                        </textarea>
                                        <p className="input__notification"> Description is required</p>
                                    </label>
                                </div>                              
                            </div>
                            <br />
                            </form>
                                
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

export default EditServices;