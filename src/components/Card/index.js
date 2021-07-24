import React from 'react';
import styles from './Card.module.scss'

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

    return (
        <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "/content/liked.svg" : "/content/unliked.svg"} alt="liked"/>
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

