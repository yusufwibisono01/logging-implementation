import { InitLogging, Logger } from 'logging';

class Logging {
    log: Logger = new InitLogging()
        .withRedaction(['password', 'token'])
        .withFormatter('pino-pretty')
        .withLevel('info')
        .initialize();
}

const logger = new Logging();
export default logger;
