import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Auth.module.css';
import LoginIllustration from '../components/illustrations/LoginIllustration';
import { FiUser } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }
    if (login(email, password)) {
      navigate('/questionario');
    } else {
      setError('Credenciais inválidas.');
    }
  };

  return (
    <div className={styles.auth}>
      <Card>
        <LoginIllustration className={styles.authHero} />
        <h2><FiUser style={{ verticalAlign: 'middle', marginRight: 8 }} />Login</h2>
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
          {error && <p className={styles.error}>{error}</p>}
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;