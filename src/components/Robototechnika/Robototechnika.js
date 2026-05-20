import './Robototechnika.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Papki from '../Papki/Papki';
import { Helmet } from 'react-helmet-async';

function Robototechnika() {
  return (
    <>
    <Helmet>
            <title>Робототехника для детей в Екатеринбурге «СТАРТ»</title>
            <meta name="description" content="Робототехника «СТАРТ» — Школа по робототехнике для детей от 7+ лет. Филиалы во всех районах Екатеринбурга." key="description"/>    
          </Helmet>
      <div className="robototechnika">
        <Header />
        <div className="robototechnika__content">
          <div className="robototechnika__titles">
            <h1>РОБОТО</h1>
            <h1 className=''>ТЕХНИКА</h1>
          </div>
          <a className='registration-button registration-button--mobile' href='https://t.me/start_deti'>
          ЗАПИСАТЬСЯ
          </a>
          <div className="robototechnika__image">
            <img src='images/crocodile.png' alt='crocodile'></img>
          </div>
        </div>
      </div>

      <section className='invite'>
        <h2>Приглашаем детей от 6 до 11 лет на занятия по робототехнике!</h2>
        <p>Робототехника для детей — это увлекательное путешествие в мир изобретений,
          где ребенок может развивать мышление и получать радость от собственных открытий.</p>
      </section>

      <section className='lesson'>
        <div className='lesson__container'>
        <h2>Как проходят занятия по робототехнике</h2>
        <div className='lesson-grid'>
          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>логика и решение задач</p>
              <p className='item-text'>На каждом занятии ребенок ищет решения реальных задач: как заставить робота выполнить команду, преодолеть препятствие.</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>создание роботов с нуля</p>
              <p className='item-text'>Ребята собирают первых роботов из простых деталей: блоков, шестеренок и колес. Все происходит в игровой форме.</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>развитие моторики и креативности</p>
              <p className='item-text'>Работа с мелкими деталями отлично тренирует пальцы и внимание.</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>креативность</p>
              <p className='item-text'>Дети придумывают, как будет выглядеть их робот, какие у него будут функции и даже «характер».</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>программирование через игру</p>
              <p className='item-text'>Программирование на таких занятиях становится похожим на головоломки или пазлы, где нужно правильно сложить элементы.</p>
            </div>
          </div>

          <div className='grid-item'>
            <div className='blue-topbar'><img src='images/close.svg' alt='' /></div>
            <div className='item-card'>
              <p className='item-title'>навыки общения и уверенность в себе</p>
              <p className='item-text'>Занятия проходят в группах, где ребята учатся договариваться и помогать друг другу.</p>
            </div>
          </div>
        </div>
        <div className='cat-think'>
          <img src='images/cat_thinking.png' alt='кот думает' loading="lazy" />
        </div>
        </div>
      </section>

      <section className='project'>
        <div className='project__container'>
        <div className='project-content'>
          <div className='project-text'>
            <h2>увлекательные проекты</h2>
            <p>Гонки роботов, поиск решений для выполнения сложных задач и конкурсы — это мотивирует детей учиться, искать новые подходы и радоваться достижениям.</p>
            <p>В ДЮСШ «СТАРТ» занятия по робототехнике проводят опытные педагоги. Группы формируются с учетом возраста ребенка, чтобы обучение было удобным и эффективным.</p>
          </div>
          <div className='project-img'>
            <img src='images/robot.png' alt='робот конструктор' loading="lazy" />
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
      </div>
      </section>

      <section className='contact'>
        <div className="contacts__container">
        <h2 className="contacts__title">КОНТАКТЫ</h2>
        <div className='tg'>
          <img className="cat-image" src='images/cat2.png' alt='кот2' loading="lazy" />
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
          <img className="cat-image" src='images/cat1.png' alt='кот1' loading="lazy" />
        </div>
      </div>
      </section>



      <Footer />
    </>
  );
}

export default Robototechnika;
