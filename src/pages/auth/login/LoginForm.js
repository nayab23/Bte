import React, { useState } from 'react';
import { Menu,header,nav,div,ul,li,a,label,button,img, Button} from 'semantic-ui-react';
import eye from './../../../components/app_assets/img/eye.svg';
import eyeblue from './../../../components/app_assets/img/eye_blue.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TextInput } from '../../../components/Formik/TextInput';
import jwt from 'jwt-decode';
const LoginForm = ({ login }) => {
    let history = useHistory();
 
    return (

        <Formik

        initialValues={{
            email: '',
            password: ''			
        }}        
        validationSchema={Yup.object({
            email: Yup.string()
                .email('Invalida email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        })}
        onSubmit={(data, actions) => {
           // alert(JSON.parse(data));
            
            console.log(data)
            login(data)
                .then(() => {
                    // redirect to client-dashboard

                   
                //
				let jwtDecode 
				if (Object.entries(localStorage.getItem('jwt')).length !== 0) {
					jwtDecode = jwt(localStorage.getItem('jwt'))
				}
						//console.log(jwtDecode.role)
						if(jwtDecode.role=="expert"){
                            window.location.reload(true);
							history.push('/expert-dashboard')
						}else{
                            window.location.reload(true);
							history.push('/client-dashboard')
						}
							
                    
                })
                .catch((err) => {
                    // actions.setFieldError("general", "Email or Password mismatch")
                    actions.setStatus("Email or Password mismatch")
                })
        }}
        >
        
  
{formik => (
            <Form className="form form--login form-validate">
            <h1 className="form__title">Login</h1>
            <p className="input__title">User name / Email</p>
            <label className="input__wrapper">
        {/* <input type="email" className="input input-check" 
            placeholder="Name"
            name="email" 
            required/>*/}
        <TextInput label="Email" type="email" name="email" placeholder="username / email" className="input" />
            <span className="input__icon js-caps-check hide">CAPS LOCK ON  </span>
            </label>
            <p className="input__title">Password</p>
                <label className="input__wrapper">
                    {/*<input type="password" className="input" placeholder="Password" name="password"  required/>*/}
                    <TextInput  label="Password" type="password" name="password" placeholder="password" className="input" />
                    <span className="input__icon input__icon--active input__icon--interactive js-toggle-password">
                        <img src={eye} alt=""/>
                        <img src={eyeblue} alt="" className="hide"/>
                    </span>
                </label>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <label className="checkbox__wrapper">
                            <input type="checkbox" className="checkbox checked"/>
                            <div className="checkbox__label">Keep me in the system</div>
                            <p className="input__notification">Wrong Password, Please retry</p>
                        </label>
                    </div>
                    <div className="col-12 col-md-5 login__links">
                        <Link to={'/restore-password'} className="link link--login"> Forgot Password? </Link>
                        {/* <Link to={'/account-recovery'} className="link link--login ">  Recover Account? </Link> */}
                    </div>
                </div>
                    <br/>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Button type="submit"  style={{width:"57%"}} className="button" >Log in</Button>
                    </div>
                </div>
            </Form>
        )}
         
         </Formik>
    );
}

export default LoginForm;