'use client'
import { useLayoutEffect, useRef } from 'react';
import styles from './About.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const AboutAnime = () => {
  const baDecore = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__container',
        start: 'top 60%',
        end: 'bottom 30%',
      },
    });
    timeline
      .fromTo(
        `.${styles.about_title}`,
        { opacity: 0, y: 30 },
        { duration: 1, opacity: 1, delay: 0.3 }
      )
      .fromTo(
        `.${styles.about_descr}`,
        { opacity: 0 },
        { duration: 1, opacity: 1 }
      );
  }, []);

  return (
    <h3 className={styles.about_title} ref={baDecore}>
      о нас
    </h3>
  );
};

export default AboutAnime;
