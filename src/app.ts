import logger from './utils/log';
import express from 'express';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { UserRepository } from './repositories/userRepository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const app = express();
app.use((req, res, next) => {
    logger.log.httpMiddleware(req, res);
    next();
});

app.get('/users/:id', (req, res) => {
    userController.getUser(req, res);
});

export default app;