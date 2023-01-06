import { login } from '@/services/global';

const initState = {
    userInfo: {
        userId: '',
        isLogin: false,
        userName: '',
    },
};

export default {
    namespace: 'global',
    state: initState,
    reducers: {
        saveUserInfo(state: any, { payload }: any) {
            return { ...state, userInfo: payload.userInfo };
        },
    },
    effects: {
        *login({ payload }: any, { call, put }: any) {
            const loginInfo = yield call(login, payload.params);
            yield put({
                type: 'saveUserInfo',
                payload: {
                    userInfo: {
                        userId: loginInfo?.userId,
                        isLogin: true,
                        userName: loginInfo?.userName,
                    }
                },
            });
        },
    }
};
