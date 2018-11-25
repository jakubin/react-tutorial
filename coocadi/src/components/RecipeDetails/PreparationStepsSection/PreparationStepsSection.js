import React from 'react';
import classes from './PreparationStepsSection.module.css';

const preparationStepsSection = (props) => {
  const section = props.section;

  const stepElements = section.steps
    .filter(x => x.length > 0)
    .map((step, index) => <li key={index}>{step}</li>);
  const commentElement = section.comment ? <p className={classes.comment}>{section.comment}</p> : null;

  return (
    <div>
      <h4>{section.sectionName}</h4>
      <ol>
        {stepElements}
      </ol>
      {commentElement}
    </div>
  );
};

export default preparationStepsSection;