import { combineReducers } from 'redux'; 
import auth from './auth';
import user from './user';
import toast from './toast';
import ClientDashboard from './../components/ClientDashboard/ClientDashboard';

export default combineReducers({
	auth: auth,
	user: user,
	toast: toast,
	ClientDashboard:ClientDashboard,
});