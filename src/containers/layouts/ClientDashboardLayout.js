import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Dashboard/Navbar/Client';
import Mobile from '../../components/Dashboard/Navbar/Client/Mobile';
import Footer from '../../components/Dashboard/Footer';
const ClientDashboardLayout = (props) => {



	return (
		<React.Fragment>
			<Navbar />
			{props.children}
			<Mobile/>
			<Footer/>
		</React.Fragment>
	)
}

export default withRouter(ClientDashboardLayout)