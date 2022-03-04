import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import About from '../Pages/About/About';
import Homepage from '../Pages/Homepage/Homepage';

const PrimaryRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route index element={<Homepage/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    );
};

export default PrimaryRouter;