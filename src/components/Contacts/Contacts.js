import './Contacts.css';

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">КОНТАКТЫ</h2>
        <div className='tg'>
          <img className="cat-image" src='images/cat2.png' alt='кот2' loading="lazy" />
          <div className="social-info">
            <a href='https://t.me/start_robototech' target='_blank' rel='noopener noreferrer'>
              <img className="social-icon" src='images/TG.svg' alt='телеграм'></img>
            </a>
            <div>
              <p>наш телеграм</p>
              <a href='https://t.me/start_robototech' target='_blank' rel='noopener noreferrer'>t.me/start_robototech</a>
            </div>
          </div>
        </div>
        <div className='vk'>
          <div className="social-info">
            <a href='https://vk.com/robototech' target='_blank' rel='noopener noreferrer'>
              <img className="social-icon" src='images/vk.svg' alt='вк'></img>
            </a>
            <div>
              <p>группа вконтакте</p>
              <a href='https://vk.com/robototech' target='_blank' rel='noopener noreferrer'>vk.com/robototech</a>
            </div>
          </div>
          <img className="cat-image" src='images/cat1.png' alt='кот1' loading="lazy" />
        </div>
      </div>
      <div className="phone">
        <p>+7 (343) 268 33-88</p>
      </div>
    </section>
  );
}

export default Contacts;
