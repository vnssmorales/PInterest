import React, { Component } from 'react';
import logo from '../img/logo.png';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import '../components/header.css';

const imgLogo = {
    baseurl: "http://localhost:3000"
};

const accessKey = '5dba6e676e02ab27153aaaf2e9484eba5ccb5725b72ab57341110e157c1889e1';
const endPoint = 'https://api.unsplash.com/search/photos'

class Header extends Component {
    constructor(props) {
        super(props);
        this.query = '';
        this.queryValue = this.queryValue.bind(this);
        this.searchImg = this.searchImg.bind(this);
    }

    searchImg(){
        fetch(`${endPoint}?query=${this.query}&client_id=${accessKey}`)
        .then(response =>{
            return response.json()
        }).then(jsonResponse =>{
            console.log(jsonResponse);
        })
    }

    queryValue(e){
        this.query = e.target.value;
    }

    render() {
        return (
            <div className="header">
                <a href={imgLogo.baseurl} className="logo">
                    <img src={logo} className="logoImg" />
                </a>

                <div className="searchBox">
                    <div>
                    <InputGroup className="inputSearch">
                    <InputGroupAddon addonType="prepend"><i class="fa fa-search" id="search" ></i></InputGroupAddon>
                    <Input placeholder="Buscar" onKeyPress={this.searchImg} onChange = {this.queryValue} className="searching"/>
                    </InputGroup>
                    
                    </div>
                    <div>
                        <button className="send">Inicio</button>
                    </div>
                    <div>
                        <button className="seguir">Siguiendo</button>
                    </div>
                    <div>
                        <button className="name">Vanessa</button>
                    </div>
                    <div>
                        <span class="fa fa-comment-dots"></span>
                    </div>
                    <div>
                        <span class="fa fa-bell"></span>
                    </div>
                    <div>
                        <span class="fa fa-ellipsis-h"></span>
                    </div>
                </div>

            </div>
        )
    }
}

//onChange ejecuta la funcion queryValue cada vez que se modifica el valor del input
//para que se guarde en this.query=''

//al trabajar con eventos es importante asegurarse que el valor del contexto no cambie
//para eso se usa el bind.

//e.target dispara el evento y value es el valor

//fetch: método del obj windows que permite hacer consultas a un servidor
export default Header;