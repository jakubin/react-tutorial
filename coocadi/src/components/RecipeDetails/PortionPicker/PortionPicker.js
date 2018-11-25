import React from 'react';
import classes from './PortionPicker.module.css'

const portionPicker = ({ label, amount, onAmountChange }) => {
  return (
    <div className={classes.container}>
      <div className={classes.label}>{label}</div>
      <div className={classes.amount}>{amount}</div>
      <div className={classes.decrementor} onClick={() => onAmountChange(Math.max(0, amount - 1))}>−</div>
      <div className={classes.incrementor} onClick={() => onAmountChange(amount + 1)}>+</div>
    </div>
  );
};

export default portionPicker;