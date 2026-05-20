import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo"><img src='images/logo.svg' alt='СТАРТ логотип' /></Link>
        <nav className="header__nav">
          <Link to="/robototechnika" className="header__link">робототехника <img src='images/robot.svg' alt='' /></Link>
          <Link to="/programming" className="header__link">программирование <img src='images/code.svg' alt='' /></Link>
          <Link to="/3d-modeling" className="header__link">3д моделирование <img src='images/3d.svg' alt='' /></Link>
        </nav>
        <a className='registration-button' href='https://t.me/start_deti'>ЗАПИСАТЬСЯ</a>
      </div>
    </header>
  );
}

export default Header;
