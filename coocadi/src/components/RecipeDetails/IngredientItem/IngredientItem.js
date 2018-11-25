import React from 'react';
import classes from './IngredientItem.module.css';

import { pluralizeAmountPL, getBaseUnitFormsPL } from '../../../logic/common/pluralization';

const ingredientItem = (props) => {
  const ingredient = props.ingredient;
  const multiplier = props.multiplier;

  let amount;
  let measureNames;

  if (ingredient.amountInMeasure) {
    amount = ingredient.amountInMeasure * multiplier;
    measureNames = ingredient.measureNames;
  } else {
    amount = ingredient.amountInBaseUnit * multiplier;
    measureNames = getBaseUnitFormsPL(ingredient.baseUnit);
  }

  const measureName = pluralizeAmountPL(measureNames, amount);

  const commentElement = ingredient.comment ? <><br/><span className={classes.comment}>{ingredient.comment}</span></> : null;

  return (
    <>
      <span>{ingredient.name}</span> - <span className={classes.amount}><span className={classes.amountValue}>{amount}</span> <span>{measureName}</span></span>
      {commentElement}
    </>
  );
};

export default ingredientItem;