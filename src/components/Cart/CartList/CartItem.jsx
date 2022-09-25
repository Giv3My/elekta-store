import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromCart } from '../../../redux/slices/cartSlice';

import { QuantityButtons, ProductPrice } from '../../General/ui';
import { Trash } from '../../../assets/img/cart';

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-list__item">
      <img className="item__img" src={img} alt="productImg" />
      <div className="item__title">
        <p className="item__title-text">{title}</p>
      </div>
      <QuantityButtons id={id}>{quantity}</QuantityButtons>
      <ProductPrice price={price} quantity={quantity} />
      <button className="remove-from-cart__button" onClick={handleRemoveFromCart}>
        <span className="remove-from-cart__button-icon">
          <Trash color="#BDBDBD" />
        </span>
      </button>
    </div>
  );
};

export default CartItem;
