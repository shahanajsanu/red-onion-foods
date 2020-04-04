import React from 'react';
import './Header.css';
import logo from '../../Image/logo2.png';

const Header = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col">
                    <div className="header">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className="col">
                    <div className="header-right">
                        <div className="d-flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;