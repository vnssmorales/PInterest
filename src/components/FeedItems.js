import React, { Component } from 'react';

class FeedItems extends Component {
    render(){
        const self = this;
        if(self.props.placeholder === true){
            return(
                <div className="item brick rel"></div>
            )
        }
        return(
       <div className=""></div>
        );
    }
}

export default FeedItems;