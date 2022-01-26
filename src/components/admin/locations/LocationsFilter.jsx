import React, { useEffect, useRef, useContext } from 'react';
import LocationContext from '../../../context/admin/locations/LocationContext';

const LocationsFilter = () => {
	const locationContext = useContext(LocationContext);
	const { filterLocations, clearFilter, filtered } = locationContext;

	const text = useRef('');

	//const filterType = 'Filter ' + type + '...';
	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});
	const onChange = (e) => {
		if (text.current.value !== '') {
			filterLocations(e.target.value);
		} else {
			clearFilter();
		}
	};
	return (
		<form>
			<input
				ref={text}
				type="text"
				placeholder={'Filter Locations...'}
				onChange={onChange}
			/>
		</form>
	);
};

export default LocationsFilter;
