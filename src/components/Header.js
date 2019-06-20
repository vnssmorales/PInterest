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
                    <span class="fa fa-search" id="search" ></span>
                    <input type="text" value="" placeholder="Buscar" className="searching"></input>
                    <button className="send">Inicio</button>
                    <button className="send">Siguiendo</button>
                    <button className="send">Vanessa</button>
                    <span class="fa fa-comment-dots"></span>
                    <span class="fa fa-bell"></span>

                </div>

            </div>
        )
    }
}
export default Header;