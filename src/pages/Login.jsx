import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Auth.module.css';
import LoginIllustration from '../components/illustrations/LoginIllustration';
import ThemeToggle from '../components/ThemeToggle';
import { FiUser } from 'react-icons/fi';
import { supabase } from '../services/supabase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

const handleLoginSupabase = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setError(error.message);
    return;
  }

  navigate('/questionario');
};

  return (
    <div className={styles.auth}>
      <Card>
        <LoginIllustration className={styles.authHero} />
        <h2><FiUser style={{ verticalAlign: 'middle', marginRight: 8 }} />Login</h2>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><ThemeToggle /></div>
        <form onSubmit={handleLoginSupabase}>
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