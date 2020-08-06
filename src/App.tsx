import React from 'react';

import SignIn from './pages/SignIn';

import ToastContainer from './components/TostContainer';

import GlobalStyles from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />
  </>
);

export default App;
