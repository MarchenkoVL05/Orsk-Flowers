import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/" exact>
        <div className="d-flex align-center">
          <img width={40} heigh={40} src="/content/logo2.svg" alt="logo" />
          <div>
              <h3 className="text-uppercase">Цветочная лавка</h3>
              <p className="opacity-5">Доставка цветов в городе Орск</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 " onClick={props.onClickCart}>
        <img width={18} heigh={18} src="/content/bucket.svg" alt="Корзина" />
          <span className="cu-p">1337р.</span>
        </li>
        <li>
        <Link to="/favorites" exact>
          <img width={18} heigh={18} src="/content/heart.svg" alt="Закладки" />
        </Link>
        <img width={18} heigh={18} src="/content/profile.svg" alt="Пользователь" />
        </li>
      </ul>
  </header>
  );
}

export default Header;