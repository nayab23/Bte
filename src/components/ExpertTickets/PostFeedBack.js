import React, { Component } from 'react';
import feedback from '../app_assets/img/feedback.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar,AiFillStar } from "react-icons/ai";

class PostFeedBack extends Component {
    render() {
        return (
            <div>
            <div className="container container-fluid-small">
              <main className="main-content main-content--dashboard">
                <div className="row justify-content-center">
                  <div className="col-12 feed__wrapper order-1">
                    <div className="tile tile--2 tile--wallet hire-ticket-content">
                    <div className="contract-wrapper">
                    <img className="contract-img" src={feedback} alt="" />
                    <h2 className="contract-title" style={{marginLeft: "18px"}}>Feedback</h2>
                    </div>
                    <div className="">
                    <h2 className="contract-title">Ticket Title</h2>
                    <h3 class="filter__section-label">Full Stack Developer, Databases, Web Architecture &amp; Storage</h3>
                    <h2 className="contract-title">Expert Rating</h2>
                    <div class="rating-stars">
                    <div className="rating-star">
                            <Rating
                             initialRating={5}
                             emptySymbol={<AiOutlineStar/>}
                             fullSymbol={<AiFillStar/>}
                             readonly
                             />
                    </div>
                    <h2 className="rating-title">5.0</h2>
                    </div>
                    <hr />
                    <h3 class="filter__section-label" style={{fontStyle: "italic"}}>“Im a chemical enginering, but wirh artistic habilities. For that reason i want  
                    to conect all mi interest and im searching a company or a posibility to begin. I am a professional writer with a 
                    Bachelor of Science in Entrepreneurial Journalism. As a Professional Service Group Manager or Service Delivery 
                    Manager, I am responsible for the well-being of a project”
                    </h3>
                    <br />
                    <form method="post" action="#" className="form " id="">
                    <div className="row">
                    <div className="col-12 col-md-12 feedback-details">
                    <Link to="/client-dashboard/edit-feedback" type="button" className="button-con d-md-inline max-200 ">
                    <span>Edit</span>
                    </Link>
                    </div>
                    </div>
                    
                    </form>
                    
                    
                    </div>
                    </div>
                  </div>
                </div>

              </main>
            </div>
          </div>
        );
    }
}

export default PostFeedBack;