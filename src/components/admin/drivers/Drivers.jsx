import React, { useContext, useEffect, useState } from 'react'
import DriverItem from './DriverItem'
import DriverContext from '../../../context/admin/drivers/DriverContext';

const Drivers = () => {
    const driverContext = useContext(DriverContext);
    const { drivers, filtered, getDrivers, loading } = driverContext;


    useEffect(()=>{
        getDrivers();       
        // eslint-disable-next-line
          },[])
    
    if(drivers !== null && drivers.length === 0 && !loading){
        return <h4>Please add a Driver</h4>
    };
    return (
        <> 
         { drivers !== null && !loading ? (
            <>
                 { filtered !== null ? filtered.map((driver) =>(<DriverItem driver={driver} key={driver.id}  />)) : drivers.map((driver)=> (<DriverItem driver={driver} key={driver.id} />))}
            </>
            ): <h1>Loading...</h1>}
        </>
    )
}

export default Drivers          
