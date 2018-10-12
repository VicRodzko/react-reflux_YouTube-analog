import React from 'react';

import './SearchForm.css';
import actions from './actions';

function SearchForm(props) {
	return (
  		<div className="search">
			<input type="text" placeholder="Search" onInput={ (e) => {actions.getValue(e)} } /> 
			<button  onClick={ (props) => {actions.getVideo(props)} } > Нажми меня </button> 
		</div>
	)
}



export default SearchForm;