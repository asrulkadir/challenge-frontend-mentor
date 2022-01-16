import styles from './Cart.module.css';
import Image from 'next/dist/client/image';
import { ThumbnailProduct1 } from '../../assets/Images';
import { Delete } from '../../assets/Icon';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  totalCart: any;
  setTotalCart: Dispatch<SetStateAction<Number>>;
  setCounter: Dispatch<SetStateAction<Number>>;
}

const Cart = ({ totalCart, setTotalCart, setCounter }: Props) => {
  const handleDelete = () => {
    if (confirm('Delete Cart?')) {
      setTotalCart(0);
      setCounter(0);
      localStorage.setItem('total', '0');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p className={styles.textTitle}>Cart</p>
      </div>
      <div className={styles.textDiv}>
        {totalCart > 0 ? (
          <div className={styles.wrapper}>
            <div className={styles.wrapperCart}>
              <Image
                className={styles.image}
                src={ThumbnailProduct1}
                alt="product"
                width={60}
                height={60}
              />

              <div className={styles.textCart}>
                Full Limited Edition Sneakers $125.00 x {totalCart}{' '}
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  {`$${125 * totalCart}.00`}
                </span>
              </div>
              <Delete style={{ cursor: 'pointer' }} onClick={handleDelete} />
            </div>
            <div className={styles.buttonCart}>Checkout</div>
          </div>
        ) : (
          <p className={styles.textContent}>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
