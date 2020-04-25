import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_nWzAmDcLKWluX96MMjNoVsE700qPMjrNOf';

  const onToken = (token) => {
    // console.log(token);
    // alert('Payment Successful!');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment Successful!');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with the payment. Please make sure you use the provided credit card!'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now!'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
