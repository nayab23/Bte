import React from 'react';
import styles from './ExpertSettings.module.css';
import { turquoise } from 'color-name';
import user from '../app_assets/img/avatar-s-1.png';
import pencil from '../app_assets/img/pencil.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const ExpertSettings: React.FC = () => (

  <div>
  <main className="main-content main-content--dashboard" style={{paddingBottom: "65px", paddingTop: "0px"}}>
<div className="container container-fluid-small">
  <div className="bg-primary-light">
    <div className="container py-5">
      {/* <!-- <div className="row"> --> */}
      {/* <!-- <div className="col-sm-12">--> */}
      <div className="row">

        <div className="col-md-3 d-none d-md-block">
          <div className="nav flex-column nav-pills account" id="v-pills-tab" role="tablist" aria-orientation="vertical">

            <h2 className="h5 mb-4">Account</h2>

            <a className="nav_link_s " id="v-pills-ranking-tab" data-toggle="pill" href="#account-ranking" role="tab"
              aria-controls="account-ranking" aria-selected="false">Ranking</a>
            <a className="nav_link_s" id="account-billing-tab" data-toggle="pill" href="#account-billing" role="tab"
              aria-controls="account-billing" aria-selected="false">Billing</a>
            <a className="nav_link_s" href="#">My Profile</a>
            <a className="nav_link_s active" id="account-settings-tab" data-toggle="pill" href="#account-settings"
              role="tab" aria-controls="account-settings" aria-selected="true">Profile Settings</a>
            <a className="nav_link_s" id="account-security-tab" data-toggle="pill" href="#account-security" role="tab"
              aria-controls="account-security" aria-selected="false">Password &amp; Security</a>
            <a className="nav_link_s" id="account-notification-tab" data-toggle="pill" href="#account-notification"
              role="tab" aria-controls="account-notification" aria-selected="false">Notification Settings</a>

            <a className="nav_link_s" id="bte-services-tab" data-toggle="pill" href="#bte-services" role="tab"
              aria-controls="bte-services" aria-selected="false">Service Type</a>
            <a className="nav_link_s" id="lans-tab" data-toggle="pill" href="#lans" role="tab" aria-controls="lans"
              aria-selected="false">Languages</a>


          </div>
        </div>

        <div className="col-12 d-md-none mb-1">
          <h2 className="h5 mb-4">Account</h2>

          <select className="mb10 form-control" id="tab_selector">
            <option value="0">Ranking</option>
            <option value="1">Billing</option>
            <option value="2">My Profile</option>
            <option value="3">Profile Settings</option>
            <option value="4">Password &amp; Security</option>
            <option value="5">Notification Settings</option>
            <option value="6">Categories/Skills</option>
            <option value="7">Languages</option>
          </select>
        </div>

        <div className="col-md-9">
          <div className="tab-content" id="account-tabContent">
            <div className="tab-pane fade " id="account-ranking" role="tabpanel" aria-labelledby="account-ranking-tab">
              {/* <!-- Ranking --> */}
              {/* <!-- <h1 className="account-title">Ranking</h1> --> */}
              <div className="card mt-4">
                <div className="card-header">

                  <h2 className="card-title">

                    <img src="/public/design/img/star-1.svg" alt="" style={{marginRight: "2px"}} />
                    <img src="/public/design/img/star-1.svg" alt="" style={{marginRight: "2px"}} />
                    <img src="/public/design/img/star-1.svg" alt="" style={{marginRight: "2px"}} />
                    <img src="/public/design/img/star-1.svg" alt="" style={{marginRight: "2px"}} />
                  </h2>
                  <div>


                    <p className="score">0</p>
                    <label htmlFor="" className="score-label">Rating score</label>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row form-group">
                    <div className="col-sm-6">
                      <p className="score">0</p>
                      <label htmlFor="" className="score-label">Rating score</label>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                      <p className="text-muted m-0">Rating score is the score that Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row form-group">
                    <div className="col-sm-6">
                      <p className="score">0</p>
                      <label htmlFor="" className="score-label">Tickets Resolved</label>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                      <p className="text-muted m-0">Lorem ipsum dolor sit amet <a href="#0" className="card-link">Active
                          tickes</a></p>
                    </div>
                  </div>
                  <hr />

                  <div className="row form-group">
                    <div className="col-sm-6">
                      <p className="score">
                        50 </p>
                      <label htmlFor="" className="score-label">Total Points</label>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                      <p className="text-muted m-0">Neque ea expedita eum deleniti, eaque laudantium. </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row form-group">
                    <div className="col-sm-6">
                      <p className="score">0h / day</p>
                      <label htmlFor="" className="score-label">Avg.OnlineTime</label>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                      <p className="text-muted m-0">Aperiam cum, soluta, vel excepturi voluptates accusamus, recusandae
                        totam fugiat.</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row form-group">
                    <div className="col-sm-6">
                      <p className="score">0 / 0</p>

                      <label htmlFor="" className="score-label">Client Satisfaction Points</label>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                      <p className="text-muted m-0">Fugiat rem nesciunt tenetur commodi voluptatibus</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* <!-- END Ranking --> */}
            <div className="tab-pane fade" id="account-billing" role="tabpanel" aria-labelledby="account-billing-tab">
              {/* <!-- <h1 className="account-title">Billing</h1> --> */}

              <div className="card editor-switch mt-4">
                <div className="card-header">

                  <h2 className="card-title">Account finance</h2>
                  {/* <!-- <a href="#0" className="card-header-right js-editor-switch-button editor-switch-button"><img src="img/pencil.svg" alt=""></a> --> */}

                </div>
                <div className="card-body">

                  <div className="editor-switch__block">

                    <div className="row form-group">
                      <div className="col-sm-6">
                        <label>Availible amount for withdraw</label>
                        <p className="text-muted editor-switch__input">0 USD</p>
                      </div>
                      <div className="col-sm-6 text-sm-right">
                        <a href="" className="btn btn-primary-light">Request a withdraw</a>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <div className="card mt-4 editor-switch">
                <div className="card-header">
                  <h2 className="card-title">Rate</h2>
                  <a href="#" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save save_rate">Save</a>

                </div>
                <div className="card-body">

                  <div className="editor-switch__block--show">
                    <div className="row">
                      <div className="col-sm-4 form-group">
                        <label>Rate</label>
                        <p className="text-muted editor-switch__input">$100/ hour</p>
                      </div>
                      <div className="col-sm-4 form-group">
                        <label>BTR Service Charges</label>
                        <p className="text-muted editor-switch__input">$20</p>

                      </div>
                      <div className="col-sm-4 form-group">
                        <label>Amount you'll recive</label>
                        <p className="text-muted editor-switch__input">$80/ hour</p>
                      </div>
                    </div>

                  </div>

                  <div className="editor-switch__block--edit">
                    <label>Rate</label>
                    <p className="text-muted editor-switch__input">Your rate per hour (USD)</p>
                    <input type="number" className="form-control" id="hourly_rate" value="100" />
                  </div>

                </div>
              </div>
              <div className="card mt-4 editor-switch">
                <div className="card-header">
                  <h2 className="card-title">Payment method</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save save_payment_method">Save</a>

                </div>





                <div className="card-body">
                  <div className="editor-switch__block--show">
                    <div className="form-group">
                      <label>Type</label>
                      <p className="text-muted editor-switch__input">Credit or Debit Card</p>
                    </div>
                    <div className="form-group">
                      <label>Number</label>
                      <p className="text-muted editor-switch__input">12** **** **** **90</p>
                    </div>
                  </div>


                  <div className="editor-switch__block--edit">
                    <div className="form-group">
                      <label>Type</label>
                      <select className="mb10 form-control" id="type">

                        <option value="1">Visa</option>
                        <option value="2">Master</option>
                        <option value="3">Credit</option>
                        <option value="4">Electron</option>

                      </select>
                    </div>

                    <div className="form-group">
                      <label>Card number</label>
                      <input type="text" className="form-control" id="card_number" />
                      <input type="hidden" className="form-control" id="id" />
                    </div>

                  </div>

                </div>
              </div>




            </div>
            <div className="tab-pane fade show active" id="account-settings" role="tabpanel"
              aria-labelledby="account-settings">
              {/* <!-- <h1 className="account-title">Profile Settings</h1> --> */}

              <div className="card mt-4">
                <div className="card-header card-header-responsive container">
                  <h2 className="card-title">Profile</h2>
                  <Link to={'/expert-dashboard/public-profile'} className="card-header-right text-right card-link d-block">  Visit my public profile page</Link>
                </div>
                <div className="card-body">
                  <div className="editor-switch">

                    <div className="row form-group">
                      <div className="col-sm-6">
                        <label>Profile visibility</label>

                        <div className="btn-group btn-toggle" style={{marginTop: "80px", marginLeft: "-110px"}}>
                          <button className="button primary Public active" style={{padding: "10px 30px"}}>Public</button>
                          <button className="button outline primary Private " style={{padding: "10px 30px"}}><Link to={'/expert-dashboard/private-profile'}>Private</Link></button>
                        </div>

                        {/* <!-- <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1">
                    <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                  </div> --> */}
                      </div>
                      <div className="col-sm-6">
                        <p className="text-muted">Public profiles are visible on www.backtoexperts.com and can be found
                          through search engins</p>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-sm-12">
                        <label>Profile link</label>
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="url" className="form-control urltext" placeholder="link"
                              value="" />
                          </div>
                          <div className="col-sm-6 d-flex align-items-center">
                            <a href="#0" className="card-link  popup">Share</a>
                            <a href="#0" className="card-link copylink">Copy link</a>
                          </div>
                        </div>
                      </div>

                      {/* <!-- <div className="col-sm-6 mt-2">
                  <label htmlFor="">&nbsp</label>
                  <a href="#0" className="card-link">Share</a>
                  <a href="#0" className="card-link">Copy link</a>
                </div> --> */}
                    </div>

                    <div className="form-group">
                      <label>Export</label>
                      <a href="#" className="btn btn-primary-light">Save my
                        profile to pdf </a>
                    </div>

                  </div>
                </div>
              </div>



              <div className="card editor-switch mt-4">
                <div className="card-header container">

                  <h2 className="card-title">Account</h2>
                  <form action="#" method="post"
                    id="myprofileForm" encType="multipart/form-data">
                    <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                    <a href="#0" className="card-header-right">
                      <img src={pencil}
                        className="js-editor-switch-button editor-switch-button__edit" alt="pencil"
                        />
                    </a><a href="#0" style={{display: "none"}}
                      className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                      id="backsavebutton" >back</a>
                    <a href="#0" style={{display: "none"}}
                      className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                      id="backsavebutton1">Save</a>


                  </form>
                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">


                    <div className="form-group">
                      <div className="d-flex align-center">
                        <img
                          src={user}
                          className="user-thumb mr-4" alt="User thumb" />
                        <div>
                          <label className="h4" style={{textTransform: "capitalize"}}>Expert Naeem</label>
                          <p className="text-muted m-0" style={{textTransform: "capitalize"}}>expert from
                            Riyadh,

                            Saudi Arabia
                          </p>
                        </div>



                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-sm-12">
                        <label> Professional Title</label>
                        <p className="text-muted"> Expert Naeem</p>
                      </div>
                      <div className="col-sm-12">
                        <label> Professional Description</label>
                        <p className="text-muted"> Hello,
                          I am expert of project testing.It’s essentially an Upwork credit that you never need to pay
                          back. If your project is selected to receive a Work Together Talent Grant, our team will
                          match you directly with remote professional(s) who have the specialized skills you need, and
                          the grant funds pay for some or all of their time to help propel the effort.It’s essentially
                          an Upwork credit that you never need to pay back. If your project is selected to receive a
                          Work Together Talent Grant, our t</p>
                      </div>







                      <div className="col-sm-12">
                        <label>Email<span> -Praimary </span></label>
                        <p className="text-muted">bestnaeem@gmail.com</p>
                      </div>
                      <div className="col-sm-12">
                        <label>Email<span> -Secondary</span></label>
                        <p className="text-muted"></p>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-sm-12">
                        <label>Phone</label>
                        <p className="text-muted">11111</p>
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-sm-12">
                        <label>Phone2</label>
                        <p className="text-muted"></p>
                      </div>
                    </div>

                  </div>
                  <div className="editor-switch__block--edit">

                    <div className="form-group">
                      <div className="d-flex align-center">
                        <img
                          src={user}
                          className="user-thumb mr-4" alt="User thumb" />

                        <div className="w-100">
                          <label className="h4">Expert Naeem, expert from
                            Riyadh,

                            Saudi Arabia
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Professional Title</label>
                      <input type="text" className="form-control" value="Expert Naeem" name="user_title" id="user_title" />
                    </div>
                    <div className="form-group">
                      <label>Professional Description</label>
                      <textarea className="form-control" name="about_me"
                        id="about_me">Hello, 
