import React, { Component } from 'react';
import paypal from "../app_assets/img/pay-pal.svg";
import visa from "../app_assets/img/cards.svg";
import Select from 'react-select';
import { MDBDatePickerV5 } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
 import "bootstrap-css-only/css/bootstrap.min.css"; 
 import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";

const country = [
    {
        label : "Afghanistan",
        value: "AF"
    },
    {
        label : "Åland Islands",
        value: "AX"
    },
    {
        label : "Albania",
        value: "AL"
    },
    {
        label : "Algeria",
        value: "DZ"
    },
    {
        label : "American Samoa",
        value: "AS"
    },
    {
        label : "AndorrA",
        value: "AD"
    },
    {
        label : "Angola",
        value: "AO"
    },
    {
        label : "Anguilla",
        value: "AI"
    },
    {
        label : "Antarctica",
        value: "AQ"
    },
    {
        label : "Antigua and Barbuda",
        value: "AG"
    },
    {
        label : "Argentina",
        value: "AR"
    },
    {
        label : "Armenia",
        value: "AM"
    },
    {
        label : "Aruba",
        value: "AW"
    },
    {
        label : "Australia",
        value: "AU"
    },
    {
        label : "Austria",
        value: "AT"
    },
    {
        label : "Azerbaijan",
        value: "AZ"
    },
    {
        label : "Bahamas",
        value: "BS"
    },
    {
        label : "Bahrain",
        value: "BH"
    },
    {
        label : "Bangladesh",
        value: "BD"
    },
    {
        label : "Barbados",
        value: "BB"
    },
    {
        label : "Belarus",
        value: "BY"
    },
    {
        label : "Belgium",
        value: "BE"
    },
    {
        label : "Belize",
        value: "BZ"
    },
    {
        label : "Benin",
        value: "BJ"
    },
    {
        label : "Bermuda",
        value: "BM"
    },
    {
        label : "Bhutan",
        value: "BT"
    },
    {
        label : "Bolivia",
        value: "BO"
    },
    {
        label : "Bosnia and Herzegovina",
        value: "BA"
    },
    {
        label : "Botswana",
        value: "BW"
    },
    {
        label : "Bouvet Island",
        value: "BV"
    },
    {
        label : "Brazil",
        value: "BR"
    },
    {
        label : "British Indian Ocean Territory",
        value: "IO"
    },
    {
        label : "Brunei Darussalam",
        value: "BN"
    },
    {
        label : "Bulgaria",
        value: "BG"
    },
    {
        label : "Burkina Faso",
        value: "BF"
    },
    {
        label : "Burundi",
        value: "BI"
    },
    {
        label : "Cambodia",
        value: "KH"
    },
    {
        label : "Cameroon",
        value: "CM"
    },
    {
        label : "Canada",
        value: "CA"
    },
    {
        label : "Cape Verde",
        value: "CV"
    },
    {
        label : "Cayman Islands",
        value: "KY"
    },
    {
        label : "Central African Republic",
        value: "CF"
    },
    {
        label : "Chad",
        value: "TD"
    },
    {
        label : "Chile",
        value: "CL"
    },
    {
        label : "China",
        value: "CN"
    },
    {
        label : "Christmas Island",
        value: "CX"
    },
    {
        label : "Cocos (Keeling) Islands",
        value: "CC"
    },
    {
        label : "Colombia",
        value: "CO"
    },
    {
        label : "Comoros",
        value: "KM"
    },
    {
        label : "Congo",
        value: "CG"
    },
    {
        label : "Congo, The Democratic Republic of the",
        value: "CD"
    },
    {
        label : "Cook Islands",
        value: "CK"
    },
    {
        label : "Costa Rica",
        value: "CR"
    },
    {
        label : "Cote D\"Ivoire",
        value: "CI"
    },
    {
        label : "Croatia",
        value: "HR"
    },
    {
        label : "Cuba",
        value: "CU"
    },
    {
        label : "Cyprus",
        value: "CY"
    },
    {
        label : "Czech Republic",
        value: "CZ"
    },
    {
        label : "Denmark",
        value: "DK"
    },
    {
        label : "Djibouti",
        value: "DJ"
    },
    {
        label : "Dominica",
        value: "DM"
    },
    {
        label : "Dominican Republic",
        value: "DO"
    },
    {
        label : "Ecuador",
        value: "EC"
    },
    {
        label : "Egypt",
        value: "EG"
    },
    {
        label : "El Salvador",
        value: "SV"
    },
    {
        label : "Equatorial Guinea",
        value: "GQ"
    },
    {
        label : "Eritrea",
        value: "ER"
    },
    {
        label : "Estonia",
        value: "EE"
    },
    {
        label : "Ethiopia",
        value: "ET"
    },
    {
        label : "Falkland Islands (Malvinas)",
        value: "FK"
    },
    {
        label : "Faroe Islands",
        value: "FO"
    },
    {
        label : "Fiji",
        value: "FJ"
    },
    {
        label : "Finland",
        value: "FI"
    },
    {
        label : "France",
        value: "FR"
    },
    {
        label : "French Guiana",
        value: "GF"
    },
    {
        label : "French Polynesia",
        value: "PF"
    },
    {
        label : "French Southern Territories",
        value: "TF"
    },
    {
        label : "Gabon",
        value: "GA"
    },
    {
        label : "Gambia",
        value: "GM"
    },
    {
        label : "Georgia",
        value: "GE"
    },
    {
        label : "Germany",
        value: "DE"
    },
    {
        label : "Ghana",
        value: "GH"
    },
    {
        label : "Gibraltar",
        value: "GI"
    },
    {
        label : "Greece",
        value: "GR"
    },
    {
        label : "Greenland",
        value: "GL"
    },
    {
        label : "Grenada",
        value: "GD"
    },
    {
        label : "Guadeloupe",
        value: "GP"
    },
    {
        label : "Guam",
        value: "GU"
    },
    {
        label : "Guatemala",
        value: "GT"
    },
    {
        label : "Guernsey",
        value: "GG"
    },
    {
        label : "Guinea",
        value: "GN"
    },
    {
        label : "Guinea-Bissau",
        value: "GW"
    },
    {
        label : "Guyana",
        value: "GY"
    },
    {
        label : "Haiti",
        value: "HT"
    },
    {
        label : "Heard Island and Mcdonald Islands",
        value: "HM"
    },
    {
        label : "Holy See (Vatican City State)",
        value: "VA"
    },
    {
        label : "Honduras",
        value: "HN"
    },
    {
        label : "Hong Kong",
        value: "HK"
    },
    {
        label : "Hungary",
        value: "HU"
    },
    {
        label : "Iceland",
        value: "IS"
    },
    {
        label : "India",
        value: "IN"
    },
    {
        label : "Indonesia",
        value: "ID"
    },
    {
        label : "Iran, Islamic Republic Of",
        value: "IR"
    },
    {
        label : "Iraq",
        value: "IQ"
    },
    {
        label : "Ireland",
        value: "IE"
    },
    {
        label : "Isle of Man",
        value: "IM"
    },
    {
        label : "Israel",
        value: "IL"
    },
    {
        label : "Italy",
        value: "IT"
    },
    {
        label : "Jamaica",
        value: "JM"
    },
    {
        label : "Japan",
        value: "JP"
    },
    {
        label : "Jersey",
        value: "JE"
    },
    {
        label : "Jordan",
        value: "JO"
    },
    {
        label : "Kazakhstan",
        value: "KZ"
    },
    {
        label : "Kenya",
        value: "KE"
    },
    {
        label : "Kiribati",
        value: "KI"
    },
    {
        label : "Korea, Democratic People\"S Republic of",
        value: "KP"
    },
    {
        label : "Korea, Republic of",
        value: "KR"
    },
    {
        label : "Kuwait",
        value: "KW"
    },
    {
        label : "Kyrgyzstan",
        value: "KG"
    },
    {
        label : "Lao People\"S Democratic Republic",
        value: "LA"
    },
    {
        label : "Latvia",
        value: "LV"
    },
    {
        label : "Lebanon",
        value: "LB"
    },
    {
        label : "Lesotho",
        value: "LS"
    },
    {
        label : "Liberia",
        value: "LR"
    },
    {
        label : "Libyan Arab Jamahiriya",
        value: "LY"
    },
    {
        label : "Liechtenstein",
        value: "LI"
    },
    {
        label : "Lithuania",
        value: "LT"
    },
    {
        label : "Luxembourg",
        value: "LU"
    },
    {
        label : "Macao",
        value: "MO"
    },
    {
        label : "Macedonia, The Former Yugoslav Republic of",
        value: "MK"
    },
    {
        label : "Madagascar",
        value: "MG"
    },
    {
        label : "Malawi",
        value: "MW"
    },
    {
        label : "Malaysia",
        value: "MY"
    },
    {
        label : "Maldives",
        value: "MV"
    },
    {
        label : "Mali",
        value: "ML"
    },
    {
        label : "Malta",
        value: "MT"
    },
    {
        label : "Marshall Islands",
        value: "MH"
    },
    {
        label : "Martinique",
        value: "MQ"
    },
    {
        label : "Mauritania",
        value: "MR"
    },
    {
        label : "Mauritius",
        value: "MU"
    },
    {
        label : "Mayotte",
        value: "YT"
    },
    {
        label : "Mexico",
        value: "MX"
    },
    {
        label : "Micronesia, Federated States of",
        value: "FM"
    },
    {
        label : "Moldova, Republic of",
        value: "MD"
    },
    {
        label : "Monaco",
        value: "MC"
    },
    {
        label : "Mongolia",
        value: "MN"
    },
    {
        label : "Montserrat",
        value: "MS"
    },
    {
        label : "Morocco",
        value: "MA"
    },
    {
        label : "Mozambique",
        value: "MZ"
    },
    {
        label : "Myanmar",
        value: "MM"
    },
    {
        label : "Namibia",
        value: "NA"
    },
    {
        label : "Nauru",
        value: "NR"
    },
    {
        label : "Nepal",
        value: "NP"
    },
    {
        label : "Netherlands",
        value: "NL"
    },
    {
        label : "Netherlands Antilles",
        value: "AN"
    },
    {
        label : "New Caledonia",
        value: "NC"
    },
    {
        label : "New Zealand",
        value: "NZ"
    },
    {
        label : "Nicaragua",
        value: "NI"
    },
    {
        label : "Niger",
        value: "NE"
    },
    {
        label : "Nigeria",
        value: "NG"
    },
    {
        label : "Niue",
        value: "NU"
    },
    {
        label : "Norfolk Island",
        value: "NF"
    },
    {
        label : "Northern Mariana Islands",
        value: "MP"
    },
    {
        label : "Norway",
        value: "NO"
    },
    {
        label : "Oman",
        value: "OM"
    },
    {
        label : "Pakistan",
        value: "PK"
    },
    {
        label : "Palau",
        value: "PW"
    },
    {
        label : "Palestinian Territory, Occupied",
        value: "PS"
    },
    {
        label : "Panama",
        value: "PA"
    },
    {
        label : "Papua New Guinea",
        value: "PG"
    },
    {
        label : "Paraguay",
        value: "PY"
    },
    {
        label : "Peru",
        value: "PE"
    },
    {
        label : "Philippines",
        value: "PH"
    },
    {
        label : "Pitcairn",
        value: "PN"
    },
    {
        label : "Poland",
        value: "PL"
    },
    {
        label : "Portugal",
        value: "PT"
    },
    {
        label : "Puerto Rico",
        value: "PR"
    },
    {
        label : "Qatar",
        value: "QA"
    },
    {
        label : "Reunion",
        value: "RE"
    },
    {
        label : "Romania",
        value: "RO"
    },
    {
        label : "Russian Federation",
        value: "RU"
    },
    {
        label : "RWANDA",
        value: "RW"
    },
    {
        label : "Saint Helena",
        value: "SH"
    },
    {
        label : "Saint Kitts and Nevis",
        value: "KN"
    },
    {
        label : "Saint Lucia",
        value: "LC"
    },
    {
        label : "Saint Pierre and Miquelon",
        value: "PM"
    },
    {
        label : "Saint Vincent and the Grenadines",
        value: "VC"
    },
    {
        label : "Samoa",
        value: "WS"
    },
    {
        label : "San Marino",
        value: "SM"
    },
    {
        label : "Sao Tome and Principe",
        value: "ST"
    },
    {
        label : "Saudi Arabia",
        value: "SA"
    },
    {
        label : "Senegal",
        value: "SN"
    },
    {
        label : "Serbia and Montenegro",
        value: "CS"
    },
    {
        label : "Seychelles",
        value: "SC"
    },
    {
        label : "Sierra Leone",
        value: "SL"
    },
    {
        label : "Singapore",
        value: "SG"
    },
    {
        label : "Slovakia",
        value: "SK"
    },
    {
        label : "Slovenia",
        value: "SI"
    },
    {
        label : "Solomon Islands",
        value: "SB"
    },
    {
        label : "Somalia",
        value: "SO"
    },
    {
        label : "South Africa",
        value: "ZA"
    },
    {
        label : "South Georgia and the South Sandwich Islands",
        value: "GS"
    },
    {
        label : "Spain",
        value: "ES"
    },
    {
        label : "Sri Lanka",
        value: "LK"
    },
    {
        label : "Sudan",
        value: "SD"
    },
    {
        label : "Suriname",
        value: "SR"
    },
    {
        label : "Svalbard and Jan Mayen",
        value: "SJ"
    },
    {
        label : "Swaziland",
        value: "SZ"
    },
    {
        label : "Sweden",
        value: "SE"
    },
    {
        label : "Switzerland",
        value: "CH"
    },
    {
        label : "Syrian Arab Republic",
        value: "SY"
    },
    {
        label : "Taiwan, Province of China",
        value: "TW"
    },
    {
        label : "Tajikistan",
        value: "TJ"
    },
    {
        label : "Tanzania, United Republic of",
        value: "TZ"
    },
    {
        label : "Thailand",
        value: "TH"
    },
    {
        label : "Timor-Leste",
        value: "TL"
    },
    {
        label : "Togo",
        value: "TG"
    },
    {
        label : "Tokelau",
        value: "TK"
    },
    {
        label : "Tonga",
        value: "TO"
    },
    {
        label : "Trinidad and Tobago",
        value: "TT"
    },
    {
        label : "Tunisia",
        value: "TN"
    },
    {
        label : "Turkey",
        value: "TR"
    },
    {
        label : "Turkmenistan",
        value: "TM"
    },
    {
        label : "Turks and Caicos Islands",
        value: "TC"
    },
    {
        label : "Tuvalu",
        value: "TV"
    },
    {
        label : "Uganda",
        value: "UG"
    },
    {
        label : "Ukraine",
        value: "UA"
    },
    {
        label : "United Arab Emirates",
        value: "AE"
    },
    {
        label : "United Kingdom",
        value: "GB"
    },
    {
        label : "United States",
        value: "US"
    },
    {
        label : "United States Minor Outlying Islands",
        value: "UM"
    },
    {
        label : "Uruguay",
        value: "UY"
    },
    {
        label : "Uzbekistan",
        value: "UZ"
    },
    {
        label : "Vanuatu",
        value: "VU"
    },
    {
        label : "Venezuela",
        value: "VE"
    },
    {
        label : "Viet Nam",
        value: "VN"
    },
    {
        label : "Virgin Islands, British",
        value: "VG"
    },
    {
        label : "Virgin Islands, U.S.",
        value: "VI"
    },
    {
        label : "Wallis and Futuna",
        value: "WF"
    },
    {
        label : "Western Sahara",
        value: "EH"
    },
    {
        label : "Yemen",
        value: "YE"
    },
    {
        label : "Zambia",
        value: "ZM"
    },
    {
        label : "Zimbabwe",
        value: "ZW"
    }
]


