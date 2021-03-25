import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { main,Menu,header,nav,div,ul,li,a,label,button,img} from 'semantic-ui-react';
function RestorePassword() {

    return (
        <main>
        <div className="container">
                 <div className="col-12 col-lg-12">
                   
                    <div className="tile tile--form-login">
                        <form method="post" action="#" className="form form--login form--restore form-validate">
                                                   
                              <h1 className="form__title">Restore Password</h1>
                            
                            <p className="input__title">User name / Email</p>
                            <label className="input__wrapper ">
                                <input type="email" className="input input-check" placeholder="ihor@placeholder.com" name="email"  required/>
                                <span class="input__icon js-caps-check hide">
                                    CAPS LOCK ON
                                </span>
                                <p className="input__notification">Wrong User name / Email, please retry</p>
                          </label>

                            <div className="row justify-content-center mt-5 mb-4">
                                <div className="col-12">
                                    <input type="submit" className="button" value="Send restore email"/>
                                </div>
                            </div>
                        </form>                       
                    </div>
                  </div>
                 </div>
             
         </main>
    );
}

export default RestorePassword;