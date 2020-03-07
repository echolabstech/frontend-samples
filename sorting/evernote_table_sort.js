"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const sortTable = require('./sort_table');

function writeFile(filename, data, encoding='utf-8') {
	fs.writeFile(filename, data, encoding, err => {
		if (err) return console.error(err);
		console.log(`write to ${filename} succesful`);
	});
}

const filename = 'Chinese lesson 2020-05-01.html';
const encoding = 'utf-8';
fs.readFile(filename, encoding, (err, html) => {
	if (err) return console.error(err);
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const table = document.querySelector('table');
	sortTable(table);
	writeFile('sample.html', dom.serialize());
});
