import logger from './utils/log';
import express from 'express';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { UserRepository } from './repositories/userRepository';

const app = express();
const port = 3000;

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.get('/users/:id', (req, res) => {
    logger.log.httpMiddleware(req, res);
    userController.getUser(req, res);
});

app.get('/doctors/:id', (req, res) => {
    logger.log.httpMiddleware(req, res);
    userController.getUser(req, res);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
