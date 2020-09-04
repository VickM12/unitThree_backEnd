import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import Show from './components/Show';
import Edit from './components/Edit';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from 'react-router-dom';

const routes = [
	{
		path: '/:id/edit',
		component: Edit,
		name: 'Edit'
	},
	{
		path: '/:id',
		component: Show,
		name: 'Show'
	},
	{
		path: '/',
		component: App,
		name: 'Home'
	}
];

const app = document.getElementById('app');

ReactDOM.render(
	<Router>
		<Switch>
			{routes.map(route => {
				return (
					<Route
						component={route.component}
						key={route.name}
						path={route.path}
					/>
				);
			})}
		</Switch>
	</Router>,
	app
);
