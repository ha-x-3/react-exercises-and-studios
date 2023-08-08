import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={5} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
      <p>Image by <a href="https://pixabay.com/users/8moments-4532813/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2857032">Simon Berger</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2857032">Pixabay</a></p>
    </>
  );
}
