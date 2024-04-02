import { InitLogging } from 'logging';

const mlog = new InitLogging()
    .withRedaction(['password', 'token'])
    .withFormatter('pino-pretty')
    .withLevel('info')
    .initialize();

export default mlog;
