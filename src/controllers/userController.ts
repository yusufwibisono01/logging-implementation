import mlog from '../utils/mlog';
import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getUser(req: Request, res: Response) {
        const userId = req.params.id;

        mlog.info('from controller', userId);
        console.log('get trace id from controller', mlog.getTraceId());

        const user = this.userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    }
}
