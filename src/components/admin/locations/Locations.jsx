import React, { useContext, useEffect, useState } from 'react'
import LocationItem from './LocationItem'
import LocationContext from '../../../context/admin/locations/LocationContext';

const Locations = () => {
    const locationContext = useContext(LocationContext);
    const { locations, filtered, getLocations, loading } = locationContext;


    useEffect(()=>{
         getLocations();       
        // eslint-disable-next-line
          },[])
    
    if(locations !== null && locations.length === 0 && !loading){
        return <h4>Please add a location</h4>
    };
    return (
        <> 
         { locations !== null && !loading ? (
            <>
                 { filtered !== null ? filtered.map((location) =>(<LocationItem location={location} key={location.id}  />)) : locations.map((location)=> (<LocationItem location={location} key={location.id} />))}
            </>
            ): <h1>Loading...</h1>}
        </>
    )
}

export default Locations          
