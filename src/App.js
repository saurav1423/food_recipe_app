import React from 'react';
import { useState, useEffect } from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {
	const api_id = '2e82aa61';
	const api_keys = '925ad3fe0cbc93b8b506898f34b4de6f';
	const [recipe, setRecipe] = useState([]);
	const [query, setQuery] = useState('chicken');
	const [search, setSearch] = useState('chicken');

	useEffect(() => {
		getRecipe();
	}, [query]);

	const getRecipe = async () => {
		const recipe = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_keys}&from=0&to=9`
		);
		const data = await recipe.json();
		setRecipe(data.hits);
		console.log(data.hits);
	};

	const getSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const onclick = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};
	return (
		<div className="App">
			<form onSubmit={onclick}>
				<input type="text" value={search} onChange={getSearch} />
				<button type="submit">Search</button>
			</form>
			<div className="recipe">
				{recipe.map((rec) => (
					<Recipe
						title={rec.recipe.label}
						images={rec.recipe.image}
						calories={rec.recipe.calories}
						ingredients={rec.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};
export default App;
