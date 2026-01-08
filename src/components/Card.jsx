import styles from '../styles/Card.module.css';

const Card = ({ children, image }) => {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt="" className={styles.cardImage} />}
      {children}
    </div>
  );
};

export default Card;