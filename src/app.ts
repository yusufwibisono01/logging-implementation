import { InitMiddleware } from 'logging';
import express from 'express';
import mlog from './utils/mlog';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { UserRepository } from './repositories/userRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const middleware = new InitMiddleware().handleLogger(mlog).initialize();

const app = express();
app.use((req, res, next) => {
    middleware.httpMiddleware(req, res);
    next();
});

app.get('/users/:id', (req, res) => {
    if (req.headers['x-trace-id']) {
        console.log('Request ID:', req.headers['x-trace-id']);
    }
    console.log(req.headers);
    userController.getUser(req, res);
});

app.get('/memory-usage', (req, res) => {
    const memoryUsage = process.memoryUsage();
    const memoryUsageInMB = {
        rss: convertToMB(memoryUsage.rss),
        heapTotal: convertToMB(memoryUsage.heapTotal),
        heapUsed: convertToMB(memoryUsage.heapUsed),
        external: convertToMB(memoryUsage.external),
    };
    res.json(memoryUsageInMB);
});

function convertToMB(bytes: number): number {
    return Math.round(bytes / 1024 / 1024);
}

export default app;
