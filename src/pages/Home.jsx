import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';
import hero from '../assets/hero-salmon.svg';
import { FiChevronRight, FiHeart, FiShoppingBag, FiTrendingUp } from 'react-icons/fi';

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={hero} alt="SkinGlow" className={styles.hero} />
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bem-vinda ao SkinGlow
      </motion.h1>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Descubra o poder do autocuidado e transforme sua rotina de skincare.
      </motion.p>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Seu brilho começa aqui!
      </motion.p>
      <motion.div
        className={styles.buttons}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link to="/login">
          <Button>Login <FiChevronRight className={styles.icon} /></Button>
        </Link>
        <Link to="/cadastro">
          <Button>Criar Conta <FiChevronRight className={styles.icon} /></Button>
        </Link>
      </motion.div>

      <motion.div className={styles.features} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
        <div className={styles.feature}>
          <FiHeart size={22} className={styles.featureIcon} />
          <h4>Rotina personalizada</h4>
          <p>Recomendações feitas para sua pele.</p>
        </div>
        <div className={styles.feature}>
          <FiShoppingBag size={22} className={styles.featureIcon} />
          <h4>Produtos selecionados</h4>
          <p>Sugestões de marcas e descrições.</p>
        </div>
        <div className={styles.feature}>
          <FiTrendingUp size={22} className={styles.featureIcon} />
          <h4>Acompanhamento</h4>
          <p>Veja evolução e dicas ao longo do tempo.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;