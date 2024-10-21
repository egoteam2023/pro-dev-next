'use client'
import styles from './Header.module.scss';
import gsap from 'gsap';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';


const MobileNav = () => {
  const [burger, setBurger] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openMenu = () => {
    setBurger(true);
    setIsChecked(true);
  };

  const closeMenu = () => {
    setBurger(false);
    setIsChecked(false);
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${styles.a}`,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);
  return (
    <>
      {burger && (
        <div className={styles.modal_window} onClick={() => closeMenu()}>
          <ul className={styles.modal_nav} onClick={(e) => e.stopPropagation()}>
            <li className={styles.modal_nav_li}>
              <Link className={styles.modal_nav_a} href="#about">
                о нас
              </Link>
            </li>
            <li className={styles.modal_nav_li}>
              <Link className={styles.modal_nav_a} href="#services">
                услуги
              </Link>
            </li>
            <li className={styles.modal_nav_li}>
              <Link className={styles.modal_nav_a} href="#cases">
                кейсы
              </Link>
            </li>
            <li className={styles.modal_nav_li}>
              <Link className={styles.modal_nav_a} href="#contacts">
                контакты
              </Link>
            </li>
          </ul>
          <div className={styles.modal_overlay}></div>
        </div>
      )}
      <button className={styles.burger__wrapper} onClick={() => openMenu()}>
        <div id="webapp_cover">
          <div id="menu_button">
            <input type="checkbox" id="menu_checkbox" checked={isChecked} />
            <label for="menu_checkbox" id="menu_label">
              <div id="menu_text_bar"></div>
            </label>
          </div>
        </div>
      </button>
    </>
  );
};

export default MobileNav;
