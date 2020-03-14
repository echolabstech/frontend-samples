"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { combineTables } = require('./combine_tables');
const sortTable = require('./sort_table');
const TABLES_PATH = './tables';
const template = 'template.html';
const filename = `${TABLES_PATH}/${template}`;
const encoding = 'utf-8';

fs.readFile(filename, encoding, async (err, html) => {
	if (err) console.error(err);
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const table = document.querySelector('table');
	await combineTables(table);
	sortTable(table);
	writeFile('sample.html', dom.serialize());
});

function writeFile(filename, data, encoding='utf-8') {
	fs.writeFile(filename, data, encoding, err => {
		if (err) return console.error(err);
		console.log(`write to ${filename} succesful`);
	});
}
