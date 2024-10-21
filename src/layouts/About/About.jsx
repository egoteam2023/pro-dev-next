import styles from './About.module.scss';
import AboutAnime from "./AboutAnime";

const About = () => {

  return (
    <div className="about__container" id="about">
      <div className={styles.about}>
       <AboutAnime/>
        <div style={{ position: 'relative' }}>
          <p className={styles.about_descr}>
            · Амбиции и Рост. Мы гордимся своими амбициями и стремлением к постоянному
            профессиональному росту. Даже будучи новичками, мы нацелены на достижение выдающихся
            результатов. <br />· Индивидуальность и Многогранность. Каждый член нашей команды вносит
            свой уникальный вклад, благодаря индивидуальному опыту и разнообразию профессиональных
            знаний. Творчество и Инновации. Мы не боимся выходить за пределы стандартных решений.
            Наш творческий подход и стремление к инновациям помогают нам создавать уникальные и
            современные проекты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;