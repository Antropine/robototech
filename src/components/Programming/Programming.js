import './Programming.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Papki from '../Papki/Papki';
import { Helmet } from 'react-helmet-async';

function Programming() {
  return (
    <>
       <Helmet>
            <title>Программирование для детей в Екатеринбурге «СТАРТ»</title>
            <meta name="description" content="Программирование «СТАРТ» — Школа по программированию для детей от 7+ лет. Филиалы во всех районах Екатеринбурга." key="description"/>    
       </Helmet>

      <div className="programming">
        <Header />
        <div className="programming__content">
          <h1>ПРОГРА<br/>ММИРОВ<br/>АНИЕ</h1>
          <a className='registration-button registration-button--mobile' href='https://t.me/start_deti'>
          ЗАПИСАТЬСЯ
          </a>
          <img src='images/computer.png' alt='компьютер' />
        </div>
      </div>

      <section className='invite'>
        <h2>Приглашаем детей от 8 до 14 лет на занятия по программиррованию!</h2>
        <p>Программирование для детей — это захватывающее погружение в мир алгоритмов и технологий, где ребёнок развивает логическое мышление и получает удовольствие от реализации собственных идей.</p>
      </section>

      <section className='about-programming'>
        <div className='about-programming__container'>
        <div className="learning__title-wrapper">
          <h2 className="learning__title">почему выбирают программирование? ❘ <img src='images/search.svg' alt='поиск'></img></h2>
        </div>
        <div className='scratch'>
          <img src='images/scratch.svg' alt='Scratch' />
          <div className='learning-window'>
            <div className='learning-window__topbar'>
              <div className='learning-window__circles'>
                <span className='circle circle--yellow'></span>
                <span className='circle circle--purple'></span>
                <span className='circle circle--red'></span>
              </div>
              <img className='learning-window__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='learning-window__body'>
              <p>Занятия по программированию на <b>СКРЕТЧ</b> для детей от 8 до 11 лет — это интерактивный курс, где дети в игровой форме знакомятся с основами программирования, учатся логически мыслить и создавать собственные анимации, мультфильмы и простые игры.
              </p>
            </div>
          </div>
        </div>

        <div className='python'>
          <div className='learning-window'>
            <div className='learning-window__topbar'>
              <div className='learning-window__circles'>
                <span className='circle circle--yellow'></span>
                <span className='circle circle--purple'></span>
                <span className='circle circle--red'></span>
              </div>
              <img className='learning-window__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='learning-window__body'>
              <p>Занятия по программированию на языке <b>PYTHON</b> для детей от 11 до 14 лет — курс-знакомство с одним из самых популярных языков программирования. Школьники научатся писать простые программы, изучат основы программирования, начнут создавать игры и чат-боты, развивая логическое и алгоритмическое мышление. </p>
            </div>
          </div>
          <img src='images/python.svg' alt='Python' />
        </div>
        </div>
        <Papki />

      <div className='gift-window'>
            <div className='gift-window__topbar'>
              <img className='gift-window__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='gift-window__body'>
              <p className='gift-window__text'>ПЕРВЫЕ 3 ЗАНЯТИЯ ПРОБНЫЕ</p>
              <button className='gift-window__btn'>ОК</button>
            </div>
      </div>
      </section>

      <section className='contacts'>
        <div className="contacts__container">
        <h2 className="contacts__title">КОНТАКТЫ</h2>
        <div className='tg'>
          <img className="cat-image" src='images/cat2.png' alt='кот2'></img>
          <a href='https://t.me/start_robototech' target='_blank' rel='noopener noreferrer'>
            <img className="social-icon" src='images/TG.svg' alt='телеграм'></img>
          </a>  
          <div>
            <p>наш телеграм</p>
            <a href='https://t.me/start_robototech' target='_blank' rel='noopener noreferrer'>t.me/start_robototech</a>
          </div>
        </div>
        <div className='vk'>
          <a href='https://vk.com/robototech' target='_blank' rel='noopener noreferrer'>
            <img className="social-icon" src='images/vk.svg' alt='вк'></img>
          </a>
          <div>
            <p>группа вконтакте</p>
            <a href='https://vk.com/robototech' target='_blank' rel='noopener noreferrer'>vk.com/robototech</a>
          </div>
          <img className="cat-image" src='images/cat1.png' alt='кот1'></img>
        </div>
      </div>
      </section>

      <Footer />
    </>
  );
}

export default Programming;
