import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../components/nav.css';

const imgLogo = {
    baseurl: "http://localhost:3000"
  };

class Nav extends Component {
    render(){
        return(
            <div className="header fixed">
            <a href = {imgLogo.baseurl} className="logo bl">
            <img src={imgLogo.baseurl + "../logo.png"} className="bl"/>
            </a>
            </div>
        );
    }

}

export default Nav;
