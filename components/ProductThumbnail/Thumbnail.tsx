import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/dist/client/image';
import {
  Product1,
  Product2,
  Product3,
  Product4,
  ThumbnailProduct1,
  ThumbnailProduct2,
  ThumbnailProduct3,
  ThumbnailProduct4,
} from '../../assets/Images';
import styles from './Thumbnail.module.css';

interface Props {
  setShowModal: Dispatch<SetStateAction<Boolean>>;
}

const Thumbnail = ({ setShowModal }: Props) => {
  const [pro, setPro] = useState<string>('thumbnail1');

  const handleThumbnail = (e: any) => {
    console.log(e.target);
    setPro(e.target.alt);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.swiper}>
      <Image
        className={styles.product}
        onClick={handleClick}
        src={
          pro === 'thumbnail2'
            ? Product2
            : pro === 'thumbnail3'
            ? Product3
            : pro === 'thumbnail4'
            ? Product4
            : Product1
        }
        alt="product"
      />

      <div className={styles.thumbnail}>
        <div
          className={styles.divThumbnail}
          style={
            pro === 'thumbnail1'
              ? { border: '3px solid hsl(26, 100%, 55%)' }
              : {}
          }
          onClick={handleThumbnail}
        >
          <Image
            className={
              pro === 'thumbnail1'
                ? `${styles.imgThumbnail} ${styles.opacity}`
                : styles.imgThumbnail
            }
            src={ThumbnailProduct1}
            alt="thumbnail1"
          />
        </div>

        <div
          className={styles.divThumbnail}
          style={
            pro === 'thumbnail2'
              ? { border: '3px solid hsl(26, 100%, 55%)' }
              : {}
          }
          onClick={handleThumbnail}
        >
          <Image
            className={
              pro === 'thumbnail2'
                ? `${styles.imgThumbnail} ${styles.opacity}`
                : styles.imgThumbnail
            }
            src={ThumbnailProduct2}
            alt="thumbnail2"
          />
        </div>

        <div
          className={styles.divThumbnail}
          style={
            pro === 'thumbnail3'
              ? { border: '3px solid hsl(26, 100%, 55%)' }
              : {}
          }
          onClick={handleThumbnail}
        >
          <Image
            className={
              pro === 'thumbnail3'
                ? `${styles.imgThumbnail} ${styles.opacity}`
                : styles.imgThumbnail
            }
            src={ThumbnailProduct3}
            alt="thumbnail3"
          />
        </div>

        <div
          className={styles.divThumbnail}
          style={
            pro === 'thumbnail4'
              ? { border: '3px solid hsl(26, 100%, 55%)' }
              : {}
          }
          onClick={handleThumbnail}
        >
          <Image
            className={
              pro === 'thumbnail4'
                ? `${styles.imgThumbnail} ${styles.opacity}`
                : styles.imgThumbnail
            }
            src={ThumbnailProduct4}
            alt="thumbnail4"
          />
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
