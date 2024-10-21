'use client'
import gsap from 'gsap';
import styles from './Team.module.scss';
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";


const TeamAnime = () => {
    const baDecore = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
  
    useLayoutEffect(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: baDecore.current,
          start: 'top center',
          end: 'bottom 30%',
        },
      });
      timeline
        .fromTo(
          `.${styles.team_title}`,
          { opacity: 0, y: 30 },
          { duration: 1, opacity: 1, delay: 0.3, y: 0 },
        )
        .fromTo(
          `.${styles.team_slide}`,
          { opacity: 0 },
          {
            duration: 1,
            opacity: 1,
          },
        );
    }, []);
  
  return (
    <h2 className={styles.team_title} ref={baDecore}>
          команда
        </h2>
  )
}

export default TeamAnime