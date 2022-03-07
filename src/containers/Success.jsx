import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Name, Thanks for your purchase</h2>
        <span>Your order will be arrive in 3 days ar youe address</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  );
};

export default Success;
