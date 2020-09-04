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
					<h1>{fruit.name.toUpperCase()} Show Page.</h1>
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
				<br />
				<Link to={`/${fruit._id}/edit`}>Go To Edit Page</Link>
			</h3>
		</div>
	);
}

/* class Show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stuff: {}
		};
	}

	getItem = async () => {
		try {
			const request = await fetch(`${endpoint}/${this.props.match.params.id}`);
			const response = await request.json();
			await this.setState({ stuff: response });
		} catch (e) {
			console.error(e);
		}
	};
	async componentDidMount() {
		await this.getItem();
	}
	render() {
		return (
			<div>
				{Object.keys(this.state.stuff).length > 0 ? (
					<h1>
						{this.state.stuff.value} on {this.props.match.params.id}
					</h1>
				) : (
					<h1>Nothing found on {this.props.match.params.id}</h1>
				)}
				<h3>
					<Link to={'/'}>Go Back Home</Link>
				</h3>
			</div>
		);
	}
}

export default Show; */
