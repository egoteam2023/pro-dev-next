import styles from './Team.module.scss';
import TeamAnime from './TeamAnime';
import TeamSlider from './TeamSlider';

const Team = () => {
  

  return (
    <div className="team__container">
      <div className={styles.team}>
        <TeamAnime/>
        <TeamSlider/>
      </div>
    </div>
  );
};

export default Team;
