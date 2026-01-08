import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Questionario from './pages/Questionario';
import Resultado from './pages/Resultado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/questionario" element={<Questionario />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  );
}

export default App;
