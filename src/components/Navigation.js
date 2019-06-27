import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../components/header.css';
import '../components/images.css';

const imgLogo = {
    baseurl: "http://localhost:3000"
};

const accessKey = '5dba6e676e02ab27153aaaf2e9484eba5ccb5725b72ab57341110e157c1889e1';
const endPoint = 'https://api.unsplash.com/search/photos'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.query = '';
        this.imgsPerPage = '20';
        this.queryValue = this.queryValue.bind(this);
        this.searchImg = this.searchImg.bind(this);

        this.state = {
            images: [],
            
            loading: false
        }
    }

    searchImg() {
        fetch(`${endPoint}?query=${this.query}&client_id=${accessKey}&per_page=20&page${this.imgsPerPage}`)
            .then(response => {
                return response.json()
            }).then(jsonResponse => {
                console.log(jsonResponse);
                this.setState({
                    images: jsonResponse.results
                })
            })
    }

    queryValue(e) {
        this.query = e.target.value;
    }

    images() {
        return this.state.images.map(image => {
            return <img src={image.urls.thumb} key={image.id}/>
        })
    }

    render() {
        
        return (
            <div className="container">
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
                </div>

                <div className="returnImages">
                    {this.images()}
                </div>

            </div>
        );
    }
}

//onChange ejecuta la funcion queryValue cada vez que se modifica el valor del input
//para que se guarde en this.query=''

//al trabajar con eventos es importante asegurarse que el valor del contexto no cambie
//para eso se usa el bind.

//e.target dispara el evento y value es el valor

//fetch: método del obj windows que permite hacer consultas a un servidor.
//En la primera promesa obtenemos la respuesta completa del servidor y la retornamos en formato JSON para poder acceder a los datos que posee 
//y en la segunda promesa obtenemos nuestras imagenes y podemos manipularlas como queramos.
export default Navigation;