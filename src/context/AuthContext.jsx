import { createContext, useContext, useState } from 'react';

// Contexto de Autenticação
const AuthContext = createContext();

// Provider do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulação de login
  const login = (email, password) => {
    // Simulação: qualquer email e senha válidos
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);