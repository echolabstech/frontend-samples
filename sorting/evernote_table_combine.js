"use strict";

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { 
	readHTMLFileNames,
	getHTMLFile,
} = require('./combine_tables');
const sortTable = require('./sort_table');
const appPath = '.';
const tableDir = 'tables';
const tablesPath = `${appPath}/${tableDir}/`;
const encoding = 'utf-8';
const outputFile = 'sample.html';
const outputDir = 'output';
const outputPath = `${appPath}/${outputDir}`;
const templateFile = 'template.html';
const templatePath = `${appPath}/${templateFile}`;

fs.readFile(templatePath, encoding, async (err, templateHTML) => {
	if (err) console.error(err);

	const fileNames = readHTMLFileNames(tablesPath);
	if (!Array.isArray(fileNames)) throw new Error(fileNames);

	const templateDom = new JSDOM(templateHTML);
	const templateDocument = templateDom.window.document;
	const templateTable = templateDocument.querySelector('table');
	for (var i = 0; i < fileNames.length; i++) {
		const filePath = fileNames[i];
		const html = await getHTMLFile(filePath);
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
	sortTable(templateTable, 0);
	if (!fs.existsSync(outputPath)){
	    fs.mkdirSync(outputPath);
	}
	const output = `${outputPath}/${outputFile}`;
	writeFile(output, templateDom.serialize());
});

function writeFile(fileName, data, encoding='utf-8') {
	fs.writeFile(fileName, data, encoding, err => {
		if (err) return console.error(err);
		console.log(`write to ${fileName} succesful`);
	});
}
