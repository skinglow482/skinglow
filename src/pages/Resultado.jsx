import { useEffect, useState } from 'react';
import { analyzeSkinType } from '../utils/skinAnalysis';
import { routines } from '../data/routines';
import { products } from '../data/products';
import Card from '../components/Card';
import styles from '../styles/Resultado.module.css';
import hero from '../assets/hero-salmon.svg';

const Resultado = () => {
  const [skinType, setSkinType] = useState('');
  const [routine, setRoutine] = useState({});

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem('skinAnswers'));
    if (answers) {
      const type = analyzeSkinType(answers);
      setSkinType(type);
      setRoutine(routines[type]);
    }
  }, []);

  const renderRoutine = (time) => {
    return routine[time]?.map((step) => (
      <div key={step}>
        <h4>{step.charAt(0).toUpperCase() + step.slice(1)}</h4>
        <ul>
          {products[step]?.map((product, idx) => (
            <li key={idx}>{product.name} - {product.brand}: {product.description}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className={styles.resultado}>
      <Card image={hero}>
        <h2>Seu Tipo de Pele: {skinType}</h2>
        <p>Baseado nas suas respostas, recomendamos a seguinte rotina:</p>
        <h3>Manhã</h3>
        {renderRoutine('manha')}
        <h3>Noite</h3>
        {renderRoutine('noite')}
      </Card>
    </div>
  );
};

export default Resultado;