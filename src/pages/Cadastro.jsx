import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Auth.module.css';
import CadastroIllustration from '../components/illustrations/CadastroIllustration';
import { FiUserPlus } from 'react-icons/fi';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Senhas não coincidem.');
      return;
    }
    // Simulação de cadastro
    login(email, password);
    navigate('/questionario');
  };

  return (
    <div className={styles.auth}>
      <Card>
        <CadastroIllustration className={styles.authHero} />
        <h2><FiUserPlus style={{ verticalAlign: 'middle', marginRight: 8 }} />Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button type="submit">Cadastrar</Button>
        </form>
      </Card>
    </div>
  );
};

export default Cadastro;