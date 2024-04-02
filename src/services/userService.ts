import mlog from '../utils/mlog';

import { UserRepository } from '../repositories/userRepository';

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    getUserById(userId: string) {
        mlog.info('from service', userId);
        return this.userRepository.findById(userId);
    }
}
