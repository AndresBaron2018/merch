import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'

const Payment = ( history ) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:  'AZ1yitEck6uhJP-QiO69vy8DrvOTEvMTBKf9oRnMYHzE15VUTrFyMjpSLp9mF14HudY13i4L1RL9iUFb',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymenSuccess = (data) => {
    window.location.href = "/checkout/success"; // Here
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      };
      addNewOrder(newOrder,
        history.push('/checkout/success'),
        );
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order summary:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.tittle}</h4>
              <div>$
                {' '}
                {item.price}
              </div>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onPaymentStart={() => console.log('Started payment')}
          onSuccess={data => handlePaymenSuccess(data)}
          onError={error => console.log(error)}
          onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
