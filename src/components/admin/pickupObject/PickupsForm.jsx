import React, { useState, useContext, useEffect } from 'react'
import PickupContext from '../../../context/admin/pickup/PickupContext';

function PickupsForm() {
    const pickupContext = useContext(PickupContext);
    const { addData, current, clearCurrent, updateData } = pickupContext;
    useEffect(()=>{
        if(current!=null){
            setLocation(current);
        }else{
            setLocation({
                name: '',
                donorLocationType: '',
                donorEntityType: '',
                foodType: [],
                area: ''
            });            
        }
     }, [current])

const [ location, setLocation ] = useState({
    name: '',
    donorLocationType: '',
    donorEntityType: '',
    foodType: [],
    area: '' 

});

   const { name, donorLocationType, donorEntityType, foodType, area  } = location;

    const onChange = e => setLocation({...location, [e.target.name]: e.target.value} );

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            // if(location.foodType.length === 0)
            location.foodType = location.foodType.split(',');

            addData(location);
        }else{
            if(location.foodType.length === 0)
            location.foodType = foodType.split(',');
            updateData(location);
        }
        
        setLocation({
            name: '',
            donorLocationType: '',
            donorEntityType: '',
            foodType: [],
            area: '' 
        });
    }

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Donor' : 'Add Donor' } </h2>
            <input type="text" placeholder="Location" name="name" value={name} onChange={onChange} />
            <input type="text" placeholder="Location Type" name="donorLocationType" value={donorLocationType} onChange={onChange} />
            <input type="text" placeholder="Entity Type" name="donorEntityType" value={donorEntityType} onChange={onChange} />
            <input type="text" placeholder="Food Type" name="foodType" value={foodType} onChange={onChange} />
            <input type="text" placeholder="Area" name="area" value={area} onChange={onChange} />

         
            <div>
                <input type="submit" value={current ? 'Update Donor' : 'Add Donor' } className = "btn btn-primary btn-block" onChange={onChange} />
            </div>
            {current &&( <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button></div>)}
        </form>
    )
}

export default PickupsForm;



