import { IObject } from '@/constant/interface';
import { get, post } from '@/utils/request';
import { commonPrefix } from './prefix';

export const login = (params: IObject) => post(`${commonPrefix}/login`, params);
