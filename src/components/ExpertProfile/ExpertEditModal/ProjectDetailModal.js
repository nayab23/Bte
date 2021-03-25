import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import pencil from '../../app_assets/img/pencil.svg';
import pencilwhite from '../../app_assets/img/pencil-white.svg';
import ifoslider1 from '../../app_assets/img/images/portfolios/gallery/1.jpg';
import ifoslider2 from '../../app_assets/img/images/portfolios/gallery/2.jpg';
import ifoslider3 from '../../app_assets/img/images/portfolios/gallery/3.jpg';
import ifoslider4 from '../../app_assets/img/images/portfolios/3.png';
import ifoslider5 from '../../app_assets/img/images/portfolios/4.png';
import { FaLink, FaUserAlt, FaRegPaperPlane, FaFolderOpen, FaCalendarAlt ,} from "react-icons/fa"; 
import Select from 'react-select';
import Slider from 'react-slick';

class ProjectDetailModal extends Component {
    
    state = {
        modal8: false,
        modal9: false,
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
            <div>
                <a title="Details" onClick={this.toggle(9)} href="#"><FaLink className="fa fa-link"/></a>
                <MDBContainer className="view-original-ticket-modal" >
                    <MDBModal className="view-original-ticket-modal mb-0 " style={{display:"flex", alignItems: "center"}} isOpen={this.state.modal9} toggle={this.toggle(9)} backdrop={true}>
                        <MDBModalHeader toggle={this.toggle(9)} className="profile-modal-header quali-head">
                            <span className="mb-0"></span></MDBModalHeader>
                            <MDBModalBody className="body-scroll scroll-height">
                            <div className="mb-style project-details-wrapper ">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-6 pr-5">
                                    <Slider {...settings} className="lazy slider" data-sizes="50vw">
                                        {/* <div style={{display:"flex"}}> */}
                                        <div className="card-shadow" style={{margin: "10px"}}>
                                            <div className="short-card project-details-slide">
                                            <img src={ifoslider1} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-shadow" style={{margin: "10px"}}>
                                        <div className="short-card project-details-slide">
                                            <img src={ifoslider2} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-shadow" style={{margin: "10px"}}>
                                            <div className="short-card project-details-slide">
                                                <img src={ifoslider3} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-shadow" style={{margin: "10px"}}>
                                        <div className="short-card project-details-slide">
                                            <img src={ifoslider4} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-shadow" style={{margin: "10px"}}>
                                        <div className="short-card project-details-slide">
                                            <img src={ifoslider5} alt="" />
                                            </div>
                                        </div>
                                        </Slider>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-6 ">
                                        <div className="project-details-content">
                                        <h3>Project Info</h3>
                                        <p className="my-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!
                                            <br /><br />
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas laboriosam officia debitis? Necessitatibus laboriosam deserunt error fuga quam nemo sapiente, voluptates nihil consequatur at, corporis dolores quibusdam molestias quaerat!
                                        </p>
                                        <h3><FaUserAlt className="mr-3" /> Client : <span>Jhon Doe</span></h3>
                                        <h3><FaRegPaperPlane className="mr-3" /> Skills : <span>Laravel / Vue / React / Node / HTML5 / PHP / CSS3</span></h3>
                                        <h3><FaFolderOpen className="mr-3" />Category : <span>Web Development</span></h3>
                                        <h3><FaCalendarAlt className="mr-3" />Completed on : <span>30th March 2017</span></h3>
                                        <h3><FaLink className="mr-3" />URL : <a>www.linkname.com</a></h3>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
            </div>
        );
    }
}

export default ProjectDetailModal;