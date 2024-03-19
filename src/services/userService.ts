import logger from '../utils/log';

import { UserRepository } from '../repositories/userRepository';

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    getUserById(userId: string) {
        logger.log.info('from service', userId);
        return this.userRepository.findById(userId);
    }
}
