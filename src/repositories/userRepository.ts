import mlog from '../utils/mlog';

export class UserRepository {
    findById(userId: string): string {
        mlog.info('from repository', userId);
        return userId;
    }
}
