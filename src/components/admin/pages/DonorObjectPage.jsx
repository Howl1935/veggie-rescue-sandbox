

import Pickups from '../pickupObject/Pickups';
import LocationsForm from '../pickupObject/PickupsForm';
import LocationsFilter from '../pickupObject/PickupsFilter'


function DonorObjectPage() {

    return (
        <div className="grid-2">
            <div>
                <LocationsForm />
            </div>
            <div>
                <LocationsFilter />
                <Pickups />
            </div>
        </div>
    )
}

export default DonorObjectPage;
