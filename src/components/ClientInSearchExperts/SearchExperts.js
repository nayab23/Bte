import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    {
        value: '1',
        label: 'Any hour rate'
    }, {
        value: '2',
        label: '$10 or below'
    }, {
        value: '3',
        label: '$10 - $25'
    },
    {
        value: '4',
        label: '$25 - $50'
    }, {
        value: '5',
        label: '$50 or above'
    },
  ];
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
const englishLevel = [
    {
        value: '1',
        label: 'Any Level'
    }, {
        value: '2',
        label: 'Basic'
    }, {
        value: '3',
        label: 'Conversational'
    },
    {
        value: '4',
        label: 'Fluent'
    }, {
        value: '5',
        label: 'Native'
    },
  ];
  const expertStatus = [
    {
        value: '1',
        label: 'Online'
    }, {
        value: '2',
        label: 'Offline'
    }, {
        value: '3',
        label: 'Both'
    }
  ];
  const businessCategory = [
    {
        value: '1',
        label: 'Cloud solutions'
    }, {
        value: '2',
        label: 'Database'
    }, {
        value: '3',
        label: 'Security'
    },
    {
        value: '4',
        label: 'Cloud Server'
    },,
    {
        value: '5',
        label: 'Operating System'
    },
     {
        value: '6',
        label: 'Development'
    },
  ];
  const data = [
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
class SearchExperts extends Component {
    state = {
        selectedOption: null,
        selectedOption1: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
      handleChange1 = selectedOption1 => {
        this.setState({ selectedOption1 });
        console.log(`Option selected:`, selectedOption1);
      };
      handleChangeCategory = selectedCategoryOption => {
        this.setState({ selectedCategoryOption });
        console.log(`Option selected:`, selectedCategoryOption);
      };
      handleChangeSkils = selectedCategorySkills => {
        this.setState({ selectedCategorySkills });
        console.log(`Option selected:`, selectedCategorySkills);
      };
      handleChangeEnglishLevel = selectedEnglidhLevel => {
        this.setState({ selectedEnglidhLevel });
        console.log(`Option selected:`, selectedEnglidhLevel);
      };
      handleChangeStatus = selecteStatus => {
        this.setState({ selecteStatus });
        console.log(`Option selected:`, selecteStatus);
      };
    render() {
        const { selectedOption,selectedOption1,selectedCategoryOption,selectedCategorySkills,selectedEnglidhLevel,selecteStatus  } = this.state;
        return (
            <div>
                <div className="row ">
                    <div className="col-12 col-md-6 ">
                        <div className="filters-checks mt-4">
                          <h3 className="filter__section-label">Hourly rate</h3>
                          <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                isMulti
                                className="multi-select-input-style"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="filters-checks mt-4">
                          <h3 className="filter__section-label">Country</h3> 
                            <Select
                                value={selectedOption1}
                                onChange={this.handleChange1}
                                options={data}
                                isMulti
                                className="multi-select-input-style"
                            />
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6 ">
                      <div className="filters-checks">
                          <h3 className="filter__section-label"> Country</h3>
                          <label className="input__wrapper  mb-4 ">
                            <div className="ui selection fluid search dropdown">
                            <select name="user_country" id="select-country" >
                              <option value="" selected={true} disabled={true}>Please select..</option>
                              
                            </select>
                            <i className="dropdown icon"></i>
                            <input className="search" autoComplete="off" tabIndex={0} />
                              <div className="default text">Please select..</div>
                              <div className="menu" tabIndex={-1}>
                              </div>
                            </div>
                            <p className="input__notification">Country is required</p>
                          </label>
                        </div> 
                    </div> */}
                    
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-6 ">
                        <div className="filters-checks mt-4">
                          <h3 className="filter__section-label">Category</h3>
                          <Select
                                value={selectedCategoryOption}
                                onChange={this.handleChangeCategory}
                                options={businessCategory}
                                isMulti
                                className="multi-select-input-style"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="filters-checks mt-4">
                          <h3 className="filter__section-label">Skills</h3> 
                            <Select
                                value={selectedCategorySkills}
                                onChange={this.handleChangeSkils}
                                options={skills}
                                isMulti
                                className="multi-select-input-style"
                            />
                        </div>
                    </div>
                    </div><br />
                    <div className="filters-wrapper" style={{position: "relative",boxShadow:"none"}}>
                    {/* <div className="row">
                      <div className="col-12 col-md-6 search-mb-4 ">
                        <p className="input__title input__title--half">Project Wrok Done</p>
                        <label className="input__wrapper input__wrapper--half ">
                          <input type="text" className="input input-check" placeholder="Project Wrok Done" name="project-wrok-done" required />
                          <p className="input__notification">Project Wrok Done</p>
                        </label>
                      </div>
                      <div className="col-12 col-md-6 search-mb-4 ">
                        <p className="input__title input__title--half">Recent Project Wrok Done</p>
                        <label className="input__wrapper input__wrapper--half ">
                          <input type="text" className="input input-check" placeholder="Recent Project Wrok Done" name="recent-project-wrok-done" required />
                          <p className="input__notification">Recent Project Wrok Done is required</p>
                        </label>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col-12 col-md-12 search-mb-4 ">
                        <p className="input__title input__title--half">English Level </p>
                        <label className="input__wrapper input__wrapper--half ">
                          <Select
                                value={selectedEnglidhLevel}
                                onChange={this.handleChangeEnglishLevel}
                                options={englishLevel}
                                className="multi-select-input-style"
                                required
                            />
                          <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-12 search-mb-4 ">
                        <p className="input__title input__title--half">Experts Status </p>
                        <label className="input__wrapper input__wrapper--half ">
                          <Select
                                value={selecteStatus}
                                onChange={this.handleChangeStatus}
                                options={expertStatus}
                                className="multi-select-input-style"
                                required
                            />
                          <p className="input__notification">Status is required</p>
                        </label>
                      </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default SearchExperts;