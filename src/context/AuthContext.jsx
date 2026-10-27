import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    setLoading(true);

    try {
      // Simulate a short login request
      await new Promise(resolve => setTimeout(resolve, 800));

      // Frontend demo only — not real authentication
      const name = email.split('@')[0];

      setUser({
        email: email,
        name: name
      });

      return { success: true };
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
