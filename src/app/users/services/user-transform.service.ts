import {Injectable} from '@angular/core';
import {User, UserRaw, UserTable} from '../../models/user';
import {BasicStatistics} from '../../models/basic-statistics';

interface UserPerPage {
  user: User;
  basicStats: BasicStatistics;
}

@Injectable({
  providedIn: 'root'
})
export class UserTransformService {

  constructor() {
  }

  static transformUser(rowUser: UserPerPage): UserTable {
    return {...rowUser.user, ...rowUser.basicStats};
  }

  static transformStats(acc: BasicStatistics, stats: BasicStatistics): BasicStatistics {
    return {
      clicks: acc.clicks + stats.clicks,
      user_id: acc.user_id
    };
  }

  public transformUserRawToUserTable(rawUser: UserRaw): UserTable {
    if (!rawUser.basicStats) {
      rawUser.basicStats = [];
    }
    const totalBasicStats = rawUser.basicStats.reduce(UserTransformService.transformStats
      , {
        clicks: 0,
        user_id: 0
      });
    const rawUserTransformedStat = Object.assign({}, rawUser, {basicStats: totalBasicStats});
    return UserTransformService.transformUser(rawUserTransformedStat);
  }
}
