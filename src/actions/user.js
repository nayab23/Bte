import api from '../utils/api';

export const getUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.get('user')
				.then((res) => {
					dispatch({ type: 'GET_USER', value: res.data })
					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}

export const createUserAPI = () => (dispatch) => {
	dispatch({type: 'CREATE_USER'});
}

export const storeUserAPI = (data) => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
			api.post('user', data)
				.then((res) => {
					dispatch({ type: 'STORE_USER', value: data })
					dispatch({ type: 'SHOW_TOAST', message: 'User has been created' })

					resolve(res)
				}, (err) => {
					reject(err)
				})
		})

	return promise; 
}




