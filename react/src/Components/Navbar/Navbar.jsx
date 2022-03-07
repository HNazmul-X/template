import React from 'react';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="hnazmul-navbar">
                <div class="hnazmul-navbar-container">
                    <div class="hnazmul-nav-brand">
                        <h4>Navbar brand</h4>
                    </div>
                    <div class="hnazmul-nav-toggle-btn">
                        <button>
                            <img class="toggler-btn" src="images/toggler-icon.svg" alt="" />
                        </button>
                    </div>

                    <div class="hnazmul-navbar-content">
                        <div class="hnazmul-navbar-content-wrapper">
                            <ul class="navbar-list">
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Home
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Feature
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Pricing
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        About
                                    </a>
                                </li>
                            </ul>
                            <button class="navbar-closer-icon">
                                <img class="navbar-closer" src="images/times-navbar-clouser-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Navbar;