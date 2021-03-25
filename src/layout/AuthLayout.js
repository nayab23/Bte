import React from 'react';
import {Route, Redirect} from 'react-router-dom';
export const AuthLayout = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => {
		// const token = JSON.parse(localStorage.getItem('token'));
		const jwt = JSON.parse(localStorage.getItem('jwt'));
		if(jwt) {
			alert('jwt')
			return <Redirect to={{pathname: '/clientdashboard'}} />
		}

		return (
			<React.Fragment>
				{props.children}
			</React.Fragment>
		)
	}} />

)