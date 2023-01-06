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
        *login({ payload, cb }: any, { call, put }: any) {
            console.log({ payload })
            const loginInfo = yield call(login, payload);
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
            cb && cb();
            localStorage.setItem('userToken', loginInfo?.userToken);
            localStorage.setItem('userId', loginInfo?.userId);
        },
    }
};
