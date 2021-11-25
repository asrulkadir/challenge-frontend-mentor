import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/dist/client/image';
import { SliderData } from '../../assets/SliderData';
import { Close, Next, Previous } from '../../assets/Icon';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 0 0.5rem;
    border-radius: 7.5px;
    height: 4.7rem;
  }

  div:hover {
    border-radius: 5px;
    background-color: white;
  }
`;

const ButtonNext = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: -1.25rem;
  z-index: 99;
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
  margin-right: -1.25rem;
  z-index: 99;
`;

const ImageProd = styled(Image)`
  border-radius: 10px;
`;
const ImageThumbnail = styled(Image)<{ opacity: boolean }>`
  border-radius: 5px;
  opacity: ${(props) => (props.opacity ? 0.5 : 1)};

  &:hover {
    opacity: 0.5;
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 0 0.5rem 27.25em;
`;

interface Props {
  showModal: Boolean;
  setShowModal: Dispatch<SetStateAction<Boolean>>;
  slides: Array<any>;
}

const Modal = ({ showModal, setShowModal, slides }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [colorNext, setColorNext] = useState<string>('#1D2026');
  const [colorPrevious, setColorPrevious] = useState<string>('#1D2026');
  const [colorClose, setColorClose] = useState<string>('#FFFFFF');
  const length = slides.length;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setColorClose('#FFFFFF');
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      {showModal ? (
        <ModalWrapper onClick={closeModal} ref={modalRef}>
          <CloseButton
            onMouseOver={() => setColorClose('hsl(26, 100%, 55%)')}
            onMouseLeave={() => setColorClose('#FFFFFF')}
            onClick={handleClose}
          >
            <Close color={colorClose} />
          </CloseButton>

          <ImageWrapper>
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
                  {index === current && (
                    <ImageProd
                      src={slide.image}
                      alt="product"
                      width={450}
                      height={475}
                    />
                  )}
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
          </ImageWrapper>

          <ThumbnailWrapper>
            {SliderData.map((slide, index) => {
              return (
                <div
                  key={index}
                  style={
                    current === index
                      ? {
                          border: '2px solid hsl(26, 100%, 55%)',
                          height: '4.95rem',
                          backgroundColor: 'white',
                        }
                      : {}
                  }
                  onClick={() => {
                    setCurrent(index);
                  }}
                >
                  <ImageThumbnail
                    opacity={current === index ? true : false}
                    src={slide.thumbnail}
                    alt="Thumbnail"
                    width={75}
                    height={75}
                  />
                </div>
              );
            })}
          </ThumbnailWrapper>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;
