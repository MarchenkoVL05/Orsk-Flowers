import React from 'react'
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {

  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/" exact>
        <div className="d-flex align-center">
          <img width={40} heigh={40} src="content/logo2.svg" alt="logo" />
          <div>
              <h3 className="text-uppercase">Цветочная лавка</h3>
              <p className="opacity-5">Доставка цветов в городе Орск</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
        <img width={18} heigh={18} src="content/bucket.svg" alt="Корзина" />
          <span className="cu-p">{totalPrice} руб</span>
        </li>
        <li>
        <Link to="/favorites" exact>
          <img width={18} heigh={18} src="content/heart.svg" alt="Закладки" />
        </Link>
        <Link to="/orders" exact>
          <img width={18} heigh={18} src="/content/profile.svg" alt="Пользователь" />
        </Link>
        </li>
      </ul>
  </header>
  );
}

export default Header;