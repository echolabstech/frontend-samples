import {log, error} from './logger.js';

if ('geolocation' in navigator) {
	log('geolocation exists navigator');
} else {
	error('geolocation API not available');
}
