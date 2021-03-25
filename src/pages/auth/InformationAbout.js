import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { main,Menu,header,nav,div,ul,li,a,label,button,img,select} from 'semantic-ui-react';


class  informationAbout extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
            languages:[],
            language_id:[],
            user_contact:null,
            prof_title:null,
            description:null
           
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
   


      componentDidMount(){
        
        
        const apiUrl = ' https://api.backtoexperts.com/api/auth/languages';
        fetch(apiUrl)
          .then((response) => response.json())
          .then(data =>this.setState({languages: data}))
      }


      handleChange(event) {
    
        const language_id=[];
        let selectedOption=(event.target.selectedOptions);
     
        for (let i = 0; i < selectedOption.length; i++){
            language_id.push(selectedOption.item(i).value)
        }
      
        this.setState({language_id: language_id});
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
 <div className="container container-fluid-small" >
    <main className="main-content" style={{marginBottom:"60px"}}>
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="tile tile--form-login">
                        <form onSubmit={this.handleSubmit} className="form form--login form-validate pb-5">
                            <h1 className="form__title">Fill in information about you</h1>
                                <p className="input__title">Phone number</p>
                                <label className="input__wrapper ">
                                    <input type="text" className="input" placeholder="Phone" name="user_contact" id="phonenumber"    onChange={this.handleInputChange}  required/>
                                    <p className="input__notification">Phone number is required</p>
                                                                    
                                <p className="input__notification"  id="errorphone"></p>
                                </label>

                                <p className="input__title">Languages</p>
                                <label className="input__wrapper input__wrapper--half ">
                                    <select   onChange={this.handleChange.bind(this)} className="ui dropdown multiple" id="select-country"   required>                                                             
                                                                            <option  selected disabled>Please select..</option>
                                                                            
                                                                            {this.state.languages.map((option) => (
                                                                            <option value={option.id}>{option.name}</option>
                                                                            ))}
                                                                            
                                                                        </select>
                                    <p className="input__notification">language is required</p>
                                </label>

                                <p className="input__title">Proffesional title</p>
                                <label class="input__wrapper ">
                                    <input type="text" className="input" placeholder="Web developer" name="prof_title"   onChange={this.handleInputChange}  required/>
                                    <p className="input__notification">Proffesional title is required</p>
                                </label>
                                

                                <p className="input__title">Profession Description</p>
                                <label className="input__wrapper ">
                                    <textarea className="input" name="description" placeholder="Text example describing what a web developer does"  value={this.state.description} onChange={this.handleInputChange}> </textarea>
                                    <p className="input__notification">Description is required</p>
                                </label>

                                {/* <button type='submit'> submit </button> */}
                                <div class="row justify-content-center mt-4">
                                    <div className="col-12">
                                        {/*<input type="submit" className="button" value="Next"/>*/}
                                        <Link to="/information-education" style={{width:"57%"}} type="submit" className="button" >Next</Link>
                                    </div>
                                </div>

                        </form>                       
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

    )
}
}
    
 export default informationAbout;
