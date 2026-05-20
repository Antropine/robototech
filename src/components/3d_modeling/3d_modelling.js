import './3d_modelling.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Papki from '../Papki/Papki';
import { Helmet } from 'react-helmet-async';

function Modeling3D() {
  return (
    <>
      <Helmet>
        <title>3Д моделирование для детей в Екатеринбурге «СТАРТ»</title>
        <meta name="description" content="3Д моделирование «СТАРТ» — Школа по 3Д моделированию для детей от 7+ лет. Филиалы во всех районах Екатеринбурга." key="description"/>    
      </Helmet>

      <div className="modeling-3d">
        <Header />
        <div className="modeling-3d__content">
          <div className='model-title'>
            <p>3Д</p>
            <h1>МОДЕЛИР<br/>ОВАНИЕ</h1>
          </div>
          <a className='registration-button registration-button--mobile' href='https://t.me/start_deti'>
          ЗАПИСАТЬСЯ
          </a>
          <div className='heart-video'>
            <video autoPlay loop muted playsInline>
              <source src='images/pixel_heart.webm' type='video/webm' />
            </video>
          </div>
        </div>
      </div>

      <section className='invite-3d'>
        <div className='left-image'>
          <img src='images/pacman.png' alt='пакмен'></img>
        </div>
        <div>
          <h2>Моделируйте будущее вместе с нами!</h2>
        <p>Мы приглашаем детей от 8 до 14 лет на увлекательные занятия по 3D модерированию и освоению современных технологий!</p>
        </div>
        <div className='right-image'>
          <img src='images/tetris.png' alt='тетрис'></img>
        </div>
      </section>

      <section className='about-model'>
        <div className="learning__title-wrapper">
          <h2 className="learning__title">Что такое 3D-моделирование? ❘ <img src='images/search.svg' alt='поиск'></img></h2>
        </div>
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
              <p>Освоив основы 3D-графики, ребенок сможет создавать реалистичные объекты, персонажей и целые сцены, применяя полученные знания в играх, фильмах и анимациях.
              </p>
            </div>
          </div>          
      </section>

      <section className='why'>
        <h2>чем привлекателен blender?</h2>
        <div className='why-card'>
        <div className='advantages'>
          <div className='advantages1'>
            <p>Бесплатный инструмент мирового уровня</p>
          </div>
          <div className='advantages2'>
            <p>Простота освоения даже для начинающих пользователей</p>
          </div>
          <div className='advantages3'>
            <p>Огромные возможности для творчества и экспериментов</p>
          </div>
          <div className='advantages4'>
            <p>Развитие профессиональных навыков для будущей карьеры</p>
          </div>
        </div>
        <div className='chicken'>
          <img src='images/chicken.png' alt='петух'></img>
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

export default Modeling3D;
