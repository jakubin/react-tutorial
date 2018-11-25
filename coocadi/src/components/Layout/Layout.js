import React from 'react';
import classes from './Layout.module.css';
import Recipe from '../../containers/Recipe';

const layout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        Header
      </div>
      <div className={classes.content}>
        <Recipe recipeId="ff3c9619-337e-4fae-8f7b-df0ac58d2e61"/>
      </div>
    </div>
  );
};

export default layout;