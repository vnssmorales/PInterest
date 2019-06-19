import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../components/header.css';

const imgLogo = {
    baseurl: "http://localhost:3000"
};

class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href={imgLogo.baseurl} className="logo">
                    <img src={logo} className="logoImg" />
                </a>

                <div className="searchBox">
                <input type="text" value="" placeholder="search" className="searching"></input>
                <button className="send">Inicio</button>
 

                </div>

            </div>
        )
    }
}
export default Header;