import './Review.css';

function Review() {
  return (
    <section className="review" id="reviews">
      <div className="review__container">
        <h2 className="review__title">нам доверяют</h2>
        <div className='review__cards'>
          <div className='review-card'>
            <div className='review-card__topbar'>
              <div className='review-card__circles'>
                <span className='circle circle--yellow'></span>
                <span className='circle circle--purple'></span>
                <span className='circle circle--red'></span>
              </div>
              <img className='review-card__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='review-card__body'>
              <div className='review-card__avatar'>
                <img src='images/avatar1.svg' alt='аватар'></img>
                <div className='review-card__footer'>
              <div className='review-card__info'>
                <p>НАПРАВЛЕНИЕ:<br/> Робототехника</p>
              </div>
              <div className='review-card__info'>
                <p>ИМЯ:<br/>мама Наташа</p>
              </div>
            </div>
              </div>
              <div className='review-card__text'>
                <p className='review-card__label'>ТЕКСТ ОТЗЫВА:</p>
                <p>Занимаемся робототехникой около полугода — и мой ребенок абсолютно влюблен!
                  Это направление оказалось настоящей находкой. Уроки проходят интересно и увлекательно,
                  дети постоянно погружены в процесс конструирования роботов и программирования.
                  Видеть горящие глаза сына каждый раз, когда он рассказывает дома о новых достижениях
                  и успехах, бесценно!</p>
              </div>
            </div>
          </div>

          <img className="cat-love" src='images/massage_love.png' alt='кот' loading="lazy" />

          <div className='review-card review-card--blue'>
            <div className='review-card__topbar'>
              <div className='review-card__circles'>
                <span className='circle circle--yellow'></span>
                <span className='circle circle--purple'></span>
                <span className='circle circle--red'></span>
              </div>
              <img className='review-card__close' src='images/close.svg' alt='закрыть'></img>
            </div>
            <div className='review-card__body'>
              <div className='review-card__avatar'>
                <img src='images/avatar2.svg' alt='аватар'></img>
                <div className='review-card__footer'>
                  <div className='review-card__info'>
                    <p>НАПРАВЛЕНИЕ: 3д</p>
                  </div>
                  <div className='review-card__info'>
                    <p>ИМЯ:<br/>папа Василий</p>
                  </div>
                </div>
              </div>
              <div className='review-card__text'>
                <p className='review-card__label'>ТЕКСТ ОТЗЫВА:</p>
                <p>Мы начали заниматься направлением „3D-моделирование“ полгода назад, и я совершенно 
                доволен выбором!
                Я вижу реальный рост творческих способностей моего сына и понимаю, насколько важно 
                развивать такие умения именно сейчас, ведь мир технологий стремительно меняется. 
                Особенно приятно отметить внимание педагогов к каждому ученику!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Review;
