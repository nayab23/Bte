import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,FaCaretRight,} from "react-icons/fa"; 
import user from '../../app_assets/img/client-user.svg'
import about1 from '../../app_assets/img/images/about/1.png'

class EditProfileAbout extends Component {
    
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
            <MDBContainer className="center--modal" >
                    <MDBModal className="center--modal mb-0 " style={{display:"flex"}} isOpen={this.state.modal9} fullHeight position="right" toggle={this.toggle(9)} backdrop={true}>
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header">About</MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <div className="mb--style">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form " id="Registeruser">
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Cover Title *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Title" name="title" required/>
                                        <p className="input__notification">title is required</p>
                                    </label>
                                </div>                                
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <p className="input__title input__title--half">Description *</p>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <textarea type="text" className="input input-check" required></textarea>
                                        <p className="input__notification"> Description is required</p>
                                    </label>
                                </div>                              
                            </div>
                            <br />
                            <h3 class="hire-ticket__name  ">Upload Your intro picture</h3>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <label className="input__wrapper input__wrapper--half">
                                       <label for="upload-picture" class="hire-ticket__name" ><span style={{textDecoration: "underline"}}>Upload Video</span></label>
                                        <input id="upload-picture" type="file" accept="video/*" className="hide" placeholder="Upload picture" alt="Upload picture" name="Upload picture" required />
                                    </label>
                                </div>                            
                            </div>
                            <br />  
                            <h3 class="hire-ticket__name  mb-3">Upload Your Profile picture</h3>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <label className="input__wrapper input__wrapper--half ">
                                       <label for="upload-picture" class="hire-ticket__name upload-picture-set" >
                                            <img className="upload-about-picture-set" src={about1} alt="" />
                                            <span>Change picture</span>
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

export default EditProfileAbout;