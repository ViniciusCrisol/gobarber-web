import React from 'react';

import SignIn from './pages/SignIn';

import GlobalStyles from './styles/global';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
