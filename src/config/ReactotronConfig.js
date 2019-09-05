import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
	const tron = Reactotron.configure({
		name: 'GoBarber Web',
		host: 'localhost',
		port: 3333,
	}).connect();

	tron.clear();

	console.tron = tron;
}
