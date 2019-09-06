import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
	email: Yup.string()
		.required('Campo obrigatório')
		.email('Insira um e-mail válido'),
	password: Yup.string().required('Campo obrigatório'),
});

export default function SignIn() {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	function handleSubmit({ email, password }) {
		dispatch(signInRequest(email, password));
	}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form onSubmit={handleSubmit} autoComplete="off" schema={schema}>
				<Input name="email" type="text" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>

				<button type="submit">
					{loading ? 'Carregando...' : 'Acessar'}
				</button>
				<Link to="/register">Criar uma conta</Link>
			</Form>
		</>
	);
}
