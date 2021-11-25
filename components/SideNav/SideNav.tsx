import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Close } from '../../assets/Icon';

const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 999;
`;

const SideNav = styled.div`
  padding: 1rem;
  background-color: white;
  position: fixed;
  top: 0;
  width: 65%;
  height: 100%;
  z-index: 999;

  p {
    margin-bottom: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

const CloseButton = styled.div`
  margin-bottom: 3rem;
`;

interface Props {
  showSideNav: Boolean;
  setShowSideNav: Dispatch<SetStateAction<Boolean>>;
}

const SideNavComp = ({ showSideNav, setShowSideNav }: Props) => {
  const handleClose = () => {
    setShowSideNav(false);
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    transform: showSideNav ? `translateX(0%)` : `translateX(-100%)`,
  });

  return (
    <div>
      {showSideNav ? (
        <>
          <Fixed></Fixed>
          <SideNav>
            <animated.div style={animation}>
              <CloseButton onClick={handleClose}>
                <Close color="#69707D" />
              </CloseButton>
              <p onClick={handleClose}>Collections</p>
              <p onClick={handleClose}>Men</p>
              <p onClick={handleClose}>Women</p>
              <p onClick={handleClose}>About</p>
              <p onClick={handleClose}>Contact</p>
            </animated.div>
          </SideNav>
        </>
      ) : null}
    </div>
  );
};

export default SideNavComp;
