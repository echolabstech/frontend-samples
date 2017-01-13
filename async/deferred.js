(function() {
	function asyncTask() {
		console.log('asyncTask called');

		let d = $.Deferred();

		d.then(function(arg) { // call done callback(s)
			console.log(6+arg);
		}, function(arg) { // call fail callback(s)
			console.log(7+arg);
		}, function(arg) { // call progress callback(s)
			console.log(8+arg);
		});

		d.then(function(arg) { // call done callback(s)
			console.log(9+arg);
		}, function(arg) { // call progress callback(s)
			console.log(10+arg);
		}).catch(function(arg) { // call fail callback(s)
			console.log(11+arg);
		});

		d.always(function(arg) {
			console.log(1+'-always run:'+arg);
		});
		d.done(function(arg) {
			console.log(2+arg);
		});
		d.fail(function(arg) {
			console.log(3+arg);
		});
		d.progress(function(arg) {
			console.log(4+arg);
		});
		d.always(function(arg) {
			console.log(5+'-always run:'+arg);
		});

		setTimeout(function(){
			console.log('first timeout reached');
			d.notify('-ready to resolve, state:'+d.state());
			d.resolve('-call doneCallBack(s)');
		}, 2000);

		setTimeout(function(){
			console.log('second timeout reached');
			d.notify('-resolution failed, state:'+d.state());
			d.reject('-call failedCallback(s)');
		}, 1000);

		console.log('return deferred');
		return d.promise();
	}

	console.log('calling asyncTask');
	let promise = asyncTask();
	promise.done(function() {
		console.log('promise value ready');
	});
	
	console.log('post call asyncTask');

	$.when(asyncTask()).then(function(arg) {
		console.log(12+arg);
		console.log('call then after when');
	}, function(arg) {
		console.log(13+arg);
		console.log('call then after when');
	}, function(arg) {
		console.log(14+arg);
		console.log('call then after when');
	});

	$.when(asyncTask())
	.done(function(arg) {
		console.log(15+arg);
		console.log('call then after when');
	})
	.fail(function(arg) {
		console.log(16+arg);
		console.log('call then after when');
	});
})();