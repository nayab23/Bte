import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,FaCaretRight,} from "react-icons/fa"; 
import Select from 'react-select';

const skills = [
    {
        value: '1',
        label: 'User Interface Design'
    }, {
        value: '2',
        label: 'User Experience Design'
    }, {
        value: '3',
        label: 'UX Research'
    },
    {
        value: '4',
        label: 'Front-end Design'
    }, {
        value: '5',
        label: 'UX Copyrighting'
    },{
        value: '6',
        label: 'Logo Design'
    },{
        value: '7',
        label: 'graphic designing'
    },{
        value: '8',
        label: 'app designing'
    },{
        value: '9',
        label: 'web designing'
    },{
        value: '10',
        label: 'web development'
    },{
        value: '11',
        label: 'db design & management'
    },
  ];
class AddSkills extends Component {
    
    state = {
        modal8: false,
        modal9: false,
        selectedCategorySkills:null
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      handleChangeSkils = selectedCategorySkills => {
        this.setState({ selectedCategorySkills });
        console.log(`Option selected:`, selectedCategorySkills);
      };
    render() {
        const { selectedCategorySkills } = this.state;
        return (
            <div>
           <div className="profile-add-social-links"  onClick={this.toggle(9)} style={{cursor:"pointer"}}>
                <h3 className="mt-1 ml-3">Add more skills</h3>
                <div className="profile-add-social-link"> <FaPlus /></div>
            </div>
                <MDBContainer className="center--modal" >
                    <MDBModal className="center--modal mb-0 " style={{display:"flex"}} isOpen={this.state.modal9} position="right" toggle={this.toggle(9)} backdrop={true}>
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header quali-head">
                            <span className="mb-0" style={{color: "#ffffff"}}>Skills</span></MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form " id="Registeruser">
                             {/*===================================== skills ==================================== */}
                             <h3 class="hire-ticket__name mb-3 ">My Skills  .....</h3>
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                <div className="filters-checks mt-4">
                                <h3 className="filter__section-label">Skills</h3> 
                                    <Select
                                        value={selectedCategorySkills}
                                        onChange={this.handleChangeSkils}
                                        options={skills}
                                        isMulti
                                        className="multi-select-input-style model-selection"
                                    />
                                </div>
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

export default AddSkills;