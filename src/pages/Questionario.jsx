import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Questionario.module.css';
import QuestionIllustration from '../components/illustrations/QuestionIllustration';
import ThemeToggle from '../components/ThemeToggle';
import { FiClipboard } from 'react-icons/fi';
import { supabase } from '../services/supabase.js';

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

  const handleAnswer = async (answer) => {
    setAnswers({ ...answers, [questions[currentStep].key]: answer });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
  const finalAnswers = {
    ...answers,
    [questions[currentStep].key]: answer,
  };

  // opcional: manter no localStorage
  localStorage.setItem('skinAnswers', JSON.stringify(finalAnswers));

  // 🔐 pegar usuária logada
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    alert('Usuária não autenticada');
    return;
  }

  // 💾 salvar no Supabase
  const { error } = await supabase.from('perfil_pele1').upsert({
    id: user.id,
    tipo_pele: finalAnswers.tipoPele,
    acne: finalAnswers.acne,
    manchas: finalAnswers.manchas,
    sensibilidade: finalAnswers.sensibilidade,
    rotina: finalAnswers.rotina,
    idade: finalAnswers.idade,
  });

  if (error) {
    console.error(error);
    alert('Erro ao salvar suas respostas');
    return;
  }

  // 🚀 ir para o resultado
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
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><ThemeToggle /></div>
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