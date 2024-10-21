'use client';
import './Cases.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLayoutEffect, useRef } from 'react';

const CasesAnime = () => {
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
    <h2
      className="text-center font-medium text-[clamp(48px,5vw,80px)] tracking-[8px] w-full"
      ref={titleRef}
    >
      кейсы
    </h2>
  );
};

export default CasesAnime;
