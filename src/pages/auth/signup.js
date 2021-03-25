import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { main,Menu,header,nav,div,ul,li,a,label,button,img,select} from 'semantic-ui-react';
import axios from 'react';
import eye from './../../components/app_assets/img/eye.svg';
import eyeblue from './../../components/app_assets/img/eye_blue.svg';
import ReactDOM from 'react-dom';

//function SignUp() {
    class SignUp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                role:'',
              countries: [],
              cities:[],
              is_available_email:'',
              is_username_available:'',
              is_uerType_Checked:'',
              username:null,
              Accounttype:null,
              firstname:null,
              lastname:null,
              password:null,
              Repeat_password:null,
              user_country:null,
              user_city:null,
              email:null,
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          _onChange(e) {
            // set your state if needed
            // call the parent function
            this.props.onChange(
                e.target.id,
                e.target.value
            )
          }
       
        componentDidMount() {
 

            const apiUrl = 'https://api.backtoexperts.com/api/auth/countries';
            fetch(apiUrl)
              .then((response) => response.json())
              //.then((data) => console.log('This is your data', data));
              .then(data =>this.setState({countries: data}))
          }

          myChangeHandler = (event) => {
            this.setState({role: event.target.value});
          }
     setclient() {
        this.setState({is_uerType_Checked:''})
        document.getElementById("role").value ="client";
        this.setState({Accounttype:document.getElementById("role").value});
      }
      

   
       setexpert() {
        this.setState({is_uerType_Checked:''})
        document.getElementById("role").value = "expert";
        this.setState({Accounttype:document.getElementById("role").value});

      }

     

      checktype=()=>{

        const usertype = document.getElementById("role").value;
        if(usertype!==""){ 
          //  alert(1)
            this.setState({is_uerType_Checked:''})
        }
        else{
          //  alert(usertype)
           
            this.setState({is_uerType_Checked:'Please Select Account Type First'})
            console.log(this.state.is_uerType_Checked)
        }


      }

      OnCheckUsername=()=>{
        const username = document.getElementById("username").value;
        if(username!=""){
            const apiUrl = 'https://api.backtoexperts.com/api/auth/username/'+username;
            fetch(apiUrl)
              .then((response) => response.json())
             // .then((data) => console.log('This is your data', data));
              .then(data =>this.setState({is_username_available: data.message}))
        }
       
        this.checktype();
  
        }

      
      OnCheckUseremail=()=>{
        const useremail = document.getElementById("useremail").value;
        if(useremail !=""){
            const apiUrl = 'https://api.backtoexperts.com/api/auth/checkemail/'+useremail;
            fetch(apiUrl)
              .then((response) => response.json())
             // .then((data) => console.log('This is your data', data));
              .then((data)=>this.setState({is_available_email: data.message}))
               // this.setState({is_available_email: data})
        }
        
         
         
      }
      

      Changecountryval=() =>{

       var e= document.getElementById("select-country");
       const value=e.options[e.selectedIndex].value;// get selected option value
       const text=e.options[e.selectedIndex].text;
       this.setState({user_country:text})
       const apiUrl = 'https://api.backtoexperts.com/api/auth/cities/'+value;
       fetch(apiUrl)
         .then((response) => response.json())
         //.then((data) => console.log('This is your data', data));
         .then(data =>this.setState({cities: data}))
      }
      handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
      }

      handleSubmit=ev=>{
        ev.preventDefault()
        console.log(this.state)
    }
 render() {
  
    return (
        <main className="main-content" style={{marginBottom: "60px"}}>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
        <div className="tile tile--form-login">
        <form onSubmit={this.handleSubmit} className="form form--login form-validate pb-5" id="Registeruser">
        <h1 className="form__title">Select your Account type</h1>
        <div className="row row--select-type ">
        <div className="col-6">
         <button type="button" className="button js-section-toggle button--light"  id="userrole" onClick={(e) => this.setclient(e)}>
            Client
           </button>
         </div>
          <div className="col-6">
           <button type="button" className="button js-section-toggle button--light"  id="expertrole" onClick={()=>this.setexpert()} >
             Expert
            </button>
             </div>
             <input type="hidden" className="input input-check" name="Accounttype" id="role"  onChange={this.myChangeHandler}/>
                                                           
            </div>

                            <label className="input__wrapper"> 
    <p className="input__notification" style={{display:"block"}}>
    {this.state.is_uerType_Checked}
        
        </p></label>
                                <p className="input__title">User name</p>
                                <label className="input__wrapper " >
                                   

                                    <input type="text" className="input input-check" placeholder="Username" onFocus={()=>this.checktype()}  id="username" name="username"  onChange={this.handleInputChange} onBlur={()=>this.OnCheckUsername()} required/>
                                    <span className="input__icon js-caps-check hide">
                                   
                                        CAPS LOCK ON
                                    </span>
                                    <p className="input__notification">Username is required</p>
                                 <p className="input__notification" style={{display:"block"}}>
                                 {this.state.is_username_available}
                                </p> 
                                </label>

                                <div className="row">
                                    <div className="col-12 col-md-6 ">
                                        <p className="input__title input__title--half">First name</p>
                                        <label className="input__wrapper input__wrapper--half ">
                                            <input type="text" className="input input-check" placeholder="First Name" name="firstname"  onChange={this.handleInputChange} required/>
                                            <p className="input__notification">First name is required</p>
                                      </label>
                                    </div>
                                    <div className="col-12 col-md-6 ">
                                        <p className="input__title input__title--half">Last name</p>
                                        <label className="input__wrapper input__wrapper--half ">
                                            <input type="text" className="input input-check" placeholder="Last Name" name="lastname"   onChange={this.handleInputChange} required/>
                                            <p className="input__notification">Last name is required</p>
                                   </label>
                                    </div>                                
                                </div>
                                <p className="input__title">Email address</p>
                                <label className="input__wrapper ">
                                    <input type="text" className="input input-check" placeholder="Username@gmail.com" id="useremail" name="email"  onBlur={()=>this.OnCheckUseremail()}  onChange={this.handleInputChange} required/>
                                    <p className="input__notification">Email ardress is required</p>
                                                                        
                                     <p className="input__notification" style={{display:"block"}}>
                                        
                                     {this.state.is_available_email}
                                         
                                         
                                     </p> 
                                </label>

                                <div className="row">
                                    <div className="col-12 col-md-6 ">
                                        <p className="input__title input__title--half">Password</p>
                                        <label className="input__wrapper input__wrapper--half ">
                                            <input type="password" className="input" placeholder="*****" name="password"  onChange={this.handleInputChange} required/>
                                            <span className="input__icon input__icon--active input__icon--interactive js-toggle-password">
                                                <img src={eye} alt=""/>
                                                <img src={eyeblue} alt="" className="hide"/>
                                            </span>
                                            <p className="input__notification">Password is required</p>
                                     </label>
                                    </div>
                                   
                                    <div className="col-12 col-md-6">
                                        <p className="input__title input__title--half">Repeat password</p>
                                        <label className="input__wrapper input__wrapper--half ">
                                            <input type="password" className="input" placeholder="*****" name="Repeat_password"   onChange={this.handleInputChange} required/>
                                            <span className="input__icon input__icon--active input__icon--interactive js-toggle-password">
                                                <img src={eye} alt=""/>
                                                <img src={eyeblue} alt="" className="hide"/>
                                            </span>
                                            <p className="input__notification">Pasword does not match</p>
                                    </label>
                                    </div>                                
                                </div>
                                   
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p className="input__title">Country</p>
                                        <label className="input__wrapper input__wrapper--half ">
                                            <select name="user_country" className="ui fluid search dropdown" id="select-country" onChange={()=>this.Changecountryval()}   required>
                                            {this.state.countries.map((option) => (
                                                <option value={option.iso}>{option.country_name}</option>
                                                ))}
                                               
                                                
                                              </select>
                                            <p className="input__notification">Country is required</p>
                                      </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="input__title">City</p>
                                        <label className="input__wrapper input__wrapper--half ">

                                            <select name="user_city" className="ui fluid search selection dropdown"  onChange={this.handleInputChange} id="select-city" required> 
                                            { this.state.cities.map(city => {
                                                return(<option value={city.id}>{city.city_name}</option>)
                                            }
                                                
                                            )}
                                           
                                      
                                           
                                              </select>
                                                <p className="input__notification">City is required</p>
                                        </label>
                                    </div>                                
                                </div> 
                                
                                {/* <button type='submit'> submit </button> */}
                                <div className="row justify-content-center mt-4">
                                    <div className="col-12">
                                    <Link to={'/information-about'} style={{width:"57%"}} type="button" className="button"  id="CheckAccountType">  Next </Link>
                                       {/*<button  id="CheckAccountType">Next</button>*/ } 
                                    </div>
                                </div>         
                                
                                
                               
            </form>
            </div>
            </div>
            </div>
        </div>
    </main>
    )
}
}
export default SignUp;
    
 