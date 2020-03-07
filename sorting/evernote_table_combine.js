"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const sortTable = require('./combine_tables');
const TABLES_PATH = './tables';

// look at file system to find all tables
function readHTMLFileNames() {
	/*
		return array of table filenames, or error object
	*/
	try {
	  const fileNames = fs.readdirSync(TABLES_PATH);
	  return fileNames;
	} catch(e) {
	  return e;
	}
}

function extractTableRows(html) {
	return new Promise((resolve, reject) => {
		const dom = new JSDOM(html);
		const document = dom.window.document;
		const table = document.querySelector('table');
		if (table && table.rows) return resolve(table.rows);
		reject('table not found or table empty');
	});
}

function getHTMLFile(filename, encoding='utf-8') {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, encoding, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
}

function _combineTableRows(tablerows) {
	const table = [];
	tablerows.forEach(tablerow => {
		for (var i = 0; i < tablerow.length; i++) {
			table.push(tablerow[i]);
		}
	});
	return table;
}

function combineTables() {
	const fileNames = readHTMLFileNames();
	if (!Array.isArray(fileNames)) throw new Error(fileNames);

	const promises = [];
	fileNames.forEach(async filename => {
		const promise = new Promise(async (resolve, reject) => {
			const html = await getHTMLFile(`${TABLES_PATH}/${filename}`)
			.then(html=>{return html;})
			.catch(err=>{reject(err);});

			const tablerows = await extractTableRows(html)
			.then(tablerows => {return tablerows;})
			.catch(err=>{reject(err);});

			resolve(tablerows);
		});
		promises.push(promise);
	});

	Promise.all(promises)
	.then(tablesrows => {
		const table = _combineTableRows(tablesrows);
		console.log(table.length);
	})
	.catch(err => {console.error(err);});
}
combineTables();

module.exports = combineTables;