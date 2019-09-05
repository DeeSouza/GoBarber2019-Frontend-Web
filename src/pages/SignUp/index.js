import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
	email: Yup.string()
		.required('Campo obrigatório')
		.email('Insira um e-mail válido'),
	name: Yup.string().required('Campo obrigatório'),
	password: Yup.string()
		.required('Campo obrigatório')
		.min(6, 'A senha precisa ter mais de 6 caracteres'),
});

export default function SignUp() {
	function handleSubmit(data) {}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form onSubmit={handleSubmit} schema={schema} autoComplete="off">
				<Input name="name" type="text" placeholder="Nome completo" />
				<Input name="email" type="text" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>

				<button type="submit">Criar Conta</button>
				<Link to="/">Já tenho uma conta</Link>
			</Form>
		</>
	);
}
