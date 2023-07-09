import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src="media/logo.png"  alt="logo"/>
            <div className="menu">
                <p className="menuItem">Falcon 9</p>
                <p className="menuItem">Falcon Heavy</p>
                <p className="menuItem">Dragon</p>
                <p className="menuItem">Updates</p>
            </div>
            <div className="links">
                <p className="link">About</p>
                <p className="link">Gallery</p>
                <p className="link">Shop</p>
            </div>
        </div>
    );
};

export default Navbar;
