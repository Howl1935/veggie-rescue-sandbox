import React, {useContext} from "react";
import PropTypes from 'prop-types';
import DriverContext from "../../../context/admin/drivers/DriverContext";
export const DriverItem = ({driver}) => {
      const driverContext = useContext(DriverContext)
     const { deleteDriver, setCurrent, clearCurrent, filtered, deleteFilteredItem } = driverContext;

     const { id, name, pin} = driver;

    const onDelete = () =>{
        if(filtered !== null){
          deleteFilteredItem(id)
        }
        deleteDriver(id);
        clearCurrent();
    }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        {/* {name}{" "} */}
        <span style={{ float: 'right'}}
          className={
            "badge " 
            // (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {/* {type.charAt(0).toUpperCase() + type.slice(1)} */}
        </span>
      </h3>
      <ul className="list">
            {/* {email && (<li>
              <i className="fas fa-envelope-open"></i> {email} </li>)}
            {phone && (<li>
              <i className="fas fa-phone"></i> {phone} </li>)}                                                   */}
      </ul>
      <button className="btn btn-dark btn-sm" onClick={()=>setCurrent(driver)}>Edit</button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

    </div>
  );
};


// FilterItem.propTypes = {
//     loc: PropTypes.string.isRequired,
// }
export default DriverItem;