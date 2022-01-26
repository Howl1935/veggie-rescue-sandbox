import Drivers from '../drivers/Drivers';
import DriverForm from '../drivers/DriversForm';
import DriversFilter from '../drivers/DriversFilter';

function DriverPage(){
	return (
		<div className="grid-2">
			<div>
				<DriverForm />
			</div>
			<div>
				<DriversFilter />
				<Drivers />
			</div>
		</div>
	);
}

export default DriverPage;
