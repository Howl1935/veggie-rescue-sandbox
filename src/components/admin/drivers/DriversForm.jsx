import React, { useState, useContext, useEffect } from 'react'
import DriverContext from '../../../context/admin/drivers/DriverContext';

function DriverForm() {
    const driverContext = useContext(DriverContext);
    const { addDriver, current, clearCurrent, updateDriver } = driverContext;

    useEffect(()=>{
        if(current!=null){
            setDriver(current);
        }else{
            setDriver({
                name: '',
                pin : '',
                isLoggedIn: false,
                clock_in: "",
                clock_out: ""
            });            
        }
     }, [current])

const [ driver, setDriver ] = useState({
    name: '',
    pin: ''
});

   const { name, pin } = driver;

    const onChange = e => setDriver({...driver, [e.target.name]: e.target.value} );

    const onSubmit = e =>{
        e.preventDefault();
        if(current === null){
            addDriver(driver);
        }else{
            updateDriver(driver);
        }
        
        setDriver({
            name: '',
            pin : '',
            isLoggedIn: false,
            clock_in: "",
            clock_out: ""
        });
    }

    const clearAll = () => {
        clearCurrent();

    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Driver' : 'Add Driver' } </h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
            <input type="text" placeholder="Pin" name="pin" value={pin} onChange={onChange} />

          
         
            <div>
                <input type="submit" value={current ? 'Update Driver' : 'Add Driver' } className = "btn btn-primary btn-block" onChange={onChange} />
            </div>
            {current &&( <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button></div>)}
        </form>
    )
}

export default DriverForm;



