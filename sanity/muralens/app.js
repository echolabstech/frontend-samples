import {log, error} from './logger.js';

if ('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(function(position) {
		log(position.coords.latitude, position.coords.longitude);
	}, function(error) {
		error('geolocation.getCurrentPosition() not working');
	});
} else {
	error('geolocation API not available');
}
