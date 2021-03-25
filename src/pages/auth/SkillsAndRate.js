import React, { useState, useEffect } from "react";
import { main,Menu,header,nav,div,ul,li,a,label,button,img,select} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const axios = require('axios');

class SkillsAndRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Pools:[],
            Skills:[],
            TottalTickets:'',
            category_id:[],
            Service_Charges:''

          
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.GetSkills = this.GetSkills.bind(this);
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
        const apiUrl = 'https://api.backtoexperts.com/api/auth/pools';
        fetch(apiUrl)
          .then((response) => response.json())
          .then(data =>this.setState({Pools: data}))

        const apiUrl2 = 'https://api.backtoexperts.com/api/auth/total-tickets';
        fetch(apiUrl2)
        .then((response) => response.json())
        .then(data =>this.setState({TottalTickets: data}))
        const apiUrl3 = 'https://api.backtoexperts.com/api/auth/service-charges';
        fetch(apiUrl3)
            .then((response) => response.json())
            .then(data =>this.setState({Service_Charges: data}))
    }

  GetSkills(event){
    const categories=[];
        let selectedOption=(event.target.selectedOptions);
     
        for (let i = 0; i < selectedOption.length; i++){
            categories.push(selectedOption.item(i).value)
        }
       
      if(categories.length===3){
       this.setState({category_id: categories});
        axios.post('https://api.backtoexperts.com/api/auth/get-skills', {
         category_id: categories
        }).then(response=>this.setState({Skills:response.data}))
       // .then(function (response) {
          //  if(response.data.length>0){
             //this.setState({Skills:response.data})
            //console.log(response.data);
            //Results.push(response.data);
           // }
           
       // })
        .catch(function (error) {
            console.log(error);
        })


      }
       

  }

  RemoveText(){
  const rate=document.getElementById('hourlyrate').value;
  document.getElementById('hourlyrate').value=''; 
  }

  UpdateValue(){
   const rate=document.getElementById('hourlyrate').value;
   document.getElementById('hourlyrate').value='$'+rate+'/hour';
  }
  updatePrice(){
      const rate=document.getElementById('hourlyrate').value;
      var btecharges = rate * this.state.Service_Charges/100;
      var remamount=rate-btecharges;
      console.log(btecharges+"----"+remamount)
     // alert(this.state.Service_Charges)
     
     document.getElementById('btecharges').innerText='$'+btecharges;
     document.getElementById('remamount').innerText='$'+remamount;
     setTimeout(() => {
    
    }, 2000);
    
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
    //console.log(this.state.Skills)
    {this.state.Skills.map((option) => (
       console.log(option.id+"-------"+option.name)
       ))}
return (
<main className="main-content"  style={{marginBottom:"60px"}}>
     <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="tile tile--form-login">
                        <form className="form-validate" novalidate="novalidate">
                         <input type="hidden" name="skillrateid" value="164 "/>
                            <section className="form form--login pb-5">
                                <h1 className="form__title">Your Skills and Rate</h1>
                                <p className="input__title">Select pool (select max 3)</p>
                                <label className="input__wrapper input__wrapper--half">
                                    <select className="ui fluid dropdown selection multiple max-3" name="category_id"  id="category_id"  onChange={this.GetSkills.bind(this)} required>
                                    <option selected disabled>Please select..</option>  
                                    {this.state.Pools.map((option) => (
                                     <option value={option.id}>{option.pool}</option>
                                    ))}
                                    </select>
                                     
                                      
                                    <p className="input__notification">category is required</p>
                                    <p id="msg"></p>
                                </label>
                                <p style={{color:"#4492da"}}>Total tickets ({this.state.TottalTickets})</p>


                                <p className="input__title">Skills (type max 10)</p>
                                <label className="input__wrapper ">
                                    <label for="js-textarea-id-1" data-for="js-textarea-id-1" className="visually-hidden"></label>
                                    <div className="textarea input height js-textarea" style={{overflow:"auto"}}>
                                    {/*<span className="label">Sorry No skill Found <i className="delete icon js-delete"></i></span>*/}

                                    {this.state.Skills.map((option)=>(
                                        <span className='label'>
                                        <input type='hidden' name='skills_id' value={option.id} />
                                        {option.name}
                                         <i className='delete icon js-delete'></i>
                                        </span>
                                    ))}
                                    </div>
                                   
                                    <textarea className="input height visually-hidden" placeholder="Text example describing what a web developer does" >                                  
                                    </textarea>
                                    <p className="input__notification">Description is required</p>
                                    </label>

                                <div className="row align-flex-end mt-4">
                                    <div className="col-6">
                                        <p className="info-par">
                                            Rate
                                        </p>
                                    </div>
                                    <div class="col-6 text-align-right">
                                       <input type="text" class="input input--small" placeholder="$17/hour" id="hourlyrate" onChange={()=>this.updatePrice()} onBlur={()=>this.UpdateValue()} onFocus={()=>this.RemoveText()}/>
                                        <input type="hidden" class="input input--small" placeholder="$17/hour" name="hourly_rate" id="hourlyrate1"/>
                                    </div>
                                                                     </div>
                                <div className="row align-flex-end mt-4">
                                    <div className="col-6">
                                        <p className="info-par">
                                            BTR Service Charges
                                        </p>
                                    </div>
                                    <div className="col-6 text-align-right">
                                        <p className="text-align-right info-par-right" id="btecharges"></p>
                                        
                                    </div>
                                </div>
                                <div className="row align-flex-end mt-4">
                                    <div className="col-6">
                                        <p className="info-par">
                                            Amount you'll receive
                                        </p>
                                    </div>
                                    <div className="col-6 text-align-right">
                                       <p className="text-align-center info-par-right" id="remamount"></p>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-5">
                                    <div className="col-12">
                                        {/*<input type="submit" className="button" value="Next"/>*/}
                                       <Link to="/security-question" style={{width:"57%"}} className="button">Next</Link> 
                                    </div>
                                </div>
                            </section>
                            
                        </form>            
                    </div>
                </div>
            </div>
        </div>
        
   

     </main>
     );
     }
    }
     export default SkillsAndRate;