import React, {useState} from 'react';
import '../style/AppHeader.css';
import NavBar from './NavBar';

function AppHeader() {
    return (
        <div className="header">
            <div className="logo-header">
                <img src="/assets/harley-davidson.svg" />
            </div>
            <div className="nav-bar-menu-div">
                <NavBar />
            </div>
        </div>
    );
}

export default AppHeader;