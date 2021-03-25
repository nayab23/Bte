const initialState = {
    Resolution:{},
	Resolutions: []
}

const Resolution = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_RESOLUTIONS':
			return {
				...state,
				Resolutions: action.value
			}
		
		case 'BUY_RESOLUTIONS':
			return {
				...state,
				Resolutions: state.Resolutions.filter(item => item.id !== parseInt(action.value))
			}
		default: return state;		
	}
}

export default Resolution;