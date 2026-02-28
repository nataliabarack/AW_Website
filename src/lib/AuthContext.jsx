import React, { createContext, useState, useContext, useEffect } from 'react';
import { authClient } from '@/api/authClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  // No backend yet — app is fully public. Wire up real auth here when ready.
  useEffect(() => {
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
    setIsAuthenticated(false);
  }, []);

  const checkAppState = () => {
    // No-op until backend is connected
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    authClient.auth.logout();
  };

  const navigateToLogin = () => {
    authClient.auth.redirectToLogin(window.location.href);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
