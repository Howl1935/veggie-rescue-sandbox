import React, { useState, useContext, useEffect } from 'react'
import LocationContext from '../../../context/admin/locations/LocationContext';

function LocationForm() {
    const locationContext = useContext(LocationContext);
    const { addLocation, current, clearCurrent, updateLocation } = locationContext;

    useEffect(()=>{
        if(current!=null){
            setLocation(current);
        }else{
            setLocation({
                name: '',
            });            
        }
     }, [current])

const [ location, setLocation ] = useState({
    name: ''
});

   const { name } = location;

    const onChange = e => setLocation({...location, [e.target.name]: e.target.value} );

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            addLocation(location);
        }else{
            updateLocation(location);
        }
        
        setLocation({
            name: ''
        });
    }

    const clearAll = () => {
        clearCurrent();

    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Donor Location' : 'Add Donor Location' } </h2>
            <input type="text" placeholder="Location" name="name" value={name} onChange={onChange} />
          
          
         
            <div>
                <input type="submit" value={current ? 'Update Location' : 'Add Location' } className = "btn btn-primary btn-block" onChange={onChange} />
            </div>
            {current &&( <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button></div>)}
        </form>
    )
}

export default LocationForm;



