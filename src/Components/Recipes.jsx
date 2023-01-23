import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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
			<Grid
			container item
			direction="row"
			justifyContent="space-evenly"
			alignItems="center"
			xs={12}
			sm={8}
			sx={{ m: '1rem' }}
			>
			{recipes.map((recipe) => {
				return (
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="150"
							image={recipe.image}
							alt={recipe.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="h6" component="div">
								{recipe.title}
							</Typography>
						</CardContent>
					</Card>
					)
				})}
				
				</Grid>
				)
			};
			
			export default Recipes;