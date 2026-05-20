import './Hero.css';
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <img src='images/gif_virus.gif' alt='' />
        <h1 className="hero__title">СТАРТ</h1>
        <p className="hero__subtitle">
          пространство, где код, форма и<br/> механика становятся единым целым
        </p>
        <img className='right-gif' src='images/gif_virus.gif' alt='' />
        <a className='registration-button registration-button--mobile' href='https://t.me/start_deti'>
          ЗАПИСАТЬСЯ
        </a>
      </div>
    </section>
  );
}

export default Hero;
