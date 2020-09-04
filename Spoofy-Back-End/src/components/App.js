import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [name, updateName] = useState('Fruits App');
	/*new fruit*/
	const [newFruit, updateNewFruit] = useState({
		name: '',
		color: '',
		readyToEat: ''
	});
	/* all fruits */
	const [allFruits, updateAllFruits] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api');
				const data = await response.json();
				updateAllFruits([...data]);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);
	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const response = await fetch('/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newFruit)
			});
			const data = await response.json();
			await updateAllFruits([...allFruits, data]);
			await updateNewFruit({
				name: '',
				color: '',
				readyToEat: ''
			});
		} catch (e) {
			console.error(e);
		}
	};

	const handleChange = () => {
		updateNewFruit({ ...newFruit, [event.target.id]: event.target.value });
	};
	return (
		<div className="Page-wrapper">
			<form onSubmit={handleSubmit} className="task-form">
				<h1> New Fruit Form </h1>
				Name:{' '}
				<input
					type="text"
					name="name"
					id="name"
					value={newFruit.name}
					onChange={handleChange}
				/>
				<br />
				Color:{' '}
				<input
					type="text"
					name="color"
					id="color"
					value={newFruit.color}
					onChange={handleChange}
				/>
				<br />
				Is Ready To Eat:{' '}
				<input
					type="checkbox"
					name="readyToEat"
					id="readyToEat"
					value={newFruit.readyToEat}
					onChange={handleChange}
				/>
				<br />
				<button type="submit">Create Fruit</button>
			</form>
			{allFruits.length > 0 &&
				allFruits.map(fruit => {
					return (
						<Link to={`/${fruit._id}`}>
							<div key={fruit._id}>{fruit.name}</div>
						</Link>
					);
				})}
		</div>
	);
}
