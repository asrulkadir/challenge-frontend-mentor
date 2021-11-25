import React from 'react';
import styles from './Button.module.css';

interface Props {
  title: string;
  icon: JSX.Element;
  onClick: () => void;
}

const Button = ({ title, icon, ...rest }: Props) => {
  return (
    <div className={styles.buttonCart} {...rest}>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Button;
