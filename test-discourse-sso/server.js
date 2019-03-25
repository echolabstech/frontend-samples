const express = require('express');
const http_request = require('request');
const bodyParser = require('body-parser');
const discourse_sso = require('discourse-sso');
const crypto = require("crypto");

const server = express();
const API_KEY = '9ef47792c7a53ebf72696d95a3b82d67e237a91b1bd67a00c14b9b285c0ba925';
const API_USERNAME = 'majorflight';
const SSO_SECRET = "majorsapp1234";
const jsonParser = bodyParser.json();
const sso = new discourse_sso(SSO_SECRET);

// server.use('/', express.static(__dirname + './'));

server.get('/', jsonParser, (request, response) => {
	let nonce = 'cb68251eefb5211e58c00ff1395f0c0b';
	const payload = `nonce=${nonce}&return_sso_url=${}`;
	const base64Encode = 'bm9uY2U9Y2I2ODI1MWVlZmI1MjExZTU4YzAwZmYxMzk1ZjBjMGIK';
	const urlEncode = 'bm9uY2U9Y2I2ODI1MWVlZmI1MjExZTU4YzAwZmYxMzk1ZjBjMGIK';
	let sig = 'HMAC-SHA256';
	sig = "sha256";
	const hmac = crypto.createHmac(sig, SSO_SECRET);
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
	const ssoUrl = 'https://discourse.atlasaitech.com/session/sso_provider?';
	console.error('redirecting to '+ssoUrl);
	response.redirect(ssoUrl + q);
	if (sso.validate(payload, sig)) {

	} else {
		const error = 'failed sso validation';
		console.error(error);
		response.send(error);
	}
});

server.get('/api/sso/', jsonParser, (request, response) => {
	console.log('/api/sso/');
	response.send('/api/sso/');
});

server.listen(8000);
