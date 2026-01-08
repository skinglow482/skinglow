import { useState } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ children, image, imageAlt = 'Ilustração SkinGlow' }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className={styles.card}>
      {image && imgOk && (
        <img
          src={image}
          alt={imageAlt}
          className={styles.cardImage}
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      )}
      {image && !imgOk && (
        <div className={styles.cardImagePlaceholder}>
          <div>
            Ilustração indisponível
            <div className={styles.placeholderSrc}><small>{image}</small></div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;