import styles from './Card.module.scss'

function Card(props) {
    return (
        <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/content/unliked.svg" alt="liked"/>
        </div>
        <img width={135} height={115} src={props.imageUrl} alt="elegant-flower"></img>
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>{props.price}</b>
          </div>
            <button className="button" onClick={props.onClick}>
            <img src="/content/unchecked.svg" alt="unchecked"></img>
            </button>
        </div>
      </div>
    );
}

export default Card;