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
    userController.getUser(req, res);
});

export default app;
