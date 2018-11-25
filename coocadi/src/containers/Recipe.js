import React from 'react';
import axios from 'axios';

import RecipeDetails from '../components/RecipeDetails/RecipeDetails';

class Recipe extends React.Component {
  state = {
    recipe: null,
    portionSet: null,
    multiplier: 1
  };

  getMultiplier(portionSet) {
    if (!portionSet || !this.state.recipe) return 1;

    let multiplier = 0;
    this.state.recipe.availablePortionSizes.forEach(size => {
      multiplier += portionSet[size.portionSize] * size.multiplier / this.state.recipe.portions;
    });

    return multiplier;
  }

  portionSetChangedHandler = (portionSet) => {
    const multiplier = this.getMultiplier(portionSet);
    this.setState({ portionSet, multiplier });
  };

  async componentDidMount() {
    let recipe = null;
    let portionSet = { S: 0, M: 0, L: 0 };
    let multiplier = 1;
    if (this.props.recipeId) {
      try {
        const response = await axios.get(`http://api.coocadi.pl/client/recipes/${this.props.recipeId}`);
        if (response.status === 200) {
          recipe = response.data;
        }
      }
      catch (error) {
        console.log("Error fetching recipe.", { recipeId: this.props.recipeId, error: error });
      }
    }

    if (recipe) {
      portionSet[recipe.portionSize] = recipe.portions;
      multiplier = this.getMultiplier(portionSet);
    }

    this.setState({ recipe, portionSet, multiplier });
  }

  render() {
    if (this.state.recipe) {
      return <RecipeDetails
        recipe={this.state.recipe}
        portionSet={this.state.portionSet}
        multiplier={this.state.multiplier}
        onPortionSetChange={this.portionSetChangedHandler} />
    } else {
      return <div>Loading...</div>
    }
  }
}

export default Recipe;
