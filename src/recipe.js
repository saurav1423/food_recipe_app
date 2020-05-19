import React from 'react';

const Recipe = ({ title, images, calories, ingredients }) => {
	return (
		<div className="form">
			<h1>{title}</h1>
			<img src={images} alt="images" />
			<h2>{calories}</h2>
			<ul>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
