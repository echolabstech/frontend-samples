class Logger {
	log(message) {
		console.log(message);
	}

	debug(message) {
		console.debug(message);
	}

	info(message) {
		console.info(message);
	}

	error(message) {
		console.error(message);
	}

	warn(message) {
		console.warn(message);
	}
}

const logger = new Logger();
export const log = logger.log;
export const debug = logger.debug;
export const info = logger.info;
export const error = logger.error;
export const warn = logger.warn;
