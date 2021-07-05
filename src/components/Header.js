function Header() {
  return (
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
  );
}

export default Header;