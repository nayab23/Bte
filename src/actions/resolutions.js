import api from '../utils/api';

export const getresolutions = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('client-dashboard/resolution_market')
				.then((res) => {
					dispatch({ type: 'GET_RESOLUTIONS', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}








