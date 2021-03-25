import React from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import logo from '../../app_assets/img/home/logo-white.svg';
import { FaFacebookF,FaTwitter, FaLinkedinIn,FaInstagram} from "react-icons/fa"; 


const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-3 pl-0 pr-0 col-lg-4">
                    <div className="main-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="col-sm-4 pl-0 pr-0 col-lg-4 d-none d-md-block">
                    <div className="terms-conditions">
                        <a href="#">Terms  & Conditions Privacy statement</a>
                    </div>
                </div>
                <div className="col-8 col-sm-9 pl-0 pr-0 col-md-5 col-lg-4 flex-dir-column-small">
                    <div className="terms-conditions d-flex d-md-none">
                        <a href="#">Terms  & Conditions Privacy statement</a>
                    </div>
                    <div className="legal-notes">
                        © 2017-2019 Back to Experts Pty Ltd.
                    </div>
                </div>
            </div>
        </div>
        </footer>    

    )
}
export default Footer;
