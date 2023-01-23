import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async (query = 'apples,+flour,+sugar') => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${process.env.REACT_APP_API_KEY}&number=9`
		);
		const data = await api.json();
		setRecipes(data);
		console.log("🚀 ~ file: Recipes.tsx:15 ~ getRecipes ~ data", data)
	};

	return (
		<Grid>
			{recipes.map((recipe) => {
				return (
					<div key={recipe.id}>
						<p>{recipe.title}</p>
					</div>
				)
			})}

		</Grid>
	)
};

export default Recipes;