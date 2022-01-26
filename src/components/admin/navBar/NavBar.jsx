import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './NavBar.css'
import { Link } from "react-router-dom";
import React from 'react';
function NavBar() {
  return <div>
      <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="logs">
        <NavItem eventKey="logs">
        
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link to="/">Logs</Link>          

            </NavText>
        </NavItem>
        <NavItem eventKey="appData">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Volunteer Information
            </NavText>

            <NavItem eventKey="appData/drivers">
                <NavText>
                <Link to="/drivers">Drivers</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="appData/donors">
                <NavText>
                <Link to="/donorObjects">Donors</Link>
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="manageData">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            Manage Data
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                <Link to="/donorLocations">Donor Locations</Link>          
                      </NavText>
            </NavItem>
           
        </NavItem>
    </SideNav.Nav>
</SideNav>
  </div>;
}

export default NavBar;
