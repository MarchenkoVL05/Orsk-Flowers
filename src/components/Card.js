function Card() {
    return (
        <div className="card">
        <div className="favourite">
          <img src="/content/unliked.svg" alt="liked"/>
        </div>
        <img width={135} height={115} src="/content/cards/elegant.jpg" alt="elegant-flower"></img>
        <h5>Букет «Элегантный»</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>2 170р.</b>
          </div>
            <button className="button">
            <img src="/content/unchecked.svg" alt="unchecked"></img>
            </button>
        </div>
      </div>
    );
}

export default Card;