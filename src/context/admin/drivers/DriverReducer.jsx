const driverReducer = (state, action) => {
	switch (action.type) {
		case 'GET_DRIVERS':
			return {
				...state,
				drivers: action.payload,
				loading: false,
			};

            case 'ADD_DRIVER':
            return {
                ...state,
                drivers: [action.payload, ...state.drivers ],
                loading: false
            }
            case 'UPDATE_DRIVER':
                return {
                    ...state,
                    drivers: state.drivers.map((driver) => driver.id === action.payload.id ? action.payload : driver),
                    loading: false
                    }         
		case 'DELETE_DRIVER':
			return {
				...state,
				drivers: state.drivers.filter(
					(driver) => driver.id !== action.payload
				),
				loading: false,
			};
		case 'DELETE_FILTERED':
			return {
				...state,
				filtered: state.filtered.filter(
					(driver) => driver.id !== action.payload
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
			case 'CLEAR_DRIVERS':
				return {
					...state,
					drivers: null,
					filtered: null,
					current: null
					}  
		case 'FILTER_DRIVERS':
			return {
				...state,
				filtered: state.drivers.filter((driver) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return driver.name.match(regex);
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
export default driverReducer;
