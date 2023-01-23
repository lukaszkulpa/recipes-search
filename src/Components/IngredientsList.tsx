import { ChangeEvent, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Ingredient from "../Components/Ingredient";
import { IIngredient as IIngredient } from "../Interfaces";
import List from '@mui/material/List';


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
      <Grid container item xs={12} sm={4}>
          <TextField
            type="text"
            placeholder="Ingredient..."
            name="ingredient"
            value={ingredient}
            onChange={handleChange}
         />
        <Button variant="contained" onClick={addIngredient}>+</Button>
        <List>{ingredientsList.map((ingredient: IIngredient, key: number) => {
          return <Ingredient key={key} ingredient={ingredient} deleteIngredient={deleteIngredient} />;
        })}
        </List>
        <Button variant="contained" onClick={ingredientsClick}>Search for Recipes!</Button>
      </Grid>
      )
    }
    
export default IngredientsList;
    