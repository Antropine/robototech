import { useState, useEffect } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <img className='cookie-banner__close' src='images/close.svg' alt='закрыть' onClick={handleAccept}></img>
      <p className="cookie-banner__text">
        Мы используем файлы cookie <br/>для улучшения работы сайта.
      </p>
      <button className="cookie-banner__btn" onClick={handleAccept}>ОК</button>
    </div>
  );
}

export default CookieBanner;
