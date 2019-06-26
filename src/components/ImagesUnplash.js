import React, { Component } from 'react';
import '../components/images.css';
import FeedItems from './FeedItems';
import $ from "jquery";

class ImagesUnplash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: false
        }
    }

    Brick(){
        const margin = 30, width = 300,
        columnCount = Math.floor($(".newsFeed").outherWidth() / (width + margin)),
        n = 0, row = 0, left = 0, top = 0, t = [];
        for( const i=0; i < columnCount; i++){
            t[i] = 0;
        }
        $('.newsFeed .brick').each(function(){
            left = n * (width + margin);
            $(this).css({
                position:'absolute',
                left: left,
                top: row > 0? t[n]: top
            });
            t[n] = t[n] + parseInt($(this).outerHeight()) + margin,

        });
    }

    render() {

        const images = this, plist = [];
        for (var i = 0; i < 20; i++) {
            plist.push(< FeedItems placeholder={true} />);
        }
        return (

            <div className="newsFeed">
            {images.state.list.length > 0 ? images.state.list :plist}
            </div>
          
        );

    }
}

export default ImagesUnplash;