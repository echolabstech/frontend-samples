const regex = {
	alphabetOnly: /[a-zA-Z]+/,
}

function compare(firstElement, secondElement, lang) {
	/*
		left.localeCompare(right) returns:
		negative# if left before right
		positive# if right before left
		0 if equal
	*/
	const fe_index = firstElement.search(regex.alphabetOnly);
	const se_index = secondElement.search(regex.alphabetOnly);
	const fe = firstElement.substring(fe_index);
	const se = secondElement.substring(se_index);
	return fe.localeCompare(se, lang);
}

function sortTable(table) {
	var rows, switching, i, x, y, shouldSwitch;
	switching = true;
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		 // Loop through all table rows
		for (i = 0; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
			one from current row and one from the next: */
			x = rows[i].cells[2].textContent;
			y = rows[i + 1].cells[2].textContent;
			// Check if the two rows should switch place:
			if (compare(x, y, 'en') > 0) {
				// If so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch
			and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

module.exports = sortTable;