const dateOptions = [
    {
        value: '1',
        label: '1'
    }, {
        value: '2',
        label: '2'
    }, {
        value: '3',
        label: '3'
    },
    {
        value: '5',
        label: '5'
    },
     {
        value: '6',
        label: '6'
    }, {
        value: '7',
        label: '7'
    }, {
        value: '8',
        label: '8'
    },
    {
        value: '9',
        label: '9'
    },
    {
        value: '10',
        label: '10'
    },
    {
        value: '11',
        label: '11'
    },
    {
        value: '12',
        label: '12'
    }
  ];
  const yearOptions = [
    {
        value: '2019',
        label: '2019'
    }, {
        value: '2020',
        label: '2020'
    }, {
        value: '2021',
        label: '2021'
    },
    {
        value: '2022',
        label: '2022'
    },
     {
        value: '2023',
        label: '2023'
    }, {
        value: '2024',
        label: '2024'
    }, {
        value: '2025',
        label: '2025'
    },
    {
        value: '2026',
        label: '2026'
    },
    {
        value: '2027',
        label: '2027'
    },
    {
        value: '2028',
        label: '2028'
    },
    {
        value: '2029',
        label: '2029'
    },
    {
        value: '2030',
        label: '2030'
    }
  ];
class AddPaymentMethod extends Component {
    state = {
        selectedCountryOption: null,
        selectedDateOption: null,
        selectedYearOption: null,
        options: country,
        year:yearOptions,
        date:dateOptions,
      };
    render() {
        return (
            <div>
            {/* <MDBSelect className="select-items" label="Example label">
                <MDBSelectInput selected="Choose your country" />
                <MDBSelectOptions className="select-items-list">
                    <MDBSelectOption className="select-list-item" value="1">USA</MDBSelectOption>
                <MDBSelectOption className="select-list-item" value="2">Germany</MDBSelectOption>
                <MDBSelectOption className="select-list-item" value="3">France</MDBSelectOption>
                <MDBSelectOption className="select-list-item" value="4">Poland</MDBSelectOption>
                <MDBSelectOption className="select-list-item" value="5">Japan</MDBSelectOption>
                </MDBSelectOptions>
            </MDBSelect> */}
                    {/* <!-- [Structure] Ticket created modal START --> */}
    <div className="ui modal ticket-posted-modal" id="ticket-posted-modal">
        <div className="content">
            <div className="ticket-posted-modal__title">
                Great, your Ticket was posted!
            </div>

            <div className="ticket-posted-modal__subtitle">
                Wait till Experts start to approach on your Ticket
                You'll receive notifications
            </div>
            <button type="button" className="button js-modal-close"
                >
                Got it
            </button>
        </div>
    </div>
    {/* <!-- [Structure] Ticket created modal START --> */}

    {/* <!-- [Structure] Chose payment method modal START --> */}
    <div className="ui modal payment-method-add-modal" id="payment-method-add-modal">
        <div className="content">
            <div className="payment-method-add-modal__title">
                Add Payment Method
            </div>

            <div className="payment-method-add-modal__item">
                <img src={paypal} alt="paypal" className="payment-method-add-modal__img"/>
                <span className="payment-method-add-modal__name">Paypal</span>
                <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                    data-modal-id="payment-method-paypal-modal">
                    Select
                </button>
            </div>
            <div className="payment-method-add-modal__item">
                <img src={visa} alt="mastercard / visa" className="payment-method-add-modal__img"/>
                <span className="payment-method-add-modal__name">Credit or Debit Card</span>
                <button className="payment-method-add-modal__select-cta button button--white max-90 js-show-modal"
                    data-modal-id="payment-method-card-1-modal">
                    Select
                </button>
            </div>
            <button type="button"
                className=" button--no-style js-modal-close payment-method-add-modal__close-button"></button>
        </div>
    </div>
    {/* <!-- [Structure] Chose payment method modal START --> */}

    {/* <!-- [Structure] Paypal modal START --> */}
    <div className="ui modal payment-method-paypal-modal" id="payment-method-paypal-modal">
        <div className="content">
            <div className="payment-method-add-modal__title">
                Pay with Pay-Pal
            </div>

            <div className="payment-method-add-modal__item">
                <img src={paypal} alt="paypal" className="payment-method-add-modal__img"/>
                <span className="payment-method-add-modal__name">Paypal</span>
                <button className="payment-method-add-modal__select-cta button button--white max-90">Pay</button>
            </div>
            <button type="button"
                className=" button--no-style js-modal-close payment-method-add-modal__close-button"></button>
        </div>
    </div>
    {/* <!-- [Structure] Paypal modal END --> */}

    {/* <!-- [Structure] Card modal START --> */}
    <div className="ui modal payment-method-paypal-modal" id="payment-method-card-1-modal">
        <div className="content">
            <div className="payment-method-add-modal__title">
                Card Information
            </div>

            <div className="payment-method-add-modal__item payment-method-add-modal__item--only">
                <img src={visa} alt="paypal" className="payment-method-add-modal__img"/>
                <span className="payment-method-add-modal__name">Credit or Debit Card</span>
            </div>


            <h2 className="post-ticket__input-title">Card Number</h2>
            <label className="input__wrapper  mb-4">
                <input type="text" className="input" placeholder="0000 0000 0000 0000" name="card-number" required/>
                <p className="input__notification">Proffesion title is required</p>
                <span className="input__wrapper--cc d-none d-md-block"></span>
            </label>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">First Name</h2>
                    <label className="input__wrapper  mb-4">
                        <input type="text" className="input" placeholder="First Name" name="first-name" required/>
                        <p className="input__notification">First Name is required</p>
                    </label>
                </div>

                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">Last Name</h2>
                    <label className="input__wrapper  mb-4">
                        <input type="text" className="input" placeholder="Last Name" name="last-name" required/>
                        <p className="input__notification">Last Name is required</p>
                    </label>
                </div>

            </div>

            <div className="row">
            <div className="col-6 col-md-3">
                        <h2 className="post-ticket__input-title">
                            Expiry Date
                        </h2>
                        <label className="input__wrapper  mb-4 mb-md-5">
                            <div className="dropdown">
                            <select name="fromyear" id="startyear"   onChange={this.GetYear} className="ui selection dropdown search" required>
                                <option selected={true} disabled={true}>MM</option>
                                {this.state.date.map((value, index) => (
                                <option value={value.value}>{value.label}</option>
                                ))}                                         
                            </select>
                            </div>
                            <p className="input__notification">Expiry Date is required</p>
                        </label>
                    </div>
                    <div className="col-6 col-md-3">
                        <h2 className="post-ticket__input-title">
                            Expiry Date
                        </h2>
                        <label className="input__wrapper  mb-4 mb-md-5">
                            <div className="dropdown">
                            <select name="fromyear" id="startyear"   onChange={this.GetYear} className="ui selection dropdown search" required>
                                <option selected={true} disabled={true}>YYYY</option>
                                {this.state.year.map((value, index) => (
                                <option value={value.value}>{value.label}</option>
                                ))}                                         
                            </select>
                            </div>
                            <p className="input__notification">Expiry Date is required</p>
                        </label>
                    </div>
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">CVV Code</h2>
                    <label className="input__wrapper  mb-4">
                        <input type="text" className="input" placeholder="123" name="cvv-number" required/>
                        <p className="input__notification">CVV Code is required</p>
                    </label>
                </div>
            </div>

            <div className="payment-buttons">
                <button type="button" className="button max-160 js-show-modal" data-modal-id="payment-method-card-2-modal">
                    Next
                </button>

                <button className="button button--no-style link js-show-modal" data-modal-id="payment-method-add-modal">
                    Return
                </button>
            </div>

            <button type="button"
                className="button--no-style js-modal-close payment-method-add-modal__close-button"></button>
        </div>
    </div>
    {/* // <!-- [Structure] Card modal END --> */}

    {/* // <!-- [Structure] Card modal 2 START --> */}
    <div className="ui modal payment-method-paypal-modal" id="payment-method-card-2-modal">
        <div className="content">

            <div className="payment-method-add-modal__title mb-5">
                Payment Address
            </div>


            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">
                        Country
                    </h2>
                    <label className="input__wrapper  mb-4">
                        <div className="dropdown" tabIndex={0}>
                        <select name="fromyear" id="startyear"   onChange={this.GetYear} className="ui selection dropdown search" required>
                        <option selected={true} disabled={true}>Please select..</option>
                        {this.state.options.map((value, index) => (
                        <option value={value.value}>{value.label}</option>
                        ))}                                         
                        </select>
                        </div>
                        <p className="input__notification">Expiry Date is required</p>
                    </label>
                </div>
            </div>


            <h2 className="post-ticket__input-title">Address</h2>
            <label className="input__wrapper  mb-2">
                <input type="text" className="input" placeholder="" name="address-1" required/>
                <p className="input__notification">Address is required</p>
            </label>

            <label className="input__wrapper  mb-4">
                <input type="text" className="input" placeholder="" name="address-2"/>
            </label>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">City</h2>
                    <label className="input__wrapper  mb-4">
                        <input type="text" className="input" placeholder="" name="city" required/>
                        <p className="input__notification">City is required</p>
                    </label>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">State</h2>
                    <label className="input__wrapper  mb-4">
                        <input type="text" className="input" placeholder="" name="state" required/>
                        <p className="input__notification">State is required</p>
                    </label>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="post-ticket__input-title">ZIP Code</h2>
                    <label className="input__wrapper  mb-5">
                        <input type="text" className="input" placeholder="" name="zip-number" required/>
                        <p className="input__notification">ZIP Code is required</p>
                    </label>
                </div>
            </div>

            <div className="payment-buttons">
                <button type="button" className="button max-160 js-show-modal" data-modal-id="payment-method-added">
                    Next
                </button>

                <button className="button button--no-style link js-show-modal" data-modal-id="payment-method-card-1-modal">
                    Return
                </button>
            </div>

            <button type="button"
                className="button--no-style js-modal-close payment-method-add-modal__close-button"></button>
        </div>
    </div>
    {/* <!-- [Structure] Card modal 2 END --> */}

    {/* <!-- [Structure] Payment method was added modal START --> */}
    <div className="ui modal ticket-posted-modal" id="payment-method-added">
        <div className="content">
            <div className="ticket-posted-modal__title">
                Greate, you've added a Payment Method!
            </div>

            <div className="ticket-posted-modal__subtitle">
                Now you're able to Post Tickets, Start Contracts and pay for the work done by Experts
            </div>
            <button type="button" className="button js-modal-close">
                Got it
            </button>
        </div>
    </div>
     {/* <!-- [Structure] Payment method was added modal START END--> */}
        {/* <!-- [Structure] Chose payment method modal START --> */}
        <div className="ui modal decline-expert-modal" id="decline-expert-modal">
            <div className="content">
                <div className="decline-expert-modal__title">
                    Decline expert
                </div>
                <p className="decline-expert-modal__subtitle">Are you sure you want to decline this Expert?</p>
                <label className="checkbox__wrapper checkbox__wrapper--2">
                    <input type="checkbox" className="checkbox checkbox--2"/>
                    <div className="checkbox__label">
                        Don't show this again
                    </div>
                </label>
                <input type="hidden" id="expuser"/>
                <input type="hidden" id="tkid"/>
                <div className="decline-expert-modal__buttons">
                    {/*
                    <!-- popup emulation button --> */}
                    <button type="button" className="button button--post js-modal-close"
                        >Archive</button>
                    {/*
                    <!-- popup emulation button --> */}

                    <button type="button" className="button button--no-style post-ticket__discard js-modal-close"
                       >Decline</button>
                </div>
                <button type="button"
                    className=" button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/* {/*<!-- [Structure] Chose payment method modal START --> */}
        {/* <!---EndModel---> */} 




        {/* <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket_payment">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    Expert
                </div>

                <div className="ticket-posted-modal__subtitle" id="uni">

                </div>
                <button type="button" className="button js-modal-close">
                    OK
                </button>
            </div>
        </div>
        {/* <!-- [Structure] Ticket created modal START --> */}


        {/* <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-posted-modal">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    Great, Your request has been sent to expert.
                </div>

                <div className="ticket-posted-modal__subtitle">
                    Wait till Experts start to approach on your Ticket
                    You'll receive notifications
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>
        {/* <!-- [Structure] Ticket created modal START --> */}


        {/* <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-posted-modal-error">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    Sorry, try again later.
                </div>

                <div className="ticket-posted-modal__subtitle">
                    Or contact with support team
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>
        {/* <!-- [Structure] Ticket created modal START --> */}





        {/* <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-request">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    A new expert's request has been received.
                </div>

                <div className="ticket-posted-modal__subtitle">
                    Please click it and you will see latest request.
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>


        {/*
        <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-cancel">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    This Ticket has been cancelled by you successfully.
                </div>

                <div className="ticket-posted-modal__subtitle">
                    Now this ticket has been moved into Closed Tickets.
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>


         {/*<!-- [Structure] Ticket cancel confirmation modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-cancel-confirmation">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    Ticket Cancel Confirmation!
                </div>

                <div className="ticket-posted-modal__subtitle">
                    <input type="hidden" id="ticket_cancel_id"/>
                    Do you really want to cancel this ticket?<br/>
                    You will not be able to restore this ticket.
                </div>
                <div className="justify-content-between" style={{marginLeft:"115px"}}>
                    <button type="button" className="button js-show-modal" style={{display: "inline-block"}}
                        data-modal-id="ticket-cancel">Cancel</button>
                    <button type="button" className="js-modal-close button--no-style post-ticket__discard"
                        style={{display: "inline-block"}} >discard</button>
                </div>

            </div>
        </div>

        {/*
        <!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="error-ticket-cancel">
            <div className="content">
                <div className="ticket-posted-modal__title">
                    Your ticket is not cancelled.
                </div>

                <div className="ticket-posted-modal__subtitle">
                    Please try again later or contact with Contact Our Support Team.
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>


         {/*<!-- [Structure] Ticket created modal START --> */}
        <div className="ui modal ticket-posted-modal" id="ticket-posted-modal-already-sent">
            <div className="content">
                <div className="ticket-posted-modal__title h-subject">
                </div>

                <div className="ticket-posted-modal__subtitle h-text">
                </div>
                <button type="button" className="button js-modal-close">
                    Got it
                </button>
            </div>
        </div>
    {/* <!-- [Structure] Chose get paid modal START -->  */}

<div className="ui modal ticket-posted-modal" id="get-paid-now">
<div className="content">
            <div className="ticket-posted-modal__title ticket-posted-modal__title--wider">
                In order to get paid you need to add a payment method
            </div>

            <div className="ticket-posted-modal__subtitle">
                Your earned funds will be on BTE website
                until you add a Payment method
                </div>
            <button type="button" className="button js-show-modal" data-modal-id="payment-method-add-modal">
                Add payment method
            </button>
        </div>
        </div>
        {/* <!-- [Structure] Chose payment method modal START --> */}
        <div className="ui modal decline-expert-modal" id="decline-expert-modal">
            <div className="content">
                <div className="decline-expert-modal__title">
                    Decline expert
                </div>
                <p className="decline-expert-modal__subtitle">Are you sure you want to decline this Expert?</p>
                <label className="checkbox__wrapper checkbox__wrapper--2">
                    <input type="checkbox" className="checkbox checkbox--2"/>
                    <div className="checkbox__label">
                        Don't show this again
                    </div>
                </label>
                <input type="hidden" id="expuser"/>
                <input type="hidden" id="tkid"/>
                <div className="decline-expert-modal__buttons">
                    {/*
                    <!-- popup emulation button --> */}
                    <button type="button" className="button button--post js-modal-close"
                        >Archive</button>
                    {/*
                    <!-- popup emulation button --> */}

                    <button type="button" className="button button--no-style post-ticket__discard js-modal-close"
                       >Decline</button>
                </div>
                <button type="button"
                    className="button--no-style js-modal-close payment-method-add-modal__close-button"></button>
            </div>
        </div>
        {/* {/*<!-- [Structure] Chose payment method modal START --> */}
        {/* <!---EndModel---> */} 
            </div>
        );
    }
}

export default AddPaymentMethod;