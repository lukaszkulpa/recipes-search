import { ChangeEvent, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Ingredient from "../Components/Ingredient";
import { IIngredient as IIngredient } from "../Interfaces";
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";


const IngredientsList = () => {
  const [ingredient, setIngredient] = useState<string>("");
  const [ingredientsList, setIngredientsList] = useState<IIngredient[]>([]);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "ingredient") {
      setIngredient(event.target.value);
    }
  };
  
  const addIngredient = (): void => {
    const newIngredient = { ingredientName: ingredient };
    setIngredientsList([...ingredientsList, newIngredient]);
    setIngredient("");
    console.log(ingredientsList);
  };
  
  const deleteIngredient = (ingredientToDelete: string): void => {
    setIngredientsList(
      ingredientsList.filter((ingredient) => {
        return ingredient.ingredientName !== ingredientToDelete;
      })
      );
  };


  const ingredientsClick = () => {
    console.log(ingredientsList);
    let query = ""
    for (let i = 0; i < ingredientsList.length - 1; i++) {
      query += ingredientsList[i].ingredientName + ",+";
    }
    query += ingredientsList[ingredientsList.length - 1].ingredientName;
    console.log(query);
  }

    return (
      <Grid
        container
        item
        xs={12}
        sm={2}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid>
          <TextField
            type="text"
            placeholder="Ingredient..."
            name="ingredient"
            value={ingredient}
            onChange={handleChange}
         />
          <IconButton onClick={addIngredient} edge="end" aria-label="delete">
            <AddIcon />
          </IconButton>
        </Grid>
        <Box
          sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
          <List dense>{ingredientsList.map((ingredient: IIngredient, key: number) => {
            return <Ingredient key={key} ingredient={ingredient} deleteIngredient={deleteIngredient} />;
          })}
          </List>    
        </Box>

        <Button variant="contained" onClick={ingredientsClick}>Search for Recipes!</Button>
      </Grid>
      )
    }
    
export default IngredientsList;
    