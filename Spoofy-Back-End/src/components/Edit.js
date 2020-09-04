import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let endpoint = '/api';

export default function Show(props) {
	const [fruit, updateFruit] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`${endpoint}/${props.match.params.id}`);
				const data = await response.json();
				await updateFruit(data);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return (
		<div className="Page-wrapper">
			{Object.keys(fruit).length > 0 ? (
				<div>
					<h1>{fruit.name.toUpperCase()} Edit Page.</h1>
					<h2>
						{fruit.name} is {fruit.color}.
					</h2>
					<h2>
						{fruit.name} is{' '}
						{fruit.readyToEat ? 'ready to eat' : 'is not edible'}.
					</h2>
				</div>
			) : (
				<h1>Nothing found on {props.match.params.id}.</h1>
			)}
			<h3>
				<Link to={'/'}>Go Back Home</Link>
			</h3>
		</div>
	);
}
