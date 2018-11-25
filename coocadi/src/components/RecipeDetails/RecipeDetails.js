import React from 'react';
import classes from './RecipeDetails.module.css'

import IngredientsSection from './IngredientsSection/IngredientsSection';
import PreparationStepsSection from './PreparationStepsSection/PreparationStepsSection';
import PortionSetPicker from './PortionSetPicker/PortionSetPicker';

const recipeDetails = ({recipe, portionSet, onPortionSetChange, multiplier}) => {

  const ingredientsSectionElements = recipe.ingredientsSections
    .map((section, index) => <IngredientsSection section={section} key={index} multiplier={multiplier}/>);

  const preparationStepsSectionElements = recipe.preparationStepsSections
    .map((section, index) => <PreparationStepsSection section={section} key={index} />);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <div className={classes.container}>
        <div className={classes.ingredients}>
          <h3>Porcje</h3>
          <PortionSetPicker portionSet={portionSet} onPortionSetChange={onPortionSetChange} />
          <h3>Składniki</h3>
          {ingredientsSectionElements}
        </div>
        <div className={classes.preparationSteps}>
          <h3>Sposób przygotowania</h3>
          {preparationStepsSectionElements}
        </div>
      </div>
    </div>
  );
};

export default recipeDetails;