import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp() {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form onSubmit={handleSubmit}>
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
