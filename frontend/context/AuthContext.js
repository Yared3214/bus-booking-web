'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [source , setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await axios.get('http://localhost:5000/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data.user);
        } catch (error) {
          console.error('Failed to load user from token');
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:5000/login', { email, password });
    localStorage.setItem('token', data.token);
    const { data: userData } = await axios.get('http://localhost:5000/user', {
      headers: {
        Authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json'
      },
    });
    setUser(userData.user);
    router.push('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/SignInPage');
  };

  return (
    <AuthContext.Provider value={{ user, 
    loading, 
    login, 
    logout,
    source,
    destination,
    date,
    setDate,
    setDestination,
    setSource }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
