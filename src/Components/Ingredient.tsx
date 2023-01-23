import { IIngredient as IIngredient } from "../Interfaces";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  ingredient: IIngredient;
  deleteIngredient(ingredientToDelete: string): void;
}

const Ingredient = ({ ingredient, deleteIngredient }: Props) => {
  return (
      <ListItem>
        <ListItemText primary={ingredient.ingredientName}/>
        <IconButton onClick={() => { deleteIngredient(ingredient.ingredientName); }} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
  );
};
export default Ingredient;