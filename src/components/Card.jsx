import { useState } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ children, image, imageAlt = 'Ilustração SkinGlow', IllustrationComponent }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className={styles.card}>
      {IllustrationComponent && (
        <div className={styles.cardImageWrapper}>
          <IllustrationComponent className={styles.cardImage} />
        </div>
      )}

      {image && imgOk && !IllustrationComponent && (
        <img
          src={image}
          alt={imageAlt}
          className={styles.cardImage}
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      )}
      {image && !imgOk && !IllustrationComponent && (
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