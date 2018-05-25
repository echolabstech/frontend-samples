class Logger {
	log(...messages) {
		console.log(...messages);
	}

	debug(...messages) {
		console.debug(...messages);
	}

	info(...messages) {
		console.info(...messages);
	}

	error(...messages) {
		console.error(...messages);
	}

	warn(...messages) {
		console.warn(...messages);
	}
}

const logger = new Logger();
export const log = logger.log;
export const debug = logger.debug;
export const info = logger.info;
export const error = logger.error;
export const warn = logger.warn;
