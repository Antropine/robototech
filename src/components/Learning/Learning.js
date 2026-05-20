import './Learning.css';
import Papki from '../Papki/Papki';

function Learning() {
  return (
    <section className="learning" id="learning">
      <div className="learning__container">
        <div className="learning__title-wrapper">
          <h2 className="learning__title">как проходит обучение в старт? ❘ <img src='images/search.svg' alt='поиск'></img></h2>
        </div>
        <div className='learning-card'>
          <img src='images/cat-boy.png' alt="кот школьник"></img>
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
              <p>Обучение в школе робототехники, программирования и 3D-моделирования «СТАРТ» построено
                таким образом, чтобы каждый ребенок мог раскрыть свой потенциал и приобрести актуальные
                знания и навыки XXI века. Мы предлагаем современные программы, направленные на развитие
                технического творчества, логического мышления и творческих способностей детей разного возраста.
              </p>
            </div>
          </div>
        </div>
        <Papki />
      </div>
    </section>
  );
}

export default Learning;
