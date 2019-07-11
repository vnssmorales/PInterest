import React from 'react';
import '../components/images.css';

function Images(props) {
    return (
        <div className="cardImg">
            <img onClick={() => props.handleClick(props.url)} src={props.url} alt="" />
        </div>
    );

}
    
    

export default Images;