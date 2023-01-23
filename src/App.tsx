import { FC } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NavBar from "./Components/NavBar";
import IngredientsList from "./Components/IngredientsList";
import Recipes from "./Components/Recipes";


const App: FC = () => {
	return (
		<Box>
			<NavBar />
			<Grid container spacing={2} sx={{ m: '1rem' }}>
				<IngredientsList/>
				<Recipes/>
			</Grid>
		</Box>
	);
};
		
export default App;