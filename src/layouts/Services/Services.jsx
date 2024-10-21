import styles from './Services.module.scss';
import ServicesList from '@/layouts/Services/ServicesList/ServicesList';
import { services } from './data';
import ServicesAnime from './ServicesAnime';

const Services = () => {
  return (
    <div className="services__container" id="services">
      <div className={styles.wrapper}>
        <ServicesAnime/>
      </div>
      <ul className={styles.services_list}>
        {services.map((service) =>
          <ServicesList key={service.id} services={service} className={`li${service.id}`}/>
        )}
      </ul>
    </div>
  );
};

export default Services;
