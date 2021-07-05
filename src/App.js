function App() {
  return (
    <div className="wrapper clear">
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} heigh={40} src="/content/logo2.svg" alt="logo" />
          <div>
              <h3 className="text-uppercase">Цветочная лавка</h3>
              <p className="opacity-5">Доставка цветов в городе Орск</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} heigh={18} src="/content/bucket.svg" alt="bucket" />
            <span>1337р.</span>
          </li>
          <li>
          <img width={18} heigh={18} src="/content/heart.svg" alt="heart" />
          <img width={18} heigh={18} src="/content/profile.svg" alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все букеты</h1>
          <div className="search-block">
            <img src="/content/search.svg" alt="search"/>
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
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

          <div className="card">
            <img width={135} height={115} src="/content/cards/Jannet.jpg" alt="Jannet-flower"></img>
            <h5>Букет «Жаннэт»</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>2 680р.</b>
              </div>
                <button className="button">
                <img src="/content/checked.svg" alt="checked"></img>
                </button>
            </div>
          </div>

          <div className="card">
            <img width={135} height={115} src="/content/cards/boucket-orchid.jpg" alt="boucket-orchid-flower"></img>
            <h5>Букет «Орхи»</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>3 460р.</b>
              </div>
                <button className="button">
                <img src="/content/unchecked.svg" alt="unchecked"></img>
                </button>
            </div>
          </div>

          <div className="card">
            <img width={135} height={115} src="/content/cards/eleven-white-roses.jpg" alt="eleven-white-roses"></img>
            <h5>11 белых роз</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>1 860р.</b>
                </div>
                <button className="button">
                <img src="/content/unchecked.svg" alt="unchecked"></img>
                </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
