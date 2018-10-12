import React from 'react';
import Reflux from 'reflux';

import './MainVideo.css';
import Store from './Store';

class MainVideo extends Reflux.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.store = Store;
    this.storeKeys = ['selected'];                  
  }

  render() {
    if (!this.state.selected) {
      return "";
    }
    
    return (
      <div className="selected">
        <iframe src={"https://www.youtube.com/embed/" + this.state.selected.id.videoId} title="что-бы не ругалась консоль"/>
      </div>
    );  
  }
}



export default MainVideo;