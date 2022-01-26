

import Locations from '../locations/Locations';
import LocationsForm from '../locations/LocationsForm';
import LocationsFilter from '../locations/LocationsFilter'


function DonorLocationsPage() {

    return (
        <div className="grid-2">
            <div>
                <LocationsForm />
            </div>
            <div>
                
                <LocationsFilter />
                <Locations />
            </div>
        </div>
    )
}

export default DonorLocationsPage;
