import { createContext, useReducer } from 'react';
import pickupReducer from './PickupReducer';
const PickupContext = createContext();

export const PickupProvider = ({ children }) => {
	const initialState = {
		data: null,
		current: null,
		filtered: null,
		loading: false,
	};
	const [state, dispatch] = useReducer(pickupReducer, initialState);

	// Get pickup schema data from db
	const getData = async () => {
		try {
			const response = await fetch(`/pickupSchema`);
			const data = await response.json();
			dispatch({
				type: 'GET_DATA',
				payload: data,
			});
		} catch (err) {
			//dosomething here
		}
	};

	const addData = async (data) => {
		const response = await fetch('/pickupSchema', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const d = await response.json();
		dispatch({
			type: 'ADD_DATA', 
			payload: d 
		});
		
	};

	const updateData = async (data) => {
		const response = await fetch('/pickupSchema/'+data.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const d = await response.json();
		dispatch({
			type: 'UPDATE_DATA', 
			payload: d 
		});
		
	};

	const deleteData = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/pickupSchema/${id}`, { method: 'DELETE' });
			dispatch({
				type: 'DELETE_DATA',
				payload: id,
			});
		}
	};

	const deleteFilteredItem = (data) => {
		dispatch({ type: 'DELETE_FILTERED', payload: data });
	};
	// Set Current Data
	const setCurrent = (data) => {
		dispatch({ type: 'SET_CURRENT', payload: data });
	};
	// Clear Current Data
	const clearCurrent = () => {
		dispatch({ type: 'CLEAR_CURRENT' });
	};

	// Filter Locations
	const filterData = (text) => {
		dispatch({ type: 'FILTER_DATA', payload: text });
	};
	// Clear Filter
	const clearFilter = () => {
		dispatch({ type: 'CLEAR_FILTER' });
	};

	return (
		<PickupContext.Provider
			value={{
				data: state.data,
				filtered: state.filtered,
				current: state.current,
				loading: state.loading,
				getData,
				filterData,
				clearFilter,
				setCurrent,
				clearCurrent,
				addData,
				deleteData,
				deleteFilteredItem,
				updateData
			}}
		>
			{children}
		</PickupContext.Provider>
	);
};

export default PickupContext;
