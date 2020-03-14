"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { 
	readHTMLFileNames,
	getHTMLFile,
} = require('./combine_tables');
const sortTable = require('./sort_table');
const tablesPath = './tables';
const template = 'template.html';
const encoding = 'utf-8';

const templatePath = `./${template}`;
fs.readFile(templatePath, encoding, async (err, templateHTML) => {
	if (err) console.error(err);

	const fileNames = readHTMLFileNames(tablesPath);
	if (!Array.isArray(fileNames)) throw new Error(fileNames);

	const templateDom = new JSDOM(templateHTML);
	const templateDocument = templateDom.window.document;
	const templateTable = templateDocument.querySelector('table');
	for (var i = 0; i < fileNames.length; i++) {
		const fileName = fileNames[i];
		const html = await getHTMLFile(`${tablesPath}/${fileName}`);
		const dom = new JSDOM(html);
		const document = dom.window.document;
		const table = document.querySelector('table');
		for (var j = 0; j < table.rows.length; j++) {
			let row = table.rows[j];
			row = templateTable.insertRow(row);
			for (var k = 0; k < table.rows[j].cells.length; k++) {
				const cell = row.insertCell(table.rows[j].cells[k]);
				cell.textContent = table.rows[j].cells[k].textContent;
			}
		}
	}
	sortTable(templateTable);
	writeFile('sample.html', templateDom.serialize());
});

function writeFile(filename, data, encoding='utf-8') {
	fs.writeFile(filename, data, encoding, err => {
		if (err) return console.error(err);
		console.log(`write to ${filename} succesful`);
	});
}
