import { createContext, useReducer } from 'react';
import locationReducer from './LocationReducer';
const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
	const initialState = {
		locations: null,
		current: null,
		filtered: null,
		loading: false,
	};
	const [state, dispatch] = useReducer(locationReducer, initialState);

	const getLocations = async () => {
		try {
			const response = await fetch('http://localhost:5000/donorNames');
			const data = await response.json();
			dispatch({
				type: 'GET_LOCATIONS',
				payload: data,
			});
			//
		} catch (err) {}
	};
	    // Delete Contact
		const deleteLocation = async id => {
			if(window.confirm('Are you sure you want to delete?')){
				await fetch(`http://localhost:5000/donorNames${id}`, {method: 'DELETE'})
				dispatch({
					type: 'DELETE_LOCATION',
					payload: id,
				});
		}


			// try {
			// 	 await axios.delete(`/api/contacts/${id}`);
			// 	 dispatch({type: DELETE_CONTACT, payload: id });
	
			// } catch (error) {
			// 	dispatch({ type: CONTACT_ERROR,
			// 				payload: error.response.msg })
			// }
			
		}

		const deleteFilteredItem = location => {
			dispatch({type: 'DELETE_FILTERED', payload: location });
		}
	    // Set Current Location
		const setCurrent = location => {
			dispatch({type: 'SET_CURRENT', payload: location });
		}
		// Clear Current Location
		const clearCurrent = () => {
			console.log('clear')
			dispatch({type: 'CLEAR_CURRENT' });
		};

	    // Filter Locations
		const filterItem = text => {
			dispatch({type: 'FILTER_LOCATIONS', payload: text });
		};
		// Clear Filter
		const clearFilter = () => {
			dispatch({type: 'CLEAR_FILTER' });
		};


	return (
		<LocationContext.Provider
			value={{ locations: state.locations, filtered: state.filtered, current: state.current, loading: state.loading, getLocations, filterItem, clearFilter, setCurrent, clearCurrent, deleteLocation, deleteFilteredItem }}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContext;
