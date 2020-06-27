class Logger {
	constructor() {
		Logger.logger = this
	}
	static logger: Logger

	log = (...args: any[]) => {
		args.map((value, index) => {
			console.log(index, value)
		})
	}
}

const logger = new Logger()
export default logger
