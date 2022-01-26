
import { useState, useContext, useEffect } from 'react';
import LocationContext from '../../../context/location/LocationContext';

import Filter from '../../shared/Filter';
import LocationForm from '../../locations/LocationForm';
import Locations from '../../locations/Locations';


function Location() {
	// Set up context which we will pass into components
	const locationContext = useContext(LocationContext);
	const { locations, getLocations,current, filtered, filterItem, clearFilter, clearCurrent, setCurrent, deleteLocation, deleteFilteredItem, loading, addElement, updateElement  } = locationContext;

	// First we have to get the locations and put into state
	useEffect(()=>{
		getLocations();
	},[])
	// Then we have to pass those into filtered along with functions 


	// const [filtered, setFiltered] = useState([]);
	// const [location, setLocation] = useState('')
	// const clearFilter = () =>{
	// 	setFiltered([]);
	// }
	// const filterLocations = (element) =>{
	// 	setFiltered(locations.filter(location =>{
	// 		const regex = new RegExp(`${element}`, 'gi');
	// 		return location.match(regex) ;
	// 	}))
	
	// }
	// const deleteElement = (e) =>{
    //     console.log(e)
    // }
    // const setCurrent = (e) =>{
    //     //setLocation(e);
	// 	console.log('setCurr')
    // }
    // const clearCurrent = () =>{
    //     console.log("clear")
    // }

//filterContacts, clearFilter, filtered
	return (
		<div className="grid-2">
			<div>
				<LocationForm  current={current} addElement={addElement} updateElement={updateElement} clearCurrent={clearCurrent}  />   
			</div>
			<div>

				<Filter filtered={filtered} clearFilter={clearFilter} filterItem={filterItem} loading={loading} type={"Locations"}/>
				<Locations filtered={filtered} locations={locations} deleteElement={deleteLocation} deleteFilteredItem={deleteFilteredItem} setCurrent={setCurrent} clearCurrent={clearCurrent}/>
			</div>
		</div>
	);
}

export default Location;
