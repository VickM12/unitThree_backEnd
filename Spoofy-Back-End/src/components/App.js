import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App(props){
  let request = require("request");

let options = {
  method: 'POST',
  url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist',
  headers: {
    'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com',
    'x-rapidapi-key': '6e14ff9b91msh684d3a0f16a5096p1bf33ejsnaf6fd39bf555',
    'content-type': 'application/x-www-form-urlencoded',
    useQueryString: true
  },
  form: {}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});


}