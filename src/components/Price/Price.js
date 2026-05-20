import './Price.css';
import { Link } from 'react-router-dom';

function Price() {
  return (
    <section className="price" id="price">
        <div>
            <h2>цены</h2>
            <p className='price-description'>занятия 2 раза в неделю, продолжительность 1 час с перерывом 10 минут</p>
        </div>
        <div className="price__list">
            <div className="price__card1">
            <div className='icon'>
              <img src='images/arrow_button.svg' alt='стрелка' />
            </div>
            <p className="text-item">Стоимость одного занятия</p>
            <p className="price-item">
             700 руб
            </p>
            <a className='subject-button' target='_blank' rel='noopener noreferrer' href='https://t.me/start_deti'>ПЕРЕЙТИ</a>
          </div>
           <div className="price__card2">
            <div className='icon'>
              <img src='images/arrow_button.svg' alt='стрелка' />
            </div>
            <p className="text-item">Месяц занятий (2 раза в неделю)</p>
            <p className="price-item">
             5600 руб
            </p>
            <a className='subject-button' target='_blank' rel='noopener noreferrer' href='https://t.me/start_deti'>ПЕРЕЙТИ</a>
          </div>
          <div className="price__card3">
            <div className='icon'>
              <img src='images/arrow_button.svg' alt='стрелка' />
            </div>
            <p className="text-item">Индивидуальное занятие</p>
            <p className="price-item">
             2000 руб
            </p>
            <a className='subject-button' target='_blank' rel='noopener noreferrer' href='https://t.me/start_deti'>ПЕРЕЙТИ</a>
          </div>
        </div>
    </section>
  );
}

export default Price;
