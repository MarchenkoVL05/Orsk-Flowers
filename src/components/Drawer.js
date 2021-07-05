function Drawer() {
    return (
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/content/btn-remove.svg" alt="btn-remove"/></h2>

          <div className="items">
            <div className="cartItem d-flex justify-between align-center mb-20">
              <img width={70} height={70} className="cardItemImg" src="/content/cards/boucket-orchid.jpg" alt="orchid"/>
              <div className="mr-20">
                <p className="mb-5">Букет «Орхи»</p>
                <b>3 460р.</b>
              </div>
              <img className="removeBtn" src="/content/btn-remove.svg" alt="btn-remove"/>
            </div>
            <div className="cartItem d-flex justify-between align-center mb-20">
            <img width={70} height={70} className="cardItemImg" src="/content/cards/eleven-white-roses.jpg" alt="11 roses"/>
              <div className="mr-20">
                <p className="mb-5">11 белых роз</p>
                <b>1 860р.</b>
              </div>
              <img className="removeBtn" src="/content/btn-remove.svg" alt="btn-remove"/>
            </div>
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