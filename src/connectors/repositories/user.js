import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  search = (params) => requestApi('get', `${this.path}/search`, params);
  info = (params) => requestApi('get', `${this.path}/info`, params);
  profile = (params) => requestApi('get', `${this.path}/public-profile`, params);
  getSettings = (params) => requestApi('get', `${this.path}/settings`, params, true);
}

export const UserRepository = new Repository('/user');
