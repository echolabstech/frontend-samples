(function() {
	function submitReportRequest() {
		console.log('submit report request');

		let d = $.Deferred();
		setTimeout(function() {
			let requestId = '50807017178';
			console.log('report request submitted');
			d.resolve(requestId);
		}, 2000);
		return d.promise();
	}

	function checkReportRequestSubmission(requestId) {
		console.log('check report request status');

		let d = $.Deferred();
		setTimeout(function() {
			let status = '_DONE_';
			console.log('report request ready');
			d.resolve();
		}, 2000);
		return d.promise();
	}

	function getReportRequestResultList() {
		console.log('get report request list');

		let d = $.Deferred();
		setTimeout(function() {
			let reportId = '3930730955017178';
			console.log('report ready for download');
			d.resolve(reportId);
		}, 2000);
		return d.promise();
	}

	function getIndividualReport() {
		console.log('downloading report');

		let d = $.Deferred();
		setTimeout(function() {
			let report = [
				{'item-name':'Drive'},
				{'item-name':'24 Hour Work Week'},
			];
			console.log('report downloaded');
			d.resolve(report);
		}, 2000);
		return d.promise();
	}

	$.when(submitReportRequest())
	.then(checkReportRequestSubmission)
	.then(getReportRequestResultList)
	.then(getIndividualReport)
	.then(function(report) {
		console.log('pass report to parser');
	});
})();