import * as React from 'react';

export const App = (props: { name: string }) => {
	console.log('jjj name', props.name);
	return (
		<>
			<h1>'Hello' {props.name}</h1>
		</>
	);
};

export default App;
