import React from 'react';
import Reflux from 'reflux';

import './VideoList.css';
import Store from './Store';
import actions from './actions';

class VideoList extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = Store; 
    this.storeKeys = ['allVideo'];
  }

  render() { 
    return (
      <div className="list">
        {this.state.allVideo.map((book, index)=>{
          return (
            <div key={index} onClick={ (props) => {actions.selectVideo(index)} }>
                <img src={book.snippet.thumbnails.high.url} alt="что-бы не ругалась консоль"/>
            </div>
          );
        })}
      </div>
    );
  }
}



export default VideoList;

