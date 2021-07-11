function Drawer({ onClose, items = [] }) {
    return (
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className="removeBtn cu-p" src="/content/btn-remove.svg" alt="close"/></h2>

          <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className= "removeBtn" src="/content/btn-remove.svg" alt="Remove" />
            </div>
          ))}
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>5 630р.</b>
              </li>
              <li>
              <span>Налог 5%:</span>
                <div></div>
                <b>282р.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ 
              <img src="/content/arrow-btn.svg" alt="arrow-btn"/>
            </button>
          </div>
        
        </div>
      </div>
    );
}

export default Drawer;