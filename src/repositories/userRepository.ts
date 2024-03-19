import logger from '../utils/log';

export class UserRepository {
    findById(userId: string): string {
        logger.log.info('from repository', userId);
        return userId;
    }
}
