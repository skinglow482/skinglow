import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from '../styles/Auth.module.css';
import CadastroIllustration from '../components/illustrations/CadastroIllustration';
import ThemeToggle from '../components/ThemeToggle';
import { FiUserPlus } from 'react-icons/fi';
import { supabase } from '../services/supabase.js';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

 const handleRegister = async (e) => {
  e.preventDefault();
  setError("");

  if (password !== confirmPassword) {
    setError("As senhas não coincidem");
    return;
  }

  console.log("Tentando cadastrar:", email);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Erro do Supabase:", error);
    setError(error.message);
    return;
  }

  console.log("Cadastro feito com sucesso:", data);
  alert("Cadastro realizado com sucesso!");
  navigate('/login');
};

  return (
    <div className={styles.auth}>
      <Card>
        <CadastroIllustration className={styles.authHero} />
        <h2><FiUserPlus style={{ verticalAlign: 'middle', marginRight: 8 }} />Criar Conta</h2>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><ThemeToggle /></div>
        <form onSubmit={handleRegister}>
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