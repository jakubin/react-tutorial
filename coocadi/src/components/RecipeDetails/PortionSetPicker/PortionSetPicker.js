import React from 'react';
import classes from './PortionSetPicker.module.css';

import PortionPicker from '../PortionPicker/PortionPicker';

const portionSetPicker = ({ portionSet, onPortionSetChange }) => {

  const amountChangeHandler = (portionSize, amount) => {
    const newPortionSet = { ...portionSet };
    newPortionSet[portionSize] = amount;
    onPortionSetChange(newPortionSet);
  };

  return (
    <div className={classes.container}>
      <div><PortionPicker label="S" amount={portionSet.S} onAmountChange={amount => amountChangeHandler("S", amount)} /></div>
      <div><PortionPicker label="M" amount={portionSet.M} onAmountChange={amount => amountChangeHandler("M", amount)} /></div>
      <div><PortionPicker label="L" amount={portionSet.L} onAmountChange={amount => amountChangeHandler("L", amount)} /></div>
    </div>
  );
};

export default portionSetPicker;