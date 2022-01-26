import React, { useEffect, useRef, useContext } from 'react';
import PickupContext from '../../../context/admin/pickup/PickupContext';

const PickupsFilter = () => {
	const pickupsContext = useContext(PickupContext);
	const { filterData, clearFilter, filtered } = pickupsContext;

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});
	const onChange = (e) => {
		if (text.current.value !== '') {
			filterData(e.target.value);
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

export default PickupsFilter;
