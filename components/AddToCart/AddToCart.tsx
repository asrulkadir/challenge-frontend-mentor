import React, { useEffect } from 'react';
import { Minus, Plus, CartIcon } from '../../assets/Icon';
import Button from '../Button/Button';
import styles from './AddToCart.module.css';

const AddToCart = ({ counter, setCounter, setTotalCart }: any) => {
  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleTotal = () => {
    setTotalCart(counter);
    localStorage.setItem('total', counter !== 0 ? counter : null);
  };

  return (
    <div className={styles.addToCart}>
      <div className={styles.counter}>
        <Minus className={styles.minus} onClick={handleMinus} />
        <p>{counter}</p>
        <Plus className={styles.plus} onClick={handlePlus} />
      </div>

      <Button
        title="Add to cart"
        onClick={handleTotal}
        icon={<CartIcon color="#fff" />}
      />
    </div>
  );
};

export default AddToCart;
