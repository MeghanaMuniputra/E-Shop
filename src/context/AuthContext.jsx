import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Simulate authentication
    if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
      setUser({ id: 1, email: credentials.email, role: 'admin' });
      toast.success('Logged in successfully!');
      return true;
    }
    toast.error('Invalid credentials');
    return false;
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully!');
  };

  const register = (userData) => {
    // Simulate registration
    setUser({ id: Date.now(), email: userData.email, role: 'user' });
    toast.success('Registered successfully!');
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      register,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}