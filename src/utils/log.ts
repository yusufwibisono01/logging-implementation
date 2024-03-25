import { InitLogging, Logger, InitMiddleware, Middleware } from 'logging';

class Logging {
    log = new InitLogging()
    .withRedaction(['password', 'token'])
    .withFormatter('pino-pretty')
    .withLevel('info')
    .initialize();
}

const logger = new Logging();
export default logger;
