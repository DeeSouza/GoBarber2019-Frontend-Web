import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	max-width: 600px;
	margin: 50px auto;

	form {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		input {
			background-color: rgba(0, 0, 0, 0.1);
			border: 0;
			border-radius: 4px;
			height: 44px;
			padding: 0 15px;
			color: #fff;
			margin: 10px 0 10px;
			width: 100%;

			&::placeholder {
				color: rgba(255, 255, 255, 0.7);
			}
		}

		span {
			color: #fff;
			align-self: flex-start;
			margin: 2px 0 10px;
			font-weight: bold;
		}

		hr {
			border: 0;
			height: 1px;
			background-color: rgba(255, 255, 255, 0.2);
			margin: 10px 0px 10px;
		}

		button {
			margin: 5px 0 0;
			height: 44px;
			background: #39beff;
			font-weight: bold;
			color: #fff;
			border: 0;
			border-radius: 4px;
			font-size: 16px;
			transition: background 0.2s ease-out;

			&:hover {
				background: ${darken(0.08, '#39beff')};
			}
		}

		a {
			color: #fff;
			margin-top: 15px;
			font-size: 16px;
			opacity: 0.8;

			&:hover {
				opacity: 1;
			}
		}
	}

	> button {
		margin: 10px 0 0;
		height: 44px;
		background: #f64c75;
		font-weight: bold;
		color: #fff;
		border: 0;
		border-radius: 4px;
		font-size: 16px;
		transition: background 0.2s ease-out;
		width: 100%;

		&:hover {
			background: ${darken(0.08, '#f64c75')};
		}
	}
`;
