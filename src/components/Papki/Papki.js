import { useState, useEffect } from 'react';

const pinkFrames = ['images/pink_papka.svg', 'images/pink_papka2.svg', 'images/pink_papka1.svg'];

function Papki() {
  const [pinkFrame, setPinkFrame] = useState(0);
  const [pinkHovered, setPinkHovered] = useState(false);

  useEffect(() => {
    if (!pinkHovered) {
      setPinkFrame(0);
      return;
    }
    const interval = setInterval(() => {
      setPinkFrame(prev => (prev + 1) % pinkFrames.length);
    }, 300);
    return () => clearInterval(interval);
  }, [pinkHovered]);

  return (
    <div className='papki'>
      <div className='papka'>
        <a href='https://gymekb.ru/robototekhnika/' target='_blank' rel='noopener noreferrer'>
          <img src='images/purple_papka.png' alt='Статьи'></img>
          <p>статьи</p>
        </a>
      </div>
      <div className='papka'>
        <a href='https://gymekb.ru/news/' target='_blank' rel='noopener noreferrer'>
          <img className='papka-default' src='images/blue_papka.svg' alt='Новости'></img>
          <img className='papka-hover' src='images/blue_papka2.svg' alt='Новости'></img>
          <p>новости</p>
        </a>
      </div>
      <div className='papka'>
        <a href='https://gymekb.ru/oplata/' target='_blank' rel='noopener noreferrer'>
          <img
            src={pinkFrames[pinkFrame]}
            alt='Оплата'
            onMouseEnter={() => setPinkHovered(true)}
            onMouseLeave={() => setPinkHovered(false)}
          ></img>
          <p>оплата</p>
        </a>
      </div>
    </div>
  );
}

export default Papki;
