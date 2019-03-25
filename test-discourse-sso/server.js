const express = require('express');
const http_request = require('request');
const bodyParser = require('body-parser');
const discourse_sso = require('discourse-sso');

const server = express();
const API_KEY = '9ef47792c7a53ebf72696d95a3b82d67e237a91b1bd67a00c14b9b285c0ba925';
const API_USERNAME = 'majorflight';
const jsonParser = bodyParser.json();
const sso = new discourse_sso("majorsapp1234");

server.use('/', express.static(__dirname + './'));

server.get('/api/login', (request, response) => {
	console.log('endpoint: /api/login');
	const payload = request.body.payload;
	const sig = request.body.sig;
	if(sso.validate(payload, sig)) {
		const nonce = sso.getNonce(payload);
		const userparams = {
			// required
	    "nonce": nonce,
	    "external_id": "majorflight",
	    "email": "majorflight02@gmail.com",
	    // Optional
	    "username": "majorflight",
	    "name": "Major A Sapp III"
		};
		const q = sso.buildLoginString(userparams);
		response.redirect('https://discourse.atlasaitech.com/session/sso_login?' + q);
	}
});

server.listen(8081);
