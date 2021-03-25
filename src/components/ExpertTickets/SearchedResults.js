import React, { Component } from 'react';
import archive from "../app_assets/img/archive-blue.svg";
import archiveWhite from "../app_assets/img/archive-white.svg";
import message from "../app_assets/img/message-blue.svg";
import messageWhite from "../app_assets/img/message-white.svg";
import location from "../app_assets/img/location.svg";

class SearchedResults extends Component {
    render() {
        return (
            <div>
     <main className="main-content main-content--dashboard my-expert-search">
  <div className="container container-fluid-small">
    <div id="search">
      <div className="container container-fluid-small">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 order-0 search-box-wrapper" style={{position:"relative"}}>
            <form action="#" method="post" id="search-box" className="">
              <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" /> <label
                className="input__wrapper input__wrapper--search">
                <input type="text" className="input input-seach" placeholder="Search Ticket" name="search_ticket"
                  value=" Welcome Ticket for Portal Awareness " />
                <button type="submit" className="button button--no-style">
                  <i className="search-icon-blue"></i>
                </button>
              </label>
            </form>
            <button type="button" className="button--white rounded-small post-a-ticket-cta filters-cta max-160">
              <span className="d-none d-md-inline">Filters</span>
            </button>
          </div>


          <div className="col-12">
            <div className="tile tile--2 tile--filters">
              <div className="ticket-header">
                    <h3 className="filters-header">
                      1 results
                    </h3>
              </div>
             

              <div className="filters-wrapper" style={{zIndex: 99, position:"relative"}}>
                <form method="post" action="#"
                  className="filters-wrapper-content">
                  <input type="hidden" name="_token" value="orUewQJWMEb8XMn8aQwwdGhgMfh7MET3NGGkpOSC" />
                  <div className="filter-section-1 order-0 order-md-0">
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Tickets
                      </h3>

                      <label className="checkbox__wrapper checkbox__wrapper--2">
                        <input type="checkbox" className="checkbox checkbox--2" name="all_tickets" id="all_tickets" />
                        <div className="checkbox__label">
                          All
                        </div>
                      </label>

                      <label className="checkbox__wrapper checkbox__wrapper--2 ">
                        <input type="checkbox" className="checkbox checkbox--2" name="direct_assigned" id="direct_assigned" />
                        <div className="checkbox__label">
                          Directly assigned to me
                        </div>
                      </label>

                    </div>
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Clients
                      </h3>

                      <label className="checkbox__wrapper checkbox__wrapper--2 ">
                        <input type="checkbox" className="checkbox checkbox--2" name="all_clients" id="all_clients" />
                        <div className="checkbox__label">
                          All
                        </div>
                      </label>

                      <label className="checkbox__wrapper checkbox__wrapper--2 ">
                        <input type="checkbox" className="checkbox checkbox--2" name="previous_client" id="previous_client" />
                        <div className="checkbox__label">
                          Previous clients
                        </div>
                      </label>

                    </div>
                  </div>

                  <div className="filter-section-2 order-0 order-md-0">
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Select pool (select max 3)
                      </h3>
                      <label className="input__wrapper  mb-4">
                        <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="category_id[]"
                            id="category_id"  multiple>
                            <option value="" selected disabled>Please select..</option>
                            <option value="1">Cloud Solutions</option>
                            <option value="34">Database</option>
                            <option value="35">Security</option>
                            <option value="36">Cloud Server</option>
                            <option value="38">Operating System</option>
                            <option value="39">Development</option>
                          </select><i className="dropdown icon"></i>
                          <div className="default text">Please select..</div>
                          <div className="menu" tabIndex={-1}>
                            <div className="item" data-value="1">Cloud Solutions</div>
                            <div className="item" data-value="34">Database</div>
                            <div className="item" data-value="35">Security</div>
                            <div className="item" data-value="36">Cloud Server</div>
                            <div className="item" data-value="38">Operating System</div>
                            <div className="item" data-value="39">Development</div>
                          </div>
                        </div>
                      </label>


                    </div>
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Languages
                      </h3>
                      <label className="input__wrapper  mb-4">
                        <div className="ui selection dropdown multiple max-3" tabIndex={0}><select name="lang_select[]"
                            id="lang-select" multiple>
                            <option value="" selected disabled>Please select..</option>
                            <option value="1">English</option>
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

                          </select><i className="dropdown icon"></i>
                          <div className="default text">Please select..</div>
                          <div className="menu" tabIndex={-1}>
                            <div className="item" data-value="1">English</div>
                            <div className="item" data-value="2">Afar</div>
                            <div className="item" data-value="3">Abkhazian</div>
                            <div className="item" data-value="4">Afrikaans</div>
                            <div className="item" data-value="5">Amharic</div>
                            <div className="item" data-value="6">Arabic</div>
                            <div className="item" data-value="7">Assamese</div>
                            <div className="item" data-value="8">Aymara</div>
                            <div className="item" data-value="9">Azerbaijani</div>
                            <div className="item" data-value="10">Bashkir</div>
                            <div className="item" data-value="11">Belarusian</div>
                            <div className="item" data-value="12">Bulgarian</div>
                            <div className="item" data-value="13">Bihari</div>
                            <div className="item" data-value="14">Bislama</div>
                            <div className="item" data-value="15">Bengali/Bangla</div>
                            <div className="item" data-value="16">Tibetan</div>
                            <div className="item" data-value="17">Breton</div>
                            <div className="item" data-value="18">Catalan</div>
                            <div className="item" data-value="19">Corsican</div>
                            <div className="item" data-value="20">Czech</div>
                            <div className="item" data-value="21">Welsh</div>
                            <div className="item" data-value="22">Danish</div>
                            <div className="item" data-value="23">German</div>
                            <div className="item" data-value="24">Bhutani</div>
                            <div className="item" data-value="25">Greek</div>
                            <div className="item" data-value="26">Esperanto</div>
                            <div className="item" data-value="27">Spanish</div>
                            <div className="item" data-value="28">Estonian</div>
                            <div className="item" data-value="29">Basque</div>
                            <div className="item" data-value="30">Persian</div>
                            <div className="item" data-value="31">Finnish</div>
                            <div className="item" data-value="32">Fiji</div>
                            <div className="item" data-value="33">Faeroese</div>
                            <div className="item" data-value="34">French</div>
                            <div className="item" data-value="35">Frisian</div>
                            <div className="item" data-value="36">Irish</div>
                            <div className="item" data-value="37">Scots/Gaelic</div>
                            <div className="item" data-value="38">Galician</div>
                            <div className="item" data-value="39">Guarani</div>
                            <div className="item" data-value="40">Gujarati</div>
                            <div className="item" data-value="41">Hausa</div>
                            <div className="item" data-value="42">Hindi</div>
                            <div className="item" data-value="43">Croatian</div>
                            <div className="item" data-value="44">Hungarian</div>
                            <div className="item" data-value="45">Armenian</div>
                            <div className="item" data-value="46">Interlingua</div>
                            <div className="item" data-value="47">Interlingue</div>
                            <div className="item" data-value="48">Inupiak</div>
                            <div className="item" data-value="49">Indonesian</div>
                            <div className="item" data-value="50">Icelandic</div>
                            <div className="item" data-value="51">Italian</div>
                            <div className="item" data-value="52">Hebrew</div>
                            <div className="item" data-value="53">Japanese</div>
                            <div className="item" data-value="54">Yiddish</div>
                            <div className="item" data-value="55">Javanese</div>
                            <div className="item" data-value="56">Georgian</div>
                            <div className="item" data-value="57">Kazakh</div>
                            <div className="item" data-value="58">Greenlandic</div>
                            <div className="item" data-value="59">Cambodian</div>
                            <div className="item" data-value="60">Kannada</div>
                            <div className="item" data-value="61">Korean</div>
                            <div className="item" data-value="62">Kashmiri</div>
                            <div className="item" data-value="63">Kurdish</div>
                            <div className="item" data-value="64">Kirghiz</div>
                            <div className="item" data-value="65">Latin</div>
                            <div className="item" data-value="66">Lingala</div>
                            <div className="item" data-value="67">Laothian</div>
                            <div className="item" data-value="68">Lithuanian</div>
                            <div className="item" data-value="69">Latvian/Lettish</div>
                            <div className="item" data-value="70">Malagasy</div>
                            <div className="item" data-value="71">Maori</div>
                            <div className="item" data-value="72">Macedonian</div>
                            <div className="item" data-value="73">Malayalam</div>
                            <div className="item" data-value="74">Mongolian</div>
                            <div className="item" data-value="75">Moldavian</div>
                            <div className="item" data-value="76">Marathi</div>
                            <div className="item" data-value="77">Malay</div>
                            <div className="item" data-value="78">Maltese</div>
                            <div className="item" data-value="79">Burmese</div>
                            <div className="item" data-value="80">Nauru</div>
                            <div className="item" data-value="81">Nepali</div>
                            <div className="item" data-value="82">Dutch</div>
                            <div className="item" data-value="83">Norwegian</div>
                            <div className="item" data-value="84">Occitan</div>
                            <div className="item" data-value="85">(Afan)/Oromoor/Oriya</div>
                            <div className="item" data-value="86">Punjabi</div>
                            <div className="item" data-value="87">Polish</div>
                            <div className="item" data-value="88">Pashto/Pushto</div>
                            <div className="item" data-value="89">Portuguese</div>
                            <div className="item" data-value="90">Quechua</div>
                            <div className="item" data-value="91">Rhaeto-Romance</div>
                            <div className="item" data-value="92">Kirundi</div>
                            <div className="item" data-value="93">Romanian</div>
                            <div className="item" data-value="94">Russian</div>
                            <div className="item" data-value="95">Kinyarwanda</div>
                            <div className="item" data-value="96">Sanskrit</div>
                            <div className="item" data-value="97">Sindhi</div>
                            <div className="item" data-value="98">Sangro</div>
                            <div className="item" data-value="99">Serbo-Croatian</div>
                            <div className="item" data-value="100">Singhalese</div>
                            <div className="item" data-value="101">Slovak</div>
                            <div className="item" data-value="102">Slovenian</div>
                            <div className="item" data-value="103">Samoan</div>
                            <div className="item" data-value="104">Shona</div>
                            <div className="item" data-value="105">Somali</div>
                            <div className="item" data-value="106">Albanian</div>
                            <div className="item" data-value="107">Serbian</div>
                            <div className="item" data-value="108">Siswati</div>
                            <div className="item" data-value="109">Sesotho</div>
                            <div className="item" data-value="110">Sundanese</div>
                            <div className="item" data-value="111">Swedish</div>
                            <div className="item" data-value="112">Swahili</div>
                            <div className="item" data-value="113">Tamil</div>
                            <div className="item" data-value="114">Telugu</div>
                            <div className="item" data-value="115">Tajik</div>
                            <div className="item" data-value="116">Thai</div>
                            <div className="item" data-value="117">Tigrinya</div>
                            <div className="item" data-value="118">Turkmen</div>
                            <div className="item" data-value="119">Tagalog</div>
                            <div className="item" data-value="120">Setswana</div>
                            <div className="item" data-value="121">Tonga</div>
                            <div className="item" data-value="122">Turkish</div>
                            <div className="item" data-value="123">Tsonga</div>
                            <div className="item" data-value="124">Tatar</div>
                            <div className="item" data-value="125">Twi</div>
                            <div className="item" data-value="126">Ukrainian</div>
                            <div className="item" data-value="127">Urdu</div>
                            <div className="item" data-value="128">Uzbek</div>
                            <div className="item" data-value="129">Vietnamese</div>
                            <div className="item" data-value="130">Volapuk</div>
                            <div className="item" data-value="131">Wolof</div>
                            <div className="item" data-value="132">Xhosa</div>
                            <div className="item" data-value="133">Yoruba</div>
                            <div className="item" data-value="134">Chinese</div>
                            <div className="item" data-value="135">Zulu</div>
                          </div>
                        </div>
                        <p className="input__notification">Category is required</p>
                      </label>


                    </div>

                  </div>


                  <div className="filter-section-1 filter-section-3 order-1 order-md-1 order-lg-0">
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Skills (type max 10)
                      </h3>
                      <label className="input__wrapper  mb-4 mb-md-5 ">
                        <label htmlFor="js-textarea-id-1" data-for="js-textarea-id-1" className="visually-hidden"></label>
                        <div className="textarea input height js-textarea">
                          <input type="text" id="js-textarea-id-1" name="js-textarea-id-1" />
                        </div>
                        <textarea className="input height visually-hidden"
                          placeholder="Text example describing what a web developer does">                                    </textarea>
                        <p className="input__notification">Description is required</p>
                      </label>
                    </div>
                  </div>


                  <div className="filter-section-2 filter-section-4 order-0 order-md-0">
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        Country
                      </h3>
                      <label className="input__wrapper  mb-4">
                        <div className="ui selection dropdown" tabIndex={0}><select name="user_country" id="select-country"
                            >
                            option value="" selected disabled&gt;Please select..
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Bar...</option>
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
                            <option value="BA">Bosnia and Herz...</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian ...</option>
                            <option value="BN">Brunei Darussal...</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African...</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Islan...</option>
                            <option value="CC">Cocos (Keeling)...</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, the Demo...</option>
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
                            <option value="DO">Dominican Repub...</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guin...</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Island...</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesi...</option>
                            <option value="TF">French Southern...</option>
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
                            <option value="HM">Heard Island an...</option>
                            <option value="VA">Holy See (Vatic...</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="country_id">Indonesia</option>
                            <option value="IR">Iran, Islamic R...</option>
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
                            <option value="KP">Korea, Democrat...</option>
                            <option value="KR">Korea, Republic...</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's De...</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jam...</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">Macedonia, the ...</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Island...</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Fed...</option>
                            <option value="MD">Moldova, Republ...</option>
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
                            <option value="AN">Netherlands Ant...</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Marian...</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Ter...</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guine...</option>
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
                            <option value="RU">Russian Federat...</option>
                            <option value="RW">Rwanda</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and...</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="PM">Saint Pierre an...</option>
                            <option value="VC">Saint Vincent a...</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Pr...</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="CS">Serbia and Mont...</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">South Georgia a...</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Ja...</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Rep...</option>
                            <option value="TW">Taiwan, Provinc...</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, Unite...</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trincountry_ida...</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caico...</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emi...</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">United States M...</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands,...</option>
                            <option value="VI">Virgin Islands,...</option>
                            <option value="WF">Wallis and Futu...</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select><i className="dropdown icon"></i>
                          <div className="text">Afghanistan</div>
                          <div className="menu" tabIndex={-1}>
                            <div className="item active selected" data-value="AF">Afghanistan</div>
                            <div className="item" data-value="AL">Albania</div>
                            <div className="item" data-value="DZ">Algeria</div>
                            <div className="item" data-value="AS">American Samoa</div>
                            <div className="item" data-value="AD">Andorra</div>
                            <div className="item" data-value="AO">Angola</div>
                            <div className="item" data-value="AI">Anguilla</div>
                            <div className="item" data-value="AQ">Antarctica</div>
                            <div className="item" data-value="AG">Antigua and Bar...</div>
                            <div className="item" data-value="AR">Argentina</div>
                            <div className="item" data-value="AM">Armenia</div>
                            <div className="item" data-value="AW">Aruba</div>
                            <div className="item" data-value="AU">Australia</div>
                            <div className="item" data-value="AT">Austria</div>
                            <div className="item" data-value="AZ">Azerbaijan</div>
                            <div className="item" data-value="BS">Bahamas</div>
                            <div className="item" data-value="BH">Bahrain</div>
                            <div className="item" data-value="BD">Bangladesh</div>
                            <div className="item" data-value="BB">Barbados</div>
                            <div className="item" data-value="BY">Belarus</div>
                            <div className="item" data-value="BE">Belgium</div>
                            <div className="item" data-value="BZ">Belize</div>
                            <div className="item" data-value="BJ">Benin</div>
                            <div className="item" data-value="BM">Bermuda</div>
                            <div className="item" data-value="BT">Bhutan</div>
                            <div className="item" data-value="BO">Bolivia</div>
                            <div className="item" data-value="BA">Bosnia and Herz...</div>
                            <div className="item" data-value="BW">Botswana</div>
                            <div className="item" data-value="BV">Bouvet Island</div>
                            <div className="item" data-value="BR">Brazil</div>
                            <div className="item" data-value="IO">British Indian ...</div>
                            <div className="item" data-value="BN">Brunei Darussal...</div>
                            <div className="item" data-value="BG">Bulgaria</div>
                            <div className="item" data-value="BF">Burkina Faso</div>
                            <div className="item" data-value="BI">Burundi</div>
                            <div className="item" data-value="KH">Cambodia</div>
                            <div className="item" data-value="CM">Cameroon</div>
                            <div className="item" data-value="CA">Canada</div>
                            <div className="item" data-value="CV">Cape Verde</div>
                            <div className="item" data-value="KY">Cayman Islands</div>
                            <div className="item" data-value="CF">Central African...</div>
                            <div className="item" data-value="TD">Chad</div>
                            <div className="item" data-value="CL">Chile</div>
                            <div className="item" data-value="CN">China</div>
                            <div className="item" data-value="CX">Christmas Islan...</div>
                            <div className="item" data-value="CC">Cocos (Keeling)...</div>
                            <div className="item" data-value="CO">Colombia</div>
                            <div className="item" data-value="KM">Comoros</div>
                            <div className="item" data-value="CG">Congo</div>
                            <div className="item" data-value="CD">Congo, the Demo...</div>
                            <div className="item" data-value="CK">Cook Islands</div>
                            <div className="item" data-value="CR">Costa Rica</div>
                            <div className="item" data-value="CI">Cote D'Ivoire</div>
                            <div className="item" data-value="HR">Croatia</div>
                            <div className="item" data-value="CU">Cuba</div>
                            <div className="item" data-value="CY">Cyprus</div>
                            <div className="item" data-value="CZ">Czech Republic</div>
                            <div className="item" data-value="DK">Denmark</div>
                            <div className="item" data-value="DJ">Djibouti</div>
                            <div className="item" data-value="DM">Dominica</div>
                            <div className="item" data-value="DO">Dominican Repub...</div>
                            <div className="item" data-value="EC">Ecuador</div>
                            <div className="item" data-value="EG">Egypt</div>
                            <div className="item" data-value="SV">El Salvador</div>
                            <div className="item" data-value="GQ">Equatorial Guin...</div>
                            <div className="item" data-value="ER">Eritrea</div>
                            <div className="item" data-value="EE">Estonia</div>
                            <div className="item" data-value="ET">Ethiopia</div>
                            <div className="item" data-value="FK">Falkland Island...</div>
                            <div className="item" data-value="FO">Faroe Islands</div>
                            <div className="item" data-value="FJ">Fiji</div>
                            <div className="item" data-value="FI">Finland</div>
                            <div className="item" data-value="FR">France</div>
                            <div className="item" data-value="GF">French Guiana</div>
                            <div className="item" data-value="PF">French Polynesi...</div>
                            <div className="item" data-value="TF">French Southern...</div>
                            <div className="item" data-value="GA">Gabon</div>
                            <div className="item" data-value="GM">Gambia</div>
                            <div className="item" data-value="GE">Georgia</div>
                            <div className="item" data-value="DE">Germany</div>
                            <div className="item" data-value="GH">Ghana</div>
                            <div className="item" data-value="GI">Gibraltar</div>
                            <div className="item" data-value="GR">Greece</div>
                            <div className="item" data-value="GL">Greenland</div>
                            <div className="item" data-value="GD">Grenada</div>
                            <div className="item" data-value="GP">Guadeloupe</div>
                            <div className="item" data-value="GU">Guam</div>
                            <div className="item" data-value="GT">Guatemala</div>
                            <div className="item" data-value="GN">Guinea</div>
                            <div className="item" data-value="GW">Guinea-Bissau</div>
                            <div className="item" data-value="GY">Guyana</div>
                            <div className="item" data-value="HT">Haiti</div>
                            <div className="item" data-value="HM">Heard Island an...</div>
                            <div className="item" data-value="VA">Holy See (Vatic...</div>
                            <div className="item" data-value="HN">Honduras</div>
                            <div className="item" data-value="HK">Hong Kong</div>
                            <div className="item" data-value="HU">Hungary</div>
                            <div className="item" data-value="IS">Iceland</div>
                            <div className="item" data-value="IN">India</div>
                            <div className="item" data-value="country_id">Indonesia</div>
                            <div className="item" data-value="IR">Iran, Islamic R...</div>
                            <div className="item" data-value="IQ">Iraq</div>
                            <div className="item" data-value="IE">Ireland</div>
                            <div className="item" data-value="IL">Israel</div>
                            <div className="item" data-value="IT">Italy</div>
                            <div className="item" data-value="JM">Jamaica</div>
                            <div className="item" data-value="JP">Japan</div>
                            <div className="item" data-value="JO">Jordan</div>
                            <div className="item" data-value="KZ">Kazakhstan</div>
                            <div className="item" data-value="KE">Kenya</div>
                            <div className="item" data-value="KI">Kiribati</div>
                            <div className="item" data-value="KP">Korea, Democrat...</div>
                            <div className="item" data-value="KR">Korea, Republic...</div>
                            <div className="item" data-value="KW">Kuwait</div>
                            <div className="item" data-value="KG">Kyrgyzstan</div>
                            <div className="item" data-value="LA">Lao People's De...</div>
                            <div className="item" data-value="LV">Latvia</div>
                            <div className="item" data-value="LB">Lebanon</div>
                            <div className="item" data-value="LS">Lesotho</div>
                            <div className="item" data-value="LR">Liberia</div>
                            <div className="item" data-value="LY">Libyan Arab Jam...</div>
                            <div className="item" data-value="LI">Liechtenstein</div>
                            <div className="item" data-value="LT">Lithuania</div>
                            <div className="item" data-value="LU">Luxembourg</div>
                            <div className="item" data-value="MO">Macao</div>
                            <div className="item" data-value="MK">Macedonia, the ...</div>
                            <div className="item" data-value="MG">Madagascar</div>
                            <div className="item" data-value="MW">Malawi</div>
                            <div className="item" data-value="MY">Malaysia</div>
                            <div className="item" data-value="MV">Maldives</div>
                            <div className="item" data-value="ML">Mali</div>
                            <div className="item" data-value="MT">Malta</div>
                            <div className="item" data-value="MH">Marshall Island...</div>
                            <div className="item" data-value="MQ">Martinique</div>
                            <div className="item" data-value="MR">Mauritania</div>
                            <div className="item" data-value="MU">Mauritius</div>
                            <div className="item" data-value="YT">Mayotte</div>
                            <div className="item" data-value="MX">Mexico</div>
                            <div className="item" data-value="FM">Micronesia, Fed...</div>
                            <div className="item" data-value="MD">Moldova, Republ...</div>
                            <div className="item" data-value="MC">Monaco</div>
                            <div className="item" data-value="MN">Mongolia</div>
                            <div className="item" data-value="MS">Montserrat</div>
                            <div className="item" data-value="MA">Morocco</div>
                            <div className="item" data-value="MZ">Mozambique</div>
                            <div className="item" data-value="MM">Myanmar</div>
                            <div className="item" data-value="NA">Namibia</div>
                            <div className="item" data-value="NR">Nauru</div>
                            <div className="item" data-value="NP">Nepal</div>
                            <div className="item" data-value="NL">Netherlands</div>
                            <div className="item" data-value="AN">Netherlands Ant...</div>
                            <div className="item" data-value="NC">New Caledonia</div>
                            <div className="item" data-value="NZ">New Zealand</div>
                            <div className="item" data-value="NI">Nicaragua</div>
                            <div className="item" data-value="NE">Niger</div>
                            <div className="item" data-value="NG">Nigeria</div>
                            <div className="item" data-value="NU">Niue</div>
                            <div className="item" data-value="NF">Norfolk Island</div>
                            <div className="item" data-value="MP">Northern Marian...</div>
                            <div className="item" data-value="NO">Norway</div>
                            <div className="item" data-value="OM">Oman</div>
                            <div className="item" data-value="PK">Pakistan</div>
                            <div className="item" data-value="PW">Palau</div>
                            <div className="item" data-value="PS">Palestinian Ter...</div>
                            <div className="item" data-value="PA">Panama</div>
                            <div className="item" data-value="PG">Papua New Guine...</div>
                            <div className="item" data-value="PY">Paraguay</div>
                            <div className="item" data-value="PE">Peru</div>
                            <div className="item" data-value="PH">Philippines</div>
                            <div className="item" data-value="PN">Pitcairn</div>
                            <div className="item" data-value="PL">Poland</div>
                            <div className="item" data-value="PT">Portugal</div>
                            <div className="item" data-value="PR">Puerto Rico</div>
                            <div className="item" data-value="QA">Qatar</div>
                            <div className="item" data-value="RE">Reunion</div>
                            <div className="item" data-value="RO">Romania</div>
                            <div className="item" data-value="RU">Russian Federat...</div>
                            <div className="item" data-value="RW">Rwanda</div>
                            <div className="item" data-value="SH">Saint Helena</div>
                            <div className="item" data-value="KN">Saint Kitts and...</div>
                            <div className="item" data-value="LC">Saint Lucia</div>
                            <div className="item" data-value="PM">Saint Pierre an...</div>
                            <div className="item" data-value="VC">Saint Vincent a...</div>
                            <div className="item" data-value="WS">Samoa</div>
                            <div className="item" data-value="SM">San Marino</div>
                            <div className="item" data-value="ST">Sao Tome and Pr...</div>
                            <div className="item" data-value="SA">Saudi Arabia</div>
                            <div className="item" data-value="SN">Senegal</div>
                            <div className="item" data-value="CS">Serbia and Mont...</div>
                            <div className="item" data-value="SC">Seychelles</div>
                            <div className="item" data-value="SL">Sierra Leone</div>
                            <div className="item" data-value="SG">Singapore</div>
                            <div className="item" data-value="SK">Slovakia</div>
                            <div className="item" data-value="SI">Slovenia</div>
                            <div className="item" data-value="SB">Solomon Islands</div>
                            <div className="item" data-value="SO">Somalia</div>
                            <div className="item" data-value="ZA">South Africa</div>
                            <div className="item" data-value="GS">South Georgia a...</div>
                            <div className="item" data-value="ES">Spain</div>
                            <div className="item" data-value="LK">Sri Lanka</div>
                            <div className="item" data-value="SD">Sudan</div>
                            <div className="item" data-value="SR">Suriname</div>
                            <div className="item" data-value="SJ">Svalbard and Ja...</div>
                            <div className="item" data-value="SZ">Swaziland</div>
                            <div className="item" data-value="SE">Sweden</div>
                            <div className="item" data-value="CH">Switzerland</div>
                            <div className="item" data-value="SY">Syrian Arab Rep...</div>
                            <div className="item" data-value="TW">Taiwan, Provinc...</div>
                            <div className="item" data-value="TJ">Tajikistan</div>
                            <div className="item" data-value="TZ">Tanzania, Unite...</div>
                            <div className="item" data-value="TH">Thailand</div>
                            <div className="item" data-value="TL">Timor-Leste</div>
                            <div className="item" data-value="TG">Togo</div>
                            <div className="item" data-value="TK">Tokelau</div>
                            <div className="item" data-value="TO">Tonga</div>
                            <div className="item" data-value="TT">Trincountry_ida...</div>
                            <div className="item" data-value="TN">Tunisia</div>
                            <div className="item" data-value="TR">Turkey</div>
                            <div className="item" data-value="TM">Turkmenistan</div>
                            <div className="item" data-value="TC">Turks and Caico...</div>
                            <div className="item" data-value="TV">Tuvalu</div>
                            <div className="item" data-value="UG">Uganda</div>
                            <div className="item" data-value="UA">Ukraine</div>
                            <div className="item" data-value="AE">United Arab Emi...</div>
                            <div className="item" data-value="GB">United Kingdom</div>
                            <div className="item" data-value="US">United States</div>
                            <div className="item" data-value="UM">United States M...</div>
                            <div className="item" data-value="UY">Uruguay</div>
                            <div className="item" data-value="UZ">Uzbekistan</div>
                            <div className="item" data-value="VU">Vanuatu</div>
                            <div className="item" data-value="VE">Venezuela</div>
                            <div className="item" data-value="VN">Viet Nam</div>
                            <div className="item" data-value="VG">Virgin Islands,...</div>
                            <div className="item" data-value="VI">Virgin Islands,...</div>
                            <div className="item" data-value="WF">Wallis and Futu...</div>
                            <div className="item" data-value="EH">Western Sahara</div>
                            <div className="item" data-value="YE">Yemen</div>
                            <div className="item" data-value="ZM">Zambia</div>
                            <div className="item" data-value="ZW">Zimbabwe</div>
                          </div>
                        </div>
                        <p className="input__notification">Category is required</p>
                      </label>

                    </div>
                    <div className="filters-checks">

                      <h3 className="filter__section-label">
                        City
                      </h3>
                      <label className="input__wrapper  mb-4 ">
                        <div className="ui selection dropdown" tabIndex={0}><select name="user_city" id="select-city">

                          </select><i className="dropdown icon"></i>
                          <div className="text"></div>
                          <div className="menu" tabIndex={-1}></div>
                        </div>
                        <p className="input__notification">Category is required</p>
                      </label>


                    </div>
                  </div>

                  <div className="payment-buttons width-100 order-1">
                    <button type="submit" className="button max-160">
                      Search
                    </button>

                    <button className="button button--no-style link js-search-clear">
                      Clear All
                    </button>
                  </div>
                </form>

              </div>

              <ul className="feed__list feed__list--my-experts">
                {/* <!-- list item in the feed START --> */}


                <li className="feed__list-element feed-item">
                  <div className="feed-item__header">
                    <h3 className="feed-item__title">
                      <a
                        href="#">
                        Welcome Ticket for Portal Awareness
                      </a>
                    </h3>


                    <a href="#"
                      className="expert-lineitem__action feed__cta">
                      <img src={archive} alt="archive icon"
                        className="hide-hover-mobile-only" />
                      <img src={archiveWhite} alt="archive icon" className="hover-mobile-only" />
                      <span className="d-none d-md-inline">Archive</span>
                    </a>
                    <a href="#"
                      className="expert-lineitem__action feed__cta feed__cta--bordered">
                      <img src={message} alt="archive icon"
                        className="hide-hover-mobile-only" />
                      <img src={messageWhite} alt="archive icon" className="hover-mobile-only" />
                      <span className="d-none d-md-inline">Message</span>
                    </a>
                  </div>

                  <div className="feed-item__details">
                    <div className="feed-item__posted-by d-none d-md-flex">
                      Posted by
                    </div>
                    <div className="feed-item__name">
                      Abdullah Ahmad
                    </div>
                    <div className="expert-lineitem__location">
                      <img src={location} alt="location icon" />
                      <span className="d-none d-md-inline">Australia</span>
                      <span className="d-inline d-md-none">Aus</span>
                    </div>

                    <div className="expert-lineitem__rating">
                      <div className="stars-wrapper stars-wrapper--static">
                        <label htmlFor="r1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="1" name="rating" id="r1" />

                        <label htmlFor="r2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="2" name="rating" id="r2" />

                        <label htmlFor="r3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="3" name="rating" id="r3" />

                        <label htmlFor="r4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="4" name="rating" id="r4" />

                        <label htmlFor="r5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.798" height="14.112"
                            viewBox="0 0 14.798 14.112">
                            <g id="star_with_fill" data-name="star with fill" transform="translate(0)">
                              <path id="Path_91" data-name="Path 91"
                                d="M7.749.684,9.631,5.14l4.819.414a.38.38,0,0,1,.216.665L11.011,9.386l1.1,4.711a.379.379,0,0,1-.566.411L7.4,12.01l-4.141,2.5a.38.38,0,0,1-.566-.411l1.1-4.711L.131,6.218a.38.38,0,0,1,.216-.665l4.819-.414L7.049.684a.379.379,0,0,1,.7,0Z"
                                transform="translate(0 -0.452)" fill="#388ccb"></path>
                            </g>
                          </svg>
                        </label>
                        <input type="radio" className="visually-hidden" value="5" name="rating" id="r5" checked />
                      </div>
                    </div>


                    <div className="feed-item__date-inline">

                      08 July 2020
                    </div>
                  </div>
                  <div className="feed-item__description line-2">
                    Can you please fix my Server, Can you please fix my ServerCan you please fix my ServerCan you please
                    fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan
                    you please fix my ServerCan you please fix my ServerCan you please fix my ServerCan you please fix
                    my ServerCan you please fix my Server
                  </div>
                  <a href="#">More</a>

                  <div className="feed__skills">



                    <a href="#" className="feed-item__skill"> MySQL </a>

                  </div>
                </li>
                {/* <!-- list item in the feed END --> */}
              </ul>


              <div className="experts-footer">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main> 
  </div>
        );
    }
}

export default SearchedResults;