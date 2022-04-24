import React from 'react';
import Item from './Item';

const App = () =>
{
	const ar = [1,2,3,4,5];


	return (<div>
		{ar.map(i => <Item key={Math.random()} item={i} />)}
		</div>);
}

export default App;