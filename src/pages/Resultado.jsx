import React, { useEffect, useState } from 'react';
import { analyzeSkinType } from '../utils/skinAnalysis';
import { routines } from '../data/routines';
import { products } from '../data/products';
import Card from '../components/Card';
import styles from '../styles/Resultado.module.css';
import HeroIllustration from '../components/illustrations/HeroIllustration';
import ThemeToggle from '../components/ThemeToggle';
import { FiFilter, FiPlusCircle, FiDroplet, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

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

  const icons = {
    limpeza: <FiFilter size={18} />, 
    tratamento: <FiPlusCircle size={18} />, 
    hidratacao: <FiDroplet size={18} />, 
    protecaoSolar: <FiSun size={18} />
  };

  const steps = React.useMemo(() => {
    const m = new Set([...(routine.manha || []), ...(routine.noite || [])]);
    return Array.from(m);
  }, [routine]);

  return (
    <div className={styles.resultado}>
      <Card IllustrationComponent={HeroIllustration}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2>Seu Tipo de Pele: {skinType}</h2>
              <p>Baseado nas suas respostas, recomendamos a seguinte rotina:</p>
            </div>
            <ThemeToggle />
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.routineTable}>
              <thead>
                <tr>
                  <th>Etapa</th>
                  <th>Manhã</th>
                  <th>Noite</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step) => (
                  <tr key={step} className={styles.row}>
                    <td className={styles.stepCell}>
                      <span className={styles.stepIcon}>{icons[step]}</span>
                      <span className={styles.stepLabel}>{step.charAt(0).toUpperCase() + step.slice(1)}</span>
                    </td>
                    <td>
                      {(routine.manha || []).includes(step) ? (
                        <ul className={styles.productList}>
                          {products[step]?.map((p, idx) => (
                            <li key={idx}><strong>{p.name}</strong> <small>– {p.brand}</small></li>
                          ))}
                        </ul>
                      ) : (
                        <span className={styles.notApplied}>—</span>
                      )}
                    </td>
                    <td>
                      {(routine.noite || []).includes(step) ? (
                        <ul className={styles.productList}>
                          {products[step]?.map((p, idx) => (
                            <li key={idx}><strong>{p.name}</strong> <small>– {p.brand}</small></li>
                          ))}
                        </ul>
                      ) : (
                        <span className={styles.notApplied}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Card>
    </div>
  );
};

export default Resultado;