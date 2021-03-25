import React, { Component, useState } from 'react';
import { main,Menu,header,nav,div,ul,li,a,label,button,img,select} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'react';
import ReactDOM from 'react-dom';


class InformationEducation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            From:[],
            To:[],
            title:null,
            startyear:null,
            toyear:null,
            certificate_name:null,
            certificate_id:null,

          
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
    
     var years=[];
     const currentyear=new Date().getFullYear();  
     for(var i=1970; i<=currentyear;i++){
       
        years.push(i);
     }
    console.log(years)
    this.setState({From:years})
       
      }

      GetYear=()=>{
        var e= document.getElementById("startyear");
        var text=e.options[e.selectedIndex].text;
        this.setState({startyear:text})
        const currentyear=new Date().getFullYear();
        var toyears=[];
        for(var i=text; i<=currentyear;i++){
       
            toyears.push(i);
         }
        console.log(toyears)
        this.setState({To:toyears})

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

render(){
return (
<main className="main-content"  style={{marginBottom:"60px"}}>
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="tile tile--form-login">
                       <form onSubmit={this.handleSubmit} className="form-validate" novalidate="novalidate">                        
                        <input type="hidden" name="userideducation"/>
                            <section className="form form--login pb-4">
                                <h1 className="form__title">Education</h1>
                                <p className="input__title">University / College / Institute</p>
                                <label className="input__wrapper   ">
                                    <input type="text" className="input" placeholder="example WSEIZ" name="title"  onChange={this.handleInputChange} required/>
                                    <p className="input__notification">University / College / Institute is required</p>
                                </label>

                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p className="input__title input__title--half">Year(s)</p>
                                        <label className="input__wrapper input__wrapper--half  ">
                                                <select name="fromyear" id="startyear"   onChange={this.GetYear} className="ui selection dropdown search" required>
                                                <option selected={true} disabled={true}>Please select..</option>
                                                {this.state.From.map((value, index) => (
                                                <option value={value}>{value}</option>
                                                ))}
                                                                                               
                                             </select>
                              
                                    
                                            
                                 <p className="input__notification">Year is required</p>
                                  </label>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="input__title input__title--half">
                                            <span className="v-hidden">graduation Year</span>
                                        </p>
                                        <label className="input__wrapper input__wrapper--half">
                                            <select name="toyear" className="ui selection dropdown search" onChange={this.handleInputChange}  id="select-year-2" required>
                                            {this.state.To.map((value, index) => (
                                                <option value={value}>{value}</option>
                                                ))}
                                             </select>
                                         
                                            <p class="input__notification">graduation Year is required</p>
                                     </label>
                                    </div>                                
                                </div>
                            </section>
                            <hr/>
                            <section className="form form--education">
                                <p className="input__title mt-0">Professional Certificate Name</p>
                                <label className="input__wrapper">
                                    <input type="text" className="input" placeholder="example EH" name="certificate_name" onChange={this.handleInputChange}  required/>
                                    <p className="input__notification">Certificate Name is required</p>
                           </label>

                                <p className="input__title mt-0">Certificate ID</p>
                                <label className="input__wrapper   ">
                                    <input type="text" className="input" placeholder="example 7364537736" name="certificate_id" onChange={this.handleInputChange}  required/>
                                    <p className="input__notification">Certificate ID is required</p>
                         </label>
                                {/* <button type="submit">Submit</button> */}
                                <div className="row justify-content-center mt-4">
                                    <div className="col-12">
                                        {/*<input type="submit" className="button" value="Next"/>*/}
                                        <Link to="/skills-and-rate" style={{width:"57%"}}  className="button" >Next</Link>
                                    </div>
                                </div>
                            </section>
                            
                        </form>            
                    </div>
                </div>
            </div>
        </div>

    </main>)
     }   
 }
    
 export default InformationEducation;