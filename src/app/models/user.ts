import {BasicStatistics} from './basic-statistics';

export interface User {
  email: string;
  first_name: string;
  gender: string;
  id: number;
  ip_address: string;
  last_name: string;
}

export interface UserTable extends User, BasicStatistics {
}

export interface UserRaw {
  user: User;
  basicStats: Array<BasicStatistics>;
}
