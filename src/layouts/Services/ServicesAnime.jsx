'use client';
import styles from './Services.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';

const ServicesAnime = () => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 95%',
          end: 'bottom 70%',
        },
      }
    );
  }, []);
  return (
    <h2 className={styles.services_title} ref={titleRef}>
      услуги
    </h2>
  );
};

export default ServicesAnime;
