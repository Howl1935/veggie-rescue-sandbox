const locationReducer = (state, action) => {
	switch (action.type) {
		case 'GET_LOCATIONS':
			return {
				...state,
				locations: action.payload,
				loading: false,
			};

            case 'ADD_LOCATION':
            return {
                ...state,
                locations: [action.payload, ...state.locations ],
                loading: false
            }
            case 'UPDATE_LOCATION':
                return {
                    ...state,
                    locations: state.locations.map((location) => location.id === action.payload.id ? action.payload : location),
                    loading: false
                    }         
		case 'DELETE_LOCATION':
			return {
				...state,
				locations: state.locations.filter(
					(location) => location.id !== action.payload
				),
				loading: false,
			};
		case 'DELETE_FILTERED':
            console.log('two')
			return {
				...state,
				filtered: state.filtered.filter(
					(location) => location.id !== action.payload
				),
				loading: false,
			};
		case 'SET_CURRENT':
			return {
				...state,
				current: action.payload,
			};
		case 'CLEAR_CURRENT':
			return {
				...state,
				current: null,
			};
			case 'CLEAR_LOCATIONS':
				return {
					...state,
					locations: null,
					filtered: null,
					current: null
					}  
		case 'FILTER_LOCATIONS':
			return {
				...state,
				filtered: state.locations.filter((location) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return location.name.match(regex);
				}),
			};
		case 'CLEAR_FILTER':
			return {
				...state,
				filtered: null,
			};
		default:
			return state;
	}
};
export default locationReducer;
