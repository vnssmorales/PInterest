import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../components/header.css';

const imgLogo = {
    baseurl: "http://localhost:3000"
};

class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {

        return (
          
                <div className="header">
                    <a href={imgLogo.baseurl} className="logo" >
                        <img src={logo} className="logoImg" alt="pinterest" />
                    </a>

                    <span> <i className="fa fa-search" id="search" ></i></span>
                    <input placeholder="Buscar" type="text" onKeyDown={this.searchImg} onChange={this.queryValue} className="searching"></input>
                    <div className="searchBox">
                        <span className="send">Inicio</span>
                        <span className="seguir">Siguiendo</span>
                        <span className="name">Vanessa</span>
                        <span> <i className="fa fa-comment-dots"></i></span>
                        <span> <i className="fa fa-bell"></i></span>
                        <span> <i className="fa fa-ellipsis-h"></i></span>
                    </div>
                    {this.props.header}
                </div>

            
        );
    }
}

export default Header;