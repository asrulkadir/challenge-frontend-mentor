import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import { Next, Previous } from '../../assets/Icon';
import { SliderData } from '../../assets/SliderData';
import styles from './SliderPhone.module.css';

const ButtonNext = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 15rem;
  right: 1rem;
  z-index: 1;
`;

const ButtonPrevious = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 15rem;
  left: 1rem;
  z-index: 1;
`;

const SliderPhone = () => {
  const [current, setCurrent] = useState<number>(0);
  const [colorNext, setColorNext] = useState<string>('#1D2026');
  const [colorPrevious, setColorPrevious] = useState<string>('#1D2026');
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.ImageWrapper}>
      <ButtonPrevious
        onMouseOver={() => setColorPrevious('hsl(26, 100%, 55%)')}
        onMouseLeave={() => setColorPrevious('#1D2026')}
        onClick={prevSlide}
      >
        <Previous color={colorPrevious} />
      </ButtonPrevious>
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <Image src={slide.image} alt="product" />}
          </div>
        );
      })}
      <ButtonNext
        onMouseOver={() => setColorNext('hsl(26, 100%, 55%)')}
        onMouseLeave={() => setColorNext('#1D2026')}
        onClick={nextSlide}
      >
        <Next color={colorNext} />
      </ButtonNext>
    </div>
  );
};

export default SliderPhone;
