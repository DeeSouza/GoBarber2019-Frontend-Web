import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
	const { email, password } = payload;

	try {
		const response = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		if (!user.provider) {
			toast.error('Usuário não é prestador.');
			return;
		}

		api.defaults.headers.Authorization = `Bearer ${token}`;

		yield put(signInSuccess(token, user));

		history.push('dashboard');
	} catch (err) {
		toast.error('Falha na autenticação. Verifique seus dados.');
		yield put(signFailure());
	}
}

export function* signUp({ payload }) {
	try {
		const { name, email, password } = payload;

		yield call(api.post, 'users', {
			name,
			email,
			password,
			provider: true,
		});

		history.push('/');

		toast.success('Conta criada com sucesso!');
	} catch (err) {
		toast.error('Falha no cadastro. Verifique seus dados!');

		yield put(signFailure());
	}
}

export function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
