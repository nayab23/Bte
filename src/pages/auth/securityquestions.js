import React, { Component, useState } from 'react';
import { main,Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { render } from '@testing-library/react';


class SecurityQuestion extends React.Component {
    constructor(prpos){
        super(prpos);
        this.state={
            questions:[],

        }

    }

    componentDidMount() {
        const apiUrl = 'https://api.backtoexperts.com/api/auth/security-questions';
        fetch(apiUrl)
          .then((response) => response.json())
          .then(data =>this.setState({questions: data}))

       
    }


render(){
    return (
    <main className="main-content"  style={{marginBottom:"60px"}}>
     <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="tile tile--form-login">
                    
                     <form method="post" action="#" className="form form--login form--restore form-validate" >
                         
                     <h1 className="form__title">Security Question</h1>
                            <p className="input__title">Security Question</p>
                            <label className="input__wrapper">
                            <select name="question_id"  class="ui dropdown search" id="question" required>
                            {this.state.questions.map(options=>(
                                <option value={options.id}>{options.question}</option>
                            ))}

                             </select>                             
                                
                            <p className="input__notification">Question is required</p>
                              </label>

                            <p className="input__title">Answer</p>
                            <label className="input__wrapper ">
                                <input type="text" className="input input-check" placeholder="Down Town" name="answer"  required/>
                                <p className="input__notification">Email ardress is required</p>
                              </label>                  

                            <div className="row justify-content-center mt-4">
                                <div className="col-12">
                                    <input type="submit" style={{width:"57%"}} class="button" value="Next"/>
                                </div>
                                <div className="col-12">
                                    <p className="sub-info">
                                        By signing up to create an account I accept BTE's Terms of Use and Privacy Policy 
                                    </p>
                                </div>
                            </div>
                        </form>           
                                
                    </div>
              </div>
            </div>
        </div>
    </main>
    );
    }
} 
    export default SecurityQuestion;