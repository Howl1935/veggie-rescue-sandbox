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

	// Get Locations from db
	const getLocations = async () => {
		try {
			const response = await fetch(`/donorNames`);
			const data = await response.json();
			dispatch({
				type: 'GET_LOCATIONS',
				payload: data,
			});
		} catch (err) {
			//dosomething here
		}
	};

	const addLocation = async (location) => {
		const response = await fetch('/donorNames', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(location),
		});
		const data = await response.json();
		dispatch({
			type: 'ADD_LOCATION', 
			payload: data 
		});
		
	};

	const updateLocation = async (location) => {
		const response = await fetch('/donorNames/'+location.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(location),
		});
		const data = await response.json();
		dispatch({
			type: 'UPDATE_LOCATION', 
			payload: data 
		});
		
	};

	const deleteLocation = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/donorNames/${id}`, { method: 'DELETE' });
			dispatch({
				type: 'DELETE_LOCATION',
				payload: id,
			});
		}
	};

	const deleteFilteredItem = (location) => {
		dispatch({ type: 'DELETE_FILTERED', payload: location });
	};
	// Set Current Location
	const setCurrent = (location) => {
		dispatch({ type: 'SET_CURRENT', payload: location });
	};
	// Clear Current Location
	const clearCurrent = () => {
		console.log('clear');
		dispatch({ type: 'CLEAR_CURRENT' });
	};

	// Filter Locations
	const filterLocations = (text) => {
		dispatch({ type: 'FILTER_LOCATIONS', payload: text });
	};
	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: 'CLEAR_FILTER' });
	};

	return (
		<LocationContext.Provider
			value={{
				locations: state.locations,
				filtered: state.filtered,
				current: state.current,
				loading: state.loading,
				getLocations,
				filterLocations,
				clearFilter,
				setCurrent,
				clearCurrent,
				addLocation,
				deleteLocation,
				deleteFilteredItem,
				updateLocation
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContext;
