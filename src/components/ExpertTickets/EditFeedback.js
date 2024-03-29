import React, { Component } from 'react';
import feedback from '../app_assets/img/feed-back.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiOutlineStar,AiFillStar } from "react-icons/ai";

class EditFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "5",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({value: event});
  }

    render() {
      const { value } = this.state;
      console.log(this.state.value)
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
                    <h3 className="filter__section-label">Full Stack Developer, Databases, Web Architecture &amp; Storage</h3>
                    <h2 className="contract-title">Expert Rating</h2>
                    <div className="rating-stars">
                    <div className="rating-star">
                            <Rating
                             {...this.props}
                             initialRating={value}
                             onClick={this.handleClick}
                             emptySymbol={<AiOutlineStar/>}
                             fullSymbol={<AiFillStar/>}
                             fractions={2}
                            //  initialRating={1}
                             />
                    </div>
                    <h2 className="rating-title">{value}</h2>
                    </div>
                   <h3 className="filter__section-label">Please hover on stars to provide rating to your expert  </h3>
                    <hr />
                    <h2 className="contract-title">Feedback</h2> 
                    <h3 className="filter__section-label">Share your feedback with your expert and community</h3>
                    <form method="post" action="#" className="form " id="">
                    <div className="row">
                    <div className="col-12 col-md-12 ">

                    <label className="input__wrapper input__wrapper--half mb-4 mb-md-5">
                    <textarea className="input height-150" name="description" placeholder="Details....." maxLength="2000" id="description77">
                    “Im a chemical enginering, but wirh artistic habilities. For that reason i want to conect all mi interest and im searching a company or a posibility to begin. I am a professional writer with a Bachelor of Science in Entrepreneurial Journalism. As a Professional Service Group Manager or Service Delivery Manager, I am responsible for the well-being of a project”
                    </textarea>
                    <p className="input__notification">Please Write FeedBack</p>
                    </label>
                    </div>
                    <div className="col-12 col-md-12 feedback-details">
                    <Link to="/client-dashboard/hiring/hire-and-payment/contract/post-feedback"
                     type="button" className="button-con d-md-inline max-200 ">
                    <span>Update</span></Link>
                    <Link to="/client-dashboard/hiring/hire-and-payment/contract/post-feedback"
                     type="button" className="button-white d-md-inline max-200 end-button" style={{marginLeft:"30px"}}>
                    <span>Cancel</span></Link>
                    </div>
                    </div>
                    
                    </form>
                    {/* <h3 className="contract-row__name">Contract Value</h3> */}
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

export default EditFeedback;