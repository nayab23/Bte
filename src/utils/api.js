import axios from 'axios'

const jwt = JSON.parse(localStorage.getItem('jwt'));

const api = axios.create({
	baseURL: 'https://api.backtoexperts.com/api',
	headers: {
		'Content-type': 'application/json',
		'Accept': 'application/json',
		'Authorization': `Bearer ${jwt}`
	}
})

// Refresh jwt jika error 401 / tokennya expired & Logout jika jwt blacklist atau error 500
api.interceptors.response.use((response) => {
	return response;
}, (error) => {

	// Jika response 500 dan juga jwt tidak bisa di refresh lagi maka akan logout dan masuk ke halaman login
	if(error.response.status === 501 && error.response.data.error.message === 'Token has expired and can no longer be refreshed' ) {
		console.log('jwt di hapus dan logout kehalaman login');
		console.log(error.response);
		localStorage.removeItem('jwt');

		return new Promise((resolve, reject) => {
			// history nya belom bisa ngepush ke halaman cuma linknya doang terupdate
			// history.push('/login');

			console.log('redirect ke halaman login')
			// redirect paka react-router-dom ga bisa ga tau kenapa 
			return window.location.href = '/';
			// reject(error);
		})
	} else if ( error.response.status === 500 && error.response.data.error.message === 'The token has been blacklisted' ) {
		console.log('jwt di hapus dan logout kehalaman login');
		console.log(error.response);
		localStorage.removeItem('jwt');

		return new Promise((resolve, reject) => {
			// history nya belom bisa ngepush ke halaman cuma linknya doang terupdate
			// history.push('/login');

			console.log('redirect ke halaman login')
			// redirect paka react-router-dom ga bisa ga tau kenapa 
			return window.location.href = '/';
			// reject(error);
		})		
	}

	console.log(error.response);

	// refresh jwt jika error 401 dan mesage jwt has expired
	if(error.response.status === 401 && error.response.data.error.message === 'Token has expired') {
		console.log('the jwt must be refreshed');
		return api.post('auth/refresh', null)
			.then((res) => {
				console.log(res)
				const config = error.config;			
				localStorage.removeItem('jwt');
				localStorage.setItem('jwt', JSON.stringify(res.data.token));
				config.headers['Authorization'] = `Bearer ${res.data.token}`; 

				return new Promise((resolve, reject) => {
					axios.request(config).then(response => {
						resolve(response);
					}).catch((error) => {
						reject(error);
					})
				})
			})
			.catch((error) => {
				Promise.reject(error);
			})
	} else if ( error.response.status === 401 && error.response.data.error.message === 'The token has been blacklisted' ) {
		console.log('jwt di hapus dan logout kehalaman login');
		console.log(error.response);
		localStorage.removeItem('jwt');

		return new Promise((resolve, reject) => {
			// history nya belom bisa ngepush ke halaman cuma linknya doang terupdate
			// history.push('/login');

			console.log('redirect ke halaman login')
			// redirect paka react-router-dom ga bisa ga tau kenapa 
			return window.location.href = '/';
			// reject(error);
		})		
	}

	return Promise.reject(error);
})


export default api