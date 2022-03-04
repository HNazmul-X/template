import React from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            
            <h1>Hey I am Navbar</h1>
            <Outlet/>
        </>
        
    );
};

export default Navbar;