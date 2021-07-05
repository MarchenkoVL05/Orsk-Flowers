import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все букеты</h1>
          <div className="search-block">
            <img src="/content/search.svg" alt="search"/>
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <Card />
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
