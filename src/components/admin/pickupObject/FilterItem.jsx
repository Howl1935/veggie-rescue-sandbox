import React, {useContext} from "react";
import PropTypes from 'prop-types';
import PickupContext from "../../../context/admin/pickup/PickupContext";

export const FilterItem = ({location}) => {
      const pickupContext = useContext(PickupContext)
     const { deleteData, setCurrent, clearCurrent, filtered, deleteFilteredItem } = pickupContext;

     const { id, name } = location;

    const onDelete = () =>{
        if(filtered !== null){
          deleteFilteredItem(id)
        }
        deleteData(id);
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
      <button className="btn btn-dark btn-sm" onClick={()=>setCurrent(location)}>Select</button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>

    </div>
  );
};


export default FilterItem;