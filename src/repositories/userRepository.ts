import mlog from '../utils/mlog';

export class UserRepository {
    findById(userId: string): string {
        mlog.info('from repository', userId);
        console.log('get trace id from repository', mlog.getTraceId());
        return userId;
    }
}
