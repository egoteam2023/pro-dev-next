'use client';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import style from './Home.module.scss';

const SloganHome = () => {
  const sloganRef = useRef(null);

  useLayoutEffect(() => {

    gsap.fromTo(
      sloganRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className={style.team} ref={sloganRef}>
      team
    </div>
  );
};

export default SloganHome;
