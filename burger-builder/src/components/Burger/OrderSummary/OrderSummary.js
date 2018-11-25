import React from 'react';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends React.Component {

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(x => (
        <li key={x}>
          <span style={{ textTransform: 'capitalize' }}>{x}</span>: {this.props.ingredients[x]}
        </li>));

    return (
      <>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Total price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </>
    )
  }
}
