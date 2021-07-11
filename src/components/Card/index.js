import React from 'react';
import styles from './Card.module.scss'

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

    return (
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onFavorite}>
          <img src="/content/unliked.svg" alt="liked"/>
        </div>
        <img width={135} height={115} src={imageUrl} alt="elegant-flower"></img>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>{price}</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? '/content/checked.svg' : '/content/unchecked.svg'}
            alt="Plus"
          />
        </div>
      </div>
    );
}

export default Card;

