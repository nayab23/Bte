import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Dashboard/Navbar/Expert';
import Mobile from '../../components/Dashboard/Navbar/Expert/Mobile';
import Footer from '../../components/Dashboard/Footer';
const ExpertDashboardLayout = (props) => {



	return (
		<React.Fragment>
			<Navbar />
			{props.children}
			<Mobile/>
			<Footer/>
		</React.Fragment>
	)
}

export default withRouter(ExpertDashboardLayout)