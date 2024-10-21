

import styles from './Header.module.scss';
import logo from '../../assets/img/small-logo.svg';
import Link from 'next/link';
import MobileNav from './MobileNav';
import Image from 'next/image';
const Header = () => {

  return (
    <header className={styles.root}>
      <div className="header__container">
        <div className={styles.header_wrapper}>
          <div className={styles.logo}>
            <Link className="a" href="#logo">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <nav>
            <MobileNav/>
            <ul className={styles.navigate}>
              <li className={styles.li}>
                <Link className={styles.a} href="#about">
                  о нас
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="#services">
                  услуги
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="#cases">
                  кейсы
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.a} href="#contacts">
                  контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.box}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
