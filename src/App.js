function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все букеты</h1>
        
        <div className="d-flex">
          <div className="card">
            <img width={135} height={115} src="/content/cards/elegant.jpg" alt="elegant-flower"></img>
            <h5>Букет «Элегантный»</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>2 170р.</b>
              </div>
                <button className="button">
                  <img width={11} height={11} src="/content/plus.svg" alt="plus"></img>
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
                  <img width={11} height={11} src="/content/plus.svg" alt="plus"></img>
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
                  <img width={11} height={11} src="/content/plus.svg" alt="plus"></img>
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
                  <img width={11} height={11} src="/content/plus.svg" alt="plus"></img>
                </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
