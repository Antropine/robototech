import './Subject.css';
import { Link } from 'react-router-dom';

function Subject() {
  return (
    <section className="subject" id="subjects">
      <div className="subject__container">
        <div className="subject__list">
          <div className="subject__card1">
            <div className='icon'>
              <img src='images/robot.svg' alt='' />
              <img src='images/arrow_button.svg' alt='' />
            </div>
            <h3 className="subject__card-title">робототехника</h3>
            <p className="subject__card-text">
              Курс по робототехнике знакомит детей с основами программирования, электроники и инженерного мышления. На занятиях ученики собирают и программируют роботов, учатся работать в команде, находить нестандартные решения и воплощать свои идеи в реальные проекты.
            </p>
            <Link className='subject-button' to='/robototechnika'>ПЕРЕЙТИ</Link>
          </div>
          <div className="subject__card2">
            <div className='icon'>
              <img src='images/code.svg' alt='' />
              <img src='images/arrow_button.svg' alt='' />
            </div>
            <h3 className="subject__card-title">программирование</h3>
            <p className="subject__card-text">
              Курс по робототехнике знакомит детей с основами программирования, электроники и инженерного мышления. На занятиях ученики собирают и программируют роботов, учатся работать в команде, находить нестандартные решения и воплощать свои идеи в реальные проекты.
            </p>
            <Link className='subject-button' to='/programming'>ПЕРЕЙТИ</Link>
          </div>
          <div className="subject__card3">
            <div className='icon'>
              <img src='images/3d.svg' alt='' />
              <img src='images/arrow_button.svg' alt='' />
            </div>
            <h3 className="subject__card-title">3д-моделирование</h3>
            <p className="subject__card-text">
              Курс по робототехнике знакомит детей с основами программирования, электроники и инженерного мышления. На занятиях ученики собирают и программируют роботов, учатся работать в команде, находить нестандартные решения и воплощать свои идеи в реальные проекты.
            </p>
            <Link className='subject-button' to='/3d-modeling'>ПЕРЕЙТИ</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subject;
