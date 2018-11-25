import React from 'react';
import classes from './IngredientsSection.module.css';

import IngredientItem from '../IngredientItem/IngredientItem';

const ingredientsSection = (props) => {
  const section = props.section;
  const multiplier = props.multiplier;

  const ingredientElements = section.ingredients
    .map((ingredient, index) => <li key={index}><IngredientItem ingredient={ingredient} multiplier={multiplier} /></li>);

  return (
    <div>
      <h4>{section.sectionName}</h4>
      <ul>
        {ingredientElements}
      </ul>
    </div>
  );
};

export default ingredientsSection;