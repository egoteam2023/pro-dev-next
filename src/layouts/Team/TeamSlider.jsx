'use client'
import styles from './Team.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { team } from './data';
import Link from 'next/link';
import Image from 'next/image';

const TeamSlider = () => {
  const leftArrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="23"
      viewBox="0 0 13 23"
      fill="none"
    >
      <path d="M12 1L1.5 11.5L12 22" stroke="#5064AF" strokeWidth="2" />
    </svg>
  );

  const rightArrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="23"
      viewBox="0 0 13 23"
      fill="none"
    >
      <path d="M1 1L11.5 11.5L1 22" stroke="#5064AF" strokeWidth="2" />
    </svg>
  );

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: rightArrowSvg,
    prevArrow: leftArrowSvg,
  };
  return (
    <div className={styles.team_slider_block}>
      <Slider {...settings}>
        {team.map((el, index) => (
          <div className={styles.team_slide} key={index}>
            <div className={styles.slide_wrapper}>
              <div className={styles.image_wrapper}>
                <Image className={styles.team_image} width={400} height={400} src={el.image} alt="image" />
                <div className={styles.image_content}>
                  <p>
                    {el.nickname}
                    <br />
                    <span>{el.position}</span>
                  </p>
                  <ul className={styles.sci}>
                    {el.socialLinks.facebook && (
                      <li>
                        <Link target='blank' href={el.socialLinks.facebook}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </Link>
                      </li>
                    )}

                    {el.socialLinks.linkedIn && (
                      <li>
                        <Link target='blank' href={el.socialLinks.linkedIn}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </Link>
                      </li>
                    )}

                    {el.socialLinks.github && (
                      <li>
                        <Link target='blank' href={el.socialLinks.github}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </Link>
                      </li>
                    )}

                    {el.socialLinks.instagram && (
                      <li>
                        <Link target='blank' href={el.socialLinks.instagram}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                          </svg>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className={styles.team_info}>
                <h3 className={styles.team_info_name}>{el.name}</h3>
                <p className={styles.team_info_about}>{el.about}</p>
                <p className={styles.team_info_specialize}>{el.specialize}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
