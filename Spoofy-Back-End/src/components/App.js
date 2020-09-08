import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App(props){
  const API_URI = process.env.API_URI;
  
  let request = require("request");

let options = {
  method: 'POST',
  url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist',
  headers: {
    'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com',
    'x-rapidapi-key': API_URI,
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