I am expert of project testing.It’s essentially an Upwork credit that you never need to pay back. If your project is selected to receive a Work Together Talent Grant, our team will match you directly with remote professional(s) who have the specialized skills you need, and the grant funds pay for some or all of their time to help propel the effort.It’s essentially an Upwork credit that you never need to pay back. If your project is selected to receive a Work Together Talent Grant, our t</textarea>
                    </div>

                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" value="Expert" name="firstname" id="firstname" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" value="Naeem" name="lastname" id="lastname" />
                    </div>


                    <div className="form-group">
                      <label>Country</label>
                      <select 
                      // type="text"
                       className="form-control" value="SA" name="user_country" id="user_country"
                        >
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote D'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and Mcdonald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="country_id">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory, Occupied</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA" selected>Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="CS">Serbia and Montenegro</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trincountry_idad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.s.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <select 
                      // type="text"
                       className="form-control" value="74609" name="user_city" id="user_city">
                        <option value="74609" selected>Riyadh</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Update profile image</label>

                      <div className="input-group mb-3">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" name="user_image[]" id="file" />
                          <label className="custom-file-label" htmlFor="inputGroupFile02"
                            aria-describedby="inputGroupFileAddon02" >Choose file</label>
                        </div>
                        <div className="input-group-append">
                          <span className="input-group-text" id="inputGroupFile02">Upload</span>
                        </div>
                      </div>

                    </div>

                    <div className="row form-group">
                      <div className="col-sm-12">
                        <label>User ID</label>
                        <p className="text-muted">bestnaeem</p>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email (Praimrary)</label>
                      <input type="email" className="form-control" value="bestnaeem@gmail.com" name="email" id="email" />
                    </div>

                    <div className="form-group">
                      <label>Email (Secondary)</label>
                      <input type="email" className="form-control" value="" name="s_email" id="s_email" />

                    </div>

                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" className="form-control" value="11111" name="phone" id="phone" />
                    </div>
                    <div className="form-group">
                      <label>Phone2</label>
                      <input type="tel" className="form-control" value="" name="user_contact_2" id="user_contact_2" />
                    </div>
                  </div>

                </div>

              </div>

              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">My Education</h2>
                  <a href="#" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save save__btn_education"
                    >Save</a>

                </div>
                <div className="card-body">

                  <div className="editor-switch__block--show">
                  </div>

                  <div className="editor-switch__block--edit">
                    <form>
                      <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                      <div className="form-group institue">
                        <label>University</label>
                        <input type="text" className="form-control" id="add_user_edu_title" />
                      </div>


                      <div className="form-group d-inline-block">
                        <label>Year(s)</label>

                        <select name="education_fromyear" id="education_fromyear" className="form-control" required>
                          <option value="" selected disabled>Please select..</option>
                          <option value="1970">1970</option>
                          <option value="1971">1971</option>
                          <option value="1972">1972</option>
                          <option value="1973">1973</option>
                          <option value="1974">1974</option>
                          <option value="1975">1975</option>
                          <option value="1976">1976</option>
                          <option value="1977">1977</option>
                          <option value="1978">1978</option>
                          <option value="1979">1979</option>
                          <option value="1980">1980</option>
                          <option value="1981">1981</option>
                          <option value="1982">1982</option>
                          <option value="1983">1983</option>
                          <option value="1984">1984</option>
                          <option value="1985">1985</option>
                          <option value="1986">1986</option>
                          <option value="1987">1987</option>
                          <option value="1988">1988</option>
                          <option value="1989">1989</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                        </select>
                      </div>
                      <div className="form-group d-inline-block">
                        <select name="education_toyear" className="form-control " id="education_toyear" required>
                          <option value="" selected disabled>Please select..</option>
                          <option value="1970">1970</option>
                          <option value="1971">1971</option>
                          <option value="1972">1972</option>
                          <option value="1973">1973</option>
                          <option value="1974">1974</option>
                          <option value="1975">1975</option>
                          <option value="1976">1976</option>
                          <option value="1977">1977</option>
                          <option value="1978">1978</option>
                          <option value="1979">1979</option>
                          <option value="1980">1980</option>
                          <option value="1981">1981</option>
                          <option value="1982">1982</option>
                          <option value="1983">1983</option>
                          <option value="1984">1984</option>
                          <option value="1985">1985</option>
                          <option value="1986">1986</option>
                          <option value="1987">1987</option>
                          <option value="1988">1988</option>
                          <option value="1989">1989</option>
                          <option value="1990">1990</option>
                          <option value="1991">1991</option>
                          <option value="1992">1992</option>
                          <option value="1993">1993</option>
                          <option value="1994">1994</option>
                          <option value="1995">1995</option>
                          <option value="1996">1996</option>
                          <option value="1997">1997</option>
                          <option value="1998">1998</option>
                          <option value="1999">1999</option>
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                          <option value="2004">2004</option>
                          <option value="2005">2005</option>
                          <option value="2006">2006</option>
                          <option value="2007">2007</option>
                          <option value="2008">2008</option>
                          <option value="2009">2009</option>
                          <option value="2010">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                          <option value="2014">2014</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                        </select>

                      </div>


                      <div className="form-group education">
                        <label>Degree</label>
                        <textarea 
                        // type="text" 
                        className="form-control" id="add_user_edu_details"></textarea>
                      </div>

                    </form>





                  </div>




                </div>
              </div>





              {/* <!--Certifications--> */}
              <div className="card editor-switch mt-4">

                <div className="card-header container">
                  <h2 className="card-title">My Certifications</h2>
                  <a href="#" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save">Back</a>


                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">


                    <div className="form-group">
                      <label>University / College / Institute
                        <p className="text-muted">PU(2014-1972)</p></label>
                      <label>Professional Certificate Name
                        <p className="text-muted">Testing</p> </label>
                      <label>Certificate ID
                        <p className="text-muted">1111111111</p></label>

                    </div>
                  </div>

                  <div className="editor-switch__block--edit">
                    <form>
                      <fieldset style={{minWidth: "0", padding: "20px",  margin: "9px", border: "1px solid #DDE2E9"}}>
                        <legend style={{width: "auto !important"}}>Testing</legend>
                        <div className="row">
                          <div className="col col-md-12">
                            <div className="form-group">
                              <label>University / College / Institute</label>
                              <input type="text" className="form-control" id="Certificate_title" value="PU" />
                            </div>
                          </div>
                          <div className="col col-md-12">
                            <label>Year(s)</label>
                            <div className="form-group d-inline-block">


                              <select name="Certificate_fromyear" id="Certificate_fromyear" className="form-control"
                                required>
                                <option value="" selected disabled>Please select..</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014" selected>2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                              </select>
                            </div>
                            <div className="form-group d-inline-block">
                              <select name="Certificate_toyear" className="form-control " id="Certificate_toyear"
                                required>
                                <option value="" selected disabled>Please select..</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972" selected>1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                              </select>

                            </div>
                          </div>

                          <div className="col col-md-12">
                            <div className="form-group">
                              <label>Professional Certificate Name </label>
                              <input type="text" className="form-control" id="Certificate52" value="Testing" />
                            </div>
                          </div>
                          <div className="col col-md-12">
                            <div className="form-group">
                              <label>Certificate ID</label>
                              <input type="text" className="form-control" name="Details" id="Details52"
                                value=" 1111111111" />
                            </div>
                          </div>
                          <div className="col col-md-12">
                            <div className="form-group">
                              <a href="#" className="js-editor-switch-button btn btn-primary btn-sm btn-sm"
                                style={{marginTop: "5px"}} >Save</a>
                            </div>
                          </div>
                        </div>

                      </fieldset>
                    </form>
                    <fieldset
                      style={{minWidth: "0", padding: "20px",  margin: "9px", border: "1px solid #DDE2E9", display: "none"}}
                      className="addmorecrtf">
                      <legend style={{width: "auto !important"}}>AddMore</legend>
                      <div className="row">
                        <div className="col col-md-12">
                          <form>
                            <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />



                            <div className="form-group">
                              <label>University / College / Institute</label>
                              <input type="text" className="form-control" id="Certificate_title" name="Certificate_title" />
                            </div>


                            <div className="form-group d-inline-block">
                              <label>Year(s)</label>

                              <select name="Certificate_fromyear" id="Certificate_fromyear" className="form-control"
                                required>
                                <option value="" selected disabled>Please select..</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                              </select>
                            </div>
                            <div className="form-group d-inline-block">
                              <select name="Certificate_toyear" className="form-control " id="Certificate_toyear"
                                required>
                                <option value="" selected disabled>Please select..</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                              </select>

                            </div>

                            <div className="form-group">
                              <label>Professional Certificate Name</label>
                              <input type="text" className="form-control" name="Certificate" id="Certificate" />
                            </div>

                            <div className="form-group">
                              <label>Certificate ID</label>
                              <input type="text" className="form-control" name="Details" id="Details"
                                placeholder="example 7364537736" />
                            </div>

                            <div className="form-group">
                              <a href="#" className="js-editor-switch-button btn btn-primary btn-sm"
                                style={{marginTop: "5px"}} >Save</a>
                            </div>

                          </form>



                        </div>
                      </div>
                    </fieldset>

                    <a href="#" id="addmorecrtf" style={{margin: "9px"}}
                      className="js-editor-switch-add-section btn btn-primary-light">Add more</a>

                  </div>

                </div>
              </div>


              {/* <!--End Certifications--> */}
              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">My Projects</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0" className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                    >Save</a>

                </div>
                <div className="card-body">

                  <div className="editor-switch__block--show">
                    <div className="form-group">
                      <label>Not Added Yet</label>
                    </div>

                  </div>

                  <div className="editor-switch__block--edit">
                    <form id="AddExpertProject">



                      <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                      <div className="form-group">

                        <div className="form-group">
                          <label>Project</label>
                          <input type="text" className="form-control" id="title" />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <textarea 
                          // type="text" 
                          rows={6} className="form-control" id="details" name="details"></textarea>
                        </div>
                      </div>
                    </form>








                  </div>
                </div>
              </div>




              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">My Experience</h2>

                  <a href="#" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#" className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                   >Save</a>

                </div>
                <div className="card-body">

                  <div className="editor-switch__block--show">
                    <div className="form-group">
                      <label>Not added Yet</label>


                    </div>

                  </div>
                  <div className="editor-switch__block--edit">

                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" id="exp_title" />
                    </div>
                    <div className="form-group">
                      <label>Details</label>
                      <textarea className="form-control" id="exp_details"></textarea>
                    </div>








                  </div>
                </div>
              </div>




            </div>
            <div className="tab-pane fade" id="account-security" role="tabpanel" aria-labelledby="account-security-tab">

              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">Password</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save save_btn_Password">Save</a>

                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">
                    <div className="form-group">
                      <label>Password</label>
                      <p className="text-muted editor-switch__input">******</p>

                    </div>
                  </div>
                  <div className="editor-switch__block--edit">
                    <div className="form-group">
                      <label>Old Password</label>
                      <input type="password" className="form-control" id="OldPassword" />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-control" id="NewPassword" />
                    </div>
                    <div className="form-group">
                      <label>Re Type Password</label>
                      <input type="password" className="form-control" id="ReTypePassword"/>
                    </div>
                  </div>
                </div>

              </div>


              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">Security Question</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0"
                    className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save save_secrit_question">Save</a>

                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">
                    <div className="form-group">
                      <label>Security Question</label>
                      <p className="text-muted editor-switch__input">What is your favorite color?</p>
                    </div>

                    <div className="form-group">
                      <label>Answer</label>
                      <p className="text-muted editor-switch__input"> blue</p>
                    </div>
                  </div>

                  <div className="editor-switch__block--edit">
                    <div className="form-group">
                      <label>Security Question</label>
                      <select className="mb10 form-control" name="question_id" id="question_id">
                        <option value="1">What was your favorite place to visit as a child?</option>
                        <option value="2">What is the first and last name of your first boyfriend or girlfriend?
                        </option>
                        <option value="3">Which phone number do you remember most from your childhood?</option>
                        <option value="4">Who is your favorite actor, musician, or artist?</option>
                        <option value="5">What is the name of your favorite pet?</option>
                        <option value="6">In what city were you born?</option>
                        <option value="7">What high school did you attend?</option>
                        <option value="8">What is the name of your first school?</option>
                        <option value="9">What is your favorite movie?</option>
                        <option value="10">What is your mother's maiden name?</option>
                        <option value="11">What street did you grow up on?</option>
                        <option value="12">What was the make of your first car?</option>
                        <option value="13">When is your anniversary?</option>
                        <option value="14" selected>What is your favorite color?</option>

                      </select>
                    </div>
                    <div className="form-group">
                      <label>Answer</label>
                      <input type="text" className="form-control" name="answer" id="answer" value="blue" />
                    </div>
                    {/* <!--end--> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="lans" role="tabpanel" aria-labelledby="lans-tab">
              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">Languages</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#" className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                    >Update</a>

                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">
                    <div className="form-group">

                      <span className="badge badge-primary">English</span>
                      <span className="badge badge-primary">Arabic</span>
                    </div>
                  </div>
                  <div className="editor-switch__block--edit">

                    <div className="my-4">


                      <form id="Updatelanguages" method="post"
                        action="#">
                        <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                        <div className="row">
                          <div className="col-lg-2">
                            <label htmlFor="">Language*</label>
                          </div>
                          <div className="col-lg-10">
                            <input type="hidden" name="lngid[]" id="lngid133" value="133"/>
                            <input type="hidden" name="lngid[]" id="lngid132" value="132"/>
                            <select name="language_id[]" className="form-control form-value" id="languageid" multiple
                              required>
                              <option value="1">English</option>

                              <option value="2">Afar</option>

                              <option value="3">Abkhazian</option>

                              <option value="4">Afrikaans</option>

                              <option value="5">Amharic</option>

                              <option value="6" selected>Arabic</option>

                              <option value="7">Assamese</option>

                              <option value="8">Aymara</option>

                              <option value="9">Azerbaijani</option>

                              <option value="10">Bashkir</option>

                              <option value="11">Belarusian</option>

                              <option value="12">Bulgarian</option>

                              <option value="13">Bihari</option>

                              <option value="14">Bislama</option>

                              <option value="15">Bengali/Bangla</option>

                              <option value="16">Tibetan</option>

                              <option value="17">Breton</option>

                              <option value="18">Catalan</option>

                              <option value="19">Corsican</option>

                              <option value="20">Czech</option>

                              <option value="21">Welsh</option>

                              <option value="22">Danish</option>

                              <option value="23">German</option>

                              <option value="24">Bhutani</option>

                              <option value="25">Greek</option>

                              <option value="26">Esperanto</option>

                              <option value="27">Spanish</option>

                              <option value="28">Estonian</option>

                              <option value="29">Basque</option>

                              <option value="30">Persian</option>

                              <option value="31">Finnish</option>

                              <option value="32">Fiji</option>

                              <option value="33">Faeroese</option>

                              <option value="34">French</option>

                              <option value="35">Frisian</option>

                              <option value="36">Irish</option>

                              <option value="37">Scots/Gaelic</option>

                              <option value="38">Galician</option>

                              <option value="39">Guarani</option>

                              <option value="40">Gujarati</option>

                              <option value="41">Hausa</option>

                              <option value="42">Hindi</option>

                              <option value="43">Croatian</option>

                              <option value="44">Hungarian</option>

                              <option value="45">Armenian</option>

                              <option value="46">Interlingua</option>

                              <option value="47">Interlingue</option>

                              <option value="48">Inupiak</option>

                              <option value="49">Indonesian</option>

                              <option value="50">Icelandic</option>

                              <option value="51">Italian</option>

                              <option value="52">Hebrew</option>

                              <option value="53">Japanese</option>

                              <option value="54">Yiddish</option>

                              <option value="55">Javanese</option>

                              <option value="56">Georgian</option>

                              <option value="57">Kazakh</option>

                              <option value="58">Greenlandic</option>

                              <option value="59">Cambodian</option>

                              <option value="60">Kannada</option>

                              <option value="61">Korean</option>

                              <option value="62">Kashmiri</option>

                              <option value="63">Kurdish</option>

                              <option value="64">Kirghiz</option>

                              <option value="65">Latin</option>

                              <option value="66">Lingala</option>

                              <option value="67">Laothian</option>

                              <option value="68">Lithuanian</option>

                              <option value="69">Latvian/Lettish</option>

                              <option value="70">Malagasy</option>

                              <option value="71">Maori</option>

                              <option value="72">Macedonian</option>

                              <option value="73">Malayalam</option>

                              <option value="74">Mongolian</option>

                              <option value="75">Moldavian</option>

                              <option value="76">Marathi</option>

                              <option value="77">Malay</option>

                              <option value="78">Maltese</option>

                              <option value="79">Burmese</option>

                              <option value="80">Nauru</option>

                              <option value="81">Nepali</option>

                              <option value="82">Dutch</option>

                              <option value="83">Norwegian</option>

                              <option value="84">Occitan</option>

                              <option value="85">(Afan)/Oromoor/Oriya</option>

                              <option value="86">Punjabi</option>

                              <option value="87">Polish</option>

                              <option value="88">Pashto/Pushto</option>

                              <option value="89">Portuguese</option>

                              <option value="90">Quechua</option>

                              <option value="91">Rhaeto-Romance</option>

                              <option value="92">Kirundi</option>

                              <option value="93">Romanian</option>

                              <option value="94">Russian</option>

                              <option value="95">Kinyarwanda</option>

                              <option value="96">Sanskrit</option>

                              <option value="97">Sindhi</option>

                              <option value="98">Sangro</option>

                              <option value="99">Serbo-Croatian</option>

                              <option value="100">Singhalese</option>

                              <option value="101">Slovak</option>

                              <option value="102">Slovenian</option>

                              <option value="103">Samoan</option>

                              <option value="104">Shona</option>

                              <option value="105">Somali</option>

                              <option value="106">Albanian</option>

                              <option value="107">Serbian</option>

                              <option value="108">Siswati</option>

                              <option value="109">Sesotho</option>

                              <option value="110">Sundanese</option>

                              <option value="111">Swedish</option>

                              <option value="112">Swahili</option>

                              <option value="113">Tamil</option>

                              <option value="114">Telugu</option>

                              <option value="115">Tajik</option>

                              <option value="116">Thai</option>

                              <option value="117">Tigrinya</option>

                              <option value="118">Turkmen</option>

                              <option value="119">Tagalog</option>

                              <option value="120">Setswana</option>

                              <option value="121">Tonga</option>

                              <option value="122">Turkish</option>

                              <option value="123">Tsonga</option>

                              <option value="124">Tatar</option>

                              <option value="125">Twi</option>

                              <option value="126">Ukrainian</option>

                              <option value="127">Urdu</option>

                              <option value="128">Uzbek</option>

                              <option value="129">Vietnamese</option>

                              <option value="130">Volapuk</option>

                              <option value="131">Wolof</option>

                              <option value="132">Xhosa</option>

                              <option value="133">Yoruba</option>

                              <option value="134">Chinese</option>

                              <option value="135">Zulu</option>

                              <option value="1" selected>English</option>

                              <option value="2">Afar</option>

                              <option value="3">Abkhazian</option>

                              <option value="4">Afrikaans</option>

                              <option value="5">Amharic</option>

                              <option value="6">Arabic</option>

                              <option value="7">Assamese</option>

                              <option value="8">Aymara</option>

                              <option value="9">Azerbaijani</option>

                              <option value="10">Bashkir</option>

                              <option value="11">Belarusian</option>

                              <option value="12">Bulgarian</option>

                              <option value="13">Bihari</option>

                              <option value="14">Bislama</option>

                              <option value="15">Bengali/Bangla</option>

                              <option value="16">Tibetan</option>

                              <option value="17">Breton</option>

                              <option value="18">Catalan</option>

                              <option value="19">Corsican</option>

                              <option value="20">Czech</option>

                              <option value="21">Welsh</option>

                              <option value="22">Danish</option>

                              <option value="23">German</option>

                              <option value="24">Bhutani</option>

                              <option value="25">Greek</option>

                              <option value="26">Esperanto</option>

                              <option value="27">Spanish</option>

                              <option value="28">Estonian</option>

                              <option value="29">Basque</option>

                              <option value="30">Persian</option>

                              <option value="31">Finnish</option>

                              <option value="32">Fiji</option>

                              <option value="33">Faeroese</option>

                              <option value="34">French</option>

                              <option value="35">Frisian</option>

                              <option value="36">Irish</option>

                              <option value="37">Scots/Gaelic</option>

                              <option value="38">Galician</option>

                              <option value="39">Guarani</option>

                              <option value="40">Gujarati</option>

                              <option value="41">Hausa</option>

                              <option value="42">Hindi</option>

                              <option value="43">Croatian</option>

                              <option value="44">Hungarian</option>

                              <option value="45">Armenian</option>

                              <option value="46">Interlingua</option>

                              <option value="47">Interlingue</option>

                              <option value="48">Inupiak</option>

                              <option value="49">Indonesian</option>

                              <option value="50">Icelandic</option>

                              <option value="51">Italian</option>

                              <option value="52">Hebrew</option>

                              <option value="53">Japanese</option>

                              <option value="54">Yiddish</option>

                              <option value="55">Javanese</option>

                              <option value="56">Georgian</option>

                              <option value="57">Kazakh</option>

                              <option value="58">Greenlandic</option>

                              <option value="59">Cambodian</option>

                              <option value="60">Kannada</option>

                              <option value="61">Korean</option>

                              <option value="62">Kashmiri</option>

                              <option value="63">Kurdish</option>

                              <option value="64">Kirghiz</option>

                              <option value="65">Latin</option>

                              <option value="66">Lingala</option>

                              <option value="67">Laothian</option>

                              <option value="68">Lithuanian</option>

                              <option value="69">Latvian/Lettish</option>

                              <option value="70">Malagasy</option>

                              <option value="71">Maori</option>

                              <option value="72">Macedonian</option>

                              <option value="73">Malayalam</option>

                              <option value="74">Mongolian</option>

                              <option value="75">Moldavian</option>

                              <option value="76">Marathi</option>

                              <option value="77">Malay</option>

                              <option value="78">Maltese</option>

                              <option value="79">Burmese</option>

                              <option value="80">Nauru</option>

                              <option value="81">Nepali</option>

                              <option value="82">Dutch</option>

                              <option value="83">Norwegian</option>

                              <option value="84">Occitan</option>

                              <option value="85">(Afan)/Oromoor/Oriya</option>

                              <option value="86">Punjabi</option>

                              <option value="87">Polish</option>

                              <option value="88">Pashto/Pushto</option>

                              <option value="89">Portuguese</option>

                              <option value="90">Quechua</option>

                              <option value="91">Rhaeto-Romance</option>

                              <option value="92">Kirundi</option>

                              <option value="93">Romanian</option>

                              <option value="94">Russian</option>

                              <option value="95">Kinyarwanda</option>

                              <option value="96">Sanskrit</option>

                              <option value="97">Sindhi</option>

                              <option value="98">Sangro</option>

                              <option value="99">Serbo-Croatian</option>

                              <option value="100">Singhalese</option>

                              <option value="101">Slovak</option>

                              <option value="102">Slovenian</option>

                              <option value="103">Samoan</option>

                              <option value="104">Shona</option>

                              <option value="105">Somali</option>

                              <option value="106">Albanian</option>

                              <option value="107">Serbian</option>

                              <option value="108">Siswati</option>

                              <option value="109">Sesotho</option>

                              <option value="110">Sundanese</option>

                              <option value="111">Swedish</option>

                              <option value="112">Swahili</option>

                              <option value="113">Tamil</option>

                              <option value="114">Telugu</option>

                              <option value="115">Tajik</option>

                              <option value="116">Thai</option>

                              <option value="117">Tigrinya</option>

                              <option value="118">Turkmen</option>

                              <option value="119">Tagalog</option>

                              <option value="120">Setswana</option>

                              <option value="121">Tonga</option>

                              <option value="122">Turkish</option>

                              <option value="123">Tsonga</option>

                              <option value="124">Tatar</option>

                              <option value="125">Twi</option>

                              <option value="126">Ukrainian</option>

                              <option value="127">Urdu</option>

                              <option value="128">Uzbek</option>

                              <option value="129">Vietnamese</option>

                              <option value="130">Volapuk</option>

                              <option value="131">Wolof</option>

                              <option value="132">Xhosa</option>

                              <option value="133">Yoruba</option>

                              <option value="134">Chinese</option>

                              <option value="135">Zulu</option>

                            </select>
                            <span id="valid_id" className="form-errors" style={{color: "red"}}></span>
                          </div>
                        </div>
                      </form>
                    </div>







                  </div>
                </div>

              </div>

            </div>
            <div className="tab-pane fade" id="bte-services" role="tabpanel" aria-labelledby="bte-services-tab">
              <div className="card editor-switch mt-4">
                <div className="card-header container">
                  <h2 className="card-title">Services</h2>
                  <a href="#0" className="card-header-right">
                    <img src={pencil}
                      className="js-editor-switch-button editor-switch-button__edit" alt="pencil" />
                  </a><a href="#0" className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                    style={{float: "right", marginLeft: "500px"}}>Back</a>
                  <a href="#0" className="js-editor-switch-button btn btn-primary btn-sm editor-switch-button__save"
                    >Save</a>

                </div>
                <div className="card-body">
                  <div className="editor-switch__block--show">
                    <div className="form-group">

                      <div className="form-group d-inline-block">
                        <span className="badge badge-primary"> Development </span>
                      </div>
                    </div>
                  </div>
                  <div className="editor-switch__block--edit">
                    <form method="post" action="#"
                      encType="multipart/form-data">
                      <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" /> </form>
                    <div className="my-4">
                      <form id="saveexpertsskills" method="post"
                        action="#">
                        <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                        <div className="my-4">

                          <div className="row">
                            <div className="col-lg-2">
                              <label htmlFor="">Select Service*</label>
                            </div>
                            <div className="col-lg-10">

                              <select name="category" className="form-control form-value" 
                                id="category_id" required>
                                <option selected value="">Select Category</option>
                                <option value="36">Cloud Server</option>
                                <option value="1">Cloud Solutions</option>
                                <option value="34">Database</option>
                                <option selected value="39">Development</option>
                                <option value="38">Operating System</option>
                                <option value="35">Security</option>
                                <option value="37">Server</option>
                              </select>
                              <span id="categoryid" className="form-errors" style={{color: "red"}}></span>
                            </div>
                          </div>
                        </div>


                      </form>


                    </div>


                  </div>
                </div>

              </div>
            </div>

            <div className="tab-pane fade" id="account-notification" role="tabpanel"
              aria-labelledby="account-notification-tab">
              <h1 className="account-title">Notifications</h1>

              <div className="card mt-4">
                <div className="card-header">
                  <h2 className="card-title">Desktop</h2>
                </div>
                <div className="card-body">

                  <div className="form-check form-check--lg mb-4">
                    <label className="form-check-label" htmlFor="defaultCheck1" >
                      desktop notifications
                      <input className="form-check-input push_notify" id="push_notify1" type="checkbox" value=" 1 "
                        checked />
                      <input className="form-check-input" id="email_notify1" type="hidden" value="1" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="form-group">
                    <a href="#" className="js-editor-switch-button btn btn-primary btn-sm btn-sm" style={{marginTop: "5px"}}
                      >Save</a>
                  </div>

                </div>
              </div>

              <div className="card mt-4">
                <div className="card-header">
                  <h2 className="card-title">Email</h2>
                </div>
                <div className="card-body">
                  <form action="3" id="updatenotifications1"
                    method="post">
                    <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                    <div className="form-check form-check--lg mb-4">

                      <label className="form-check-label" htmlFor="defaultCheck1" >
                        Email notifications
                        <input className="form-check-input email_notify" id="email_notify" name="email_notify"
                          type="checkbox" value=" 1 " checked />
                        <input className="form-check-input" name="push_notify" type="hidden" value="1" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="form-group">
                      <a href="#" className="js-editor-switch-button btn btn-primary btn-sm btn-sm"
                        style={{marginTop: "5px"}} >Save</a>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!--end--> */}

              {/* <!--services--> */}
              {/* <!--end--> */}

              <div className="tab-pane fade" id="languages" role="tabpanel" aria-labelledby="languages-tab">

              </div>
              {/* <!--end-->/ */}


            </div>
          </div>
        </div>
      </div>
      {/* <!--
<div id="hellopreloader">
<div id="hellopreloader_preload">
</div>

</div>--> */}

    </div>
  </div>
</div>
</main>
</div>
);

export default ExpertSettings;
