import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
          <Button>Login</Button>
        </Link>
        <Link to="/cadastro">
          <Button>Criar Conta</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;