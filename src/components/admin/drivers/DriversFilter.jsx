import React, { useEffect, useRef, useContext } from 'react';
import DriverContext from '../../../context/admin/drivers/DriverContext';

const DriversFilter = () => {
	const driverContext = useContext(DriverContext);
	const { filterDrivers, clearFilter, filtered } = driverContext;

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});
	const onChange = (e) => {
		if (text.current.value !== '') {
			filterDrivers(e.target.value);
		} else {
			clearFilter();
		}
	};
	return (
		<form>
			<input
				ref={text}
				type="text"
				placeholder={'Filter Drivers...'}
				onChange={onChange}
			/>
		</form>
	);
};

export default DriversFilter;
