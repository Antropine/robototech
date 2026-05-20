import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className='blue-top'><p>Error</p><img src='images/close.svg' alt='закрыть' /></div>
      <div className="not-found__content">
        <p className="not-found__text">Страница не найдена</p>
        <Link className="not-found__link" to="/">ВЕРНУТЬСЯ</Link>
      </div>
    </div>
  );
}

export default NotFound;
