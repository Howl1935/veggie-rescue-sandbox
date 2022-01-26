import { createContext, useReducer } from 'react';
import driverReducer from './DriverReducer';
const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
	const initialState = {
		drivers: null,
		current: null,
		filtered: null,
		loading: false,
	};
	const [state, dispatch] = useReducer(driverReducer, initialState);

	// Get Locations from db
	const getDrivers = async () => {
		try {
			const response = await fetch(`/drivers`);
			const data = await response.json();
			dispatch({
				type: 'GET_DRIVERS',
				payload: data,
			});
		} catch (err) {
			//dosomething here
		}
	};

	const addDriver = async (driver) => {
		const response = await fetch('/drivers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(driver),
		});
		const data = await response.json();
		dispatch({
			type: 'ADD_DRIVER', 
			payload: data 
		});
		
	};

	const updateDriver = async (driver) => {
		const response = await fetch('/drivers/'+driver.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(driver),
		});
		const data = await response.json();
		dispatch({
			type: 'UPDATE_DRIVER', 
			payload: data 
		});
		
	};

	const deleteDriver = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/drivers/${id}`, { method: 'DELETE' });
			dispatch({
				type: 'DELETE_DRIVER',
				payload: id,
			});
		}
	};

	const deleteFilteredItem = (driver) => {
		dispatch({ type: 'DELETE_FILTERED', payload: driver });
	};
	// Set Current Driver
	const setCurrent = (driver) => {
		dispatch({ type: 'SET_CURRENT', payload: driver });
	};
	// Clear Current driver
	const clearCurrent = () => {
	
		dispatch({ type: 'CLEAR_CURRENT' });
	};

	// Filter drivers
	const filterDrivers = (text) => {
		dispatch({ type: 'FILTER_DRIVERS', payload: text });
	};
	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: 'CLEAR_FILTER' });
	};

	return (
		<DriverContext.Provider
			value={{
				drivers: state.drivers,
				filtered: state.filtered,
				current: state.current,
				loading: state.loading,
				getDrivers,
				filterDrivers,
				clearFilter,
				setCurrent,
				clearCurrent,
				addDriver,
				deleteDriver,
				deleteFilteredItem,
				updateDriver
			}}
		>
			{children}
		</DriverContext.Provider>
	);
};

export default DriverContext;
