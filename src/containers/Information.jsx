import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {state, addToBuyer } =useContext(AppContext);
  const form = useRef(null);
  const history = useNavigate();
  const { cart } = state;

  const handleSummit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    history('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Information of contact:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="CompletedName" name="name" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="Address" name="Address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="CP" name="cp" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Return
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSummit}>Pay</button>
          </div>
        </div>
      </div>
      <div className="Informartion-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div className="Informartion-item" key={item.tittle}>
            <div className="Informartion-item">
              <div className="Informartion-element">
                <h4>{item.tittle}</h4>
                <span>
                  $
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
