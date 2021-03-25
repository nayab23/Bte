import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import { FaPlus,FaCaretRight,} from "react-icons/fa"; 
import Select from 'react-select';

const category = [
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
  const skills = [
    {
        value: '1',
        label: 'HTML'
    }, {
        value: '2',
        label: 'CSS'
    }, {
        value: '3',
        label: 'Bootstrap'
    },
    {
        value: '4',
        label: 'Reactjs'
    }, {
        value: '5',
        label: 'viewjs'
    },{
        value: '6',
        label: 'php'
    },{
        value: '7',
        label: 'google cloud'
    },{
        value: '8',
        label: 'laravel'
    },{
        value: '9',
        label: 'angular'
    },{
        value: '10',
        label: 'psd design'
    },{
        value: '11',
        label: 'backend'
    },
  ];
class EditProjectDetails extends Component {
    
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
      handleChangeCategory = selectedCategory => {
        this.setState({ selectedCategory });
        console.log(`Option selected:`, selectedCategory);
      };
    render() {
        const { selectedCategorySkills, selectedCategory } = this.state;
        return (
            <div>
            <div className="edit-info mr-2" onClick={this.toggle(9)} >
                <img src={pencil} className="edit-ifo-img-hide"/>
                <img src={pencilwhite} className="edit-ifo-img-show" />
            </div>
                <MDBContainer>
                    <MDBModal  className="center--modal"  style={{display:"flex"}} isOpen={this.state.modal9} toggle={this.toggle(9)} backdrop={true} fullHeight position="right">
                         <MDBModalHeader toggle={this.toggle(9)} className="modal-ticket-header"></MDBModalHeader>
                            <MDBModalBody className="body-scroll">
                            <div className="mb--style">
                            <form onSubmit={this.handleSubmit} className="mb-style edit-info-form " id="Registeruser">
                            {/* <h3 class="hire-ticket__name ">Add Offers</h3> */}
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                    <h3 className="input__title input__title--half mb-2">Project Info *</h3>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <textarea type="text" className="input input-check" required></textarea>
                                        <p className="input__notification"> Description is required</p>
                                    </label>
                                </div>                              
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                <div className="filters-checks mt-4">
                                <h3 className="input__title input__title--half mb-2">Skills</h3> 
                                    <Select
                                        value={selectedCategorySkills}
                                        onChange={this.handleChangeSkils}
                                        options={skills}
                                        isMulti
                                        className="multi-select-input-style"
                                    />
                                </div>
                                </div>                                
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12 ">
                                <div className="filters-checks mt-4">
                                <h3 className="input__title input__title--half mb-2">Category</h3> 
                                    <Select
                                        value={selectedCategory}
                                        onChange={this.handleChangeCategory}
                                        options={category}
                                        isMulti
                                        className="multi-select-input-style"
                                    />
                                </div>
                                </div>                                
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12 mt-4 ">
                                    <h3 className="input__title input__title--half mb-2">Client Name*</h3>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Client Name" name="client-name" required/>
                                        <p className="input__notification">Client Name is required</p>
                                    </label>
                                </div>                                
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md-12 mt-4 ">
                                    <h3 className="input__title input__title--half mb-2">Project Complete Date *</h3>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input id="" type="Date" className="input " placeholder="Add date" name="date" required/>
                                        {/* <MDBDatePickerV5 getValue={(e)=> console.log(e)}  /> */}
                                        <p className="input__notification">Project Complete Date Name is required</p>
                                    </label>
                                </div>                                
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md-12 mt-4 ">
                                    <h3 className="input__title input__title--half mb-2">Project URL *</h3>
                                    <label className="input__wrapper input__wrapper--half ">
                                        <input type="text" className="input input-check" placeholder="Add Project URL" name="project-uRL" required/>
                                        <p className="input__notification">Project URL is required</p>
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

export default EditProjectDetails;