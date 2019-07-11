import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Images from './Images';

class ContentImages extends Component {

    images() {
        return this.state.images.map((image, index) => {
            return <img
            src= {image.urls.thumb}
            id={image.id}
            description={image.description}
            key={index} alt="" />
        })
    }

    render() {

        return (
            <div className="container">
                <Header queryValue = {this.queryValue}/>

                <div className="returImages">
                    <Masonry>
                        {this.images()}
                    </Masonry>
                </div>

            </div>
        );
    }
}

export default ContentImages;