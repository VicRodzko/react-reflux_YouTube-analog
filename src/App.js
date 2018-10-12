import React from 'react';

import './App.css';

import SearchForm from './SearchForm';
import VideoList from './VideoList';
import MainVideo from './MainVideo';

function App(props) {
  return (
    <div>
		  <SearchForm />
	    <VideoList  />
	    <MainVideo />
    </div>
  );
}



export default App;