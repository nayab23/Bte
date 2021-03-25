import React from 'react';
import Navbar from '../../components/Dashboard/auth/Navbar';
import Footer from '../../components/Dashboard/Footer';
const AuthLayout = (props) => {

	return (

	
		<React.Fragment>
			<Navbar />
			{props.children}
			<Footer/>
		</React.Fragment>
	)
}

export default AuthLayout