// Auth client stub — wire up to a real backend when ready.
// All methods match the interface the app expects.
export const authClient = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => { throw new Error('Not authenticated'); },
    login: async (_email, _password) => { throw new Error('Backend not yet connected'); },
    logout: (redirectUrl) => {
      localStorage.removeItem('auth_token');
      if (redirectUrl) window.location.href = redirectUrl;
    },
    redirectToLogin: (_returnUrl) => { window.location.href = '/'; },
  },
};
