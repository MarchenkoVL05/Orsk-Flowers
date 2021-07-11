import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    title: 'Букет «Элегантный»',
    price: 2170,
    imageUrl: '/content/cards/elegant.jpg',
  },
  {
    title: 'Букет «Жаннэт»',
    price: 2680,
    imageUrl: '/content/cards/Jannet.jpg',
  },
  {
    title: 'Букет «Орхи»',
    price: 3460,
    imageUrl: '/content/cards/boucket-orchid.jpg',
  },
  {
    title: '11 белых роз',
    price: 1860,
    imageUrl: '/content/cards/eleven-white-roses.jpg',
  },
  {
    title: 'Букет «Влюбленность»',
    price: 2700,
    imageUrl: '/content/cards/crush.jpg',
  },
  {
    title: 'Букет «Мгновение»',
    price: 3750,
    imageUrl: '/content/cards/moment.jpg',
  },
  {
    title: 'Букет «Бабочки»',
    price: 3250,
    imageUrl: '/content/cards/batterflies.jpg',
  },
  {
    title: 'Корзина с герберами',
    price: 2950,
    imageUrl: '/content/cards/gerbera.jpg',
  },
  {
    title: '«Пылкая любовь»',
    price: 3880,
    imageUrl: '/content/cards/lovliness.jpg',
  },
  {
    title: 'Букет «Яблони»',
    price: 2320,
    imageUrl: '/content/cards/apples.jpg',
  },
  {
    title: 'Букет «Симфония»',
    price: 3590,
    imageUrl: '/content/cards/symphony.jpg',
  },
  {
    title: 'Букет «Mix it»',
    price: 2780,
    imageUrl: '/content/cards/mix-it.jpg',
  },
];

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
          {arr.map((obj) => (
            <Card 
              title = {obj.title}
              price = {obj.price}
              imageUrl = {obj.imageUrl}
              onClick = {() => console.log(obj)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
