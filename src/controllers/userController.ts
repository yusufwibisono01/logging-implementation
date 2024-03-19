import logger from '../utils/log';
import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getUser(req: Request, res: Response) {
        const userId = req.params.id;

        // proof that still follows the correlation id
        setTimeout(() => {
            logger.log.info('from controller', userId);
        }, 5000);

        const user = this.userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }
}
