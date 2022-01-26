const PickupReducer = (state, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return {
				...state,
				data: action.payload,
				loading: false,
			};

            case 'ADD_DATA':
            return {
                ...state,
                data: [action.payload, ...state.data ],
                loading: false
            }
            case 'UPDATE_DATA':
                return {
                    ...state,
                    data: state.data.map((e) => e.id === action.payload.id ? action.payload : e),
                    loading: false
                    }         
		case 'DELETE_DATA':
			return {
				...state,
				data: state.data.filter(
					(d) => d.id !== action.payload
				),
				loading: false,
			};
		case 'DELETE_FILTERED':
			return {
				...state,
				filtered: state.filtered.filter(
					(d) => d.id !== action.payload
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
			case 'CLEAR_DATA':
				return {
					...state,
					data: null,
					filtered: null,
					current: null
					}  
		case 'FILTER_DATA':
			return {
				...state,
				filtered: state.data.filter((d) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return d.name.match(regex);
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
export default PickupReducer;
