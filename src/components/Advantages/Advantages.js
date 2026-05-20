import './Advantages.css';

function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages__container">
        <div className='learning__title-wrapper'>
          <h2 className="advantages__title">почему выбирают нас? ❘ <img src='images/search.svg' alt='поиск' /></h2>
        </div>
        <div className="advantages__list">
          <div className='advantages'>
            <img className="advantages-images" src='images/comand.svg' alt='команда' />
            <div>
                <p className='advantages_title'>команда опытных наставников</p>
                <p className='advantages_text'>Преподаватели — профессионалы своего дела, увлечённые своим предметом 
              и умеющие заинтересовать даже самого требовательного ученика.</p>
            </div>
          </div>
          <div className='advantages'>
            <img className="advantages-images" src='images/cup.svg' alt='кубок' />
            <div>
                <p className='advantages_title'>Поддержка талантов</p>
                <p className='advantages_text'>Наши лучшие ученики успешно выступают на соревнованиях от школьных и университетских до городских и региональных.</p>
            </div>
          </div>
          <div className='gift-window'>
            <div className='gift-window__topbar'>
              <img className='gift-window__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='gift-window__body'>
              <p className='gift-window__text'>ПЕРВЫЕ 3 ЗАНЯТИЯ ПРОБНЫЕ</p>
              <button className='gift-window__btn'>ОК</button>
            </div>
          </div>
          <div className='advantages'>
            <img className="advantages-images" src='images/lvl.svg' alt='уровень' />
            <div>
                <p className='advantages_title'>Современные технологии</p>
                <p className='advantages_text'>Обучение проходит на новейшем оборудовании и программах, позволяющих детям осваивать передовые навыки.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
