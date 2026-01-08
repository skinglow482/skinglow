import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Questionario.module.css';
import QuestionIllustration from '../components/illustrations/QuestionIllustration';
import { FiClipboard } from 'react-icons/fi';

const questions = [
  { key: 'tipoPele', question: 'Qual é o seu tipo de pele?', options: ['seca', 'oleosa', 'mista', 'sensivel'] },
  { key: 'acne', question: 'Você tem acne?', options: ['nunca', 'pouco', 'muito'] },
  { key: 'manchas', question: 'Você tem manchas na pele?', options: ['sim', 'não'] },
  { key: 'sensibilidade', question: 'Sua pele é sensível?', options: ['sim', 'não'] },
  { key: 'rotina', question: 'Como é sua rotina atual de skincare?', options: ['nenhuma', 'basica', 'avançada'] },
  { key: 'idade', question: 'Qual sua faixa etária?', options: ['18-25', '26-35', '36-45', '46+'] },
];

const Questionario = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[currentStep].key]: answer });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finalizar e navegar para resultado
      localStorage.setItem('skinAnswers', JSON.stringify(answers));
      navigate('/resultado');
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className={styles.questionario}>
      <Card>
        <QuestionIllustration className={styles.questionHero} />
        <div className={styles.progress}>
          <div className={styles.bar} style={{ width: `${progress}%` }}></div>
        </div>
        <h2><FiClipboard style={{ verticalAlign: 'middle', marginRight: 8 }} />{questions[currentStep].question}</h2>
        <div className={styles.options}>
          {questions[currentStep].options.map((option) => (
            <Button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Questionario;