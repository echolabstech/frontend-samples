"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const TABLES_PATH = './tables';

// look at file system to find all tables
const readHTMLFileNames = () => {
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

const getHTMLFile = (filename, encoding='utf-8') => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, encoding, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
}

const insertRows = (destTable, html) => {
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const srcTable = document.querySelector('table');
	for (var i = 0; i < srcTable.rows.length; i++) {
		destTable.insertRow(srcTable.rows[i]);
		for (var e = 0; e < srcTable.rows[i].cells.length; e++) {
			destTable.rows[i].insertCell(srcTable.rows[i].cells[e]);
			destTable.rows[i].cells[e].textContent = srcTable.rows[i].cells[e].textContent;
		}
	}
}

const combineTables = async (table) => {
	const fileNames = readHTMLFileNames();
	if (!Array.isArray(fileNames)) throw new Error(fileNames);

	for (var i = 0; i < fileNames.length; i++) {
		const filename = fileNames[i];
		const html = await getHTMLFile(`${TABLES_PATH}/${filename}`)
		.then(html=>{return html;})
		.catch(err=>{reject(err);});

		insertRows(table, html);
	}
}

module.exports = combineTables;