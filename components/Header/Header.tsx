import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, Logo, Next, Previous, CartIcon, Close } from '../../assets/Icon';
import { Profil } from '../../assets/Images';
import styles from './Header.module.css';
import Cart from '../Cart/Cart';
import SideNavComp from '../SideNav/SideNav';

interface Props {
  totalCart: Number;
  setTotalCart: Dispatch<SetStateAction<Number>>;
  setCounter: Dispatch<SetStateAction<Number>>;
}

const Header = ({ totalCart, setTotalCart, setCounter }: Props) => {
  const [cartInfo, setCartInfo] = useState<Boolean>(false);
  const [showSideNav, setShowSideNav] = useState<Boolean>(false);

  return (
    <>
      <SideNavComp showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.menu} onClick={() => setShowSideNav(true)}>
              <Menu />
            </div>
            <Logo className={styles.subHeader} />
          </div>

          <div className={styles.navWrapper}>
            <p className={styles.nav}>Collections</p>
            <p className={styles.nav}>Men</p>
            <p className={styles.nav}>Women</p>
            <p className={styles.nav}>About</p>
            <p className={styles.nav}>Contact</p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div>
            <CartIcon
              color="#69707D"
              className={styles.cart}
              onClick={() =>
                cartInfo ? setCartInfo(false) : setCartInfo(true)
              }
            />

            {totalCart ? <div className={styles.count}>{totalCart}</div> : null}
          </div>
          <div className={styles.profil}>
            <Image
              className={styles.imgProfil}
              src={Profil}
              alt="Profil"
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>

      {cartInfo ? (
        <Cart
          totalCart={totalCart}
          setTotalCart={setTotalCart}
          setCounter={setCounter}
        />
      ) : null}
    </>
  );
};

export default Header;
