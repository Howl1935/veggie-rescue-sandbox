import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import DonorObjectPage from './components/admin/pages/DonorObjectPage';
import DonorLocationsPage from './components/admin/pages/DonorLocationsPage';
import DriverPage from './components/admin/pages/DriverPage';
import NavBar from './components/admin/navBar/NavBar';
import Home from './components/admin/pages/Home';
import Header from './components/admin/header/Header';
import { LocationProvider } from './context/admin/locations/LocationContext';
import { DriverProvider } from './context/admin/drivers/DriverContext';
import { PickupProvider } from './context/admin/pickup/PickupContext';

function App() {
	return (
		<BrowserRouter>
			<PickupProvider>
				<LocationProvider>
					<DriverProvider>
						<div className="App">
							{/* <Header /> */}
							<NavBar />
							<div className="container">
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="donorObjects" element={<DonorObjectPage />} />

									<Route
										path="donorLocations"
										element={<DonorLocationsPage />}
									/>
									<Route path="drivers" element={<DriverPage />} />
								</Routes>
							</div>
						</div>
					</DriverProvider>
				</LocationProvider>
			</PickupProvider>
		</BrowserRouter>
	);
}

export default App;
