import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer" id="footer">
        <div className='footer__container'>
            <img src='images/logo.svg' alt='СТАРТ логотип' />
            <a className='tg-button' href='https://t.me/start_deti' target='_blank' rel='noopener noreferrer'>НАПИСАТЬ В ТГ</a>
            <p>Информация, представленная на сайте, носит ознакомительный характер и не является офертой.</p>
            <p>Смотрите также другие направления на нашем сайте </p>         
            <a className="site_link" href='https://gymekb.ru/' target='_blank' rel='noopener noreferrer'>gymekb.ru</a>
            <div className='police-link'>
              <Link to='/privacy'>Политика конфиденциальности</Link>
              <Link to='/agreement'>Пользовательское соглашение</Link>
            </div>
            <p>© {new Date().getFullYear()} Робототехника ДЮСШ СТАРТ.<br/>Все права защищены.</p>
        </div>
    </section>
  );
}

export default Footer;