import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginAPI } from '../../../actions/auth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter,} from "react-icons/fa";  
class LoginPage extends Component {

	render() {
		return (

            <main>
            <div className="container">
            <div className="row justify-content-center" style={{marginBottom: "60px"}}>
                <div className="col-12 col-lg-8">
                    <div className="tile tile--form-login">
                        <LoginForm login={this.props.login} />
                        <hr className=" d-none d-md-block"/>
                        <section className="back-to-experts">
                            <h1 className="form__title d-none d-md-block mb-3">Login</h1>
                            <h3 className="text-align-center mb-4">With your social media account</h3>
                            <div className="login-social-buttons">
                                <button type="button" className="button btn-twi mr-3" ><FaTwitter className="social-btn-icon" style={{color:"#ffffff"}}/><span className="ml-4">Twitter</span></button>
                                <button type="button" className="button btn-fb mr-3" ><FaFacebookF className="social-btn-icon" /><span className="ml-5">Facebook</span></button>
                                <button type="button" className="button btn-gol" ><FaGoogle className="social-btn-icon" /><span className="ml-5">Google+</span></button>
                            </div>
                        </section>
                        <hr className=" d-none d-md-block"/>
                        <section className="back-to-experts">
                            <h1 className="form__title d-none d-md-block">Don't have an Account?</h1>
                            <h3 className="text-align-center d-block d-md-none">Or</h3>
                            
                            <Link to={'/signup'} type="button" className="button button--light"  style={{width:"57%"}}> Register Now </Link>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(loginAPI(data))

   
})

export default connect(null, mapDispatchToProps)(LoginPage);