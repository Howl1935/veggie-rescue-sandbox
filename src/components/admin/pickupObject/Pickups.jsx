import React, { useContext, useEffect, useState } from 'react'
import FilterItem from './FilterItem'
import PickupContext from '../../../context/admin/pickup/PickupContext';

const Pickups = () => {
    const pickupContext = useContext(PickupContext);
    const { data, filtered, getData, loading } = pickupContext;


    useEffect(()=>{
         getData();   
        //  if(data !== null){
        //      setConstrainedLocations(locations.slice(0,1));
        //  }
        //  if(filtered !== null ){
        //     // setConstrainedFilter(filtered.slice(0,2))
        //  }
        // eslint-disable-next-line
          },[])
    // const [constrainedFilter, setConstrainedFilter] = useState(filtered);
    // const [constrainedLocations, setConstrainedLocations] = useState(locations);

    if(data !== null && data.length === 0 && !loading){
        return <h4>Please add a location</h4>
    };
    return (
        <> 
         { data !== null && !loading ? (
            <>
                           { filtered !== null ? filtered.map((location) =>(<FilterItem location={location} key={location.id}  />)) : data.map((location)=> (<FilterItem location={location} key={location.id} />))}

                 {/* { filtered !== null ? filtered.map((location) =>(<LocationItem location={location} key={location.id}  />)) : locations.map((location)=> (<LocationItem location={location} key={location.id} />))} */}
            </>
            ): <h1>Loading...</h1>}
        </>
    )
}

export default Pickups          
