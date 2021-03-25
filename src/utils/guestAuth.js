import React, { Component } from 'react';
import { connect } from 'react-redux';

import jwt from 'jwt-decode';
export default function guestAuth (ComposedComponent) {

	class Authentication extends Component {

		componentDidMount() {
			if (this.props.isAuthenticated) {

	
				//
				let jwtDecode 
				if (Object.entries(localStorage.getItem('jwt')).length !== 0) {
					jwtDecode = jwt(localStorage.getItem('jwt'))
				}
						//console.log(jwtDecode.role)
						if(jwtDecode.role==="expert"){
							this.props.history.push('/expert-dashboard')
						}else{
							this.props.history.push('/client-dashboard')
						}
							
				} 
			}

		componentWillUpdate(nextProps) {
			if (this.props.isAuthenticated) {
			//
			let jwtDecode 
			if (Object.entries(localStorage.getItem('jwt')).length !== 0) {
				jwtDecode = jwt(localStorage.getItem('jwt'))
			}
					//console.log(jwtDecode.role)
					if(jwtDecode.role==="expert"){
						this.props.history.push('/expert-dashboard')
					}else{
						this.props.history.push('/client-dashboard')
					}
				
			} 
		}

		render() {
			
			
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = (state) => ({
		isAuthenticated: state.auth.isAuthenticated
	})

	return connect(mapStateToProps, null)(Authentication);
}