import React from 'react';
import { useDispatch } from 'react-redux';

import { increment, decrement } from '../../../../redux/slices/cartSlice';

import { QuantityMinus, QuantityPlus } from '../../../../assets/img/general';

export const QuantityButtons = ({ id, children }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  return (
    <div className="quantity-buttons">
      <button
        type="button"
        className={
          children > 1 ? 'quantity-buttons__button' : 'quantity-buttons__button disable'
        }
        onClick={handleDecrement}
      >
        <span className="quantity-buttons__button-icon">
          <QuantityMinus disabled={children > 1 ? false : true} />
        </span>
      </button>
      <p className="quantity-buttons__qty">{children}</p>
      <button
        type="button"
        className="quantity-buttons__button"
        onClick={handleIncrement}
      >
        <span className="quantity-buttons__button-icon">
          <QuantityPlus />
        </span>
      </button>
    </div>
  );
};
