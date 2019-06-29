import React, { Component } from 'react';
import '../components/images.css';
import axios from 'axios';

class ImagesScroll extends Component {
    constructor(props) {
        super(props);

        state = {
            list: [],
          
        }
    }

loadImages(){
    const { count, start } = this.state;
    this.setState(start: this.state.start + count);
    axios
    .get()
}

render(){
    return(
<div></div>
    );
}
}




export default ImagesScroll;